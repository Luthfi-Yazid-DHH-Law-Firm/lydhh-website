"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { FOUNDER_PROFILEResult } from "@/sanity/types";
import { easeIn } from "motion";
import { PortableText } from "next-sanity";
import { FC } from "react";

interface FounderProfileDetailProps {
  founder: FOUNDER_PROFILEResult;
}

const FounderProfileDetail: FC<FounderProfileDetailProps> = ({ founder }) => {
  return (
    <AnimationWrapper
      classname="w-full flex flex-col items-start justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <div>
        <h2 className="text-lg font-semibold text-[#A22C51]">Meet Our Founder</h2>
        <h3 className="text-2xl bg-gradient-to-r from-[#E1BC1C] to-[#a98e16] bg-clip-text text-transparent font-bold">{ founder?.name || "" }</h3>
      </div>
      <div className="prose max-w-full">
        {
          founder?.bio ?
          <PortableText value={founder?.bio} />
          : "No descriptions"
        }
      </div>
    </AnimationWrapper>
  );
};

export default FounderProfileDetail;