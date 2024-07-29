"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MdAdd, MdAddShoppingCart } from "react-icons/md";
import { useCart } from "@/providers/CartContext";

type AddToCartProps = {
  id: number;
  Title: string;
  imageUrl: string;
};

const AddToCartButton = ({ id, Title, imageUrl }: AddToCartProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => addToCart({ id, Title, quantity: 1, imageUrl });
  return (
    <Button
      className="rounded-sm rounded-l-none capitalize px-4"
      onClick={handleAddToCart}
    >
      <MdAddShoppingCart size={20} />
    </Button>
    // <Button
    //   className="w-full text-center font-Poppins bg-primary-red text-white mx-auto text-lg hover:bg-red-500 focus-within:bg-red-500 px-10 md:px-10 rounded-sm capitalize"
    //   onClick={handleAddToCart}
    // >
    //   Add To Cart
    // </Button>
  );
};

export default AddToCartButton;
