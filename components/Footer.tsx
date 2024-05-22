"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className='bottom-0'>
      {/* Image with absolute positioning */}
      <div className=''>
        <div className='absolute'>
        <Image src='/Subtract.png' alt='' width={5000} height={1500} className='w-full h-full'/>
      </div>
      
      {/* Content */}
      <div className='relative flex justify-between items-center md:pl-20 md:pr-20 pl-3 pr-3 gap-3 md:pt-5 pt-2'>
        <div className="text-white  text-[9px] md:text-[28px] md:text-left text-start font-Poppins font-[500px]">
          <p >Need Any Outdoor Event WiFi Rental Services?</p>
        </div>
        <Button className='w-24 md:w-40 h-4  md:h-12 md:mb-2 md-1 font-Poppins border border-none bg-[#D61837] text-[10px] md:text-[18px]'>Request a quote</Button>
      </div>

      </div>
      
      <div className="grid grid-rows-[80%,10%,10%] absolute inset-x-0  pr-3 bg-[#D61837]  md:h-[380px] ">
      <div className="grid md:grid-cols-[30%,70%]  md:flex-row flex-col pt-5 items-center justify-center">
        <div className='md:pl-10 md:pr-10 pl-5 pr-5 flex-col items-center justify-center'>
          <Image src="/logo_red.png" alt="" width="80" height="50" className='md:w-[188px] md:h-[108px]'/>
          <p className='line-clamp-4 text-white font-Poppins md:text-[14px] text-[7px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, necessitatibus blanditiis harum est voluptatibus eaque soluta magnam nostrum asperiores tempora sapiente? Harum.</p>
        </div>
        <div className='flex md:pl-20 pl-5 gap-3 md:gap-9 md:pr-2 pr-2 pt-5'>
          <div className='flex flex-col md:gap-8 gap-2'>
            <h1 className='pb-1 font-bold md:text-[16px] text-[8px] font-Barlow text-white'>Company</h1>
            <Link className='font-normal md:text-[13px] text-[6px] font-Poppins text-white' href={'/'}>About</Link>
            <Link className='font-normal md:text-[13px] text-[6px] font-Poppins text-white' href={'/'}>Features</Link>
            <Link className='font-normal md:text-[13px] text-[6px] font-Poppins text-white' href={'/'}>Works</Link>
            <Link className='font-normal md:text-[13px] text-[6px] font-Poppins text-white' href={'/'}>Career</Link>
          </div>
          <div className='flex flex-col md:gap-8 gap-2'>
            <h1 className='pb-1 font-bold md:text-[16px] text-[8px] font-Barlow text-white'>Help</h1>
            <Link className='font-normal md:text-[13px] text-[6px] font-Poppins text-white' href={'/'}>Customer Support</Link>
            <Link className='font-normal md:text-[13px] text-[6px] font-Poppins text-white' href={'/'}>Delivery Details</Link>
            <Link className='font-normal md:text-[13px] text-[6px] font-Poppins text-white' href={'/'}>Terms & Conditions</Link>
            <Link className='font-normal md:text-[13px] text-[6px] font-Poppins text-white' href={'/'}>Privacy Policy</Link>
          </div>
          <div className='flex flex-col md:gap-8 gap-2'>
            <h1 className='pb-1 font-bold md:text-[16px] text-[8px] text-white font-Barlow'>Resources</h1>
            <Link className='font-normal md:text-[13px] text-[6px] text-white font-Poppins' href={'/'}>Free eBooks</Link>
            <Link className='font-normal md:text-[13px] text-[6px] text-white font-Poppins' href={'/'}>Development Tutorial</Link>
            <Link className='font-normal md:text-[13px] text-[6px] text-white font-Poppins' href={'/'}>How to - Blog</Link>
            <Link className='font-normal md:text-[13px] text-[6px] text-white font-Poppins' href={'/'}>Youtube Playlist</Link>
          </div>
          <div className='flex flex-col md:gap-8 gap-2 pr-3'>
            <h1 className='pb-1 font-bold md:text-[16px] text-[8px] text-white  font-Barlow'>Contact Us</h1>
            <div className='flex gap-2'>
            <IoIosCall size={20} color='white'/>
            <p className='font-normal md:text-[13px] text-[6px] text-white font-Poppins'>(219) 900-5700</p>
            </div>
            <div className='flex gap-2 items-center'>
            <MdEmail size={20} color='white'/>
            <p className='font-normal md:text-[13px] text-[6px] text-white font-Poppins'>laptop@gmail.com</p>
            </div>
            <div className='flex gap-2 items-center'>
            <MdOutlineLocationOn size={25} color='white'/>
            <div>
            <p className='font-normal md:text-[13px] text-[6px] text-white font-Poppins md:line-clamp-2 line-clamp-2 pr-2 md:pr-0'>2508 Sydney -------,TX 78746 Australia</p>
            </div>
            
            </div>
            
          </div>
        </div>
      </div>
      <div className="md:pl-10 md:pr-10 pl-5 pr-5 pt-7">
      <Separator orientation="horizontal"/></div>
      
      <div className='justify-between md:pl-10 pl-5 md:pt-100 text-white flex'>
        <div className="font-normal md:text-[13px] text-[5px] text-white font-Poppins">Copyright © 2024 Laptop Rental. All Rights Reserved.</div>
        <div className="flex md:gap-5  md:pr-10 pr-5">
          <p className='font-normal md:text-[13px] text-[5px] text-white font-Poppins'>Terms & Conditions  | Privacy Policy | Disclaimer</p>
          <BiSolidUpArrowCircle size='25' onClick={scrollToTop}/>
        </div>
      </div>
      </div>
      
    </footer>
  );
}

export default Footer;


