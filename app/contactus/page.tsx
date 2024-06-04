import React from "react";
import contact_bg from "@/public/contactus_bg.png";
import ContactForm from "@/components/ContactForm";
import Banner from "@/components/Banner";

const Page = () => {
  return (
    <div>
      <Banner
        title="Contact us"
        text="We at Laptop Rentals understand whether you're hosting whether you're hosting We at Laptop Rentals understand at Laptop Rentals understand"
      />

      <div className="w-[80%] m-auto mt-20">
        <h2 className="w-full text-center font-extrabold text-3xl">
          Get In Touch With Us
        </h2>
        <p className="pb-1 w-full text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor
          dictum lectus at
        </p>
      </div>
      <ContactForm />
      <div className="w-[80%] m-auto mt-20 mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13289.563302470455!2d73.0287206!3d33.62110704999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1715081522410!5m2!1sen!2s"
          // width="800"
          height="500"
          style={{ border: 0, width: "100%" }}
          // allowfullscreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
