"use server";

import Mail from "nodemailer/lib/mailer";
import { createTransport } from "nodemailer";
import { formSchema, quoteFormSchema } from "@/lib/definitions";
import { action } from "@/lib/safe-action";
import { cookies } from "next/headers";

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
      )
        return { error: "Something went wrong" };

      //Nodemailer config
      const transporter = createTransport({
        service: process.env.NODEMAILER_HOST as string,
        auth: {
          user: process.env.NODEMAILER_USERNAME,
          pass: process.env.NODEMAILER_PASSWORD,
        },
      });

      const mailoptions: Mail.Options = {
        from: process.env.NODEMAILER_USERNAME,
        to: process.env.NODEMAILER_EMAILTO,
        subject: `New Quote from ${name}`,
        text: `${name} sent the following data:
        Name: ${name},
        Email: ${email},
        Phone Number: ${phone},
        Company Name: ${company},
        Location: ${location},
        Start Date: ${startdate},
        End Date: ${enddate},
        Message: ${message}
        `,
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

      //Nodemailer config
      const transporter = createTransport({
        service: process.env.NODEMAILER_HOST as string,
        auth: {
          user: process.env.NODEMAILER_USERNAME,
          pass: process.env.NODEMAILER_PASSWORD,
        },
      });

      const mailoptions: Mail.Options = {
        from: process.env.NODEMAILER_USERNAME,
        to: process.env.NODEMAILER_EMAILTO,
        subject: `Message from ${name} ${email}`,
        text: `${name} submitted the following data on Laptop Rental contact form:
    Name: ${name}
    Email: ${email}
    Phone Numer: ${contact}
    Company: ${company}
    Location: ${location}
    Message: ${message}
    `,
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
