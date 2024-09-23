"use server";

import Mail from "nodemailer/lib/mailer";
import { createTransport, Transporter } from "nodemailer";
import { formSchema, quoteFormSchema } from "@/lib/definitions";
import { action } from "@/lib/safe-action";
import { cookies } from "next/headers";
import { z } from "zod";
import { renderQuoteEmailTemplate } from "@/components/emails/QuoteEmailTemplate";
import { renderContactEmailTemplate } from "@/components/emails/ContactEmailTemplate";

//Function for nodemailer transporter
function getNodemailerTransporter(): Transporter {
  return createTransport({
    host: process.env.NODEMAILER_HOST as string,
    port: 587,
    secure: false,
    auth: {
      user: "apikey",
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });
}

//Verify recaptcha token
export const verifyRecaptcha = action
  .schema(z.object({ recaptchaToken: z.string() }))
  .action(async ({ parsedInput: { recaptchaToken } }) => {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );
    const captcha = await response.json();
    return { success: captcha.success };
  });

export const sendQuoteFormData = action
  .schema(quoteFormSchema)
  .action(
    async ({
      parsedInput: {
        company,
        email,
        enddate,
        location,
        message,
        name,
        phone,
        startdate,
      },
    }) => {
      if (
        !company ||
        !email ||
        !enddate ||
        !location ||
        !name ||
        !phone ||
        !startdate
      ) {
        console.error("Missing required fields:", {
          company,
          email,
          enddate,
          location,
          name,
          phone,
          startdate,
        });
        return { error: "Something went wrong" };
      }

      const emailHtml = renderQuoteEmailTemplate({
        name,
        email,
        enddate,
        location,
        message,
        phone,
        company,
        startdate,
      });

      //Nodemailer config
      const transporter = getNodemailerTransporter();

      const mailoptions: Mail.Options = {
        from: process.env.NODEMAILER_USERNAME,
        to: process.env.NODEMAILER_EMAILTO,
        subject: `New Quote from ${name}`,
        html: emailHtml,
      };

      const sendMailPromise = () => {
        return new Promise<void>((resolve, reject) => {
          transporter.sendMail(mailoptions, function (err) {
            if (!err) {
              resolve();
            } else {
              reject(new Error(err.message));
            }
          });
        });
      };

      try {
        await sendMailPromise();
        return { success: true, message: "Form submitted successfully" };
      } catch (error) {
        return {
          success: false,
          message: `An error occurred: ${(error as Error).message}`,
        };
      }
    }
  );

export const handleContactForm = action
  .schema(formSchema)
  .action(
    async ({
      parsedInput: { company, email, contact, location, message, name },
    }) => {
      if (!name || !email || !contact) return { error: "Something went wrong" };
      const emailHtml = renderContactEmailTemplate({
        name,
        email,
        location,
        message,
        contact,
        company,
      });

      //Nodemailer config
      const transporter = getNodemailerTransporter();

      const mailoptions: Mail.Options = {
        from: process.env.NODEMAILER_USERNAME,
        to: process.env.NODEMAILER_EMAILTO,
        subject: `Message from ${name} ${email}`,
        html: emailHtml,
      };

      const sendMailPromise = () => {
        return new Promise<void>((resolve, reject) => {
          transporter.sendMail(mailoptions, function (err) {
            if (!err) {
              resolve();
            } else {
              reject(new Error(err.message));
            }
          });
        });
      };

      try {
        await sendMailPromise();

        return { success: true, message: "Form submitted successfully" };
      } catch (error) {
        console.log(error);
        return {
          success: false,
          error: true,
          message: `An error occurred: ${(error as Error).message}`,
        };
      }
    }
  );

export async function syncCartWithServer(cartItems: string) {
  const expiryTimeInSeconds = new Date(Date.now() + 2 * 60 * 60 * 1000);
  cookies().set("cart", cartItems, {
    httpOnly: true,
    secure: true,
    expires: expiryTimeInSeconds,
    maxAge: 2 * 60 * 60, //2 hours in seconds, for older browsers
  });
}

export async function getCartFromServer() {
  const cartCookie = cookies().get("cart");
  return cartCookie ? cartCookie.value : "[]";
}
