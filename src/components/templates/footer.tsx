"use client";

import Image from "next/image";
import {SERVICES_QUERYResult} from "@/sanity/types";
import {FC} from "react";

interface FooterProps {
  menuServicesList: SERVICES_QUERYResult;
}

const Footer: FC<FooterProps> = ({menuServicesList}) => {
  const footerSections = [
    {
      title: "Area of Practices",
      href: "/area-of-practices",
      links: [
        ...(menuServicesList?.map((service) => ({
          label: service.name ?? "Untitled",
          href: `/practice-areas/${service?.slug?.current}`,
        })) ?? []),
        { label: "More Practice Areas", href: "/practice-areas" },
      ],
    },
    {
      title: "Our Team",
      href: "/our-teams",
      links: [
        { label: "Meet our Founder", href: "/our-teams/founder" },
        { label: "Our Member", href: "/our-teams" },
      ],
    },
  ];

  const quickLinks = [
    { title: "About Us", href: "/about" },
    { title: "Articles", href: "/articles" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
      <footer className="bg-gray-100 py-12 lg:py-16 border-t border-black">
        <div className="container mx-auto w-full px-4 lg:px-24">
          {/* Desktop Layout - Logo and Quick Links */}
          <div className="hidden md:flex justify-between mb-12">
            {/* Logo Column */}
            <div className="lg:col-span-1">
              <div className="text-4xl font-bold mb-4 text-red-600">
                <Image src={`/images/LYDHH-Logo_Light.webp`} alt={"LYDHH"} width={400} height={80} className="w-80 object-contain" />
              </div>
              <p className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} • Luthfi Yazid DHH Law Firm
              </p>
            </div>

            {/* Sections with Links */}
            {footerSections.map((section, index) => (
                <div key={index} className="lg:col-span-1">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                    {section.title}
                  </h3>
                  {section.links.length > 0 && (
                      <ul className="space-y-3">
                        {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a
                                  href={link.href}
                                  className="text-sm text-gray-600 hover:text-red-600 transition-colors"
                              >
                                {link.label}
                              </a>
                            </li>
                        ))}
                      </ul>
                  )}
                </div>
            ))}

            {/* Quick Links Column (sections without sub-links) */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-red-600 transition-colors"
                      >
                        {link.title}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Layout - Logo at top */}
          <div className="md:hidden mb-8 text-center">
            <Image src={`/images/LYDHH-Logo_Light.webp`} alt={"LYDHH"} width={400} height={80} className="h-10 object-contain" />
          </div>

          {/* Copyright and Social Icons - Mobile */}
          <div className="md:hidden text-center mb-8">
            <p className="text-sm text-gray-600 mb-6">
              &copy; {new Date().getFullYear()} • Luthfi Yazid DHH Law Firm
            </p>
          </div>

          {/* Bottom Disclaimer Text */}
          <div className="text-left pt-8 border-t border-gray-300">
            <p className="text-xs text-gray-500 leading-relaxed">
              &copy; {new Date().getFullYear()} • Luthfi Yazid DHH Law Firm
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;