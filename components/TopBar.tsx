import Link from "next/link";
import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const TopBar = () => {
  return (
    <nav className="hidden lg:block w-full bg-primary-red text-white p-2">
      <ul className="flex items-center gap-6 justify-center">
        <li className="flex items-center gap-2 text-white">
          <FaPhone size={20} />
          <Link
            href="tel:+61390711839"
            className="text-white hover:text-red-400 transition-all duration-200 ease-in"
          >
            +61-390-711-839
          </Link>
        </li>
        <li className="flex items-center gap-2 text-white">
          <MdMailOutline size={20} />
          <Link
            href="mailto:hire@laptop-rental.com.au"
            className="text-white hover:text-red-400 transition-all duration-200 ease-in"
          >
            hire@laptop-rental.com.au
          </Link>
        </li>
        <li className="flex items-center gap-2 text-white">
          <FaLocationDot size={20} />
          <Link
            href="https://maps.app.goo.gl/u9jbDtGNHLvpRMSq5"
            target="_blank"
            className="text-white hover:text-red-400 transition-all duration-200 ease-in"
          >
            19B Hinkler Road Mordialloc, Mordialloc Victoria 3195, Australia
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
