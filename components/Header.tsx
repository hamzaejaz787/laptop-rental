import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineLocationOn, MdAddShoppingCart } from "react-icons/md";
import { Navbar } from "./navbar";
import { Button } from "./ui/button";
import { MobileMenu } from "./mobileMenu";
import NavSearch from "./NavSearch";
import { getEvents } from "@/data/loaders";

async function Header() {
  const eventItems = await getEvents();

  return (
    <div className="fixed left-0 right-0 top-0 z-50 ">
      <div className="flex relative justify-between items-center md:px-10 md:py-2 px-2 py-1">
        <Image src="/Vector.png" alt="" fill={true} className="-z-10" />
        <Image
          src="/laptop_rental_logo.png"
          alt="laptop Logo"
          width={50}
          height={50}
          className="md:h-11 md:w-28 "
        />
        <div className="hidden md:flex md:pl-10 md:pr-10">
          <Navbar eventItems={eventItems} />
        </div>
        <div className="flex items-center md:gap-2 pr-2 gap-1">
          <Button
            asChild
            className="font-Poppins h-4 md:h-8 w-16 md:w-24 md:text-[14px] text-[9px] border border-none bg-primary-red"
          >
            <Link href={"/form"}>Get a quote</Link>
          </Button>
          <Link href={"contactus"}>
            <MdOutlineLocationOn size={15} className="md:size-6" />
          </Link>
          <Link href={"form"}>
            <MdAddShoppingCart size={15} className="md:size-6" />
          </Link>
          <NavSearch />
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
