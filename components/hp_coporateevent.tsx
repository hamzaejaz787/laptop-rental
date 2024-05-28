// Add this line at the beginning of the file
"use client";

import React, { useState } from 'react';
import Hp_imgframe from './hp_imgframe';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const images = [
  { src: "/hp_imgframe.png", alt: '', text: "Coporate Event", link: "/singleevent" },
  { src: "/hp_imgframe.png", alt: '', text: "Business Event", link: "/singleevent"  },
  { src: "/hp_imgframe.png", alt: '', text: "Rental Event", link: "/singleevent"  },
  { src: "/hp_imgframe.png", alt: '', text: "Work Event", link: "/singleevent"  },
  { src: "/hp_imgframe.png", alt: '', text: "Laptop Event", link: "/singleevent"  },
  { src: "/hp_imgframe.png", alt: '', text: "Hello Event", link: "/singleevent"  },
];

function HpCorporateEvent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [iconColor, setIconColor] = useState({
    left: '#D61837',
    right: '#D61837',
  });

  const handleIconClick = (direction : any) => {
    if (direction === 'left') {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      setIconColor((prevIconColor) => ({ ...prevIconColor, left: prevIconColor.left === '#D61837' ? '#FF0000' : '#D61837' }));
      setIconColor((prevIconColor) => ({ ...prevIconColor, right: '#D61837' }));
    } else {
      setCurrentIndex((currentIndex + 1) % images.length);
      setIconColor((prevIconColor) => ({ ...prevIconColor, right: prevIconColor.right === '#D61837' ? '#FF0000' : '#D61837' }));
      setIconColor((prevIconColor) => ({ ...prevIconColor, left: '#D61837' }));
    }
  };

  return (
    <div className='grid md:grid-cols-[40%,60%] grid-rows md:pl-20 md:pr-20 pl-5 pr-5'>
      <div>
        <p className='font-Barlow md:font-[800] font-bold md:text-[34px] text-[14px] md:text-start text-center md:pt-16 pt-3'>Browse for Our Events to Rent The Products.</p>
        <p className='text-gray md:text-[15px] text-[8px] font-Poppins md:text-start text-center md:pb-5 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
        <div className='flex md:gap-3 gap-1 md:justify-start justify-center '>
          <FaCircleChevronLeft size={12} className='md:h-10 md:w-10' color={iconColor.left} onClick={() => handleIconClick('left')} />
          <FaCircleChevronRight size={12} className='md:h-10 md:w-10' color={iconColor.right} onClick={() => handleIconClick('right')} />
        </div>
      </div>
      <div className='flex md:gap-3 gap-12 md:flex-row flex-col md:mt-0 mt-3 mb-5  justify-center items-center '>
        {images.slice(currentIndex,currentIndex + 2).map((img, index) => (
          <Hp_imgframe key={index} src={img.src} alt={img.alt} text={img.text} link={img.link}/>
        ))}
      </div>
    </div>
  );
}

export default HpCorporateEvent;