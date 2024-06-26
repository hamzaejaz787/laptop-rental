"use client";

import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

const TabSidebar = ({ tabItems }: { tabItems: string[] }) => {
  const router = useRouter();
  const [tabItem, setTabItem] = React.useState(tabItems[0]);

  const handleTabChange = (value: string) => {
    setTabItem(value);
    const url = new URL(window.location.href);
    url.searchParams.set("event", value.toLocaleLowerCase());
    router.push(url.toString(), { scroll: false });
  };

  return (
    <div className="md:max-w-xs h-fit w-full bg-gray-100 border-2 border-gray-300 rounded-sm p-4 space-y-4">
      <h2 className="text-lg font-bold relative">
        Past Events
        <div className="absolute w-full bottom-0 left-0 h-[2px] bg-gray-300 after:content-[''] after:block after:w-1/5 after:h-[2px] after:bg-primary-red" />
      </h2>

      <Tabs onValueChange={handleTabChange}>
        <SidebarTab tabItems={tabItems} />
      </Tabs>
    </div>
  );
};

const SidebarTab = ({ tabItems }: { tabItems: string[] }) => {
  return (
    <TabsList className="block h-full space-y-4 bg-transparent">
      {tabItems.map((item, index) => (
        <TabsTrigger
          value={item}
          key={index}
          className="p-0 font-Barlow md:p-0 flex items-center gap-2 h-auto md:h-auto focus-visible:underline font-semibold text-base hover:text-primary-red focus-within:text-primary-red transition-all duration-200 ease-in data-[state=active]:bg-transparent data-[state=active]:text-primary-red data-[state=active]:shadow-none"
        >
          <FaChevronRight className="text-primary-red" />
          {item}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default TabSidebar;
