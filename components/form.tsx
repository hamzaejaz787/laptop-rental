"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";
import Link from "next/link";

function Form({ setPopUp }: any) {
  const cardsData = [
    {
      image: "/laptop.png",
      title: "Laptop Rental",
      description:
        "Non-compliance restricts the growth and reputation of and reputation of.",
    },
    {
      image: "/ipad.png",
      title: "Desktop Rental",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "/iphone.png",
      title: "Tablet Rental",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/avrental.png",
      title: "Tablet Rental",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/screen.png",
      title: "Tablet Rental",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/printer.png",
      title: "Tablet Rental",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/avrental.png",
      title: "Tablet Rental",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/avrental.png",
      title: "Tablet Rental",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/avrental.png",
      title: "Tablet Rental",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const validationSchema = Yup.object({
    dateStart: Yup.date().required("Start date is required"),
    dateEnd: Yup.date().required("End date is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile number is required"),
    company: Yup.string().required("Company name is required"),
    location: Yup.string().required("Location is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      dateStart: "",
      dateEnd: "",
      name: "",
      email: "",
      mobile: "",
      company: "",
      location: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
      // Handle form submission, e.g., send data to backend API
      // fetch('/api/form', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(values),
      // }).then(response => {
      //   if (response.ok) {
      //     console.log('Form submitted successfully');
      //   } else {
      //     console.log('Form submission error');
      //   }
      // });
    },
  });

  return (
    <div className=" md:h-[920px] mx-3 md:ml-10 mt-20 md:mt-20 grid md:flex-row grid-cols-[50%,50%] mb-5 border md:justify-center md:items-center rounded-sm">
      <div className="bg-[#D61837] shadow-lg md:w-full h-full w-full overflow-hidden flex justify-center items-center">
        {" "}
        <div className="text-white p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <Image
              src="/logo_red.png"
              alt="Logo"
              height={2000}
              width={2000}
              className="mx-auto mb-4 w-[60px] h-[50px]"
            />
            <div
              className="md:text-2xl text-[15px] font-bold md:p-5"
              style={{ borderBottom: "2px dashed white" }}
            >
              Rent Your Event
            </div>

            {/* <p className="hidden justify-center md:flex text-white">-------------</p> */}
          </div>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="flex md:flex gap-4 pr-10 mr-10">
              <div className="">
                <label className="font-Exo font-normal md:text-[11px] text-[9px]">
                  Start Date <span className="text-white">*</span>
                </label>
                <div className="flex items-center">
                  {" "}
                  {/* Adjusted the container div */}
                  <Input
                    type="date"
                    name="dateStart"
                    placeholder="Type your name..."
                    value={formik.values.dateStart}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`bg-transparent text-white rounded placeholder:text-white h-7 md:h-12 md:w-32 placeholder:text-[10px] placeholder:md:text-[12px] placeholder-white ${
                      formik.touched.dateStart && formik.errors.dateStart
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                </div>

                {formik.touched.dateStart && formik.errors.dateStart && (
                  <div className="text-white text-sm ">
                    {formik.errors.dateStart}
                  </div>
                )}
              </div>
              <div>
                <label className="font-Exo font-normal md:text-[11px] text-[9px]">
                  End Date <span className="text-white">*</span>
                </label>
                <Input
                  type="date"
                  name="dateEnd"
                  placeholder="Type your name..."
                  value={formik.values.dateEnd}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`bg-transparent text-white p-2 rounded h-7 md:h-12 md:w-32 placeholder:text-white placeholder:text-[10px] placeholder:md:text-[12px] placeholder-gray-400 ${
                    formik.touched.dateEnd && formik.errors.dateEnd
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.dateEnd && formik.errors.dateEnd && (
                  <div className="text-white text-sm">
                    {formik.errors.dateEnd}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="font-Exo font-normal md:text-[11px] text-[9px]">
                Your Name <span className="text-white">*</span>
              </label>
              <Input
                type="text"
                name="name"
                placeholder="Type your name..."
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white placeholder:text-white placeholder:text-[10px] placeholder:md:text-[12px] rounded w-full h-7 md:h-12 placeholder-white ${
                  formik.touched.name && formik.errors.name
                    ? "border-white"
                    : ""
                }`}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-white text-sm">{formik.errors.name}</div>
              )}
            </div>
            <div>
              <label className="font-Exo font-normal md:text-[11px] text-[9px]">
                Email Address <span className="text-white">*</span>
              </label>
              <Input
                type="email"
                name="email"
                placeholder="Type your email..."
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white p-2 rounded w-full placeholder:text-white placeholder:text-[10px] h-7 md:h-12 placeholder:md:text-[12px] placeholder-white ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-white text-sm">{formik.errors.email}</div>
              )}
            </div>
            <div>
              <label className="font-Exo font-normal md:text-[11px] text-[9px]">
                Phone Number <span className="text-white">*</span>
              </label>
              <Input
                type="tel"
                name="mobile"
                placeholder="Type your phone number..."
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white p-2 rounded w-full placeholder:text-white placeholder:text-[10px] placeholder:md:text-[12px] h-7 md:h-12 placeholder-gray-400 ${
                  formik.touched.mobile && formik.errors.mobile
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <div className="text-white text-sm">{formik.errors.mobile}</div>
              )}
            </div>
            <div>
              <label className="font-Exo font-normal md:text-[11px] text-[9px]">
                Company Name <span className="text-white">*</span>
              </label>
              <Input
                type="text"
                name="company"
                placeholder="Type your company name..."
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white p-2 rounded w-full placeholder:text-white placeholder:text-[10px] placeholder:md:text-[12px] h-7 md:h-12 placeholder-white ${
                  formik.touched.company && formik.errors.company
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.company && formik.errors.company && (
                <div className="text-white text-sm">
                  {formik.errors.company}
                </div>
              )}
            </div>
            <div>
              <label className="font-Exo font-normal md:text-[11px] text-[9px]">
                Your Location <span className="text-white">*</span>
              </label>
              <Input
                type="text"
                name="location"
                placeholder="Type your location..."
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white p-2 rounded w-full placeholder:text-white placeholder:text-[10px] placeholder:md:text-[12px] h-7 md:h-12 placeholder-gray-400 ${
                  formik.touched.location && formik.errors.location
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.location && formik.errors.location && (
                <div className="text-white text-sm">
                  {formik.errors.location}
                </div>
              )}
            </div>
            <div>
              <label className="font-Exo font-normal md:text-[11px] text-[9px]">
                Message <span className="text-white">*</span>
              </label>
              <Input
                type="text"
                name="message"
                placeholder="Type your message..."
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white p-2 rounded w-full placeholder:text-white placeholder:text-[10px] placeholder:md:text-[12px] placeholder-gray-400 h-20 ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.message && formik.errors.message && (
                <div className="text-white text-sm">
                  {formik.errors.message}
                </div>
              )}
            </div>
            <div className="text-center mt-6">
              <Button
                onClick={() => setPopUp(false)}
                type="submit"
                className="bg-white text-red-600 md:w-full py-2 px-3 rounded"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="shadow-lg md:w-full h-full flex-col md:pl-5 md:pr-5 md:pt-10 pt-5 pl-5">
  <p className="font-Barlow md:font-[600px] font-bold md:text-2xl text-[15px] text-center">
    Select Your Product
  </p>
  <p className="font-Barlow text-[#d61837] text-center font-bold">
    ----------------
  </p>
  <div className="flex w-full md:w-full justify-center items-center">
  <ScrollArea className="md:h-[800px] md:w-[400px] w-48 rounded-md border-none flex justify-between md:justify-start">
    {cardsData.map((card, index) => (
      <div key={index} className={`flex md:pl-3 md:pr-3 gap-1 md:gap-0 justify-center ${index !== cardsData.length - 1 ? 'mr-3' : ''}`}>
        <div>
          <Image
            src={card.image}
            alt=""
            height={100}
            width={100}
            className="md:w-40 md:h-32"
          />
        </div>
        <div className="md:ml-1 gap-3 md:pt-5">
          <p className="font-Barlow font-bold md:text-[18px] text-[14px]">
            {card.title}
          </p>
          <p className="line-clamp-4 font-Poppins md:text-[10px] text-[8px]">
            {card.description}
          </p>
          <Button asChild className="w-16 md:w-36 h-5 md:h-8 font-Poppins border border-none bg-[#D61837] text-[9px] md:text-[12px]">
            <Link href="#">
            Rent a Product
            </Link>
          </Button>
        </div>
      </div>
    ))}
  </ScrollArea>
  </div>
  
</div>

    </div>
  );
}

export default Form;
