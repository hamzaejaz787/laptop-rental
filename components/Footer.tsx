import React from "react";
import Image from "next/image";
import { MdMailOutline } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { getProductCategory } from "@/data/loaders";
import { ProductCategoryItemTypes } from "./navbar";
import CtaButton from "./CtaButton";

export interface FooterLinkProps {
  title: string;
  href: string;
}

async function Footer() {
  const companyListItems: FooterLinkProps[] = [
    { title: "About", href: "/about-us" },
    { title: "Events", href: "/eventrental" },
    { title: "Get A Quote", href: "/get-a-quote" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
  ];

  const resourceListItems: FooterLinkProps[] = [
    { title: "Free eBooks", href: "/" },
    { title: "Development Tutorial", href: "/" },
    { title: "How to - Blog", href: "/" },
    { title: "Youtube Playlist", href: "/" },
  ];

  const productCategoryItems: ProductCategoryItemTypes =
    await getProductCategory();
  const rentalItems = productCategoryItems?.data.filter((item) =>
    item.products.data.every((product) => product.ProductCategory !== "Laptop")
  );
  const laptopItems = productCategoryItems?.data.filter((item) =>
    item.products.data.some((product) => product.ProductCategory === "Laptop")
  );
  return (
    <footer>
      <div className="zigzag-border bg-black py-8 px-14 relative flex flex-col md:flex-row items-center gap-4 justify-center md:justify-between w-full content-center md:rounded-t-full">
        <h6 className="text-white max-w-sm text-lg capitalize text-center md:text-left">
          Need any outdoor event rental services?
        </h6>

        <CtaButton
          text="Request a quote"
          href="/get-a-quote"
          className="md:mr-0"
        />
      </div>
      <div className="bg-primary-red p-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="space-y-4 xl:justify-self-center">
            <Link href={"/"}>
              <Image
                src="/logo_red.png"
                alt="laptop Logo"
                width={200}
                height={100}
              />
            </Link>
            <p className="text-white">
              We are always available <br /> As a renowned global brand, Laptop
              Rental ensures that our clients can reach us 24/7.{" "}
            </p>
          </div>

          <div className="space-y-8 xl:justify-self-center">
            <h2 className="text-white font-bold text-lg">Get To Know Us</h2>

            <ul className="space-y-4">
              {companyListItems.map((item, index) => (
                <li
                  key={index}
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in cursor-pointer"
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h2 className="text-white font-bold text-lg">Our Rentals</h2>

            <ul className="space-y-4">
              {rentalItems?.map((item) => (
                <li
                  key={item.id}
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in cursor-pointer"
                >
                  <Link href={`/techrental/${item.slug}`}>{item.Title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="space-y-8">
            <h2 className="text-white font-bold text-lg">Laptops</h2>

            <ul className="space-y-4">
              {laptopItems?.map((item) => (
                <li
                  key={item.id}
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in cursor-pointer"
                >
                  <Link href={`/laptoprental/${item.slug}`}>{item.Title}</Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div className="space-y-8">
            <h2 className="text-white font-bold text-lg">Contact Us</h2>

            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-white">
                <FaPhone size={20} />
                <Link
                  href="tel:+61(0)383730303"
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in"
                >
                  +61-383-730303
                </Link>
              </li>
              <li className="flex items-center gap-4 text-white">
                <MdMailOutline size={30} />
                <Link
                  href="mailto:hire@laptoprental.com"
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in"
                >
                  hire@laptoprental.com
                </Link>
              </li>
              <li className="flex items-start gap-4 text-white">
                <FaLocationDot size={30} />
                <Link
                  href="https://maps.app.goo.gl/TyGxcsfetCLd6SNRA"
                  target="_blank"
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in"
                >
                  19B Hinkler Road Mordialloc, Mordialloc Victoria 3195,
                  Australia{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white my-8" />

        {/* <div className="flex items-center justify-center md:justify-between flex-col md:flex-row gap-4"> */}
        <p className="text-white text-center">
          Copyright © 2024 Laptop Rental. All Rights Reserved.
        </p>

        {/* <div className="space-x-4 flex items-center justify-between md:justify-start w-full md:w-auto">
            <ul className="flex items-start md:items-center flex-col md:flex-row gap-4 md:gap-0 md:divide-x-2 divide-white">
              <li className="text-white md:px-4 hover:text-red-400 transition-all duration-200 ease-in cursor-pointer">
                <Link href={"/terms"}>Terms & Conditions</Link>
              </li>
              <li className="text-white md:px-4 hover:text-red-400 transition-all duration-200 ease-in cursor-pointer">
                <Link href={"/privacy"}>Privacy Policy</Link>
              </li>
              <li className="text-white md:px-4 hover:text-red-400 transition-all duration-200 ease-in cursor-pointer">
                <Link href={"/disclaimer"}>Disclaimer</Link>
              </li>
            </ul>
          </div> */}
        {/* </div> */}
      </div>
    </footer>
  );
}

export default Footer;
