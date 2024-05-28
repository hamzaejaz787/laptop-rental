import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function Hp_event2() {
  return (
    <div>
        <div className="relative">
        <Image
          src="/frame_239.png"
          alt=""
          height={500}
          width={1000}
          className="w-full object-cover md:pt-16 md:h-[500px] h-[100px]"
        />

        {/* Content */}

        <div className="absolute inset-0 flex flex-col md:items-start items-center justify-center md:pl-20 pl-5 pb-3 md:pb-10 pt-3 md:pt-0">
          <div className="flex items-center gap-1 ">
            <div className="md:w-1 md:h-28 bg-white w-[2px] h-7 md:flex hidden"></div>
            <div className="flex-col md:items-start items-center md:justify-start justify-center">
              <div className=" text-white font-Barlow">
                <p className='md:text-[50px] text-[18px] md:font-[900px]  font-bold md:text-start text-center'>EVENT RENTALS</p>
           <p className='md:text-[35px] text-[14px] md:font-[500px] md:text-start text-center font-semibold'>PRODUCT SERVICES</p>
                
              </div>
              {/* <p className="md:text-[50px] text-[30px] md:font-[900px] font-bold text-white font-Barlow">RENATLS</p> */}
            </div>
          </div>
          <div className="flex text-white font-Poppins md:text-[16px] text-center font-normal text-[8px] pt-0 md:text-left md:pb-3 pb-2">
          We at Laptop Rentals understand whether you&apos;re hosting a conference, trade show, or business event, having access 
          </div>
          <Button asChild className="w-20 md:w-40 h-9 rounded-sm md:h-12 font-Poppins border text-black border-none bg-white text-[9px] md:text-[18px]">
            <Link href="/form">Get a quote </Link>
          </Button>
          <div className="md:w-36 md:h-1 md:ml-[800px] ml-[100px] md:mt-5 bg-white w-10 h-12 md:flex hidden"></div>

        </div>
        </div>
    </div>
  )
}

export default Hp_event2
