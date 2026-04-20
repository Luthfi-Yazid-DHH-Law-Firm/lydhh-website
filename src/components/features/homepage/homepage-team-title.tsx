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

const HomepageTeamTitle = () => {
  return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        {/* Left: eyebrow + heading */}
        <AnimationWrapper
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeIn }}
        >
          <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-4">
            Meet Our Team
          </p>
          <h2 className="text-[#0d1117] text-3xl lg:text-4xl font-light leading-snug">
            You will introduce with our
            <br />
            expert team{" "}
            <span className={`${ebGaramond.className} italic text-[#c9a84c]`}>
            member
          </span>
          </h2>
        </AnimationWrapper>

        {/* Right: description */}
        <AnimationWrapper
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeIn }}
        >
          <p className="text-[#8a8a8a] text-sm leading-relaxed">
            We believe that as a boutique practice, we are better placed to
            respond quickly to our clients&apos; needs and to provide bespoke
            service to our clients. We pride ourselves on not just being our
            clients&apos; lawyers.
          </p>
        </AnimationWrapper>
      </div>
  );
};

export default HomepageTeamTitle;