import React from "react";
import Image from "next/image";
import { MdMailOutline } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { getProductCategory } from "@/data/loaders";
import { ProductCategoryItemTypes } from "./Navbar";
import CtaButton from "./CtaButton";

export interface FooterLinkProps {
  title: string;
  href: string;
}

async function Footer() {
  const companyListItems: FooterLinkProps[] = [
    { title: "About", href: "/about-us" },
    { title: "Blogs", href: "/blogs" },
    { title: "Events", href: "/event-rental" },
    { title: "Get A Quote", href: "/get-a-quote" },
    { title: "Terms & Conditions", href: "/terms-and-conditions" },
    { title: "Privacy Policy", href: "/privacy-policy" },
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

          {/* <div className="space-y-8">
            <h2 className="text-white font-bold text-lg">Our Rentals</h2>

            <ul className="space-y-4">
              {rentalItems?.map((item) => (
                <li
                  key={item.id}
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in cursor-pointer"
                >
                  <Link href={`/technology-rental/${item.slug}`}>
                    {item.Title}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div className="space-y-8">
            <h2 className="text-white font-bold text-lg">Our Laptops</h2>

            <ul className="space-y-4">
              {laptopItems?.map((item) => (
                <li
                  key={item.id}
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in cursor-pointer"
                >
                  <Link href={`/laptop-hire/${item.slug}`}>{item.Title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h2 className="text-white font-bold text-lg">Contact Us</h2>

            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-white">
                <FaPhone size={20} />
                <Link
                  href="tel:+61390711839"
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in"
                >
                  +61-390-711-839
                </Link>
              </li>
              <li className="flex items-center gap-4 text-white">
                <MdMailOutline size={30} />
                <Link
                  href="mailto:hire@laptop-rental.com.au"
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in"
                >
                  hire@laptop-rental.com.au
                </Link>
              </li>
              <li className="flex items-start gap-4 text-white">
                <FaLocationDot size={30} />
                <Link
                  href="https://maps.app.goo.gl/u9jbDtGNHLvpRMSq5"
                  target="_blank"
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in"
                >
                  19B Hinkler Road Mordialloc, Mordialloc Victoria 3195,
                  Australia
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white my-8" />

        {/* <div className="flex items-center justify-center md:justify-between flex-col md:flex-row gap-4"> */}
        <p className="text-white text-center">
          Copyright © 2025 Laptop Rental. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
