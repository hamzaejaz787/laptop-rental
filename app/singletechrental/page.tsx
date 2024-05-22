"use client";
import Banner from "@/components/Banner";
import Laptop_card from "@/components/Laptop_card";
import Frame from "@/components/frame";
import Hp_servicesolution from "@/components/hp_servicesolution";
import React, { useState } from "react";

function SingleTechRental() {
  const [clickedCards, setClickedCards] = useState(
    Array(9).fill(false) // Adjust array length to match the number of cards
  );

  const handleCardClick = (index: number) => {
    const updatedClickedCards = clickedCards.map((clicked, i) =>
      i === index ? true : false
    );
    setClickedCards(updatedClickedCards);
  };

  return (
    <div>
      <Banner
        title="Laptop Rental"
        text="We at Laptop Rentals understand whether you're hosting whether you're hosting We at Laptop Rentals understand at Laptop Rentals understand"
      />
      <Frame color="text-black" />
      <div className="grid grid-cols-[30%,70%] md:pt-5 pt-3 md:px-10 px-3 md:gap-5 gap-2">
        <div className="bg-black">
        </div>
        <div className="flex flex-wrap gap-3">
          {clickedCards.map((clicked, index) => (
            <Laptop_card
              key={index}
              clicked={clicked}
              onClick={() => handleCardClick(index)}
              src={"/ipad.png"}
              text={"iPad WiFi 10.5 Cellular"}
              description={
                "Upgrade your technological experience with advance features"
              }
              ram={"16GB"}
              storage={"512GB"}
              display={"10.5"}
            />
          ))}
        </div>
      </div>
      <div>
        <Hp_servicesolution />
      </div>
    </div>
  );
}

export default SingleTechRental;
