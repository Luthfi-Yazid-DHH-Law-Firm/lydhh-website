"use client";

import { cn } from "@/lib/utils";
import {FC, useEffect, useState} from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import Link from "next/link";
import {SERVICES_QUERYResult} from "@/sanity/types";
import {ListItems} from "@/components/composites/list-items";
import {getPracticeAreaIcon} from "@/assets/icon-mappers";

interface NavbarProps {
  menuServicesList: SERVICES_QUERYResult;
}

const Navbar: FC<NavbarProps> = ({ menuServicesList }) => {
  const [menuState] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  // const [selectedLanguage, setSelectedLanguage] = useState({
  //   flag: "🇬🇧",
  //   code: "EN",
  //   name: "English"
  // });

  const menuItems = [
    {
      id: "area-of-practices",
      label: "Area of Practices",
      hasSubmenu: true,
      submenuContent: (
          <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
            {menuServicesList?.map((service) => (
                <ListItems
                    key={service._id}
                    title={service.name}
                    href={`/practice-areas/${service?.slug?.current}`}
                    icon={getPracticeAreaIcon(service.name)}  // ← add this
                >
                  {`Learn more about ${service.name}.`}
                </ListItems>
            ))}
              <ListItems title={"More Practice Areas"} href={"/practice-areas"} icon={getPracticeAreaIcon("More Practice Areas")}>
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
          <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
            <ListItems title={"Our Founder"} href={"/our-founder"} icon={getPracticeAreaIcon("Our Founder")}>
                Learn more about our founder.
            </ListItems>
            <ListItems title={"Our Members"} href={"/team"} icon={getPracticeAreaIcon("Our Members")}>
                Learn more about our team member.
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

  // const languages = [
  //   { flag: "🇬🇧", code: "EN", name: "English" },
  //   { flag: "🇨🇳", code: "中国人", name: "中国人" },
  //   { flag: "🇮🇩", code: "Bahasa", name: "Bahasa" }
  // ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleLanguageSelect = (language: typeof languages[0]) => {
  //   setSelectedLanguage(language);
  // };

  return (
      <header>
        <nav data-state={menuState && "active"} className="fixed z-20 w-full">
          <div
              className={cn(
                  "w-full px-4 lg:px-24 transition-all duration-300 max-lg:bg-white h-16 lg:h-[88px] max-lg:py-0 pt-11 pb-5 flex justify-center items-center",
                  isScrolled && "bg-white h-16 py-0 shadow-sm"
              )}
          >
            <div className="w-full container flex items-center">
              {/* Logo - Left side with fixed width */}
              <Link href="/" className="flex-1">
                <Image
                    src={`/images/LYDHH-Logo_${isScrolled ? "Light" : "Dark"}.webp`}
                    alt={"LYDHH"}
                    width={400}
                    height={80}
                    className="w-64 object-contain hidden lg:block"
                />
                <Image
                    src="/images/LYDHH-Logo_Light.webp"
                    alt={"LYDHH"}
                    width={400}
                    height={80}
                    className="w-52 object-contain lg:hidden"
                />
              </Link>

              {/* Navigation Menu - Center */}
              <div className="hidden lg:flex shrink-0">
                <NavigationMenu>
                  <NavigationMenuList className={"gap-1"}>
                    {menuItems.map((item) => (
                        <NavigationMenuItem key={item.id} >
                          {item.hasSubmenu ? (
                              <>
                                <NavigationMenuTrigger
                                    className={`bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:bg-transparent ${isScrolled ? "text-gray-700 [&>svg]:text-gray-700" : "text-white [&>svg]:text-white"} hover:text-red-600 hover:[&>svg]:text-red-600 hover:bg-transparent`}>
                            <span className={`text-sm font-medium ${isScrolled ? "text-gray-700" : "text-white"} hover:text-red-600`}>
                              {item.label}
                            </span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                  {item.submenuContent}
                                </NavigationMenuContent>
                              </>
                          ) : (
                              <NavigationMenuLink
                                  href={item.href}
                                  className={`bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:bg-transparent ${isScrolled ? "text-gray-700" : "text-white"} hover:text-red-600 px-3 font-medium`}
                              >
                                {item.label}
                              </NavigationMenuLink>
                          )}
                        </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Right side - Contact Us, Language */}
              <div className="flex-1 hidden lg:flex items-center justify-end gap-6">
                <a
                    href="/contact"
                    className={`text-sm font-medium ${isScrolled ? "text-gray-700" : "text-white"} hover:text-red-600`}
                >
                  Contact Us
                </a>

                {/* Language Dropdown */}
                {/*<DropdownMenu>*/}
                {/*  <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium ${isScrolled ? "text-gray-700" : "text-white"} hover:text-red-600 outline-none`}>*/}
                {/*    <span className="text-lg">{selectedLanguage.flag}</span>*/}
                {/*    <span>{selectedLanguage.code}</span>*/}
                {/*    <ChevronDown className="w-4 h-4" />*/}
                {/*  </DropdownMenuTrigger>*/}
                {/*  <DropdownMenuContent align="center" className="w-48 bg-white">*/}
                {/*    {languages.map((language, index) => (*/}
                {/*        <DropdownMenuItem*/}
                {/*            key={index}*/}
                {/*            onClick={() => handleLanguageSelect(language)}*/}
                {/*            className="flex items-center gap-3 cursor-pointer"*/}
                {/*        >*/}
                {/*          <span className="text-lg">{language.flag}</span>*/}
                {/*          <span>{language.name}</span>*/}
                {/*        </DropdownMenuItem>*/}
                {/*    ))}*/}
                {/*  </DropdownMenuContent>*/}
                {/*</DropdownMenu>*/}
              </div>
              <MobileMenu menuServicesList={menuServicesList} />
            </div>
          </div>
        </nav>
      </header>
  );
};

export default Navbar;