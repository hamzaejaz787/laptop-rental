import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { Separator } from '@/components/ui/separator';

function Footer() {
  return (
    <footer className='bottom-0'>
      {/* Image with absolute positioning */}
      <div className=''>
        <div className='absolute'>
        <Image src='/Subtract.png' alt='' width={2000} height={240}/>
      </div>
      
      {/* Content */}
      <div className='relative flex justify-between items-center pt-5 h-full pl-20 pr-20'>
        <div className="text-white text-2xl mb-4 text-left">
          <p>Need Any Outdoor Event</p>
          <p>WiFi Rental Services</p>
        </div>
        <Button>Request a quote</Button>
      </div>

      </div>
      
      <div className="grid grid-rows-[80%,10%,10%] absolute inset-x-0  bg-[#D61837]  h-[380px]">
      <div className="grid grid-cols-[30%,70%]   flex-row pt-5">
        <div className='pl-10 '>
          <Image src="/logo_red.png" alt="" width="188" height="108"/>
          <p className='line-clamp-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, necessitatibus blanditiis harum est voluptatibus eaque soluta magnam nostrum asperiores tempora sapiente? Harum.</p>
        </div>
        <div className='flex pl-20 gap-20 pr-5 '>
          <div className='flex flex-col gap-8'>
            <h1 className='pb-2 font-bold text-[16px] text-white'>Company</h1>
            <p className='font-medium text-[14px] text-white'>About</p>
            <p className='font-medium text-[14px] text-white'>Features</p>
            <p className='font-medium text-[14px] text-white'>Works</p>
            <p className='font-medium text-[14px] text-white'>Career</p>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='pb-2 font-bold text-[16px] text-white'>Help</h1>
            <p className='font-medium text-[14px] text-white'>Customer Support</p>
            <p className='font-medium text-[14px] text-white'>Delivery Details</p>
            <p className='font-medium text-[14px] text-white'>Terms & Conditions</p>
            <p className='font-medium text-[14px] text-white'>Privacy Policy</p>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='pb-2 font-bold text-[16px] text-white'>Resources</h1>
            <p className='font-medium text-[14px] text-white'>Free eBooks</p>
            <p className='font-medium text-[14px] text-white'>Development Tutorial</p>
            <p className='font-medium text-[14px] text-white'>How to - Blog</p>
            <p className='font-medium text-[14px] text-white'>Youtube Playlist</p>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='pb-2 font-bold text-[16px] text-white'>Contact Us</h1>
            <div className='flex gap-2'>
            <IoIosCall size={25} color='white'/>
            <p className='font-medium text-[14px] text-white'>(219) 900-5700</p>
            </div>
            <div className='flex gap-2 items-center'>
            <MdEmail size={25} color='white'/>
            <p className='font-medium text-[14px] text-white'>laptop@gmail.com</p>
            </div>
            <div className='flex gap-2 items-center'>
            <MdOutlineLocationOn size={30} color='white'/>
            <div>
            <p className='font-medium text-[14px] text-white'>2508 Sydney -------,</p>
            <p className='font-medium text-[14px] text-white'>TX 78746 Australia</p>
            </div>
            
            </div>
            
          </div>
        </div>
      </div>
      <div className="pl-10 pr-10">
      <Separator orientation="horizontal"/></div>
      
      <div className='justify-between pl-10 pt-100 text-white flex'>
        <div className="font-medium text-[14px] text-white">Copyright © 2024 Laptop Rental. All Rights Reserved.</div>
        <div className="flex gap-10 pr-10">
          <p>Terms & Conditions  | Privacy Policy | Disclaimer</p>
          <BiSolidUpArrowCircle size='30'/>
        </div>
      </div>
      </div>
      
    </footer>
  );
}

export default Footer;


