"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion/react";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  weight: ["600"],
  style: ["italic"],
  subsets: ["latin"],
  preload: false,
});

const ContactAddressTitle = () => {
  return (
      <AnimationWrapper
          classname="w-full flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeIn }}
      >
        <p className="text-[#E1BC1C] text-xs tracking-[0.24em] uppercase font-medium mb-3">
          Find Us
        </p>
        <h2 className="text-black text-3xl lg:text-4xl font-light mb-3">
          Our{" "}
          <span className={`${ebGaramond.className} italic text-[#E1BC1C]`}>
          Address
        </span>
        </h2>
        <div className="w-11 h-0.5 bg-gradient-to-r from-[#E1BC1C] to-[#a98e16] rounded" />
      </AnimationWrapper>
  );
};

export default ContactAddressTitle;