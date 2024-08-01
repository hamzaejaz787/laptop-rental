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
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[850px]:grid-cols-3 gap-4">
        {tabCardsItems.map((product, index) => (
          <ProductCard key={index} productCardItem={product} />
        ))}
      </div>
    </Suspense>
  );
};

export default TabCards;
