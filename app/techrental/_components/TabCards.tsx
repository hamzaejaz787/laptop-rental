"use client";

import React from "react";
import ProductCard, { ProductCardItemsProps } from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";

const ProductCardItems: ProductCardItemsProps[] = [
  {
    image: "/ipad.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "16GB",
    storage: "512GB",
    display: "10.5",
    category: "tablet rental",
    slug: "/tablet/ipad-pro-1",
  },
  {
    image: "/ipad.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "11.5",
    category: "tablet rental",
    slug: "/tablet/ipad-pro-2",
  },
  {
    image: "/iphone.png",
    productTitle: "iPhone 14",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "7.5",
    category: "mobile rental",
    slug: "/mobile/iphone14",
  },
  {
    image: "/laptop.png",
    productTitle: "iPad Wifi 10.5 Cellular",
    productDescription:
      "Upgrade your technology experience with the advanced features.",
    ram: "32GB",
    storage: "250GB",
    display: "11.5",
    category: "laptop rental",
    slug: "/laptop/dell-e14213",
  },
];

const TabCards = () => {
  const tabParams = useSearchParams();
  const tab = tabParams.get("product");
  const filteredProducts = tab
    ? ProductCardItems.filter(
        (product) => product.category?.toLowerCase() === tab
      )
    : ProductCardItems;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} productCardItem={product} />
        ))}
      </div>
    </>
  );
};

export default TabCards;
