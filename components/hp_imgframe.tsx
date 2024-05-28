import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";


function Hp_imgframe({ src, alt, text, link, desc, btn, btntxt, btnlink }: any) {
  return (
    <div >
        <div className='relative md:h-[300px] md:w-[250px] h-[300px] w-[250px] '>
      <Image src={src} alt={alt} width={1000} height={1000} className='md:h-[350px] md:w-[300px] h-[350px] w-[300px]'/>
      <div className='absolute items-center justify-center bottom-[27%] left-[8%]'>
        <Image src={"/hp_img.png"} alt='' width={500} height={500} className=" md:h-[50%] md:w-[90%] h-[50%] w-[90%]"/>
        <p className='hidden md:flex text-[#D61837] md:pl-3 text-sm '>----------------------------------</p>
        <p className=' md:hidden flex text-[#D61837] text-sm  mr-5 ' style={{ borderBottom: '2px dashed #D61837', padding:'10px'}}></p>
                <div className='text-start absolute pr-1 md:mr-2 mr-2'>
          <p className='font-Inter font-semibold md:font-bold md:text-[16px] text-[14px]'>{text}</p>
          
          <p className=' flex font-Poppins font-normal  text-black text-[10px] md:text-[10px] md:pb-2'>{desc}</p>
          {(btn && link &&(
            <Button asChild className="w-[90%] md:w-[90%] py-0 mb-10 md:h-5  font-Poppins border border-none bg-[#D61837] text-[10px] md:text-[11px] ">
            <Link href={link}>{btn}</Link>
            
            </Button>
          ))}
          {(btntxt &&  btnlink &&(
            <p className='font-Poppins font-normal flex  text-black text-[10px] md:text-[11px]'>
            <Link href={btnlink} className='flex items-center gap-2'>{btntxt}
            <FaArrowRightLong  color='#D61837' />
            
            </Link>

            </p>
              ))}
          
        </div>
      </div> 
        </div>

    </div>
  )
}

export default Hp_imgframe;