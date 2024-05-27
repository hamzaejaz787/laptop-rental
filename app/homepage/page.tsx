import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hp_icons from "@/components/hp_icons";
import Hp_form from "@/components/hp_form";
import Hp_coporateevent from "@/components/hp_coporateevent";
import Hp_events from "@/components/hp_events";
import Hp_event2 from "@/components/hp_events2";
import Hp_servicesolution from "@/components/hp_servicesolution";
import Frame from "@/components/frame";
import Link from "next/link";


function HomePage() {
  return (
    <div className="md:pb-10 pb-3 ">
      <div className="relative">
        <Image
          src="/homepage_bg.png"
          alt=""
          height={2000}
          width={1000}
          className="w-full object-cover md:pt-16 md:h-[800px] "
        />

        {/* Content */}

        <div className="absolute inset-0 flex-col flex md:items-start items-center justify-center md:justify-start md:pl-20 md:pt-40  md:pb-10">
          <div className=" items-center flex-col justify-center ">
          <div className="font-Barlow md:text-[30px] text-[9px] text-white text-center md:text-start font-[500px] ">
            W O R L D &apos; S &nbsp; B I G G E S T
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="md:w-1 md:h-28 bg-white w-1 h-9 hidden md:flex"></div>
            <div className="md:flex-col flex items-center justify-center">
              <p className="md:hidden flex md:text-[50px] md:line-clamp-2 text-[14px] md:font-[900px] text-center justify-center md:text-start font-bold text-white font-Barlow">
                EVENT RENTALS
              </p>
              <p className="hidden md:flex md:text-[50px] md:line-clamp-2 text-[14px] md:font-[900px] text-center justify-center md:text-start font-bold text-white font-Barlow">
                EVENT<br/>RENTALS
              </p>
              {/* <p className="md:text-[50px] text-[30px] md:font-[900px] font-bold text-white font-Barlow">RENATLS</p> */}
            </div>
          </div>
          <div className="flex line-clamp-2 text-white font-Poppins md:text-[16px] font-normal text-[5px] pt-0  md:text-start text-center items-center justify-center md:justify-start md:pb-3 pb-2">
            We at Laptop Rentals understand whether you&apos;re hosting a conference, a conference you&apos;re hosting a conference.
          </div>
          </div>
          
          <div className="flex justify-center items-center md:justify-start ">
          <Button className="w-[70px] md:w-40 h-5  md:h-12 font-Poppins border border-none bg-[#D61837] text-white text-[9px] md:text-[18px]">
            <Link href={"/techrental"}>
            Tech Rental
            </Link>
          </Button>
        </div>
          
        </div>
        <div className="w-full flex absolute bottom-0 z-0">
          <Image
            src={"/rectangle_blur.png"}
            alt={""}
            height={50}
            width={5000}
            className="md:h-76 md:w-full"
          />
          <div className="md:px-28  px-4 absolute md:justify-center md:items-center w-full  h-full">
            
          <Frame color="text-white"/>
          </div>
          
        </div>
      </div>
      <div className="flex-col items-center justify-center">
        <p className="md:font-[800] font-bold font-Barlow md:text-[34px] text-[14px] text-center md:pt-16 pt-5 px-3">
          Looking For Reliable IT Equipment Rental Services For Your Event
        </p>
        <p className="line-clamp-2 text-gray md:text-[15px] text-[8px] font-Poppins font-#595959 text-center md:pb-5 pb-2">
          We at Laptop Rentals understand whether you&apos;re hosting a
          conference, a conference you&apos;re hosting a conference.
        </p>
        <div className="flex justify-center items-center">
          <Button className="w-[70px] md:w-40 h-5  md:h-12 font-Poppins border border-none bg-[#D61837] text-white text-[9px] md:text-[18px]">
            <Link href={"/form"}>
            Get a quote
            </Link>
          </Button>
        </div>
        <div className="md:flex hidden md:gap-6 gap-2 pt-3 md:pt-0 px-3 md:pl-20 md:pr-10 justify-center">
          <div>
            <Image
              src={"/hp_img1.png"}
              alt=""
              height={80}
              width={50}
              className="md:h-96 md:w-36 "
            />
          </div>
          <div>
            <Image
              src={"/hp_img2.png"}
              alt=""
              height={80}
              width={50}
              className="md:h-96 md:w-36 md:mt-16 mt-5"
            />
          </div>
          <div>
            <Image
              src={"/hp_img3.png"}
              alt=""
              height={80}
              width={50}
              className="md:h-96 md:w-36 md:mt-32 mt-10"
            />
          </div>
          <div>
            <Image
              src={"/hp_img4.png"}
              alt=""
              height={80}
              width={50}
              className="md:h-96 md:w-36 md:mt-32 mt-10"
            />
          </div>
          <div>
            <Image
              src={"/hp_img5.png"}
              alt=""
              height={80}
              width={50}
              className="md:h-96 md:w-36 md:mt-16 mt-5"
            />
          </div>
          <div>
            <Image
              src={"/hp_img6.png"}
              alt=""
              height={80}
              width={50}
              className="md:h-96 md:w-36 "
            />
          </div>
        </div>
        <div>
          <div className="md:font-[800] font-bold font-Barlow md:text-[34px] text-[14px] text-center md:pt-16 pt-5 md:pb-5">
            Our Event Services
            <div>
              <Hp_icons />
            </div>
          </div>
        </div>
        <Hp_coporateevent />
        <Hp_events/>
        <Hp_event2/>
        <Hp_form/>
        <Hp_servicesolution/>
      </div>
    </div>
  );
}

export default HomePage;
