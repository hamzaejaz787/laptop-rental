import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { IoSearchSharp } from "react-icons/io5";
import { MdAddShoppingCart, MdOutlineLocationOn } from "react-icons/md";

function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="w-full lg:w-full h-12 bg-[#D61837]"></div>
      {/* <div className=""> */}

      {/* </div> */}
      <div className="flex relative justify-between items-center px-10 py-2">
        {" "}
        <Image src="/Vector.png" alt="" fill={true} className="-z-10" />
        <Image
          src="/laptop_rental_logo.png"
          alt="laptop Logo"
          width={120}
          height={50}
          className=""
        />
        <Navbar />
        <div className="flex items-center gap-2 pr-2">
          <Button>Get a quote</Button>
          <MdOutlineLocationOn size={25} />
          <MdAddShoppingCart size={25} />
          <IoSearchSharp size={25} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Header;
