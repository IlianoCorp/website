"use client";

import * as React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@nextui-org/react";
import { Icons } from "@/components/icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { label: "Work with us", link: "https://forms.gle/q3uXoGQfQj9fVuZ38" },
    { label: "Newsletter", link: "comingsoon.html" },
    { label: "Q & A", link: "comingsoon.html" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      className="bg-transparent"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Enhance Code</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="https://forms.gle/q3uXoGQfQj9fVuZ38">
            Work with us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="comingsoon.html" aria-current="page">
            Newsletter
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="comingsoon.html">
            Q & A
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href={"https://discord.com"}>
            <Icons.discord className="h-6 w-6 dark:fill-white" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"https://twitter.com/EnhanceCode"}>
            <Icons.twitter className="h-6 w-6" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"https://www.youtube.com/@EnhanceCode"}>
            <Icons.youtube className="h-6 w-6 dark:fill-white" />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`menu-item-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
