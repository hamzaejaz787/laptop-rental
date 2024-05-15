import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { IoSearchSharp } from "react-icons/io5";
import { MdAddShoppingCart, MdOutlineLocationOn } from "react-icons/md";

function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      {/* <div className="relative"> */}
      <div className="w-full lg:w-full h-[50px] bg-[#D61837]"></div>
      <div className="absolute">
        <Image
          src="/Vector.png"
          alt=""
          height={250}
          width={5000}
          className=""
        />
      </div>
      <div className="flex relative justify-between items-center pl-10 pr-10 pt-3">
        <div>
          <Image
            src="/laptop_rental_logo.png"
            alt="laptop Logo"
            height={40.53}
            width={100}
            className="flex items-center"
          />
        </div>
        <div className="flex pl-10 pr-10">
          <Navbar />
        </div>
        <div className="flex items-center gap-2 pr-2">
          <Button className="font-Poppins text-[12px] border border-none bg-[#D61837]">
            Get a quote
          </Button>
          <MdOutlineLocationOn size={20} />
          <MdAddShoppingCart size={20} />
          <IoSearchSharp size={20} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Header;
