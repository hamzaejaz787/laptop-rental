"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetFooter,
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

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

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
              <NavigationMenuTrigger className="font-medium text-sm font-Exo pl-3 text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in">
                Event Type
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid pl-5 font-medium font-Exo text-sm space-y-4 py-2">
                  <Link
                    href="/eventrental"
                    className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                    onClick={handleClose}
                  >
                    Event Rental
                  </Link>
                  <Link
                    href="/singleevent"
                    className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                    onClick={handleClose}
                  >
                    Coporate Event
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium text-sm font-Exo pl-3 text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in">
                Technology Rental
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid pl-5 font-medium font-Exo text-sm space-y-4 py-2">
                  <Link
                    href="/"
                    className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                    onClick={handleClose}
                  >
                    Technology Rental
                  </Link>
                  <Link
                    href="/singleevent"
                    className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                    onClick={handleClose}
                  >
                    Laptop Rental
                  </Link>
                  <Link
                    href="/singleevent"
                    className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                    onClick={handleClose}
                  >
                    Tablet Rental
                  </Link>
                  <Link
                    href="/singleevent"
                    className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                    onClick={handleClose}
                  >
                    Mobile Rental
                  </Link>
                  <Link
                    href="/singleevent"
                    className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                    onClick={handleClose}
                  >
                    AV Rental
                  </Link>
                  <Link
                    href="/singleevent"
                    className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                    onClick={handleClose}
                  >
                    Screen Rental
                  </Link>
                  <Link
                    href="/singleevent"
                    className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                    onClick={handleClose}
                  >
                    Event WiFi Rental
                  </Link>
                  <Link
                    href="/singleevent"
                    className="text-white text-xs focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                    onClick={handleClose}
                  >
                    Event Services
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={handleClose}
              >
                <Link
                  href={"/blogs"}
                  className="text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                >
                  News Events
                </Link>
              </NavigationMenuLink>
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
                  href={"/aboutus"}
                  className="text-white focus-within:text-red-400 hover:text-red-400 transition-all duration-200 ease-in"
                >
                  About Us
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
