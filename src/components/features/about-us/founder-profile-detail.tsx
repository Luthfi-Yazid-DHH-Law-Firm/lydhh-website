"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { FOUNDER_PROFILEResult } from "@/sanity/types";
import { easeIn } from "motion";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface FounderProfileDetailProps {
  founder: FOUNDER_PROFILEResult;
}

// Custom PortableText components to match the light theme
const bioComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-[#4a4a4a] text-sm leading-[1.85] mb-5 last:mb-0">
          {children}
        </p>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className="text-[#0d1117] font-medium">{children}</strong>
    ),
  },
};

const FounderProfileDetail: FC<FounderProfileDetailProps> = ({ founder }) => {
  const pathname = usePathname();
  const isFounderPage = pathname.includes("/our-founder");

  return (
      <AnimationWrapper
          classname="w-full flex flex-col items-start justify-start gap-0"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeIn, delay: 0.1 }}
      >
        {/* Eyebrow */}
        <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-3">
          Meet Our Founder
        </p>

        {/* Name */}
        <h2 className="text-[#0d1117] text-3xl lg:text-4xl font-light leading-snug mb-3">
          {founder?.name ?? ""}
        </h2>

        {/* Gold rule */}
        <div className="w-11 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] rounded mb-8" />

        {/* Bio from Sanity PortableText */}
        <div className="w-full">
          {founder?.summary ? (
              <PortableText
                  value={founder.summary}
                  components={bioComponents as never}
              />
          ) : (
              <p className="text-[#4a4a4a] text-sm leading-relaxed">
                No description available.
              </p>
          )}
        </div>

        {/* Read more link — hidden on /our-founder page */}
        {!isFounderPage && (
            <Link
                href="/our-founder"
                className="inline-flex items-center gap-2 mt-8 text-[#c9a84c] text-[11px] tracking-[0.14em] uppercase border-b border-[#c9a84c]/40 pb-0.5 hover:border-[#c9a84c] transition-colors duration-200"
            >
              Read more about our founder
              <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
        )}
      </AnimationWrapper>
  );
};

export default FounderProfileDetail;