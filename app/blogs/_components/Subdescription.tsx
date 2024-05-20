import React from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
const Subdescription = ({ name, text, date }: any) => {
  return (
    <div className="flex gap-2 mt-3">
      <div className="flex gap-2 justify-center items-center">
        <FaUser className="text-[#D61837]" />

        <p className="text-xs">
          {name} <span className="text-[#D61837]">/</span>
        </p>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <FaClock className="text-[#D61837]" />
        <p className="text-xs">
          {text} <span className="text-[#D61837]">/</span>
        </p>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <FaCalendarAlt className="text-[#D61837]" />
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
};

export default Subdescription;
