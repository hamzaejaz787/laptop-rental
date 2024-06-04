"use client";

import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const NavSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className="flex items-center">
      <button onClick={toggleSearch} className="">
        <IoSearchSharp size={20} />
      </button>
      {/* {isSearchOpen && (
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md px-2 py-1 ml-2 focus:outline-none focus:border-red-600 text-sm" // Decrease font size and padding
          style={{ width: "100px", height: "24px" }} // Decrease width and height
        />
      )} */}
    </div>
  );
};

export default NavSearch;
