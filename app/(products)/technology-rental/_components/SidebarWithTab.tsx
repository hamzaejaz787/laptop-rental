"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDebouncedCallback } from "use-debounce";
import { PageProps } from "@/lib/definitions";
import { cn } from "@/lib/utils";

export interface TabItemTypes {
  label: string;
  options: string[];
}

const transformProductData = (data: any) => {
  const categoryMap = new Map();

  data.forEach((item: any) => {
    const category = item.ProductCategory;
    const subCategory = item.ProductSubCategory;

    if (!categoryMap.has(category)) {
      categoryMap.set(category, new Set());
    }
    categoryMap.get(category).add(subCategory);
  });

  return Array.from(categoryMap.entries()).map(([label, options]) => ({
    label,
    options: Array.from(options) as string[],
  }));
};

const SidebarWithTab = ({
  tabItems,
  ProductCategory,
  ProductSubCategory,
}: {
  tabItems: TabItemTypes[];
  ProductCategory?: string;
  ProductSubCategory?: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const data = transformProductData(tabItems);
  const [openCategory, setOpenCategory] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (ProductCategory) {
      const url = new URL(window.location.href);
      url.searchParams.set("category", ProductCategory.toLowerCase());
      if (ProductSubCategory) {
        url.searchParams.set("subcategory", ProductSubCategory.toLowerCase());
      }
      router.replace(url.toString(), { scroll: false });
      setOpenCategory(ProductCategory.toLowerCase());
    }
  }, [ProductCategory, ProductSubCategory, router]);
  const handleTabChange = (value: string) => {
    const url = new URL(window.location.href);
    const currentCategory = url.searchParams.get("category");

    if (currentCategory === value.toLowerCase()) {
      url.searchParams.delete("category");
      setOpenCategory(null);
    } else {
      url.searchParams.set("category", value.toLowerCase());
      setOpenCategory(value.toLowerCase());
    }
    url.searchParams.delete("subcategory");
    router.push(url.toString(), { scroll: false });
  };

  const handleOptionClick = (option: string) => {
    const url = new URL(window.location.href);
    const currentSubcategory = url.searchParams.get("subcategory");

    if (currentSubcategory === option.toLowerCase()) {
      // If the current subcategory is the same as the clicked one, remove the subcategory param
      url.searchParams.delete("subcategory");
    } else {
      // Otherwise, set the subcategory param to the clicked value
      url.searchParams.set("subcategory", option.toLowerCase());
    }
    router.push(url.toString(), { scroll: false });
  };

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term.toLowerCase());
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div className="lg:max-w-xs h-fit w-full bg-gray-100 border-2 border-gray-300 rounded-sm p-4 space-y-4">
      <Input
        placeholder="Search Products..."
        className="focus-visible:ring-primary-red transition-all ease-in rounded-sm"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
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
                className={
                  "p-4 flex items-center gap-2 h-auto md:h-auto focus-visible:underline font-semibold text-base hover:text-primary-red focus-within:text-primary-red transition-all duration-200 ease-in data-[state=open]:bg-transparent data-[state=open]:text-primary-red data-[state=open]:shadow-none"
                }
                onClick={() => handleTabChange(item.label)}
              >
                {item.label}
              </AccordionTrigger>
              <AccordionContent>
                {item.options.map((option: string, idx: number) => (
                  <div
                    key={idx}
                    className={cn(
                      "pl-8 py-2 cursor-pointer hover:text-primary-red",
                      {
                        "text-primary-red":
                          searchParams.get("subcategory") ===
                          option.toLowerCase(),
                      }
                    )}
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
