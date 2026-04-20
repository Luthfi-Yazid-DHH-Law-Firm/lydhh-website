"use client";

import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_QUERYResult } from "@/sanity/types";
import { ListItems } from "@/components/composites/list-items";
import { getPracticeAreaIcon } from "@/assets/icon-mappers";

interface NavbarProps {
  menuServicesList: SERVICES_QUERYResult;
}

const Navbar: FC<NavbarProps> = ({ menuServicesList }) => {
  const [menuState] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const menuItems = [
    {
      id: "area-of-practices",
      label: "Area of Practices",
      hasSubmenu: true,
      submenuContent: (
          <ul className="grid w-[520px] gap-px p-3 md:grid-cols-2 bg-[#c9a84c]/10">
            {menuServicesList?.map((service) => (
                <ListItems
                    key={service._id}
                    title={service.name}
                    href={`/practice-areas/${service?.slug?.current}`}
                    icon={getPracticeAreaIcon(service.name)}
                >
                  {`Learn more about ${service.name}.`}
                </ListItems>
            ))}
            {/* "More" item spanning full width — ListItems renders its own <li> */}
            <ListItems
                title="More Practice Areas"
                href="/practice-areas"
                icon={getPracticeAreaIcon("More Practice Areas")}
                isMore
                liClassName="col-span-2"
            >
              Explore all our practice areas.
            </ListItems>
          </ul>
      ),
    },
    {
      id: "our-team",
      label: "Our Team",
      hasSubmenu: true,
      submenuContent: (
          <ul className="grid w-[400px] gap-px p-3 md:grid-cols-2 bg-[#c9a84c]/10">
            <ListItems
                title="Our Founder"
                href="/our-founder"
                icon={getPracticeAreaIcon("Our Founder")}
            >
              Learn more about our founder.
            </ListItems>
            <ListItems
                title="Our Members"
                href="/team"
                icon={getPracticeAreaIcon("Our Members")}
            >
              Learn more about our team members.
            </ListItems>
          </ul>
      ),
    },
    {
      id: "about-us",
      label: "About Us",
      hasSubmenu: false,
      href: "/about-us",
    },
    {
      id: "articles",
      label: "Articles",
      hasSubmenu: false,
      href: "/articles",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Shared link class builder
  const linkClass = cn(
      "text-[12.5px] font-normal tracking-[0.04em] transition-colors duration-200",
      isScrolled ? "text-[#8a95a3] hover:text-[#c9a84c]" : "text-white/85 hover:text-[#c9a84c]"
  );

  const triggerClass = cn(
      "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent",
      "text-[12.5px] font-normal tracking-[0.04em] transition-colors duration-200",
      isScrolled
          ? "text-[#8a95a3] hover:text-[#c9a84c] data-[state=open]:text-[#c9a84c] [&>svg]:text-[#4a5568] hover:[&>svg]:text-[#c9a84c]"
          : "text-white/85 hover:text-[#c9a84c] data-[state=open]:text-[#c9a84c] [&>svg]:text-white/40 hover:[&>svg]:text-[#c9a84c]"
  );

  return (
      <header>
        <nav
            data-state={menuState && "active"}
            className="fixed z-20 w-full"
        >
          <div
              className={cn(
                  "w-full px-8 lg:px-16 transition-all duration-300 flex justify-center items-center",
                  // Transparent state
                  "max-lg:bg-[#0a0c0f] max-lg:h-16",
                  // Desktop transparent
                  "lg:pt-7 lg:pb-5 lg:h-auto",
                  // Scrolled overrides
                  isScrolled && [
                    "!bg-[#0a0c0f] !h-16 !py-0",
                    "border-b border-[#c9a84c]/12",
                    "shadow-[0_2px_24px_rgba(0,0,0,0.3)]",
                  ]
              )}
          >
            <div className="w-full max-w-[1440px] flex items-center">
              {/* Logo */}
              <Link href="/" className="flex-1">
                <Image
                    src="/images/LYDHH-Logo_Dark.webp"
                    alt="LYDHH"
                    width={400}
                    height={80}
                    className="w-56 object-contain hidden lg:block"
                />
                <Image
                    src="/images/LYDHH-Logo_Dark.webp"
                    alt="LYDHH"
                    width={400}
                    height={80}
                    className="w-44 object-contain lg:hidden"
                />
              </Link>

              {/* Desktop nav links */}
              <div className="hidden lg:flex shrink-0">
                <NavigationMenu>
                  <NavigationMenuList className="gap-0">
                    {menuItems.map((item) => (
                        <NavigationMenuItem key={item.id}>
                          {item.hasSubmenu ? (
                              <>
                                <NavigationMenuTrigger className={triggerClass}>
                                  {item.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="!bg-[#0d1117] border border-[#c9a84c]/12 box-shadow">
                                  {item.submenuContent}
                                </NavigationMenuContent>
                              </>
                          ) : (
                              <NavigationMenuLink
                                  href={item.href}
                                  className={cn(linkClass, "px-4 py-2")}
                              >
                                {item.label}
                              </NavigationMenuLink>
                          )}
                        </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Right: Contact Us CTA */}
              <div className="flex-1 hidden lg:flex items-center justify-end">
                <Link
                    href="/contact"
                    className={cn(
                        "text-[12px] font-medium tracking-[0.08em] px-5 py-2 border transition-all duration-200",
                        isScrolled
                            ? "text-[#c9a84c] border-[#c9a84c]/35 bg-[#c9a84c]/[0.05] hover:bg-[#c9a84c]/12 hover:border-[#c9a84c]/60"
                            : "text-[#c9a84c] border-[#c9a84c]/40 bg-[#c9a84c]/[0.06] hover:bg-[#c9a84c]/14 hover:border-[#c9a84c]/70"
                    )}
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile menu */}
              <MobileMenu menuServicesList={menuServicesList} />
            </div>
          </div>
        </nav>
      </header>
  );
};

export default Navbar;