import React from "react";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";

const AddToCardButton = () => {
  return (
    <Button
      size="icon"
      className="bg-slate-700 text-white text-2xl h-8 md:h-10 rounded-r-sm"
    >
      <MdAdd />
    </Button>
  );
};

export default AddToCardButton;
