"use client"
import React, { useState } from 'react';
import { Input } from './ui/input';
import { IoMdSearch } from 'react-icons/io';
import { Button } from './ui/button';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import Laptop_card from './Laptop_card';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Data = [
  {
    date: "Jan 11, 2024",
    title: "Event 1",
    onClick: () => { window.location.href = "/"; },
    image: "/laptop.png",
  },
  {
    date: "Jan 12, 2024",
    title: "Event 2",
    onClick: () => { window.location.href = "/"; },
    image: "/laptop.png",
  },
  {
    date: "Jan 17, 2024",
    title: "Event 3",
    onClick: () => { window.location.href = "/"; },
    image: "/laptop.png",
  },
];

function Rightsidebar({ txt, }:any) {
  const [clickedCards, setClickedCards] = useState([false, false, false, false]); // Track clicked state of each card

  const handleCardClick = (index: any) => {
    const updatedClickedCards = clickedCards.map((clicked, i) =>
      i === index ? true : false
    );
    setClickedCards(updatedClickedCards);
    setActiveButton(index);
  };


  
  const [activeButton, setActiveButton] = useState(0);
  const router = useRouter();

  
  const handleRequestQuote = () => {
    // Navigate to the desired page when "Request Quote" button is clicked
    router.push('/form'); // Adjust the route as needed
  };
  return (
    <div className='md:flex flex-col hidden md:gap-5'>
      <div className='md:w-[320px] md:px-5 md:py-3 bg-gray-100'>
        <div className='flex md:gap-3 md:items-center'>
          <div className='bg-[#D61837] md:w-1 md:h-5'></div>
          <p className='font-Poppins font-[400px] text-[20px]'>Search Here</p>
        </div>
        <div className="flex justify-center mt-4">
          <form className="w-full ">
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 justify-between">
              <Input
                type="text"
                name="search"
                placeholder="Search"
                className="px-3 py-4 font-medium placeholder-gray-500ntext-black border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
              />
              <IoMdSearch
                className="w-7 h-7 absolute ml-[400px]  "
                color="D61837"
              />
            </div>
          </form>
        </div>
      </div>
      <div  className='md:w-[320px] md:px-5 md:py-2 bg-gray-100'>
          <div className='flex md:gap-3 md:items-center'>
            <div className='bg-[#D61837] md:w-1 md:h-5'></div>
            <p className='font-Poppins font-[400px] text-[20px]'>Recent Blogs</p>
          </div>
      {Data.map((item, index) => (
        
          <div key={index} className="flex justify-center mt-4">
            <form className="w-full ">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 justify-between">
                <div className='flex gap-3'>
                  <Image src={item.image} alt="Event" height={1000} width={1000} className='bg-gray-300 md:w-20 md:h-20'/>
                  <div>
                    <div className='flex gap-2 items-center'>
                      <FaCalendarAlt color='D61837' size={15} className="font-bold" />
                      <p className='font-Poppins font-[400px] text-[14px] text-gray-500'>{item.date}</p>
                    </div>
                    <p className='font-Raleway md:font-[900px] text-[18px] text-black'>{item.title}</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          ))}
        </div>
      
      <div className='md:w-[320px] md:px-5 md:py-2 bg-gray-100'>
        <div className='flex md:gap-3 md:items-center'>
          <div className='bg-[#D61837] md:w-1 md:h-5'></div>
          <p className='font-Poppins font-[400px] text-[20px]'>Popular Tags</p>
        </div>
        <div className='flex-col md:gap-4 md:pt-3'>
            <div className='flex gap-2'>
            <Button asChild className='bg-[#D61837] text-white border rounded-sm border-none'><Link href="#">Event Planning</Link></Button>
            <Button asChild className='bg-[#D61837] text-white border rounded-sm border-none'><Link href="#">Rental Product</Link></Button>
            </div>
            <div className='flex gap-2 md:mt-2'>
            <Button asChild className='bg-[#D61837] text-white border rounded-sm border-none'><Link href="#">Tech Rental Product</Link></Button>
            <Button asChild className='bg-[#D61837] text-white border rounded-sm border-none'><Link href="#">Event Rental</Link></Button>
            </div>
            <div className='flex gap-2 md:mt-2'>
            <Button asChild className='bg-[#D61837] text-white border rounded-sm border-none'><Link href="#">Event Planning</Link></Button>
            <Button asChild className='bg-[#D61837] text-white border rounded-sm border-none'><Link href="#">Rental Product</Link></Button>
            </div>
            <div className='flex gap-2 md:mt-2'>
            <Button asChild className='bg-[#D61837] text-white border rounded-sm border-none'><Link href="#">Tech Rental Product</Link></Button>
            <Button asChild className='bg-[#D61837] text-white border rounded-sm border-none'><Link href="#">Event Rental</Link></Button>
            </div>
        </div>
      </div>
        {txt && (
      <div className='md:w-[320px] md:flex-col md:gap-6 md:px-5 md:py-2 bg-gray-100 '>
        <div className='flex md:gap-3 md:items-center'>
          <div className='bg-[#D61837] md:w-1 md:h-5'></div>
          <p className='font-Poppins font-[400px] text-[20px]'>Related Products</p>
        </div>
          <div className="flex md:flex-row gap-4 md:mt-5 flex-wrap items-center justify-center">
          <Laptop_card clicked={clickedCards[0]} onClick={() => handleCardClick(0)} src={"/ipad.png"} text={txt} description={"Upgrade your technological experience with advance features"} ram={"16GB"} storage={"512GB"} display={"10.5"} onRequestQuote={handleRequestQuote} 
          />
          <Laptop_card clicked={clickedCards[1]} onClick={() => handleCardClick(1)} src={"/ipad.png"} text={txt} description={"Upgrade your technological experience with advance features"} ram={"16GB"} storage={"512GB"} display={"10.5"} onRequestQuote={handleRequestQuote}
          />
          <Laptop_card clicked={clickedCards[2]} onClick={() => handleCardClick(2)} src={"/ipad.png"} text={txt} description={"Upgrade your technological experience with advance features"} ram={"16GB"} storage={"512GB"} display={"10.5"} onRequestQuote={handleRequestQuote}/>
          <Laptop_card clicked={clickedCards[3]} onClick={() => handleCardClick(3)} src={"/ipad.png"} text={txt} description={"Upgrade your technological experience with advance features"} ram={"16GB"} storage={"512GB"} display={"10.5"} onRequestQuote={handleRequestQuote}/>
  
        </div>
      </div>

        )}
    </div>
  );
}

export default Rightsidebar;


