"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
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
      size="icon"
      className="bg-slate-700 text-white text-2xl h-8 md:h-10 rounded-r-sm"
      onClick={handleAddToCart}
    >
      <MdAdd />
    </Button>
  );
};

export default AddToCartButton;
