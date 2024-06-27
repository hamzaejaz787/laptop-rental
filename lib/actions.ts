"use server";

import { ContactFormFields } from "@/components/ContactForm";
import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const handleContactForm = async (prevState: any, formData: FormData) => {
  const data: ContactFormFields = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    contact: parseInt(formData.get("contact") as string),
    company: formData.get("company") as string,
    location: formData.get("location") as string,
    message: formData.get("message") as string,
  };

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
    subject: `Message from ${data.name} ${data.email}`,
    text: `${data.name} submitted the following data on Laptop Rental contact form:
    Name: ${data.name}
    Email: ${data.email}
    Phone Numer: ${data.contact}
    Company: ${data.company}
    Location: ${data.location}
    Message: ${data.message}
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
