import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

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

        <div className="absolute inset-0 flex flex-col items-start justify-center md:pl-20 pl-5 pb-5 md:pb-10 pt-3 md:pt-0">
          <div className="flex items-center gap-2 ">
            <div className="md:w-1 md:h-28 bg-white w-[2px] h-7"></div>
            <div className="flex-col">
              <div className=" text-white font-Barlow">
                <p className='md:text-[50px] text-[13px] md:font-[900px]  font-bold'>EVENT RENTALS</p>
           <p className='md:text-[35px] text-[10px] md:font-[500px]  font-semibold'>PRODUCT SERVICES</p>
                
              </div>
              {/* <p className="md:text-[50px] text-[30px] md:font-[900px] font-bold text-white font-Barlow">RENATLS</p> */}
            </div>
          </div>
          <div className="flex text-white font-Poppins md:text-[16px] font-normal text-[6px] pt-0 text-left md:pb-3 pb-2">
          We at Laptop Rentals understand whether you&apos;re hosting a conference, trade show, or business event, having access 
          </div>
          <Button className="w-20 md:w-40 h-4 md:h-12 font-Poppins border text-black border-none bg-white text-[9px] md:text-[18px]">
            Get a quote
          </Button>
          <div className="md:w-36 md:h-1 md:ml-[800px] ml-[100px] md:mt-5 bg-white w-10 h-12"></div>

        </div>
        </div>
    </div>
  )
}

export default Hp_event2
