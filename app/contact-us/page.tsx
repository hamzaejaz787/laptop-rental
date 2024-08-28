import React from "react";
import ContactForm from "@/components/ContactForm";
import Banner from "@/components/Banner";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact US page of Laptop Rental AU",
  description:
    "Transform your events with cutting-edge technology. Laptop Rental offers top-tier solutions for seamless engagement. Contact us today!",
  keywords: "",
  alternates: {
    canonical: "https://laptop-rental.com.au/contact-us",
  },
};

const Page = () => {
  return (
    <>
      <Banner
        image={{
          url: "/contact-us-banner.png",
          alternativeText: "Contact us",
        }}
        title="Contact us"
        text="Feel free to contact Laptop Rental in Australia. Whether you have inquiries about our rental offerings, need assistance choosing the right IT equipment for your event, or require technical support during your rental period, our dedicated team is ready to assist you!"
      />
      <Breadcrumbs className="sr-only" currentPage="Contact Us" />

      <div className="container p-8 space-y-4">
        <h2 className="w-full text-center font-extrabold text-3xl">
          Get In Touch With Us
        </h2>
        <p className="text-center text-sm">
          We&apos;re excited to collaborate with you and make your event a
          success with the latest technology.
        </p>
        <ContactForm />

        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.504732448042!2d145.0987403!3d-37.988686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66cfe0879085b%3A0x4c8bdf26d8c329e3!2s19B%20Hinkler%20Rd%2C%20Mordialloc%20VIC%203195%2C%20Australia!5e0!3m2!1sen!2s!4v1719571522894!5m2!1sen!2s"
          height="500"
          style={{ border: 0, width: "100%" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </>
  );
};

export default Page;
