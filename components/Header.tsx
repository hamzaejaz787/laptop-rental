"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineLocationOn, MdAddShoppingCart } from "react-icons/md";
import { Navbar } from "./navbar";
import { Button } from "./ui/button";
import { MobileMenu } from "./mobileMenu";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className="fixed left-0 right-0 top-0 z-50 ">
      <div className=" w-full md:h-10 h-5 bg-[#D61837]"></div>
      <div className="flex relative justify-between items-center md:px-10 md:py-2 px-2 py-1">
        {" "}
        <Image src="/Vector.png" alt="" fill={true} className="-z-10" />
        <Image
          src="/laptop_rental_logo.png"
          alt="laptop Logo"
          width={50}
          height={50}
          className="md:h-11 md:w-28 "
        />
        <div className="flex md:pl-10 md:pr-10">
          <Navbar />
        </div>
        <div className="flex items-center md:gap-2 pr-2 gap-1">
          <Button asChild className="font-Poppins h-4 md:h-8 w-16 md:w-24 md:text-[14px] text-[9px] border border-none bg-[#D61837]">
            <Link href={"/form"}>Get a quote</Link>
          </Button>
          <Link href={"contactus"}>
            <MdOutlineLocationOn size={15} className="md:size-6" />
          </Link>
          <Link href={"form"}>
            <MdAddShoppingCart size={15} className="md:size-6" />
          </Link>
          <div className="flex items-center"> {/* Container for search icon and input field */}
            <button
              onClick={toggleSearch}
              className="text-gray-500 focus:outline-none"
            >
              <IoSearchSharp size={15} className="md:size-6" />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-md px-2 py-1 ml-2 focus:outline-none focus:border-red-600 text-sm" // Decrease font size and padding
                style={{ width: "100px", height: "24px" }} // Decrease width and height
              />
            )}
          </div>

          <MobileMenu />
          {/* <HiBars3BottomRight  size={25} className="md:hidden"/> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
