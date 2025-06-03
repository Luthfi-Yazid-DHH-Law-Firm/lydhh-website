"use client";

import { servicesSubMenu } from "@/constants/navbar-submenu";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import FlyOutContent from "@/components/ui/flyout-content";
import HoverLink from "@/components/ui/hover-link";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./sidebar";

const Navbar = () => {
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

    if (latest > prev! && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className={`fixed w-full px-5 py-12 md:px-10 flex items-center justify-center h-[70px] md:h-20 z-50 ${ onTop ? "bg-black/60" : "bg-black" }`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="w-full 2xl:w-[1440px] flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/jilo-logo.png"
            alt="jilo-logo"
            width="400"
            height="60"
            className="h-12 lg:h-14 w-fit object-contain"
          />
        </Link>

        {/* hover link */}
        <div className="lg:flex items-center gap-10 hidden">
          <HoverLink href="/about-us" classname="text-white">
            About
          </HoverLink>
          <HoverLink href="/team" classname="text-white">
            Our Team
          </HoverLink>
          <HoverLink
            href="/our-services"
            FlyOutContent={<FlyOutContent flyOutList={servicesSubMenu} />}
            classname="text-white"
          >
            Services
          </HoverLink>
          <HoverLink href="/articles" classname="text-white">
            Articles
          </HoverLink>
          <HoverLink href="/contact" classname="text-white">
            Contact
          </HoverLink>
          
        </div>

        <Sidebar />
      </div>
    </motion.nav>
  );
};

export default Navbar;
