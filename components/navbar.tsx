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
import { EventItemTypes } from "@/lib/definitions";

const components: {
  title: string;
  href: string;
  subcomponents?: { title: string; href: string }[];
}[] = [
  {
    title: "Laptop Rental",
    href: "/techrental/singletechrental",
  },
  {
    title: "Tablet Rental",
    href: "/techrental/singletechrental",
  },
  {
    title: "Mobile Rental",
    href: "/techrental/singletechrental",
  },
  {
    title: "AV Rental",
    href: "/techrental/singletechrental",
  },
  {
    title: "Screen Rental",
    href: "/techrental/singletechrental",
  },
  {
    title: "Event WiFi Rental",
    href: "/techrental/singletechrental",
  },
  {
    title: "Event Services",
    href: "/techrental/singletechrental",
  },
];

export function Navbar({ eventItems }: { eventItems: EventItemTypes }) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="space-x-2 xl:space-x-4">
          <NavigationMenuItem>
            <ListItem href="/" title="Home" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[13px]">
              <ListItem href="/eventrental" title="Event Type" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[180px]">
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
              <ul className="grid w-[400px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[600px]">
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
            <ListItem href="/news" title="News Events" />
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
          "block select-none rounded-md text-primary hover:text-primary-red text-sm font-semibold",
          isSubcomponent && "pl-6" // Add left padding for subcomponents
        )}
      >
        {title}
      </NavigationMenuLink>
    </Link>
  );
});
ListItem.displayName = "ListItem";
