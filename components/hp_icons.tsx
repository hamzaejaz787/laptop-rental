import React from 'react'
import Image from 'next/image'
import { FaGlobeAsia } from 'react-icons/fa'
import { FaHandshakeAngle, FaPeopleCarryBox, FaDove } from 'react-icons/fa6'

function Hp_icons() {
  return (
    <div className="flex md:gap-14 gap-2 items-center justify-center md:pt-5">
      <div className="flex-col justify-center">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src={"/circle_handshake.png"}
                  alt=""
                  height={50}
                  width={50}
                  className='w-5 h-5 md:w-16 md:h-16'
                />
                <FaHandshakeAngle
                  size={25}
                  className="absolute w-3 h-3 md:w-12 md:h-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  color="D61837"
                />
              </div>
              </div>
            
            
              <p className="md:font-extrabold font-semibold md:text-[30px] text-[5px] font-Barlow">1500+</p>
              <p className="md:font-bold font-medium font-Barlow text-[3px] md:text-[14px]">Employees</p>
              </div>
              <div className="flex-col justify-center">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src={"/circle_people.png"}
                  alt=""
                  height={50}
                  width={50}
                  
                  className='w-5 h-5 md:h-16 md:w-16'
                />
                <FaPeopleCarryBox
                  size={25}
                  className="absolute w-3 h-3 md:w-10 md:h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  color="D61837"
                />
              </div>
              </div>
            
            
              <p className="md:font-extrabold font-semibold md:text-[30px] text-[5px] font-Barlow">8945+</p>
              <p className="md:font-bold font-bold font-Barlow text-[3px] md:text-[14px]">Rental Products</p>
              </div>
              <div className="flex-col justify-center">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src={"/circle_dove.png"}
                  alt=""
                  height={50}
                  width={50}
                  className='w-5 h-5 md:h-16 md:w-16'
                />
                <FaDove
                  size={20}
                  className="absolute w-3 h-3 md:w-10 md:h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  color="D61837"
                />
              </div>
              </div>
            
            
              <p className="md:font-[900px] font-bold md:text-[34px] text-[5px] font-Barlow">10M+</p>
              <p className="md:font-bold font-semibold font-Barlow text-[3px] md:text-[14px]">Products</p>
              </div>
              <div className="flex-col justify-center px-1 md:px-0">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src={"/clients_circle.png"}
                  alt=""
                  height={32}
                  width={32}
                  
                  className='w-4 h-5 md:h-16 md:w-10'
                />
                <FaGlobeAsia
                  size={25}
                  className="absolute w-3 h-3 md:w-12 md:h-12 top-1/2 left-1.5 transform -translate-x-1/2 -translate-y-1/2"
                  color="D61837"
                />
              </div>
              </div>
            
            
              <p className="md:font-[900px] font-bold md:text-[34px] text-[5px] font-Barlow">100+</p>
              <p className="md:font-bold font-medium font-Barlow text-[3px] md:text-[14px]">Clients</p>
              </div>
              <div className="flex-col justify-center">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src={"/clients_circle.png"}
                  alt=""
                  height={32}
                  width={32}
                  className='w-4 h-5 md:h-16 md:w-10'
                />
                <FaGlobeAsia
                  size={25}
                  className="absolute w-3 h-3 md:w-12 md:h-12 top-1/2 left-1.5 transform -translate-x-1/2 -translate-y-1/2"
                  color="D61837"
                />
              </div>
              </div>
            
            
              <p className="md:font-[900px] font-bold md:text-[34px] text-[5px] font-Barlow">100+</p>
              <p className="md:font-bold font-medium font-Barlow text-[3px] md:text-[14px]">Clients</p>
              </div>
    </div>
  )
}

export default Hp_icons
