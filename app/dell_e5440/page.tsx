'use client'
import Image from 'next/image';
import React, {useState} from 'react';
import { MdNavigateNext, MdOutlineScreenshot, MdOutlineStorage } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { IoHardwareChipOutline } from "react-icons/io5";
import { Separator } from '@/components/ui/separator';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import Laptop_card from '@/components/Laptop_card';
import { Input } from '@/components/ui/input';



  

function Dell_E5440() {
  const [activeButton, setActiveButton] = useState(0); // store the active button index

  const handleButtonClick = (index: any) => {
    setActiveButton(index);
  };

  const buttonContents = [
    `We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.`,
    'This is a guide on how to use the product.',
    'These are reviews from customers who have used the product.',
  ];
  return (
    <div className='flex flex-col'>
      {/* Background Image */}
      <div className='relative'>
        <Image src='/dell_bg.png' alt='' width={3000} height={50} />

        {/* Content */}
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <p className='font-bold text-white text-[40px]'>DELL E5440 LAPTOP</p>
          <div className='flex text-white items-center font-medium text-[16px]'>
            <p>Home</p>
            <MdNavigateNext />
            <p>Laptop</p>
            <MdNavigateNext />
            <p>Dell Laptop Rental</p>
            <MdNavigateNext />
            <p>Product Page Name</p>
          </div>
        </div>
      </div>

      {/* Photo Frame and Laptop */}
      <div className='flex pt-20 pl-20'>
        <div>
          <Image src="/imageframe.png" alt="" width={1280} height={1280}/>
        </div>
        <div className='flex flex-col pl-10 pt-5 pr-20 gap-3'>
          <p className='font-extrabold  text-[34px]'>DELL E5440 LATITUDE</p>
          <p className='line-clamp-2 text-gray text-[15px]'>We at Laptop Rentals understand whether you are hosting a conference, trade show, or business event, having access to a conference, trade.</p>
          <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-6 font-medium text-[14px]'>
          <SiTicktick color='D61837'/>
          <p>We at Laptop Rentals understand</p>
          </div>
          <div className='flex items-center gap-6 font-medium text-[14px]'>
          <SiTicktick color='D61837'/>
          <p>We at Laptop Rentals understand</p>
          </div>
          <div className='flex items-center gap-6 font-medium text-[14px]'>
          <SiTicktick color='D61837'/>
          <p>We at Laptop Rentals understand</p>
          </div>
          <div className='flex items-center gap-6 font-medium text-[14px]'>
          <SiTicktick color='D61837'/>
          <p>We at Laptop Rentals understand</p>
          </div>
          </div>
          <p className='font-extrabold text-[20px]'>Luggages Include</p>
          <div className='flex gap-8'>
          <div className='flex flex-col h-28 w-40 border-gray-300 rounded-md border-2 items-center justify-center'>
          <IoHardwareChipOutline color='D61837' size={60}/>
          <p className='text-[16px] font-light'>Charger</p>
          </div>
          <div className='flex flex-col h-28 w-40 border-gray-300 rounded-md border-2 items-center justify-center'>
          <MdOutlineStorage color='D61837' size={60}/>
          <p className='text-[16px] font-light'>Laptop</p>
          </div>
          <div className='flex flex-col h-28 w-40 border-gray-300 rounded-md border-2 items-center justify-center'>
          <MdOutlineScreenshot  color='D61837' size={60}/>
          <p className='text-[16px] font-light'>Power Cable</p>
          </div>
          </div>
          <div className='flex items-center'>
          <div className='flex border-gray-700 rounded-sm h-12 w-48 border-2 items-center justify-center gap-6'>
          <FaMinus />
          <Separator orientation='vertical' color='gray'/>
          <p className='font-semibold text-[16px]'>1</p>
          <Separator orientation='vertical'/>
          <FaPlus />
          </div>
          <p className='font-semibold text-[20px] pl-5'>Qty</p>
          </div>
          <div className='flex h-10 '>
            <div className='flex bg-[#D61837] rounded-l-sm  items-center pl-10 pr-10 justify-center text-white font-medium text-[16px] w-88'>Request Quote</div>
            <div className='flex bg-black w-20 items-center rounded-r-sm justify-center'><FaPlus color='white' size={25}/></div>
          </div>
          
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-10">
      <div className="flex font-semibold text-[16px] justify-center">
      {['Description', 'Product Guide', 'Reviews'].map((label, index) => (
        <Button
          key={index}
          variant="link"
          className={`${activeButton === index? 'text-red-600' : ''} flex`}
          onClick={() => handleButtonClick(index)}
        >
          {label}
        </Button>
      ))}
      </div>
      <div className="mt-4 ml-20 mr-20 font-medium text-[14px]">
        {buttonContents[activeButton]}
      </div>
    </div>
    <p className='text-[40px] font-bold text-center'>Related Products</p>
    <div className='flex gap-4 items-center justify-center'>
    <Laptop_card/>
    <Laptop_card/>
    <Laptop_card/>
    </div>
    <div className=''>
    <p className='text-[40px] font-bold text-center'>Frequently Asked Questions</p>
    <p className='text-[14px] line-clamp-2 text-center pr-96 pl-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium error eius amet quaerat nostrum ducimus voluptas, eum deserunt? Ab facilis animi doloribus nulla molestias atque, quos odio sequi repellendus.</p>
    <div className='flex items-center'>
        <input className='w-[80%] py-2 px-4 rounded-l-md' type="email" placeholder='Search'/>
        <button className='bg-gray-200 text-gray-600 px-4 py-2 rounded-r-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='h-6 w-6'>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </div>
</div>
        </div>
  );
}

export default Dell_E5440;