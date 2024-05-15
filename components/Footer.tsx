import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='bottom-0'>
      {/* Image with absolute positioning */}
      <div className=''>
        <div className='absolute'>
        <Image src='/Subtract.png' alt='' width={5000} height={1000} className='w-full h-full'/>
      </div>
      
      {/* Content */}
      <div className='relative flex justify-between items-center pt-5 h-full pl-20 pr-20'>
        <div className="text-white text-[28] mb-4 text-left font-Poppins font-[500px]">
          <p>Need Any Outdoor Event</p>
          <p>WiFi Rental Services?</p>
        </div>
        <Button className='font-Poppins border border-none bg-[#D61837]'>Request a quote</Button>
      </div>

      </div>
      
      <div className="grid grid-rows-[80%,10%,10%] absolute inset-x-0  bg-[#D61837]  h-[380px]">
      <div className="grid grid-cols-[30%,70%]   flex-row pt-5">
        <div className='pl-10 '>
          <Image src="/logo_red.png" alt="" width="188" height="108"/>
          <p className='line-clamp-4 text-white font-Poppins text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, necessitatibus blanditiis harum est voluptatibus eaque soluta magnam nostrum asperiores tempora sapiente? Harum.</p>
        </div>
        <div className='flex pl-20 gap-20 pr-5 '>
          <div className='flex flex-col gap-8'>
            <h1 className='pb-2 font-bold text-[16px] font-Barlow text-white'>Company</h1>
            <Link className='font-normal text-[13px] font-Poppins text-white' href={'/'}>About</Link>
            <Link className='font-normal text-[13px] font-Poppins text-white' href={'/'}>Features</Link>
            <Link className='font-normal text-[13px] font-Poppins text-white' href={'/'}>Works</Link>
            <Link className='font-normal text-[13px] font-Poppins text-white' href={'/'}>Career</Link>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='pb-2 font-bold text-[16px] font-Barlow text-white'>Help</h1>
            <Link className='font-normal text-[13px] font-Poppins text-white' href={'/'}>Customer Support</Link>
            <Link className='font-normal text-[13px] font-Poppins text-white' href={'/'}>Delivery Details</Link>
            <Link className='font-normal text-[13px] font-Poppins text-white' href={'/'}>Terms & Conditions</Link>
            <Link className='font-normal text-[13px] font-Poppins text-white' href={'/'}>Privacy Policy</Link>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='pb-2 font-bold text-[16px] text-white font-Barlow'>Resources</h1>
            <Link className='font-normal text-[13px] text-white font-Poppins' href={'/'}>Free eBooks</Link>
            <Link className='font-normal text-[13px] text-white font-Poppins' href={'/'}>Development Tutorial</Link>
            <Link className='font-normal text-[13px] text-white font-Poppins' href={'/'}>How to - Blog</Link>
            <Link className='font-normal text-[13px] text-white font-Poppins' href={'/'}>Youtube Playlist</Link>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='pb-2 font-bold text-[16px] text-white  font-Barlow'>Contact Us</h1>
            <div className='flex gap-2'>
            <IoIosCall size={20} color='white'/>
            <p className='font-normal text-[13px] text-white font-Poppins'>(219) 900-5700</p>
            </div>
            <div className='flex gap-2 items-center'>
            <MdEmail size={20} color='white'/>
            <p className='font-normal text-[13px] text-white font-Poppins'>laptop@gmail.com</p>
            </div>
            <div className='flex gap-2 items-center'>
            <MdOutlineLocationOn size={25} color='white'/>
            <div>
            <p className='font-normal text-[13px] text-white font-Poppins'>2508 Sydney -------,</p>
            <p className='font-normal text-[13px] text-white font-Poppins'>TX 78746 Australia</p>
            </div>
            
            </div>
            
          </div>
        </div>
      </div>
      <div className="pl-10 pr-10">
      <Separator orientation="horizontal"/></div>
      
      <div className='justify-between pl-10 pt-100 text-white flex'>
        <div className="font-normal text-[13px] text-white font-Poppins">Copyright © 2024 Laptop Rental. All Rights Reserved.</div>
        <div className="flex gap-5 pr-10">
          <p className='font-normal text-[13px] text-white font-Poppins'>Terms & Conditions  | Privacy Policy | Disclaimer</p>
          <BiSolidUpArrowCircle size='25'/>
        </div>
      </div>
      </div>
      
    </footer>
  );
}

export default Footer;


