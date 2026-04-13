"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: ["700"],
  style: ["italic"],
  subsets: ["latin"],
  preload: false,
});

const CompanyApproachesTitle = () => {
  return (
      <AnimationWrapper
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeIn }}
      >
        <div className="w-full text-center flex flex-col items-center justify-center">
          <p className="text-[#E1BC1C] text-xs tracking-[0.24em] uppercase font-medium mb-4">
            Our Approaches
          </p>
          <h3 className="text-white text-3xl lg:text-4xl font-light mb-3 leading-tight">
            Why people choose{" "}
            <span
                className={`${playfairDisplay.className} bg-gradient-to-r from-[#E1BC1C] to-[#a98e16] bg-clip-text text-transparent`}
            >
            Us
          </span>
          </h3>
          <div className="h-[3px] w-11 rounded bg-gradient-to-r from-[#E1BC1C] to-[#a98e16]" />
        </div>
      </AnimationWrapper>
  );
};

export default CompanyApproachesTitle;