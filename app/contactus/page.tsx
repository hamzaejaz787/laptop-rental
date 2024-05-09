import React from "react";
import contact_bg from "@/public/contactus_bg.png";
import ContactForm from "@/components/ContactForm";

const Page = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${contact_bg.src})` }}
        className="flex flex-col justify-center items-center bg-no-repeat bg-center w-full h-96"
      >
        <div className="bg-cover object-cover flex flex-col justify-center items-center w-[60%] h-full">
          <h1 className="text-4xl text-white font-bold">CONTACT US</h1>
          <p className="text-base text-white text-center">
            We at Laptop Rentals understand whether you are hosting whether
            you are hosting We at Laptop Rentals understand at Laptop Rentals
            understand
          </p>
        </div>
      </div>
      <div className="w-[80%] m-auto mt-10">
        <h2 className="w-full text-center font-extrabold text-3xl">
          Get In Touch With Us
        </h2>
        <p className="pb-1 w-full text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor
          dictum lectus at
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Page;
