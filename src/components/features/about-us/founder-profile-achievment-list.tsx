"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { FOUNDER_PROFILEResult } from "@/sanity/types";
import { easeIn } from "motion";
import { PortableText } from "next-sanity";
import { FC } from "react";

interface FounderProfileAchievementListProps {
  founder: FOUNDER_PROFILEResult;
}

const FounderProfileAchievementList: FC<FounderProfileAchievementListProps> = ({
  founder,
}) => {
  return (
    <AnimationWrapper
      classname="w-full flex flex-col items-start justify-center gap-4 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <h2 className="text-lg font-semibold text-[#A22C51]">
        Career and Achievement
      </h2>
      <div className="prose max-w-full">
        {founder?.description ? (
          <PortableText value={founder?.description} />
        ) : (
          "No descriptions"
        )}
      </div>
    </AnimationWrapper>
  );
};

export default FounderProfileAchievementList;
