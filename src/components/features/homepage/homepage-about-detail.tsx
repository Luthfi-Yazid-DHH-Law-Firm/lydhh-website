"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { COMPANY_PROFILE_QUERYResult } from "@/sanity/types";
import { easeIn } from "motion";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React, { FC } from "react";

interface HomepageAboutDetailProps {
  profile: COMPANY_PROFILE_QUERYResult;
}

// Styled PortableText components for the summary block
const summaryComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-[#4a4a4a] text-sm leading-[1.85] mb-4 last:mb-0">
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

const pillars = [
  "Collaborative Teamwork",
  "Clear Communication",
  "Professional Integrity",
];

const HomepageAboutDetail: FC<HomepageAboutDetailProps> = ({ profile }) => {
  return (
      <AnimationWrapper
          classname="flex flex-col justify-center gap-7 py-16 lg:py-20 lg:pl-14"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeIn, delay: 0.15 }}
      >
        {/* Label + title */}
        <div>
          <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-3">
            Welcome
          </p>
          <h3 className="text-[#0d1117] text-2xl font-light leading-snug">
            {profile?.title ?? "Welcome to LYDHH Law Firm"}
          </h3>
        </div>

        {/* Gold rule */}
        <div className="w-9 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] rounded -mt-3" />

        {/* Summary from Sanity */}
        <div>
          {profile?.summary ? (
              <PortableText
                  value={profile.summary}
                  components={summaryComponents as never}
              />
          ) : (
              <p className="text-[#4a4a4a] text-sm leading-[1.85]">
                We are <strong className="text-[#0d1117] font-medium">Luthfi Yazid DHH Law Firm</strong>, a
                modern commercial law firm based in Jakarta, dedicated to providing
                globally minded, client-focused legal solutions. Formed by visionary
                legal professionals, we aim to support international and local
                businesses with high-quality, practical services in today&apos;s
                evolving legal and commercial landscape.
              </p>
          )}
        </div>

        {/* Pillar tags */}
        <div className="flex flex-wrap gap-2">
          {pillars.map((p) => (
              <span
                  key={p}
                  className="text-[10.5px] text-[#6b7280] border border-black/10 bg-white px-3 py-1"
              >
            {p}
          </span>
          ))}
        </div>

        {/* CTA */}
        <Link
            href="/about-us"
            className="inline-flex items-center gap-2 self-start border border-[#c9a84c]/35 bg-[#c9a84c]/[0.05] hover:bg-[#c9a84c]/12 hover:border-[#c9a84c]/60 text-[#c9a84c] text-[11px] tracking-[0.18em] uppercase px-5 py-3 transition-all duration-200"
        >
          Learn More
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
      </AnimationWrapper>
  );
};

export default HomepageAboutDetail;