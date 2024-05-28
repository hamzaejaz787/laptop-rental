"use client"
import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars3BottomRight } from "react-icons/hi2";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <HiBars3BottomRight className="md:hidden md:size-16" size={15} />
      </SheetTrigger>
      <SheetContent side={"left"} className="pt-10 bg-gradient-to-t from-red-300 w-48 flex-col justify-center">
        <SheetHeader>
          <SheetTitle  className="pb-4 flex justify-center">
          <Image
          src="/laptop_rental_logo.png"
          alt="laptop Logo"
          width={150}
          height={150}
          
        />
          </SheetTitle>
                </SheetHeader>
                <NavigationMenu>
      <NavigationMenuList className="flex-col justify-center">
      <NavigationMenuItem>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ` }>
              <Link href={"/homepage"} onClick={handleClose}> Home</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium text-sm font-Exo text-[12px] pl-3">Event Type</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid pl-5 font-medium font-Exo text-sm">
              
              <Link href="/eventrental" className="text-[10px] " onClick={handleClose}>
              Event Rental
              </Link>
              <Link href="/singleevent" className=" text-[10px] " onClick={handleClose}>
              Coporate Event
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium text-sm font-Exo text-[12px] pl-3">Technology Rental</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid pl-5 font-medium font-Exo text-sm">
              
              <Link href="/" className="text-[10px] " onClick={handleClose}>
              Technology Rental
              </Link>
              <Link href="/singleevent" className=" text-[10px] " onClick={handleClose}>
              Laptop Rental
              </Link>
              <Link href="/singleevent" className=" text-[10px] " onClick={handleClose}>
              Tablet Rental
              </Link>
              <Link href="/singleevent" className=" text-[10px] " onClick={handleClose}>
              Mobile Rental
              </Link>
              <Link href="/singleevent" className=" text-[10px] " onClick={handleClose}>
              AV Rental
              </Link>
              <Link href="/singleevent" className=" text-[10px] " onClick={handleClose}>
              Screen Rental
              </Link>
              <Link href="/singleevent" className=" text-[10px] " onClick={handleClose}>
              Event WiFi Rental
              </Link>
              <Link href="/singleevent" className=" text-[10px] " onClick={handleClose}>
              Event Services
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClose}>
            <Link href={"/blogs"}>
              News Events
              </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClose}>
            <Link href={"/gallery"}>
              Gallery
              </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClose}>
            <Link href={"/aboutus"}>
              About Us
              </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleClose}>
            <Link href={"/contactus"}>
              Contact Us
              </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
      </SheetContent>
      <SheetFooter>
        <div></div>
      <div className=" w-full md:h-10 h-5 bg-[#D61837]"></div>
      </SheetFooter>
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
  )
})
ListItem.displayName = "ListItem"
