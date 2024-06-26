"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars3BottomRight } from "react-icons/hi2";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { FaChevronDown } from "react-icons/fa6";
import { EventItemTypes } from "@/lib/definitions";
import { ProductCategoryItemTypes } from "./navbar";

export function MobileMenu({
  eventItems,
  productCategoryItems,
}: {
  eventItems: EventItemTypes;
  productCategoryItems: ProductCategoryItemTypes;
}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  //filter items for laptop and other product categories
  const laptopItems = productCategoryItems?.data.filter((item) =>
    item.products.data.some((product) => product.ProductCategory === "Laptop")
  );
  const otherItems = productCategoryItems?.data.filter((item) =>
    item.products.data.every((product) => product.ProductCategory !== "Laptop")
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <HiBars3BottomRight className="lg:hidden" size={30} />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="pt-10 bg-primary-red border-none flex-col justify-center"
      >
        <SheetHeader>
          <SheetTitle className="pb-4 flex justify-center">
            <Link href={"/"}>
              <Image
                src="/logo_red.png"
                alt="laptop Logo"
                width={150}
                height={150}
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <NavigationMenu>
          <NavigationMenuList className="space-y-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} `}
              >
                <Link
                  href={"/"}
                  onClick={handleClose}
                  className="text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                >
                  {" "}
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={handleClose}
              >
                <Link
                  href={"/aboutus"}
                  className="text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                >
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-4 font-medium text-sm font-Exo pl-3 text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in">
                <Link
                  href={"/eventrental"}
                  onClick={handleClose}
                  className="text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                >
                  Events
                </Link>{" "}
                <FaChevronDown />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid pl-5 font-medium font-Exo text-sm space-y-4 py-2">
                  {eventItems.data.map((item) => (
                    <Link
                      key={item.id}
                      href={`/eventrental/${item.slug}`}
                      className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                      onClick={handleClose}
                    >
                      {item.NavMenuName}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-4 font-medium text-sm font-Exo pl-3 text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in">
                <Link
                  href={"/techrental"}
                  onClick={handleClose}
                  className="text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                >
                  Laptop Rental
                </Link>
                <FaChevronDown />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid pl-5 font-medium font-Exo text-sm space-y-4 py-2">
                  {laptopItems?.map((item) => (
                    <Link
                      key={item.id}
                      href={`/techrental/${item.slug}`}
                      className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                      onClick={handleClose}
                    >
                      {item.Title}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-4 font-medium text-sm font-Exo pl-3 text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in">
                <Link
                  href={"/techrental"}
                  onClick={handleClose}
                  className="text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                >
                  Technology Rental
                </Link>
                <FaChevronDown />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid pl-5 font-medium font-Exo text-sm space-y-4 py-2">
                  {otherItems?.map((item) => (
                    <Link
                      key={item.id}
                      href={`/techrental/${item.slug}`}
                      className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                      onClick={handleClose}
                    >
                      {item.Title}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={handleClose}
              >
                <Link
                  href={"/gallery"}
                  className="text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                >
                  Gallery
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={handleClose}
              >
                <Link
                  href={"/contactus"}
                  className="text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                >
                  Contact Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block font-Exo font-medium select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
