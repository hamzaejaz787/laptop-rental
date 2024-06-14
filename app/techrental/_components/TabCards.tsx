"use client";

import React, { Suspense } from "react";
import ProductCard, { ProductCardItemsProps } from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";

const TabCards = ({
  tabCardsItems,
}: {
  tabCardsItems: ProductCardItemsProps[];
}) => {
  const tabParams = useSearchParams();
  const category = tabParams.get("category");
  const subcategory = tabParams.get("subcategory");

  const filteredProducts = tabCardsItems.filter((productItem) => {
    return (
      (!category || productItem.ProductCategory?.toLowerCase() === category) &&
      (!subcategory ||
        productItem.ProductSubCategory?.toLowerCase() === subcategory)
    );
  });

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} productCardItem={product} />
        ))}
      </div>
    </Suspense>
  );
};

export default TabCards;
