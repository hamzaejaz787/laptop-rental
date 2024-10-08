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
  data: {
    id: string;
    slug: string;
    Title: string;
    products: {
      data: {
        ProductCategory: string;
        ProductSubCategory: string;
      }[];
    };
  }[];
}

export function Navbar({
  eventItems,
  productCategoryItems,
}: {
  eventItems: EventItemTypes;
  productCategoryItems: ProductCategoryItemTypes;
}) {
  //filter items for laptop and other product categories
  const laptopItems = productCategoryItems?.data
    .filter((item) =>
      item.products.data.some((product) => product.ProductCategory === "Laptop")
    )
    .sort((a, b) => a.Title.localeCompare(b.Title));

  const otherItems = productCategoryItems?.data
    .filter((item) =>
      item.products.data.every(
        (product) => product.ProductCategory !== "Laptop"
      )
    )
    .sort((a, b) => a.Title.localeCompare(b.Title));

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="space-x-2 xl:space-x-4">
          <NavigationMenuItem>
            <ListItem href="/" title="Home" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ListItem href="/about-us" title="About Us" />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <ListItem href="/laptop-hire" title="Laptop Hire" />
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-4 p-4 md:w-[200px] md:grid-cols-2 lg:w-[500px]">
                {laptopItems?.map((item) => (
                  <ListItem
                    key={item.id}
                    title={item.Title}
                    href={`/laptop-hire/${item.slug}`}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <ListItem href="/technology-rental" title="Technology Rental" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-4 p-4 md:w-[200px] md:grid-cols-2 lg:w-[500px]">
                {otherItems?.map((item) => (
                  <ListItem
                    key={item.id}
                    title={item.Title}
                    href={`/technology-rental/${item.slug}`}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <ListItem href="/event-rental" title="Events" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-4 p-4 md:w-[200px] md:grid-cols-2 lg:w-[500px]">
                {eventItems?.data.map((item) => (
                  <ListItem
                    key={item.id}
                    href={`/event-rental/${item.slug}`}
                    title={item.NavMenuName}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ListItem href="/gallery" title="Gallery" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ListItem href="/blogs" title="Blogs" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ListItem href="/contact-us" title="Contact Us" />
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
    <NavigationMenuLink
      asChild
      className={cn(
        "block font-Exo rounded-md text-primary hover:text-primary-red text-sm font-medium",
        isSubcomponent && "pl-6"
      )}
    >
      <Link href={href}>{title}</Link>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
