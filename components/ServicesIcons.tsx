import React from "react";
import Image from "next/image";
import { FaGlobeAsia } from "react-icons/fa";
import { FaHandshakeAngle, FaPeopleCarryBox, FaDove } from "react-icons/fa6";

function ServicesIcons() {
  return (
    <div className="flex md:gap-14 gap-6 items-center justify-center md:pt-5 flex-wrap sm:flex-nowrap">
      <div className="">
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src={"/circle_handshake.png"}
              alt=""
              height={65}
              width={65}
            />
            <FaHandshakeAngle
              size={40}
              className="absolute text-primary-red top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <p className="md:font-extrabold font-bold md:text-[30px] text-[20px] font-Barlow">
          1500+
        </p>
        <p className="md:font-bold font-medium font-Barlow text-[10px] md:text-[14px]">
          Employees
        </p>
      </div>
      <div className="">
        <div className="flex justify-center">
          <div className="relative">
            <Image src={"/circle_people.png"} alt="" height={65} width={65} />
            <FaPeopleCarryBox
              size={40}
              className="absolute text-primary-red top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <p className="md:font-extrabold font-bold md:text-[30px] text-[20px] font-Barlow">
          8945+
        </p>
        <p className="md:font-bold font-semibold font-Barlow text-[10px] md:text-[14px]">
          Rental Products
        </p>
      </div>
      <div className="">
        <div className="flex justify-center">
          <div className="relative">
            <Image src={"/circle_dove.png"} alt="" height={65} width={65} />
            <FaDove
              size={40}
              className="absolute text-primary-red top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <p className="md:font-[900px] font-bold md:text-[34px] text-[20px] font-Barlow">
          10M+
        </p>
        <p className="md:font-bold font-semibold font-Barlow text-[10px] md:text-[14px]">
          Products
        </p>
      </div>
      <div className="">
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src={"/circle_handshake.png"}
              alt=""
              height={65}
              width={65}
            />{" "}
            <FaGlobeAsia
              size={40}
              className="absolute text-primary-red top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <p className="md:font-[900px] font-bold md:text-[34px] text-[20px] font-Barlow">
          100+
        </p>
        <p className="md:font-bold font-medium font-Barlow text-[10px] md:text-[14px]">
          Clients
        </p>
      </div>
    </div>
  );
}

export default ServicesIcons;
