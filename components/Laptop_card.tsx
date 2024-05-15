import React, { useState } from 'react';
import Image from 'next/image';
import { MdOutlineScreenshot, MdOutlineStorage } from 'react-icons/md';
import { IoHardwareChipOutline } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';

interface LaptopCardProps {
  clicked: boolean;
  onClick: () => void;
}

const Laptop_card: React.FC<LaptopCardProps> = ({ clicked, onClick }) => {
  return (
    <div
      className={`Flex flex-col h-[350px] w-80 border-2 border-dashed pl-5 pr-5 ${
        clicked ? 'border-red-500' : 'border-gray-600'
      }`}
      onClick={onClick}
    >
      <div className="flex justify-center">
        <Image src="/ipad.png" alt="" width={150} height={150} />
      </div>

      <p className="text-[16px] font-semibold font-Barlow">
        iPad Wifi 10.5 Cellular
      </p>
      <p className="line-clamp-2 text-[12px] font-Poppins">
        Upgrade your technology experience with the advanced features
      </p>
      <div className="flex gap-2">
        <div className="flex flex-col h-16 w-28 border-gray-300 rounded-md border-2 items-center justify-center">
          <IoHardwareChipOutline color="D61837" size={30} />
          <p className="text-[9px] font-light font-Poppins">Ram: 10GB</p>
        </div>
        <div className="flex flex-col h-16 w-28 border-gray-300 rounded-md border-2 items-center justify-center">
          <MdOutlineStorage color="D61837" size={25} />
          <p className="pl-1 text-[9px] font-light font-Poppins">
            Storage: 512GB
          </p>
        </div>
        <div className="flex flex-col h-16 w-28 border-gray-300 rounded-md border-2 items-center justify-center">
          <MdOutlineScreenshot color="D61837" size={30} />
          <p className="text-[9px] pl-2 font-light font-Poppins">
            Display: 10.5
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[80%,20%] h-8 mt-4">
        <div className="flex bg-[#D61837] rounded-l-sm font-Poppins items-center pl-5 pr-5 justify-center text-white text-[14px] w-full">
          Request Quote
        </div>
        <div className="flex bg-black w-18 items-center rounded-r-sm justify-center">
          <FaPlus color="white" size={20} />
        </div>
      </div>
    </div>
  );
}

export default Laptop_card;
