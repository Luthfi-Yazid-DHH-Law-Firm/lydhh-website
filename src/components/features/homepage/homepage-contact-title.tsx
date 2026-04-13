"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  weight: ["600"],
  style: ["italic"],
  subsets: ["latin"],
  preload: false,
});

const HomepageContactTitle = () => {
  return (
      <AnimationWrapper
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeIn }}
      >
        <div className="flex flex-col">
          <p className="text-[#E1BC1C] text-xs tracking-[0.24em] uppercase font-medium mb-5">
            Contact Us
          </p>
          <h2 className="text-white text-3xl lg:text-4xl font-light leading-snug mb-4">
            Feel free to ask something.
            <br />
            We are{" "}
            <span className={`${ebGaramond.className} italic text-[#E1BC1C]`}>
            here.
          </span>
          </h2>
          <div className="w-9 h-0.5 bg-gradient-to-r from-[#E1BC1C] to-[#a98e16] rounded mb-7" />
          <p className="text-white/55 text-sm leading-relaxed max-w-xs">
            Our team of experienced legal professionals is ready to discuss your
            needs and provide the guidance you require.
          </p>
        </div>
      </AnimationWrapper>
  );
};

export default HomepageContactTitle;