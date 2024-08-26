"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ProductIconTooltipProps = {
  children: React.ReactNode;
  value: string;
};

const ProductIconTooltip: React.FC<ProductIconTooltipProps> = ({
  children,
  value,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{value}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ProductIconTooltip;
