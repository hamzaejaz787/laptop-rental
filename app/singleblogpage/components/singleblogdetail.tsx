import React from 'react'
import Image from 'next/image'

function Singleblogdetail() {
  return (
      <div className='flex flex-col md:gap-7 gap-3'>
          <p className="md:font-bold text-3xl md:text-start text-center  font-bold font-Barlow">Blog Page</p>
          <p className="font-Poppins md:font-[500px] md:text-[12px] text-[10px] text-center">Name / Reading Time 3 mins Read / Jan 11, 2024</p>
          <div className="flex md:items-start md:justify-start">
            <Image
              src={"/event_img7.png"}
              alt="aboutus_banner"
              width={1000}
              className="w-full h-96 relative"
              loading="lazy"
              height={1000}
            />
          </div>
          <p className="font-Poppins md:font-[400px] md:text-[16px] text-[12px] md:text-start text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sint dolorum officiis atque adipisci quia a maiores incidunt repudiandae magnam enim veritatis ad eos ducimus, earum id perferendis animi alias.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sint dolorum officiis atque adipisci quia a maiores incidunt repudiandae magnam enim veritatis ad eos ducimus, earum id perferendis animi alias.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sint dolorum officiis atque adipisci quia a maiores incidunt repudiandae magnam enim veritatis ad eos ducimus, earum id perferendis animi alias.</p>
          <p className="md:font-bold md:text-3xl md:text-start text-center text-lg font-bold font-Barlow">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p className="font-Poppins md:font-[400px] md:text-[16px] text-[12px] md:text-start text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, repellendus mollitia quos commodi nisi ipsa, cumque minus debitis rem ex cupiditate aperiam vitae doloribus id quo quasi impedit nemo ipsam nobis eos quia! Vero ut quia rem non. Excepturi, omnis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sint dolorum officiis atque adipisci quia a maiores incidunt repudiandae magnam enim veritatis ad eos ducimus, earum id perferendis animi alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sint dolorum officiis atque adipisci quia a maiores incidunt repudiandae magnam enim veritatis ad eos ducimus, earum id perferendis animi alias.</p>
          <div>
            <Image
              src={"/event_img7.png"}
              alt="aboutus_banner"
              width={1000}
              className="w-full h-96 relative"
              loading="lazy"
              height={1000}
            />
          </div>
          <p className="font-Poppins md:font-[400px] md:text-[16px] text-[12px] md:text-start text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sint dolorum officiis atque adipisci quia a maiores incidunt repudiandae magnam enim veritatis ad eos ducimus, earum id perferendis animi alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sint dolorum officiis atque adipisci quia a maiores incidunt repudiandae magnam enim veritatis ad eos ducimus, earum id perferendis animi alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sint dolorum officiis atque adipisci quia a maiores incidunt repudiandae magnam enim veritatis ad eos ducimus, earum id perferendis animi alias.</p>
          <p className="md:font-bold md:text-3xl md:text-start text-center text-lg font-bold font-Barlow">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p className="font-Poppins md:font-[400px] md:text-[16px] text-[12px] md:text-start text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sint dolorum officiis atque adipisci quia a maiores incidunt repudiandae magnam enim veritatis ad eos ducimus, earum id perferendis animi alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sint dolorum officiis atque adipisci quia a maiores incidunt repudiandae magnam enim veritatis ad eos ducimus, earum id perferendis animi alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, repellendus mollitia quos commodi nisi ipsa, cumque minus debitis rem ex cupiditate aperiam vitae doloribus id quo quasi impedit nemo ipsam nobis eos quia! Vero ut quia rem non. Excepturi, omnis!</p>
          
    </div>
  )
}

export default Singleblogdetail
