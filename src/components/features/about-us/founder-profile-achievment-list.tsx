"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { FOUNDER_PROFILEResult } from "@/sanity/types";
import { easeIn } from "motion";
import { PortableText } from "next-sanity";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface FounderProfileAchievementListProps {
  founder: FOUNDER_PROFILEResult;
}

// Custom components to style the Sanity PortableText achievement content
const achievementComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-[#5a5a5a] text-[12.5px] leading-relaxed mb-1.5">
          {children}
        </p>
    ),
    h1: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="text-[#0d1117] text-[13px] font-medium mt-12 first:mt-0 mb-4 pb-2 border-b border-[#c9a84c]/20 flex items-center gap-2 before:content-[''] before:block before:w-[3px] before:h-[14px] before:bg-gradient-to-b before:from-[#c9a84c] before:to-[#a98e16] before:flex-shrink-0">
          {children}
        </h4>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="text-[#0d1117] text-[13px] font-medium mt-12 first:mt-0 mb-4 pb-2 border-b border-[#c9a84c]/20 flex items-center gap-2 before:content-[''] before:block before:w-[3px] before:h-[14px] before:bg-gradient-to-b before:from-[#c9a84c] before:to-[#a98e16] before:flex-shrink-0">
          {children}
        </h4>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="text-[#0d1117] text-[13px] font-medium mt-12 first:mt-0 mb-4 pb-2 border-b border-[#c9a84c]/20 flex items-center gap-2 before:content-[''] before:block before:w-[3px] before:h-[14px] before:bg-gradient-to-b before:from-[#c9a84c] before:to-[#a98e16] before:flex-shrink-0">
          {children}
        </h4>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
        <ul className="space-y-2.5 mb-4">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
        <ol className="space-y-2.5 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
        <li className="flex items-baseline gap-2.5 text-[#5a5a5a] text-[12.5px] leading-relaxed">
          <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#c9a84c] opacity-70 mt-[7px]" />
          <span>{children}</span>
        </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
        <li className="flex items-baseline gap-2.5 text-[#5a5a5a] text-[12.5px] leading-relaxed">
          <span>{children}</span>
        </li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className="text-[#0d1117] font-medium">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
        <em className="text-[#5a5a5a] italic">{children}</em>
    ),
  },
};

const FounderProfileAchievementList: FC<FounderProfileAchievementListProps> = ({
                                                                                 founder,
                                                                               }) => {
  const pathname = usePathname();
  const isFounderPage = pathname.includes("/our-founder");

  if (!isFounderPage) return null;

  return (
      <AnimationWrapper
          classname="w-full"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeIn, delay: 0.2 }}
      >
        {/* Section divider */}
        <div className="w-full h-px bg-black/[0.08] mb-12" />

        {/* Header */}
        <div className="mb-10">
          <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-2">
            Career & Achievement
          </p>
          <h3 className="text-[#0d1117] text-2xl font-light">
            Professional Background
          </h3>
        </div>

        {/* Achievement content from Sanity */}
        {founder?.description ? (
            <div className="columns-1 lg:columns-2 gap-x-16 [column-rule:1px_solid_rgba(0,0,0,0.06)]">
              <PortableText
                  value={founder.description}
                  components={achievementComponents as never}
              />
            </div>
        ) : (
            <p className="text-[#8a8a8a] text-sm">No achievements listed.</p>
        )}
      </AnimationWrapper>
  );
};

export default FounderProfileAchievementList;