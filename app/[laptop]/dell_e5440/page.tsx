"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdNavigateNext,
  MdOutlineScreenshot,
  MdOutlineStorage,
} from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { IoHardwareChipOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Laptop_card from "@/components/Laptop_card";
import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";
import { AccordionFAQ } from "@/components/Accordion";

function Dell_E5440() {
  const [clickedCards, setClickedCards] = useState([false, false, false]); // Track clicked state of each card

  const handleCardClick = (index: any) => {
    const updatedClickedCards = clickedCards.map((clicked, i) =>
      i === index ? true : false
    );
    setClickedCards(updatedClickedCards);
    setActiveButton(index);
  };


  const [activeButton, setActiveButton] = useState(0);

  const FAQ_buttoncontents = <AccordionFAQ />;

  const handleButtonClick = (index: any) => {
    setActiveButton(index);
  };

  const buttonContents = [
    `We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.understand whether you'.reliable and high-quality technology can make all.We at Laptop Rentals understand whether you'.`,
    "This is a guide on how to use the product.",
    "These are reviews from customers who have used the product.",
  ];
  return (
    <>
      <div className="relative">
        
        <Image src="/dell_bg.png" alt="" width={1000} height= {1000} className="w-full object-cover pt-16 md:h-[400px] lg:h-[500px]"/>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-[800] text-white text-[40px] font-Barlow md:text-3xl lg:text-5xl">DELL E5440 LATTITUDE</p>
          <div className="flex text-white items-center font-Inter text-[14px] md:text-base lg:text-lg">
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
      <div className="flex pt-20 pl-20 ">
        <div>
          <Image src="/imageframe.png" alt="" width={1280} height={1280} />
        </div>
        <div className="flex flex-col pl-10 pt-5 pr-20 gap-2">
          <p className="font-[800] font-Barlow text-[34px]">DELL E5440 LATITUDE</p>
          <p className="line-clamp-2 text-gray text-[15px] font-Poppins font-#595959">
            We at Laptop Rentals understand whether you are hosting a
            conference, trade show, or business event, having access to a
            conference, trade.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex items-center font-Poppins gap-6 font-medium text-[14px]">
              <SiTicktick color="D61837" />
              <p>We at Laptop Rentals understand</p>
            </div>
            <div className="flex items-center gap-6 font-Poppins font-medium text-[14px]">
              <SiTicktick color="D61837" />
              <p>We at Laptop Rentals understand</p>
            </div>
            <div className="flex items-center gap-6 font-Poppins font-medium text-[14px]">
              <SiTicktick color="D61837" />
              <p>We at Laptop Rentals understand</p>
            </div>
            <div className="flex items-center gap-6 font-medium font-Poppins text-[14px]">
              <SiTicktick color="D61837" />
              <p>We at Laptop Rentals understand</p>
            </div>
          </div>
          <p className="font-extrabold text-[20px] font-Poppins">Luggages Include</p>
          <div className="flex gap-8">
            <div className="flex flex-col h-24 w-36 border-gray-300 rounded-md border-2 items-center justify-center">
              <IoHardwareChipOutline color="D61837" size={40} />
              <p className="text-[14px] font-light font-Poppins">Charger</p>
            </div>
            <div className="flex flex-col h-24 w-36 border-gray-300 rounded-md border-2 items-center justify-center">
              <MdOutlineStorage color="D61837" size={40} />
              <p className="text-[14px] font-light font-Poppins">Laptop</p>
            </div>
            <div className="flex flex-col h-24 w-36 border-gray-300 rounded-md border-2 items-center justify-center">
              <MdOutlineScreenshot color="D61837" size={40} />
              <p className="text-[14px] font-light font-Poppins">Power Cable</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex border-gray-300 rounded-sm h-10 w-48 border-2 items-center justify-center gap-6 mt-2 mb-2">
              <FaMinus />
              <Separator orientation="vertical" color="gray" />
              <p className="font-semibold text-[16px] font-Poppins">1</p>
              <Separator orientation="vertical" />
              <FaPlus />
            </div>
            <p className="font-semibold text-[20px] pl-5 font-Barlow">Qty</p>
          </div>
          <div className="flex h-10 ">
            <div className="flex bg-[#D61837] rounded-l-sm font-Poppins items-center pl-10 pr-10 justify-center text-white font-medium text-[16px] w-88">
              Request Quote
            </div>
            <div className="flex bg-black w-20 items-center rounded-r-sm justify-center">
              <FaPlus color="white" size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-10">
        <div className="flex font-[600] text-[16px] justify-center font-Barlow underline underline-offset-4 ">
          {["Description", "Product Guide", "Reviews"].map((label, index) => (
            <Button
              key={index}
              variant="link"
              className={`${activeButton === index ? "text-red-600" : ""} flex`}
              onClick={() => handleButtonClick(index)}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className="mt-4 ml-20 mr-20 text-[14px] font-Poppins font-#595959">
          {buttonContents[activeButton]}
        </div>
      </div>
      <p className="text-[40px] font-bold text-center font-Barlow mt-10 mb-5">Related Products</p>
      <div className="flex gap-4 items-center justify-center">
        <Laptop_card clicked={clickedCards[0]} onClick={() => handleCardClick(0)} src={"/ipad.png"} text={"iPad WiFi 10.5 Cellular"} description={"Upgrade your technological experience with advance features"} ram={"16GB"} storage={"512GB"} display={"10.5"} />
        <Laptop_card clicked={clickedCards[1]} onClick={() => handleCardClick(1)} src={"/ipad.png"} text={"iPad WiFi 10.5 Cellular"} description={"Upgrade your technological experience with advance features"} ram={"16GB"} storage={"512GB"} display={"10.5"}/>
        <Laptop_card clicked={clickedCards[2]} onClick={() => handleCardClick(2)} src={"/ipad.png"} text={"iPad WiFi 10.5 Cellular"} description={"Upgrade your technological experience with advance features"} ram={"16GB"} storage={"512GB"} display={"10.5"}/>
      </div>
      <div className="">
        <p className="text-[40px] font-bold text-center mt-10">
          Frequently Asked Questions
        </p>
        <p className="text-[14px] line-clamp-2 text-center pr-96 pl-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus accusantium error eius amet quaerat nostrum ducimus
          voluptas, eum deserunt? Ab facilis animi doloribus nulla molestias
          atque, quos odio sequi repellendus.
        </p>
        <div className="flex justify-center mt-4">
          <form className="w-full max-w-md">
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 justify-between">
              <Input
                type="text"
                name="search"
                placeholder="Search"
                className="px-3 py-4 font-medium placeholder-gray-500ntext-black border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
              />
              <IoMdSearch className="w-7 h-7 absolute ml-[400px]  " color="D61837" />
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-4 pt-10">
          <div className="flex font-semibold text-[16px] justify-center">
            {["General", "Trust and Safety", "Services"].map((label, index) => (
              <Button
                key={index}
                variant="link"
                className={`${
                  activeButton === index ? "text-red-600" : ""
                } flex`}
                onClick={() => handleButtonClick(index)}
              >
                {label}
              </Button>
            ))}
          </div>
          <div className="mt-4 ml-20 mr-20 font-medium text-[14px] mb-4">
            {FAQ_buttoncontents}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dell_E5440;
