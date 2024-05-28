// Laptop_card.js

import React from "react";
import Image from "next/image";
import { MdOutlineScreenshot, MdOutlineStorage } from "react-icons/md";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Button } from "./ui/button";

interface LaptopCardProps {
  clicked: boolean;
  onClick: () => void;
  src: string;
  text: string;
  description: string;
  ram: string;
  storage: string;
  display: string;
  onRequestQuote: () => void; // Callback function for handling "Request Quote" action
}

const Laptop_card: React.FC<LaptopCardProps> = ({
  clicked,
  onClick,
  src,
  text,
  description,
  ram,
  storage,
  display,
  onRequestQuote,
}) => {
  const handleRequestQuote = () => {
    onRequestQuote(); // Call the callback function to handle "Request Quote" action
  };

  return (
    <div
      className={`Flex flex-col md:h-[300px] h-[160px] md:w-64 w-44 border-2 border-dashed md:px-3 px-2 pb-2 ${
        clicked ? "border-red-500" : "border-gray-600"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-center">
        <Image
          src={src}
          alt=""
          width={1000}
          height={1000}
          className=" w-1/3 h-1/3 md:h-2/4 md:w-2/4"
        />
      </div>

      <p className="md:text-[14px] text-[7px] font-semibold font-Barlow md:text-start text-center">
        {text}
      </p>
      <p className="line-clamp-2 md:text-[10px] text-[5px] font-Poppins md:text-start text-center">
        {description}
      </p>
      <div className="md:flex md:gap-2 gap-1 md:pt-2 pt-1 items-center justify-center">
        <div className="flex items-center justify-center gap-1">
          <div className="flex flex-col md:h-12 md:w-16 h-6 w-9 p-[1px]  border-gray-300 rounded-md border-2 items-center justify-center">
            <IoHardwareChipOutline color="D61837" size={20} />
            <p className="md:text-[7px] text-[5px] font-light font-Poppins">
              Ram: {ram}
            </p>
          </div>

          <div className="flex flex-col md:h-12 md:w-16 h-6 w-9 p-[1px] border-gray-300 rounded-md border-2 items-center justify-center">
            <MdOutlineStorage color="D61837" size={18} />
            <p className="md:text-[7px] text-[4px] font-light font-Poppins">
              Storage: {storage}
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex flex-col md:h-12 md:w-16 h-6 w-9 p-[1px] border-gray-300 rounded-md border-2 items-center justify-center">
            <MdOutlineScreenshot color="D61837" size={20} />
            <p className="md:text-[7px] text-[5px] font-light font-Poppins">
              Display: {display}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[75%,25%] md:h-8 md:mt-4 mt-1  h-4">
        <Button
          className="flex bg-[#D61837] rounded-l-sm font-Poppins items-center md:pl-3 md:pr-3 justify-center text-white md:text-[14px] text-[8px] w-full"
          onClick={handleRequestQuote}
        >
          Request Quote
        </Button>
        <div className="flex bg-black md:w-18 px-[9px] items-center rounded-r-sm justify-center">
          <FaPlus color="white" size={18} />
        </div>
      </div>
    </div>
  );
};

export default Laptop_card;
