import React from "react";
import ProductCard, { ProductCardItemsProps } from "@/components/ProductCard";

const ProductCardItems: ProductCardItemsProps[] = [
  {
    image: "/ipad.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "16GB",
    storage: "512GB",
    display: "10.5",
  },
  {
    image: "/screen.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "11.5",
  },
  {
    image: "/iphone.png",
    productTitle: "iPhone 14",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "7.5",
  },
  {
    image: "/printer.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "11.5",
  },
];

const TabCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProductCardItems.map((product, index) => (
          <ProductCard key={index} productCardItem={product} />
        ))}
      </div>
    </>
  );
};

export default TabCards;
