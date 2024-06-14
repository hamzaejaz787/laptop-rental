"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface TabItemTypes {
  label: string;
  options: string[];
}

const transformProductData = (data) => {
  const categoryMap = new Map();

  data.forEach((item) => {
    const category = item.ProductCategory;
    const subCategory = item.ProductSubCategory;

    if (!categoryMap.has(category)) {
      categoryMap.set(category, new Set());
    }
    categoryMap.get(category).add(subCategory);
  });

  return Array.from(categoryMap.entries()).map(([label, options]) => ({
    label,
    options: Array.from(options),
  }));
};

const SidebarWithTab = ({ tabItems }: { tabItems: TabItemTypes[] }) => {
  const router = useRouter();

  const data = transformProductData(tabItems);

  const handleTabChange = (value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("category", value.toLocaleLowerCase());
    url.searchParams.delete("subcategory");
    router.push(url.toString(), { scroll: false });
  };

  const handleOptionClick = (option: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("subcategory", option.toLowerCase());
    router.push(url.toString(), { scroll: false });
  };

  return (
    <div className="md:max-w-xs h-fit w-full bg-gray-100 border-2 border-gray-300 rounded-sm p-4 space-y-4">
      <Input
        placeholder="Search Products..."
        className="focus-visible:ring-primary-red transition-all ease-in rounded-sm"
      />

      <div className="space-y-4">
        <h2 className="text-lg font-bold relative">
          Products By Categories
          <div className="absolute w-full bottom-0 left-0 h-[2px] bg-gray-300 after:content-[''] after:block after:w-1/5 after:h-[2px] after:bg-primary-red" />
        </h2>

        <Accordion type="single" collapsible>
          {data.map((item, index) => (
            <AccordionItem key={index} value={item.label}>
              <AccordionTrigger
                className="p-4 flex items-center gap-2 h-auto md:h-auto focus-visible:underline font-semibold text-base hover:text-primary-red focus-within:text-primary-red transition-all duration-200 ease-in data-[state=open]:bg-transparent data-[state=open]:text-primary-red data-[state=open]:shadow-none"
                onClick={() => handleTabChange(item.label)}
              >
                {/* <FaChevronRight className="text-primary-red" /> */}
                {item.label}
              </AccordionTrigger>
              <AccordionContent>
                {item.options.map((option, idx) => (
                  <div
                    key={idx}
                    className="pl-8 py-2 cursor-pointer hover:text-primary-red"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default SidebarWithTab;
