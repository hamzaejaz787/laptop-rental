"use client";

import Banner from "@/components/Banner";
import ImageInfo from "@/components/ImageInfo";
import Frame from "@/components/frame";
import React, { useState, useEffect } from "react";
import eventrental1 from "@/public/eventrental1.jpg";
import Laptop_card from "@/components/Laptop_card";
import Sidebar from "@/components/sidebar";
import { PaginationDemo } from "@/components/pagination";

import { ImPageBreak } from "react-icons/im";
import { FaWater } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ServicesTimeline from "@/components/ServicesTimeline";
import SidebarWithTab from "./_components/SidebarWithTab";
import TabCards from "./_components/TabCards";

// Mock data for item details
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

function TechRental() {
  const [clickedCards, setClickedCards] = useState(
    Array(9).fill(false) // Adjust array length to match the number of cards
  );
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Laptop Rental");
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const router = useRouter();

  const handleCardClick = (index: number) => {
    const updatedClickedCards = clickedCards.map((clicked, i) =>
      i === index ? true : false
    );
    setClickedCards(updatedClickedCards);
  };

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
    <>
      <Banner
        btn="Request a Quote"
        link="/form"
        text="We at laptop rental hosting event. We at laptop rental hosting event. We at laptop rental hosting event. We at laptop rental hosting event."
        title="Technology Rental"
      />
      {/* <Frame /> */}
      <ImageInfo
        title="Empower Your Business with Flexible and Reliable IT Equipment Rentals"
        text="We at Laptop Rentals understand whether you're hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop "
      />

      <div className="flex flex-col md:flex-row gap-8 justify-between container p-8">
        <SidebarWithTab />
        <TabCards />
      </div>

      <div className="grid grid-cols-[30%,70%] md:pt-10 pt-3 md:px-10 px-3 md:gap-5 gap-2">
        <div>
          <Sidebar onCategorySelect={handleCategorySelect} />
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
          {/* <PaginationDemo currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} /> */}
        </div>
      </div>
      <ServicesTimeline />

      <ImageInfo
        title="Regarding Your Investment Our Breakage Policy"
        reverse
        text="We at Laptop Rentals understand whether you&lsquo;re hosting a conference, trade show, or business event, having access to reliable and high-quality technology can make all.We at Laptop Rentals understand whether you.reliable and high-quality technology can make all.We at Laptop"
        items={[
          { icon: ImPageBreak, desc: "Accidental Breakage" },
          { icon: FaWater, desc: "Water Damage" },
          { icon: ImPageBreak, desc: "Extended Warranty" },
        ]}
      />
    </>
  );
}

export default TechRental;
