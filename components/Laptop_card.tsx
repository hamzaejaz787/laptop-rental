import Image from 'next/image';
import { MdOutlineScreenshot, MdOutlineStorage } from "react-icons/md";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import React from 'react'

function Laptop_card() {
  return (
    <div>
        <div>
      <div className='Flex flex-col h-96 w-80 border-2 border-dashed border-gray-600 pl-5 pr-5'>
        <div className='flex justify-center'>
        <Image src='/ipad.png' alt='' width={150} height={150} />
        </div>
        
        <p className='text-[16px] font-semibold'>iPad Wifi 10.5 Cellular</p>
        <p className='line-clamp-2 text-[12px]'>Upgrade your technology experience with the advanced features</p>
        <div className='flex gap-4'>
          <div className='flex flex-col h-20 w-28 border-gray-300 rounded-md border-2 items-center justify-center'>
          <IoHardwareChipOutline color='D61837' size={30}/>
          <p className='text-[14px] font-light'>Charger</p>
          </div>
          <div className='flex flex-col h-20 w-28 border-gray-300 rounded-md border-2 items-center justify-center'>
          <MdOutlineStorage color='D61837' size={30}/>
          <p className='text-[14px] font-light'>Laptop</p>
          </div>
          <div className='flex flex-col h-20 w-28 border-gray-300 rounded-md border-2 items-center justify-center'>
          <MdOutlineScreenshot  color='D61837' size={30}/>
          <p className='text-[14px] font-light'>Power Cable</p>
          </div>
          </div>
          <div className='grid grid-cols-[80%,20%] h-8 mt-4'>
            <div className='flex bg-[#D61837] rounded-l-sm  items-center pl-5 pr-5 justify-center text-white font-medium text-[14px] w-full'>Request Quote</div>
            <div className='flex bg-black w-18 items-center rounded-r-sm justify-center'><FaPlus color='white' size={20}/></div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Laptop_card