"use client";
import Banner from "@/components/Banner";
import Laptop_card from "@/components/Laptop_card";
import Frame from "@/components/frame";

import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const itemDetails: {
  [key: string]: { src: string; ram: string; storage: string; display: string };
} = {
  "Dell Laptop": {
    src: "/dell.png",
    ram: "16GB",
    storage: "512GB",
    display: '15.6"',
  },
  "Lenovo Laptop": {
    src: "/dell.png",
    ram: "8GB",
    storage: "256GB",
    display: '14"',
  },
  "HP Laptop": {
    src: "/dell.png",
    ram: "16GB",
    storage: "1TB",
    display: '15.6"',
  },
  "Microsoft Laptop": {
    src: "/dell.png",
    ram: "16GB",
    storage: "512GB",
    display: '13.5"',
  },
  "MSI Laptop": {
    src: "/dell.png",
    ram: "32GB",
    storage: "1TB",
    display: '17"',
  },
  "Acer Laptop": {
    src: "/dell.png",
    ram: "8GB",
    storage: "256GB",
    display: '15.6"',
  },
  "Asus Laptop": {
    src: "/dell.png",
    ram: "16GB",
    storage: "512GB",
    display: '14"',
  },
  // Add details for other categories as needed
};

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

  const [selectedCategory, setSelectedCategory] =
    useState<string>("Laptop Rental");
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const router = useRouter();

  const handleCategorySelect = (category: string, items: string[]) => {
    setSelectedCategory(category);
    setFilteredItems(items);
  };

  useEffect(() => {
    // Initialize with Laptop Rental items
    setFilteredItems([
      "Dell Laptop",
      "Lenovo Laptop",
      "HP Laptop",
      "Microsoft Laptop",
      "MSI Laptop",
      "Acer Laptop",
      "Asus Laptop",
    ]);
  }, []);

  const handleRequestQuote = () => {
    // Navigate to the desired page when "Request Quote" button is clicked
    router.push("/form"); // Adjust the route as needed
  };

  return (
    <div>
      <Banner
        title="Laptop Rental"
        text="We at Laptop Rentals understand whether you're hosting whether you're hosting We at Laptop Rentals understand at Laptop Rentals understand"
      />
      <Frame color="text-black" />
      <div className="grid grid-cols-[30%,70%] md:pt-10 pt-5 md:px-10 px-3 md:gap-5 gap-2">
        <div>
          <Sidebar
            onCategorySelect={function (
              category: string,
              items: string[]
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {filteredItems.map((item, index) => (
            <Laptop_card
              onRequestQuote={handleRequestQuote} // Pass the callback function as a prop
              key={index}
              clicked={clickedCards[index]}
              onClick={() => handleCardClick(index)}
              src={itemDetails[item]?.src || "/default-image.png"}
              text={item}
              description={
                "Upgrade your technological experience with advanced features"
              }
              ram={itemDetails[item]?.ram || "Unknown"}
              storage={itemDetails[item]?.storage || "Unknown"}
              display={itemDetails[item]?.display || "Unknown"}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center md:px-40 px-10 md:pb-5 pb-3">
          <p className="font-Barlow font-bold text-[20px] md:text-[28px] text-center">
            We don&apos;t need to take into account age and past faliure and
            past failure
          </p>
          <p className="font-Poppins font-normal text-[14px] md:text-[18px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptatum itaque voluptate sint magnam quia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleTechRental;
