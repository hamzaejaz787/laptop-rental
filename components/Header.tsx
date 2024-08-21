import React from "react";
import Cart from "./Cart";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "./Navbar";
import CtaButton from "./CtaButton";
import { getEvents, getProductCategory } from "@/data/loaders";
import { MobileMenu } from "./MobileMenu";
import TopBar from "./TopBar";

async function Header() {
  const [eventItems, productCategoryItems] = await Promise.all([
    getEvents(),
    getProductCategory(),
  ]);

  return (
    <>
      <TopBar />
      <div className="sticky left-0 right-0 top-0 z-50 container">
        <div className="flex relative justify-between items-center md:py-4 px-8 md:px-20 py-2 before:content-[''] before:block before:absolute before:left-0 before:top-0 before:bg-white before:w-full before:h-full before:zigzag-border-top">
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
            <Navbar
              eventItems={eventItems}
              productCategoryItems={productCategoryItems}
            />
          </div>
          <div className="flex items-center gap-2 z-50 relative">
            <CtaButton
              href="/get-a-quote"
              text="Get a quote"
              className="hidden md:inline-flex p-4 md:p-4 text-sm"
            />

            {/* <NavSearch /> */}
            <MobileMenu
              eventItems={eventItems}
              productCategoryItems={productCategoryItems}
            />
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
