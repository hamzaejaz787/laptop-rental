"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { EventItemTypes } from "@/lib/definitions";

export interface ProductCategoryItemTypes {
  data: { id: string; slug: string; Title: string }[];
}

export function Navbar({
  eventItems,
  productCategoryItems,
}: {
  eventItems: EventItemTypes;
  productCategoryItems: ProductCategoryItemTypes;
}) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="space-x-2 xl:space-x-4">
          <NavigationMenuItem>
            <ListItem href="/" title="Home" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <ListItem href="/eventrental" title="Event Type" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[180px]">
                {eventItems?.data.map((item) => (
                  <ListItem
                    key={item.id}
                    href={`/eventrental/${item.slug}`}
                    title={item.NavMenuName}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <ListItem href="/techrental" title="Technology Rental" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-4 p-4 md:w-[200px] md:grid-cols-2 lg:w-[500px]">
                {productCategoryItems?.data.map((item) => (
                  <ListItem
                    key={item.id}
                    title={item.Title}
                    href={`/techrental/${item.slug}`}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ListItem href="/news" title="News" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ListItem href="/gallery" title="Gallery" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ListItem href="/aboutus" title="About Us" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            {" "}
            <ListItem href="/contactus" title="Contact Us" />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  { title: string; href: string; isSubcomponent?: boolean }
>(({ title, href, isSubcomponent }, ref) => {
  return (
    <Link legacyBehavior passHref href={href}>
      <NavigationMenuLink
        className={cn(
          "block font-Exo rounded-md text-primary hover:text-primary-red text-sm font-medium",
          isSubcomponent && "pl-6" // Add left padding for subcomponents
        )}
      >
        {title}
      </NavigationMenuLink>
    </Link>
  );
});
ListItem.displayName = "ListItem";
