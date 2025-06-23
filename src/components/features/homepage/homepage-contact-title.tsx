"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion";
import { Playfair_Display } from "next/font/google";

const playFairDisplay = Playfair_Display({
  weight: ["700"],
  style: ["italic"],
  subsets: ["latin"],
  preload: false,
});

const HomepageContactTitle = () => {
  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <div className="w-full text-center flex flex-col items-center justify-center">
        <h6 className="text-base font-medium text-[#E1BC1C] mb-4">
          Contact Us
        </h6>
        <h3 className="mb-2 text-3xl font-medium">
          Feel free to ask something <br /> We are{" "}
          <span
            className={`${playFairDisplay.className} bg-linear-to-r from-[#E1BC1C] to-[#a98e16] bg-clip-text text-transparent`}
          >
            here
          </span>
        </h3>
        <div className="h-1 w-12 bg-linear-to-r from-[#E1BC1C] to-[#a98e16] rounded" />
      </div>
    </AnimationWrapper>
  );
};

export default HomepageContactTitle;
