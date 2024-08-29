"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "@/providers/CartContext";

type AddToCartProps = {
  id: number;
  Title: string;
  imageUrl: string;
  ProductCategory?: string;
};

const AddToCartButton = ({
  id,
  Title,
  imageUrl,
  ProductCategory,
}: AddToCartProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => addToCart({ id, Title, quantity: 1, imageUrl });
  return (
    <>
      {ProductCategory?.toLowerCase() === "laptop" ? (
        <Button
          className="rounded-sm rounded-l-none capitalize px-4"
          onClick={handleAddToCart}
        >
          <MdAddShoppingCart size={20} />
        </Button>
      ) : (
        <Button
          className="w-full text-center gap-2 font-Poppins bg-primary-red text-white mx-auto text-lg hover:bg-red-500 focus-within:bg-red-500 px-10 md:px-10 rounded-sm capitalize"
          onClick={handleAddToCart}
        >
          Add To Cart <MdAddShoppingCart size={20} />
        </Button>
      )}
    </>
  );
};

export default AddToCartButton;
