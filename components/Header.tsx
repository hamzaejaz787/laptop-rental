import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineLocationOn, MdAddShoppingCart } from "react-icons/md";
import { Navbar } from "./navbar";
import { Button } from "./ui/button";
import { MobileMenu } from "./mobileMenu";
import NavSearch from "./NavSearch";
import { getEvents } from "@/data/loaders";
import CtaButton from "./CtaButton";

async function Header() {
  const eventItems = await getEvents();

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="flex relative justify-between items-center md:py-2 px-8 py-1 before:content-[''] before:block before:absolute before:left-0 before:top-0 before:bg-white before:w-full before:h-full before:zigzag-border-top">
        <Link href={"/"}>
          <Image
            src="/laptop_rental_logo.png"
            alt="laptop Logo"
            width={120}
            height={75}
            className="z-50 relative"
          />
        </Link>
        <div className="hidden lg:flex md:pl-10 md:pr-10">
          <Navbar eventItems={eventItems} />
        </div>
        <div className="flex items-center gap-2 z-50 relative">
          {/* <Button
            asChild
            className="font-Poppins h-4 md:h-8 w-16 md:w-24 md:text-[14px] text-[9px] border border-none bg-primary-red"
          >
            <Link href={"/form"}>Get a quote</Link>
          </Button> */}
          <CtaButton
            href="/form"
            text="Get a quote"
            className="hidden md:inline-flex p-4 md:p-4 text-sm"
          />
          <Link href={"/form"}>
            <MdAddShoppingCart size={20} />
          </Link>
          <NavSearch />
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
