import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps {
  href: string;
  text: string;
  className?: string;
}

const CtaButton = ({ href, text, className }: ButtonProps) => {
  return (
    <Button
      asChild
      className={cn(
        "text-center font-Poppins bg-primary-red text-white mx-auto text-lg hover:bg-red-500 focus-within:bg-red-500 px-10 md:px-10 rounded-sm capitalize",
        className
      )}
    >
      <Link href={href}>{text}</Link>
    </Button>
  );
};

export default CtaButton;
