"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductInfoTabItemProps } from "@/lib/definitions";

const ProductInfoTabs = ({
  TabItems,
}: {
  TabItems: ProductInfoTabItemProps[];
}) => {
  return (
    <div className="p-8 container">
      <Tabs defaultValue={TabItems[0].value}>
        <TabsList className="grid w-full grid-cols-3 bg-transparent gap-4 max-w-sm mx-auto">
          {TabItems.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-transparent data-[state=active]:underline data-[state=active]:text-red-500 data-[state=active]:decoration-gray-700 data-[state=active]:shadow-none text-gray-700 hover:text-red-500 focus-visible:text-red-500 transition-all"
            >
              {tab.value}
            </TabsTrigger>
          ))}
        </TabsList>

        {TabItems.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className="text-gray-600 px-4 md:px-6"
          >
            <motion.div
              initial={{ translateX: 0 }}
              animate={{
                transform: ["translateX(-200px)", "translateX(0px)"],
                opacity: [0, 1],
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.1,
                at: "-0.1",
                duration: 0.9,
                type: "spring",
              }}
            >
              {tab.content}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProductInfoTabs;
