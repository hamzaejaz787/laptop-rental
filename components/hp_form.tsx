"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Rating } from 'react-simple-star-rating'

import Btn from './button'
import Form from './form'
import Link from 'next/link'

function Hp_form() {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
  }

  const [popUp, setPopUp] = useState(false);

  return (
    <div className='md:pl-20 md:pr-10 pl-5 pr-5 grid md:pt-10 pt-3 md:grid-cols-[35%,65%]'>
      <div className='flex-col md:justify-start justify-center'>
        <div className='flex md:flex-col md:justify-start md:items-start justify-center items-center gap-2 md:gap-8'>
          <Button className="w-20 md:w-40 h-4 md:h-12 font-Poppins border border-none bg-[#D61837] text-[9px] md:text-[18px]">
            <Link href="/form">Request a quote</Link>
            
          </Button>
          <div className='flex items-center md:w-36 w-[50px] h-[50px] md:pt-28 md:pr-10 '>
            <Rating
              emptyStyle={{ display: "flex" }}
              onClick={handleRating}
              SVGclassName='inline-block'
              size={50}
              className='w-[40px] h-[40px] md:w-[250px] md:h-[250px]'
            />
          </div>
        </div>
        <div>
          <p className="md:font-[800] text-center font-bold font-Barlow md:text-[34px] text-[14px] md:text-start md:pb-5">
            Book an Event with us to Rent a Tech
          </p>
          <p className="text-gray md:text-[15px] text-[5px] font-Poppins font-#595959 md:text-start text-center md:pb-5 pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className='flex justify-center'>
          <Btn txt="Get a Quote" link="/form"/>
        </div>
      </div>

      <div className='md:flex hidden'>
        <Form/>
      </div>
    </div>
  )
}

export default Hp_form
