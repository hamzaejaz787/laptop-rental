import React from 'react'
import Image from 'next/image'
import { MdAdsClick } from "react-icons/md";


function Hp_events() {
  return (
    <div className=" md:pl-20 md:pr-10 pl-5 pr-5 pb-2 md:pb-0 flex-col items-center justify-center">
      <p className="md:font-[800] font-bold line-clamp-2 font-Barlow md:text-[34px] text-[14px] text-center md:pt-16 pt-5 md:pb-5">
        We don&apos;t need to take into account age and past failures
      </p>
      <p className="line-clamp-2 text-gray md:text-[15px] text-[8px] font-Poppins font-#595959 text-center md:pb-5 pb-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quam architecto, hic beatae consequuntur
      </p>
      <div className=' md:gap-8 gap-4 items-center justify-center px-4 md:flex hidden'>
      <div className='md:h-[180px] md:w-[120px] h-[50px] w-[50px] border rounded-full overflow-hidden relative'>
        <div className='absolute inset-0 bg-black opacity-50' />
        <Image
          src={"/img8.png"}
          alt=''
          layout='fill'
          objectFit='cover'
          className='object-cover object-center brightness-50'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-white text-center'>
            <p className='-rotate-90 font-bold font-Poppins md:text-[9px] text-[4px] uppercase'>Coporaate Event</p>
          </div>
        </div>
      </div>
      <div className='md:h-[250px] md:w-[120px] h-[70px] w-[70px] border rounded-full overflow-hidden relative'>
        <div className='absolute inset-0 bg-black opacity-50' />
        <Image
          src={"/img8.png"}
          alt=''
          layout='fill'
          objectFit='cover'
          className='object-cover object-center brightness-50'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-white text-center'>
            <p className='-rotate-90 font-bold font-Poppins md:text-[9px] text-[4px] uppercase'>Coporaate Event</p>
          </div>
        </div>
      </div>
      <div className='md:h-[300px] md:w-[120px] h-[80px] w-[80px] border rounded-full overflow-hidden relative'>
        <div className='absolute inset-0 bg-black opacity-50' />
        <Image
          src={"/img8.png"}
          alt=''
          layout='fill'
          objectFit='cover'
          className='object-cover object-center brightness-50'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-white text-center justify-center flex-col items-center object-center'>
            <p className='font-Exo md:font-[800px] uppercase md:text-[14px] text-[5px] '>Coporate Event</p>
            <p className='font-Exo md:font-bold uppercase md:text-[20px] text-[5px] md:pt-4'>15th<br/>Dec</p>
            <div>
            <MdAdsClick className='flex justify-center md:ml-11 ml-[13px] w-[10px] h-[10px] md:w-[25px] md:h-[25px]' size={25}/>
            </div>
          </div>
        </div>
      </div>
      <div className='md:h-[250px] md:w-[120px] h-[70px] w-[70px] border rounded-full overflow-hidden relative'>
        <div className='absolute inset-0 bg-black opacity-50' />
        <Image
          src={"/img8.png"}
          alt=''
          layout='fill'
          objectFit='cover'
          className='object-cover object-center brightness-50'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-white text-center'>
            <p className='-rotate-90 font-bold font-Poppins md:text-[9px] text-[4px] uppercase'>Coporaate Event</p>
          </div>
        </div>
      </div>
      <div className='md:h-[180px] md:w-[120px] h-[50px] w-[50px] border rounded-full overflow-hidden relative'>
        <div className='absolute inset-0 bg-black opacity-50' />
        <Image
          src={"/img8.png"}
          alt=''
          layout='fill'
          objectFit='cover'
          className='object-cover object-center brightness-50'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-white text-center'>
            <p className='-rotate-90 font-bold font-Poppins md:text-[9px] text-[4px] uppercase'>Coporaate Event</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hp_events