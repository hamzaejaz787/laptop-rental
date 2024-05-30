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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export interface EventItemTypes {
  data: {
    id: string;
    slug: string;
    NavMenuName: string;
  }[];
}

const components: {
  title: string;
  href: string;
  subcomponents?: { title: string; href: string }[];
}[] = [
  {
    title: "Technological Rental",
    href: "/techrental",
  },
  {
    title: "Laptop Rental",
    href: "/singletechrental",
  },
  {
    title: "Tablet Rental",
    href: "/",
  },
  {
    title: "Mobile Rental",
    href: "/",
  },
  {
    title: "AV Rental",
    href: "/",
  },
  {
    title: "Screen Rental",
    href: "/",
  },
  {
    title: "Event WiFi Rental",
    href: "/",
  },
  {
    title: "Event Services",
    href: "/",
  },
];

export function Navbar({ eventItems }: { eventItems: EventItemTypes }) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <ListItem href="/" title="Home" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[13px]">
              <ListItem href="/eventrental" title="Event Type" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[180px] ">
                {eventItems.data.map((item) => (
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
            <NavigationMenuTrigger className="text-[13px]">
              <ListItem href="/techrental" title="Technology Rental" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <React.Fragment key={component.title}>
                    <li>
                      <ListItem title={component.title} href={component.href} />
                      {component.subcomponents &&
                        component.subcomponents.map((subcomponent) => (
                          <ListItem
                            key={subcomponent.title}
                            title={subcomponent.title}
                            href={subcomponent.href}
                            isSubcomponent
                          />
                        ))}
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ListItem href="/blogs" title="News Events" />
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
    <Link
      legacyBehavior
      passHref
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        isSubcomponent && "pl-6" // Add left padding for subcomponents
      )}
      href={href}
    >
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <div className="text-sm font-medium leading-none">{title}</div>
      </NavigationMenuLink>
    </Link>
  );
});
ListItem.displayName = "ListItem";
