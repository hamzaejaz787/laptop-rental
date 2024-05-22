import React from 'react'
import Image from 'next/image'

function Hp_servicesolution() {
  return (
    <div className='flex flex-col md:pl-20 pl-3 md:pr-20 pr-3 md:pt-10 pt-5 md:pb-10 pb-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center'>
        <div className='flex flex-col'>
          <div className='md:w-48 w-32'>
          <p className='font-Barlow font-semibold text-[10px] md:text-[16px] uppercase text-[#D61837]'style={{ borderBottom: '2px dashed #D61837' }}>services we provide</p>
          </div>
          <p className='font-Barlow font-bold text-[8px] md:text-[28px]'>Event Services Solution</p>
        </div>
        <div className='flex gap-3'>
          <div className='bg-[#D61837] w-1 h-5 md:w-3 md:h-[70px]'></div>
          <p className='font-Poppins font-normal text-[5px] md:text-[12px]'>We at Laptop Rentals understand whether you&apos;re hosting a conference, show, or business event, having access to reliable and high-quality technology can make all the difference. We at Laptop Rentals understand whether technology can make all the difference.</p>
        </div>
      </div>
      <div className='flex-col relative mt-5'>
        <div className='bg-[#D61837] w-full h-[1px] md:h-[2px]'>
          <div className='flex gap-[60px] md:gap-[250px] px-8 md:px-32 pb-5'>
          </div>
        </div>
      </div>
      <div className='flex justify-center md:pt-3'>
        {[
          { title: 'Quality Assurance', text: 'Our AV equipment is maintained and regularly updated' },
          { title: 'Expert Support', text: 'Our AV equipment is maintained and regularly updated' },
          { title: 'Seamless Setup', text: 'Our AV equipment is maintained and regularly updated' },
          { title: 'Backup Systems', text: 'Our AV equipment is maintained and regularly updated' },
        ].map((service, index) => (
          <div key={index} className='flex flex-col items-center p-3 relative'>
            <div className='absolute top-[-6px] md:top-[-16px] left-1/2 transform -translate-x-1/2'>
              <div className='w-2 h-2 md:w-3 md:h-3 border rounded-full bg-black'></div>
            </div>
            <Image src={"/leader.png"} alt='' height={100} width={100} className='h-[20px] w-[20px] md:h-[60px] md:w-[65px] mb-2' />
            <p className='font-bold font-Barlow text-[6px] md:text-[14px] text-center'>{service.title}</p>
            <p className='font-normal font-Poppins text-[4px] md:text-[10px] text-center'>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hp_servicesolution
