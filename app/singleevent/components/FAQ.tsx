import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const FAQ = ({ title, text }: any) => {
  return (
    <div className="w-[80%] flex flex-col items-center justify-center m-auto mt-10 md:mt-14 lg:mt-20">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-sans text-center mb-2 font-bold text-4xl">
          {title}
        </h3>
        <p className="w-[70%] font-sans text-sm text-center mb-3">{text}</p>
      </div>
      {/* <Input className="w-[50%]" /> */}
      <div className="w-[60%] flex justify-between pr-4 rounded-md border border-gray-200  items-center">
        <input className="rounded-md h-[62px] flex-1 px-2" />
        <SearchIcon className="pl-2" />
      </div>
    </div>
  );
};

export default FAQ;
