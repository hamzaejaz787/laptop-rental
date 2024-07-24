"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductTabInfoProps } from "@/lib/definitions";

const ProductInfoTabs: React.FC<ProductTabInfoProps> = ({ TabItems }) => {
  return (
    <section className="p-8 pt-0 container">
      <Tabs defaultValue={TabItems[0].Type}>
        <TabsList className="grid w-full grid-cols-2 bg-transparent gap-4 max-w-sm mx-auto">
          {TabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.Type}
              className="data-[state=active]:bg-transparent data-[state=active]:underline data-[state=active]:text-red-500 data-[state=active]:decoration-primary-red data-[state=active]:shadow-none text-gray-700 hover:text-red-500 focus-visible:text-red-500 transition-all"
            >
              {tab.Type}
            </TabsTrigger>
          ))}
        </TabsList>

        {TabItems.map((tab) => (
          <TabsContent key={tab.id} value={tab.Type}>
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
              {tab.Type === "Product Guide" ? (
                <iframe
                  title="vimeo-player"
                  src={tab.value}
                  className="min-h-[350px] w-full"
                  allowFullScreen
                ></iframe>
              ) : (
                <p className="text-gray-600">{tab.value}</p>
              )}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default ProductInfoTabs;