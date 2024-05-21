"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import Image from 'next/image';

function Form({ setPopUp }:any) {
  const cardsData = [
    {
      image: "/laptop.png",
      title: "Laptop Rental",
      description: "Non-compliance restricts the growth and reputation of and reputation of.",
    },
    {
      image: "/ipad.png",
      title: "Desktop Rental",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "/iphone.png",
      title: "Tablet Rental",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/avrental.png",
      title: "Tablet Rental",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/screen.png",
      title: "Tablet Rental",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/printer.png",
      title: "Tablet Rental",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/avrental.png",
      title: "Tablet Rental",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/avrental.png",
      title: "Tablet Rental",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/avrental.png",
      title: "Tablet Rental",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const validationSchema = Yup.object({
    dateStart: Yup.date().required('Start date is required'),
    dateEnd: Yup.date().required('End date is required'),
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobile: Yup.string().required('Mobile number is required'),
    company: Yup.string().required('Company name is required'),
    location: Yup.string().required('Location is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      dateStart: '',
      dateEnd: '',
      name: '',
      email: '',
      mobile: '',
      company: '',
      location: '',
      message: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log('Form data', values);
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
    <div className='md:flex hidden md:h-[920px] h-[600px] pl-2 md:pl-10'>
      <div className='bg-[#D61837] shadow-lg md:w-[405px] w-[100px] overflow-hidden'>
        <div className="text-white p-8 shadow-lg max-w-md w-full">
          <div className="text-center mb-6">
            <Image src="/logo_red.png" alt="Logo" height={2000} width={2000} className="mx-auto mb-4 w-[40px] h-[30px]" />
            <h1 className="md:text-2xl text-[5px] font-bold">Rent Your Event</h1>
            <p className="hidden justify-center md:flex text-white">-------------</p>
          </div>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className='font-Exo font-normal md:text-[11px] text-[4px]'>
                  Date Start <span className="text-white">*</span>
                </label>
                <Input
                  type="date"
                  name="dateStart"
                  placeholder="Type your name..."
                  value={formik.values.dateStart}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`bg-transparent text-white p-2 rounded placeholder-white ${
                    formik.touched.dateStart && formik.errors.dateStart ? 'border-red-500' : ''
                  }`}
                />
                {formik.touched.dateStart && formik.errors.dateStart && (
                  <div className="text-white text-sm">{formik.errors.dateStart}</div>
                )}
              </div>
              <div>
                <label className='font-Exo font-normal md:text-[11px] text-[9px]'>
                  Date End <span className="text-white">*</span>
                </label>
                <Input
                  type="date"
                  name="dateEnd"
                  placeholder="Type your name..."
                  value={formik.values.dateEnd}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`bg-transparent text-white p-2 rounded placeholder-gray-400 ${
                    formik.touched.dateEnd && formik.errors.dateEnd ? 'border-red-500' : ''
                  }`}
                />
                {formik.touched.dateEnd && formik.errors.dateEnd && (
                  <div className="text-white text-sm">{formik.errors.dateEnd}</div>
                )}
              </div>
            </div>
            <div>
              <label className='font-Exo font-normal md:text-[11px] text-[9px]'>
                Your Name <span className="text-white">*</span>
              </label>
              <Input
                type="text"
                name="name"
                placeholder="Type your name..."
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white p-2 rounded w-full placeholder-white ${
                  formik.touched.name && formik.errors.name ? 'border-white' : ''
                }`}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-white text-sm">{formik.errors.name}</div>
              )}
            </div>
            <div>
              <label className='font-Exo font-normal md:text-[11px] text-[9px]'>
                Email Address <span className="text-white">*</span>
              </label>
              <Input
                type="email"
                name="email"
                placeholder="Type your email..."
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white p-2 rounded w-full placeholder-white ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-white text-sm">{formik.errors.email}</div>
              )}
            </div>
            <div>
              <label className='font-Exo font-normal md:text-[11px] text-[9px]'>
                Phone Number <span className="text-white">*</span>
              </label>
              <Input
                type="tel"
                name="mobile"
                placeholder="Type your phone number..."
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white p-2 rounded w-full placeholder-gray-400 ${
                  formik.touched.mobile && formik.errors.mobile ? 'border-red-500' : ''
                }`}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <div className="text-white text-sm">{formik.errors.mobile}</div>
              )}
            </div>
            <div>
              <label className='font-Exo font-normal md:text-[11px] text-[9px]'>
                Company Name <span className="text-white">*</span>
              </label>
              <Input
                type="text"
                name="company"
                placeholder="Type your company name..."
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white p-2 rounded w-full placeholder-white ${
                  formik.touched.company && formik.errors.company ? 'border-red-500' : ''
                }`}
              />
              {formik.touched.company && formik.errors.company && (
                <div className="text-white text-sm">{formik.errors.company}</div>
              )}
            </div>
            <div>
              <label className='font-Exo font-normal md:text-[11px] text-[9px]'>
                Your Location <span className="text-white">*</span>
              </label>
              <Input
                type="text"
                name="location"
                placeholder="Type your location..."
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white p-2 rounded w-full placeholder-gray-400 ${
                  formik.touched.location && formik.errors.location ? 'border-red-500' : ''
                }`}
              />
              {formik.touched.location && formik.errors.location && (
                <div className="text-white text-sm">{formik.errors.location}</div>
              )}
            </div>
            <div>
              <label className='font-Exo font-normal md:text-[11px] text-[9px]'>
                Message <span className="text-white">*</span>
              </label>
              <Input
                type="text"
                name="message"
                placeholder="Type your message..."
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-transparent text-white p-2 rounded w-full placeholder-gray-400 h-24 ${
                  formik.touched.message && formik.errors.message ? 'border-red-500' : ''
                }`}
              />
              {formik.touched.message && formik.errors.message && (
                <div className="text-white text-sm">{formik.errors.message}</div>
              )}
            </div>
            <div className="text-center mt-6">
              <Button onClick={() => setPopUp(false)} type="submit" className="bg-white text-red-600 md:w-full py-2 rounded">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className='shadow-lg md:w-[405px] flex-col md:pl-5 md:pr-5 md:pt-10 pt-5'>
        <p className='font-Barlow md:font-[600px] font-bold md:text-[28px] text-[24px] text-center'>Select Your Product</p>
        <p className='font-Barlow text-[#d61837] text-center font-bold'>----------------</p>
        <ScrollArea className="md:h-[800px] md:w-[350px] w-48 rounded-md border-none flex justify-center">
          {cardsData.map((card, index) => (
            <div key={index} className='flex md:pl-3 md:pr-3 justify-center'>
              <div>
                <Image
                  src={card.image}
                  alt=""
                  height={50}
                  width={100}
                  className="md:w-[300px] md:h-40"
                />
              </div>
              <div className='md:ml-5 gap-3 md:pt-5'>
                <p className='font-Barlow font-bold md:text-[18px] text-[14px]'>{card.title}</p>
                <p className='line-clamp-4 font-Poppins md:text-[10px] text-[8px]'>{card.description}</p>
                <Button className="w-16 md:w-36 h-5 md:h-8 font-Poppins border border-none bg-[#D61837] text-[9px] md:text-[12px]">
                  Rent a Product
                </Button>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}

export default Form;
