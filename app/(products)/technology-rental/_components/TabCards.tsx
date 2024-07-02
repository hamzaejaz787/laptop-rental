"use client";

import React, { Suspense } from "react";
import ProductCard, { ProductCardItemsProps } from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";

const TabCards = ({
  tabCardsItems,
  allProducts,
}: {
  tabCardsItems: ProductCardItemsProps[];
  allProducts: ProductCardItemsProps[];
}) => {
  const tabParams = useSearchParams();
  const category = tabParams.get("category");
  const subcategory = tabParams.get("subcategory");
  const search = tabParams.get("search");

  //Search and filter
  const filteredProducts = allProducts.filter((productItem) => {
    const categoryMatch =
      !category || productItem.ProductCategory?.toLowerCase() === category;
    const subcategoryMatch =
      !subcategory ||
      productItem.ProductSubCategory?.toLowerCase() === subcategory;

    const searchMatch =
      !search ||
      productItem.Title?.toLowerCase().includes(search.toLowerCase()) ||
      productItem.Description?.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && subcategoryMatch && searchMatch;
  });

  const productsToRender =
    filteredProducts.length > 0 ? filteredProducts : tabCardsItems;

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[850px]:grid-cols-3 gap-4">
        {productsToRender.map((product, index) => (
          <ProductCard key={index} productCardItem={product} />
        ))}
      </div>
    </Suspense>
  );
};

export default TabCards;
