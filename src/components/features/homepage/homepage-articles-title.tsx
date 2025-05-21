"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion";
import { Playfair_Display } from "next/font/google";

const playFairDisplay = Playfair_Display({
  weight: ["700"],
  style: ["italic"],
  subsets: ["latin"],
});

const HomepageArticlesTitle = () => {
  return (
    <>
      <AnimationWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easeIn }}
      >
        <h6 className="text-base font-medium text-[#A22C51]">
          Monthly Articles
        </h6>
      </AnimationWrapper>
      <AnimationWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: easeIn }}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 space-y-4">
          <h3 className="text-3xl font-bold md:pr-[15px]">
            Learn something more from
            <br />
            our latest{" "}
            <span
              className={`italic text-[#E1BC1C] ${playFairDisplay.className}`}
            >
              articles
            </span>
          </h3>
          <p className="md:pl-[15px] text-base text-[#999999]">
            We provide updates on legal developments in Indonesia by way of our
            monthly newsletter “Notes from the Bar” that may be of interest to
            our clientele. Stay tuned on this page for the latest updates from
            us.
          </p>
        </div>
      </AnimationWrapper>
    </>
  );
};

export default HomepageArticlesTitle;
