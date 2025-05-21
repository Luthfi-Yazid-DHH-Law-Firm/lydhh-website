"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion";
import { Playfair_Display } from "next/font/google";

const playFairDisplay = Playfair_Display({
  weight: ["700"],
  style: ["italic"],
  subsets: ["latin"],
});

const HomepageTeamTitle = () => {
  return (
    <>
      <AnimationWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easeIn }}
      >
        <h6 className="text-base font-medium text-[#A22C51]">Meet Our Team</h6>
      </AnimationWrapper>
      <AnimationWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: easeIn }}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 space-y-4">
          <h3 className="text-3xl font-bold md:pr-[15px]">
            You will introduce with our
            <br />
            expert team{" "}
            <span
              className={`italic text-[#E1BC1C] ${playFairDisplay.className}`}
            >
              member
            </span>
          </h3>
          <p className="md:pl-[15px] text-base text-[#999999]">
            We believe that as a boutique practice, we are better placed to
            respond quickly to our clients&apos; needs and to provide bespoke
            service to our clients. We pride ourselves on not just being our
            clients&apos; lawyers.
          </p>
        </div>
      </AnimationWrapper>
    </>
  );
};

export default HomepageTeamTitle;
