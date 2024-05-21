import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

function Hp_imgframe({ src, alt, text }: any) {
  return (
    <div >
        <div className='relative mt-3 md:mt-0'>
      <Image src={src} alt={alt} width={300} height={300} className='md:h-760 md:w-500'/>
      <div>
        <Image src={"/hp_img.png"} alt='' width={500} height={500} className="w-[60px] md:w-[250px] md:h-[200px]  h-[50px] absolute bottom-[23px] left-[36px] md:top-32 md:left-[150px] transform -translate-x-1/2 -translate-y-1/2"/>
        <p className='hidden md:flex text-[#D61837] md:pl-6 md:top-[240px] text-sm left-[8px] bottom-[26px] absolute'>----------------------------------</p>
        <p className=' md:hidden flex text-[#D61837] text-sm left-[7px] md:pl-6 bottom-[33px]  absolute'>-------</p>
                <div className='text-start absolute md:top-[270px] md:left-10 bottom-[1px] top-[65px] left-2'>
          <p className='font-Inter font-semibold md:font-bold md:text-[18px] text-[4px]'>{text}</p>
          
          <p className='  font-Poppins font-normal text-black text-[2px] md:pb-3'>Get in contact us to start planning<br/>your own adventure. Get in contact us<br/>to start planning your own adventure</p>
          {/* <p className='md:hidden flex font-Poppins font-normal text-[3px] md:pb-3'>Get in contact us to start planning your<br/>own adventure. Get in contact us to start planning your own adventure</p> */}
          <Button className="w-8 md:w-40 absolute py-0 h-2 mt-2 mb-10 md:h-8 font-Poppins border border-none bg-[#D61837] text-[4px] md:text-[12px] md:top-4 top-3">
          Explore Event
          </Button>
        </div>
      </div> 
        </div>

    </div>
  )
}

export default Hp_imgframe;