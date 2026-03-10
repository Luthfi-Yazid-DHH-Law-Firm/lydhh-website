"use client";

import {FC, useState} from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight, ChevronLeft, Menu } from "lucide-react";
import {SERVICES_QUERYResult} from "@/sanity/types";

interface MobileMenuProps {
    menuServicesList: SERVICES_QUERYResult;
}

const MobileMenu: FC<MobileMenuProps> = ({menuServicesList}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    // const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    // const [selectedLanguage, setSelectedLanguage] = useState({
    //     flag: "🇬🇧",
    //     code: "EN",
    //     name: "English"
    // });

    type MenuItemType = {
        id: string
        label: string
        hasSubmenu: boolean
        submenuItems: {
            label: string
            href: string
        }[]
        href?: undefined
    } | {
        id: string
        label: string
        hasSubmenu: boolean
    }

    const menuItems = [
        {
            id: "area-of-practices",
            label: "Area of Practices",
            hasSubmenu: true,
            submenuItems: [
                ...(menuServicesList?.map((service) => ({
                    label: service.name ?? "Untitled",
                    href: `/practice-areas/${service?.slug?.current}`,
                })) ?? []),
                { label: "More Practice Areas", href: "/practice-areas" },
            ],
        },
        {
            id: "our-team",
            label: "Our Team",
            hasSubmenu: true,
            submenuItems: [
                { label: "Our Founder", href: "/our-founder" },
                { label: "Our Members", href: "/team" },
            ],
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
        {
            id: "contact",
            label: "Contact Us",
            hasSubmenu: false,
            href: "/contact",
        },
    ];

    // const languages = [
    //     { flag: "🇬🇧", code: "EN", name: "English" },
    //     { flag: "🇨🇳", code: "中国人", name: "中国人" },
    //     { flag: "🇮🇩", code: "Bahasa", name: "Bahasa" },
    // ];

    const handleMenuItemClick = (item: MenuItemType) => {
        if (item.hasSubmenu) {
            setActiveSubmenu(item.id);
        } else {
            setIsOpen(false);
        }
    };

    const handleBackToMain = () => {
        setActiveSubmenu(null);
    };

    const handleSubmenuItemClick = () => {
        setIsOpen(false);
        setActiveSubmenu(null);
    };

    // const handleLanguageSelect = (language: typeof languages[0]) => {
    //     setSelectedLanguage(language);
    //     setIsLanguageOpen(false);
    // };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-md min-lg:hidden">
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-red-950 [&>button[data-state]]:text-white [&>button[data-state]]:hover:bg-red-700 [&>button>svg]:stroke-white">
                {/* Main Menu */}
                <SheetTitle></SheetTitle>
                <div
                    className={`transition-transform duration-300 ${
                        activeSubmenu ? "-translate-x-full" : "translate-x-0"
                    }`}
                >
                    <div className="p-6 mt-10 space-y-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleMenuItemClick(item)}
                                className="w-full flex items-center justify-between py-3 text-left text-white hover:bg-red-700 px-4 rounded transition-colors"
                            >
                                <span className="font-medium">{item.label}</span>
                                {item.hasSubmenu && <ChevronRight className="w-5 h-5" />}
                            </button>
                        ))}

                        {/* Language Selector */}
                        {/*<Collapsible*/}
                        {/*    open={isLanguageOpen}*/}
                        {/*    onOpenChange={setIsLanguageOpen}*/}
                        {/*    className="mt-4"*/}
                        {/*>*/}
                        {/*    <CollapsibleTrigger className="w-full flex items-center justify-between py-3 text-left text-white hover:bg-red-700 px-4 rounded transition-colors">*/}
                        {/*        <div className="flex items-center gap-2">*/}
                        {/*            <span className="text-lg">{selectedLanguage.flag}</span>*/}
                        {/*            <span className="font-medium">{selectedLanguage.code}</span>*/}
                        {/*        </div>*/}
                        {/*        <ChevronDown*/}
                        {/*            className={`w-5 h-5 transition-transform duration-200 ${*/}
                        {/*                isLanguageOpen ? "rotate-180" : ""*/}
                        {/*            }`}*/}
                        {/*        />*/}
                        {/*    </CollapsibleTrigger>*/}
                        {/*    <CollapsibleContent className="mt-1 space-y-1">*/}
                        {/*        {languages.map((language, index) => (*/}
                        {/*            <button*/}
                        {/*                key={index}*/}
                        {/*                onClick={() => handleLanguageSelect(language)}*/}
                        {/*                className="w-full flex items-center gap-3 py-3 px-4 text-left text-white hover:bg-red-700 rounded transition-colors"*/}
                        {/*            >*/}
                        {/*                <span className="text-lg">{language.flag}</span>*/}
                        {/*                <span className="font-medium">{language.name}</span>*/}
                        {/*            </button>*/}
                        {/*        ))}*/}
                        {/*    </CollapsibleContent>*/}
                        {/*</Collapsible>*/}
                    </div>
                </div>

                {/* Submenu Overlay */}
                {activeSubmenu && (
                    <div className="absolute inset-0 bg-red-600 transition-transform duration-300">
                        {/* Submenu Header */}
                        <div className="flex items-center p-4 bg-red-600 border-b border-red-500">
                            <button
                                onClick={handleBackToMain}
                                className="flex items-center gap-2 text-white hover:bg-red-700 px-3 py-2 rounded"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                <span className="font-medium">
                  {menuItems.find((item) => item.id === activeSubmenu)?.label}
                </span>
                            </button>
                        </div>

                        {/* Submenu Items */}
                        <div className="p-6 space-y-1">
                            {menuItems
                                .find((item) => item.id === activeSubmenu)
                                ?.submenuItems?.map((subitem, index) => (
                                    <a
                                        key={index}
                                        href={subitem.href}
                                        onClick={handleSubmenuItemClick}
                                        className="block py-3 px-4 text-white hover:bg-red-700 rounded transition-colors"
                                    >
                                        {subitem.label}
                                    </a>
                                ))}
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;