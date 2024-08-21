"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductTabInfoProps } from "@/lib/definitions";
import ParseRichText from "./RichTextParser";

const ProductInfoTabs: React.FC<ProductTabInfoProps> = ({ TabItems }) => {
  return (
    <section className="p-8 md:px-16 pt-0 container">
      <Tabs defaultValue={TabItems[0].Type} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 bg-transparent gap-4 max-w-sm mx-auto">
          {TabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.Type}
              className="text-lg data-[state=active]:bg-transparent underline data-[state=active]:text-red-500 data-[state=active]:decoration-primary-red data-[state=active]:shadow-3xl text-gray-700 hover:text-red-500 focus-visible:text-red-500 transition-all"
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
              className="md:px-8"
            >
              {/* {tab.Type === "Product Guide" ? (
                <iframe
                  title="vimeo-player"
                  src={
                    tab?.url ||
                    "https://player.vimeo.com/video/802640138?h=50a353c215"
                  }
                  className="min-h-[350px] w-full"
                  allowFullScreen
                ></iframe>
              ) : ( */}
              <ParseRichText content={tab.content} />
              {/* )} */}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default ProductInfoTabs;
