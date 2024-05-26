import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; subcomponents?: { title: string; href: string }[] }[] = [
  {
    title: "Technological Rental",
    href: "/",
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
]

export function Navbar() {
  return (
    <div className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link href={"/homepage"}> Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Event Type</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[180px] ">
                <ListItem href="/eventrental" title="Event Rental" />
                <ListItem href="/singleevent" title="Coporate Event" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Technology Rental</NavigationMenuTrigger>
            <NavigationMenuContent >
              <ul className="grid w-[400px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <React.Fragment key={component.title}>
                    <ListItem
                      title={component.title}
                      href={component.href}
                    />
                    {component.subcomponents && component.subcomponents.map((subcomponent) => (
                      <ListItem
                        key={subcomponent.title}
                        title={subcomponent.title}
                        href={subcomponent.href}
                        isSubcomponent
                      />
                    ))}
                  </React.Fragment>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link href={"/blogs"}>News Events</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link href={"/gallery"}>Gallery</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link href={"/aboutus"}>About Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link href={"/contactus"}>Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  { title: string; href: string; isSubcomponent?: boolean }
>(({ title, href, isSubcomponent }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            isSubcomponent && "pl-6", // Add left padding for subcomponents
          )}
          href={href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
