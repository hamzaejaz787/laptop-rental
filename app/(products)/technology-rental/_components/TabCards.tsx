"use client";

import React, { Suspense } from "react";
import ProductCard, { ProductCardItemsProps } from "@/components/ProductCard";

const TabCards = ({
  tabCardsItems,
}: {
  tabCardsItems: ProductCardItemsProps[];
}) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full w-full">
        {tabCardsItems.map((product, index) => (
          <ProductCard
            key={index}
            productCardItem={product}
            className="w-full"
          />
        ))}
      </div>
    </Suspense>
  );
};

export default TabCards;
