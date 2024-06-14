import React from "react";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";

const AddToCartButton = () => {
  return (
    <Button
      size="icon"
      className="bg-slate-700 text-white text-2xl h-8 md:h-10 rounded-r-sm"
    >
      <MdAdd />
    </Button>
  );
};

export default AddToCartButton;
