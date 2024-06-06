import React from "react";
import Image from "next/image";
import { MdMailOutline } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import CtaButton from "./CtaButton";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import ScrollToTop from "./ScrollToTop";

export interface FooterLinkProps {
  title: string;
  href: string;
}

function Footer() {
  const companyListItems: FooterLinkProps[] = [
    { title: "About", href: "/aboutus" },
    { title: "Events", href: "/eventrental" },
    { title: "Products", href: "/techrental" },
    { title: "Career", href: "/career" },
  ];

  const helpListItems: FooterLinkProps[] = [
    { title: "Customer Support", href: "/contact" },
    { title: "Delivery Details", href: "/delivery-details" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
  ];

  const resourceListItems: FooterLinkProps[] = [
    { title: "Free eBooks", href: "/" },
    { title: "Development Tutorial", href: "/" },
    { title: "How to - Blog", href: "/" },
    { title: "Youtube Playlist", href: "/" },
  ];

  return (
    <footer>
      <div className="zigzag-border bg-black py-8 px-14 relative flex flex-col md:flex-row items-center gap-4 justify-center md:justify-between w-full content-center md:rounded-t-full">
        <h6 className="text-white max-w-sm text-lg capitalize text-center md:text-left">
          Need any outdoor event rental services?
        </h6>

        <CtaButton text="Request a quote" href="/form" className="md:mr-0" />
      </div>

      <div className="bg-primary-red p-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-8">
          <div className="space-y-4 xl:justify-self-center xl:col-span-2">
            <Link href={"/"}>
              <Image
                src="/logo_red.png"
                alt="laptop Logo"
                width={200}
                height={100}
              />
            </Link>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
          </div>

          <div className="space-y-8 xl:justify-self-center">
            <h2 className="text-white font-bold text-lg">Company</h2>

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
            <h2 className="text-white font-bold text-lg">Help</h2>

            <ul className="space-y-4">
              {helpListItems.map((item, index) => (
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
            <h2 className="text-white font-bold text-lg">Resources</h2>

            <ul className="space-y-4">
              {resourceListItems.map((item, index) => (
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
            <h2 className="text-white font-bold text-lg">Contact Us</h2>

            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-white">
                <FaPhone size={20} />
                <Link
                  href="tel:+2199005700"
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in"
                >
                  (219)-900-5700
                </Link>
              </li>
              <li className="flex items-center gap-4 text-white">
                <FaLocationDot size={20} />
                <Link
                  href="https://maps.app.goo.gl/"
                  target="_blank"
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in"
                >
                  2508 TX 78746 UK
                </Link>
              </li>
              <li className="flex items-center gap-4 text-white">
                <MdMailOutline size={20} />
                <Link
                  href="mailto:laptop@gmail.com"
                  className="text-white hover:text-red-400 transition-all duration-200 ease-in"
                >
                  laptop@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white my-8" />

        <div className="flex items-center justify-center md:justify-between flex-col md:flex-row gap-4">
          <p className="text-white text-center md:text-left">
            Copyright © 2024 Laptop Rental. All Rights Reserved.
          </p>

          <div className="space-x-4 flex items-center justify-between md:justify-start w-full md:w-auto">
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
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
