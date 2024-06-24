"use server";

import { ContactFormFields } from "@/components/ContactForm";
import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const handleContactForm = async (data: ContactFormFields) => {
  const { name, email, contact, message, company, location } = data;

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
    to: process.env.NODEMAILER_USERNAME,
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
};
