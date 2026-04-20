"use client";

import { FC, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { SERVICES_QUERYResult } from "@/sanity/types";
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
    menuServicesList: SERVICES_QUERYResult;
}

type MenuItemType = {
    id: string;
    label: string;
    hasSubmenu: true;
    submenuItems: { label: string; href: string }[];
} | {
    id: string;
    label: string;
    hasSubmenu: false;
    href: string;
};

const MobileMenu: FC<MobileMenuProps> = ({ menuServicesList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    const menuItems: MenuItemType[] = [
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
    ];

    const activeItem = menuItems.find((item) => item.id === activeSubmenu);

    const handleClose = () => {
        setIsOpen(false);
        setActiveSubmenu(null);
    };

    return (
        <Sheet open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) setActiveSubmenu(null); }}>
            {/* Hamburger trigger */}
            <SheetTrigger asChild>
                <button
                    className="lg:hidden p-2 flex flex-col gap-[5px] items-end"
                    aria-label="Open menu"
                >
                    <span className="block w-5 h-[1.5px] bg-white/80" />
                    <span className="block w-5 h-[1.5px] bg-white/80" />
                    <span className="block w-3.5 h-[1.5px] bg-white/80" />
                </button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-full sm:w-[360px] p-0 bg-[#0a0c0f] border-l border-[#c9a84c]/12 [&>button[data-state]]:hidden"
            >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                {/* ── Main menu ── */}
                <div
                    className={`absolute inset-0 flex flex-col transition-transform duration-300 ease-in-out ${
                        activeSubmenu ? "-translate-x-full" : "translate-x-0"
                    }`}
                >
                    {/* Header — fixed height h-14, logo fills height with h-7 w-auto */}
                    <div className="h-14 flex items-center justify-between px-5 border-b border-[#c9a84c]/10 flex-shrink-0">
                        <Image
                            src="/images/LYDHH-Logo_Dark.webp"
                            alt="LYDHH"
                            width={400}
                            height={80}
                            // h-7 = 28px — fits comfortably in the 56px header
                            // w-auto scales width proportionally from height
                            className="h-7 w-auto object-contain"
                        />
                        <button
                            onClick={handleClose}
                            className="text-white/40 hover:text-[#c9a84c] transition-colors duration-200 p-1"
                            aria-label="Close menu"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Nav items */}
                    <nav className="flex-1 overflow-y-auto py-6">
                        <p className="text-[#c9a84c] text-[9px] tracking-[0.22em] uppercase px-5 mb-4 block">
                            Navigation
                        </p>

                        {menuItems.map((item) => (
                            item.hasSubmenu ? (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSubmenu(item.id)}
                                    className="w-full flex items-center justify-between px-5 py-3.5 text-left text-white/75 text-[14px] border-b border-white/[0.04] hover:text-[#c9a84c] hover:bg-[#c9a84c]/[0.03] transition-all duration-200"
                                >
                                    <span>{item.label}</span>
                                    <ChevronRight size={14} className="text-[#c9a84c]/50" />
                                </button>
                            ) : (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={handleClose}
                                    className="flex items-center px-5 py-3.5 text-white/75 text-[14px] border-b border-white/[0.04] hover:text-[#c9a84c] hover:bg-[#c9a84c]/[0.03] transition-all duration-200"
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* Contact CTA at bottom */}
                    <div className="px-5 py-6 border-t border-[#c9a84c]/10">
                        <Link
                            href="/contact"
                            onClick={handleClose}
                            className="flex items-center justify-center w-full py-3 border border-[#c9a84c]/35 bg-[#c9a84c]/[0.05] hover:bg-[#c9a84c]/12 text-[#c9a84c] text-[11px] tracking-[0.14em] uppercase transition-all duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* ── Submenu panel ── */}
                <div
                    className={`absolute inset-0 flex flex-col bg-[#0d1117] transition-transform duration-300 ease-in-out ${
                        activeSubmenu ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {/* Submenu header */}
                    <div className="h-14 flex items-center gap-3 px-4 border-b border-[#c9a84c]/12 flex-shrink-0">
                        <button
                            onClick={() => setActiveSubmenu(null)}
                            className="flex items-center gap-1.5 text-[#c9a84c] text-[12px] tracking-[0.06em] hover:opacity-80 transition-opacity"
                            aria-label="Back to menu"
                        >
                            <ChevronLeft size={14} />
                            Back
                        </button>
                        <span className="text-white/50 text-[13px]">
                            {activeItem?.label}
                        </span>
                    </div>

                    {/* Submenu items */}
                    <div className="flex-1 overflow-y-auto py-4">
                        {activeItem?.hasSubmenu && activeItem.submenuItems.map((subitem, i) => {
                            const isMore = subitem.label === "More Practice Areas";
                            return isMore ? (
                                <Link
                                    key={i}
                                    href={subitem.href}
                                    onClick={handleClose}
                                    className="flex items-center gap-2 mx-5 mt-4 px-4 py-3 border border-[#c9a84c]/25 bg-[#c9a84c]/[0.04] hover:bg-[#c9a84c]/10 text-[#c9a84c] text-[11px] tracking-[0.1em] uppercase transition-all duration-200"
                                >
                                    <span>→</span>
                                    {subitem.label}
                                </Link>
                            ) : (
                                <Link
                                    key={i}
                                    href={subitem.href}
                                    onClick={handleClose}
                                    className="flex items-center gap-2.5 px-5 py-3 text-white/65 text-[13.5px] border-b border-white/[0.04] hover:text-[#c9a84c] hover:pl-7 transition-all duration-200"
                                >
                                    <span className="flex-shrink-0 w-[3px] h-[3px] rounded-full bg-[#c9a84c]/50" />
                                    {subitem.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;