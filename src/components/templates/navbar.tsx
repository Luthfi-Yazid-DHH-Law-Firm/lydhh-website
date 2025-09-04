"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { FC, useState } from "react";
import HoverLink from "@/components/ui/hover-link";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./sidebar";
import ServicesFlyOut from "@/components/composites/services-fly-out";
import { COMPANY_LOGO_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

interface NavbarProps {
  logo: COMPANY_LOGO_QUERYResult;
}

const Navbar: FC<NavbarProps> = ({ logo }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean>(false);
  const [onTop, setOnTop] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest < 50 || !latest) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }

    if (latest > prev! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className={`fixed w-full px-5 py-10 md:py-12 md:px-10 flex items-center justify-center h-[70px] md:h-20 z-50 transition-colors duration-500 ${onTop ? "bg-white/40" : "bg-white/60"}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="w-full 2xl:w-[1440px] flex items-center justify-between">
        {/* LOGO */}
        {logo?.image ? (
          <Link href="/">
            <Image
              src={urlFor(logo.image).auto("format").url()}
              alt="jilo-logo"
              width="400"
              height="60"
              className="h-10 lg:h-14 w-fit object-contain"
            />
          </Link>
        ) : (
          <Link href="/">
            <Image
              src="/jilo-logo.png"
              alt="jilo-logo"
              width="400"
              height="60"
              className="h-12 lg:h-14 w-fit object-contain"
            />
          </Link>
        )}

        {/* hover link */}
        <div className="lg:flex items-center gap-10 hidden">
          <HoverLink href="/about-us" classname="text-black">
            About
          </HoverLink>
          <HoverLink href="/our-founder" classname="text-black">
            Our Founder
          </HoverLink>
          <HoverLink href="/team" classname="text-black">
            Our Team
          </HoverLink>
          <HoverLink
            href="/practice-areas"
            FlyOutContent={<ServicesFlyOut />}
            classname="text-black"
          >
            Practice Areas
          </HoverLink>
          <HoverLink href="/articles" classname="text-black">
            Articles
          </HoverLink>
          <HoverLink href="/contact" classname="text-black">
            Contact
          </HoverLink>
        </div>

        <Sidebar />
      </div>
    </motion.nav>
  );
};

export default Navbar;
