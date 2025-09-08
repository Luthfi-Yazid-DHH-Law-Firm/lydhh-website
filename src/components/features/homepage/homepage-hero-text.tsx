"use client";

import { Playfair_Display } from "next/font/google";
import { easeIn, motion } from "motion/react";
import Link from "next/link";

const playFair = Playfair_Display({
  weight: ["700"],
  style: "italic",
  preload: false
});

const HomepageHeroText = () => {
  return (
    <div className="w-full justify-center bg-black/50 items-center lg:items-start text-center lg:text-left absolute inset-0 text-white flex flex-col h-full z-20 px-8 gap-4 xl:pl-64 lg:px-16">
      <motion.p
        className="text-lg font-medium text-white/90 lg:text-xl mb-2"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeIn }}
      >
        Luthfi Yazid & DHH Law Firm
      </motion.p>
      <motion.h1
        className="text-4xl lg:text-7xl font-bold max-w-2xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeIn, delay: 0.2 }}
      >
        Your challenges,{" "}
        <span className={`${playFair.className}  text-[#d4bf58]`}>
          Our commitment
        </span>
      </motion.h1>
      <motion.p
        className="text-lg max-w-2xl mt-4 font-light"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeIn, delay: 0.4 }}
      >
        Tailored legal solutions through collaborative teamwork and clear
        communication
      </motion.p>
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeIn, delay: 0.6 }}
      >
        <Link
          href="/contact"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4bf58] to-[#997D03] text-white font-medium"
        >
          Schedule an appointment
        </Link>
      </motion.div>
    </div>
  );
};

export default HomepageHeroText;
