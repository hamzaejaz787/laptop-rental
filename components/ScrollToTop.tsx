"use client";

import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <FaCircleArrowUp
      size={25}
      onClick={scrollToTop}
      className="text-white hover:text-red-400 focus-within:text-red-400 transition-all duration-200 ease-in cursor-pointer"
    />
  );
};

export default ScrollToTop;
