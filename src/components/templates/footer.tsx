"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICES_QUERYResult } from "@/sanity/types";
import { FC } from "react";

interface FooterProps {
  menuServicesList: SERVICES_QUERYResult;
}

const Footer: FC<FooterProps> = ({ menuServicesList }) => {
  const year = new Date().getFullYear();

  const footerSections = [
    {
      title: "Area of Practices",
      links: [
        ...(menuServicesList?.map((service) => ({
          label: service.name ?? "Untitled",
          href: `/practice-areas/${service?.slug?.current}`,
        })) ?? []),
        { label: "More Practice Areas →", href: "/practice-areas", isMore: true },
      ],
    },
    {
      title: "Our Team",
      links: [
        { label: "Meet our Founder", href: "/our-founder" },
        { label: "Our Member", href: "/team" },
      ],
    },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Articles", href: "/articles" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
      <footer className="relative bg-[#0a0c0f] overflow-hidden">
        {/* Top gold divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

        {/* Subtle radial glow at bottom */}
        <div
            className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
            style={{
              background:
                  "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 70%)",
            }}
        />

        {/* ── Main grid ── */}
        <div className="relative w-full max-w-[1440px] mx-auto px-8 lg:px-16 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_1fr_160px_160px] gap-12 lg:gap-16">

            {/* Brand column */}
            <div className="flex flex-col gap-5">
              {/* Logo */}
              <div className="border border-[#c9a84c]/15 bg-[#c9a84c]/[0.04] px-4 py-3 w-fit">
                <Image
                    src="/images/LYDHH-Logo_Dark.webp"
                    alt="LYDHH Law Firm"
                    width={200}
                    height={40}
                    className="h-9 w-auto object-contain"
                />
              </div>

              {/* Tagline */}
              <p className="text-[#6b7785] text-[12.5px] leading-[1.75] max-w-[240px]">
                A premier Jakarta-based commercial law firm dedicated to providing
                globally minded, client-focused legal solutions.
              </p>

              {/* Gold rule */}
              <div className="w-8 h-px bg-gradient-to-r from-[#c9a84c] to-[#a98e16]" />

              {/* Copyright */}
              <p className="text-[#4a5568] text-[11px] tracking-[0.06em]">
                &copy; {year} &bull; Luthfi Yazid DHH Law Firm
              </p>
            </div>

            {/* Practice areas */}
            <div>
              <h3 className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase font-medium mb-5 pb-2.5 border-b border-[#c9a84c]/15">
                Area of Practices
              </h3>
              <ul className="space-y-2.5">
                {footerSections[0].links.map((link, i) => (
                    <li key={i}>
                      <Link
                          href={link.href}
                          className={`text-[12.5px] transition-all duration-200 hover:pl-1.5 block ${
                              "isMore" in link && link.isMore
                                  ? "text-[#c9a84c]/70 text-[11.5px] mt-3 hover:text-[#c9a84c]"
                                  : "text-[#8a95a3] hover:text-[#c9a84c]"
                          }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Our Team */}
            <div>
              <h3 className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase font-medium mb-5 pb-2.5 border-b border-[#c9a84c]/15">
                Our Team
              </h3>
              <ul className="space-y-2.5">
                {footerSections[1].links.map((link, i) => (
                    <li key={i}>
                      <Link
                          href={link.href}
                          className="text-[#8a95a3] text-[12.5px] hover:text-[#c9a84c] hover:pl-1.5 transition-all duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase font-medium mb-5 pb-2.5 border-b border-[#c9a84c]/15">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                          href={link.href}
                          className="text-[#8a95a3] text-[12.5px] hover:text-[#c9a84c] hover:pl-1.5 transition-all duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="relative border-t border-white/[0.05]">
          <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#4a5568] text-[11px] tracking-[0.06em]">
              &copy; {year} &bull; Luthfi Yazid DHH Law Firm. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                  href="/privacy-policy"
                  className="text-[#4a5568] text-[11px] hover:text-[#c9a84c] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                  href="/terms"
                  className="text-[#4a5568] text-[11px] hover:text-[#c9a84c] transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;