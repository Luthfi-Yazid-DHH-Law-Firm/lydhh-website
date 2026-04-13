"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { COMPANY_VALUES_QUERYResult } from "@/sanity/types";
import { easeIn } from "motion";
import { Playfair_Display } from "next/font/google";
import { PortableText } from "next-sanity";
import { FC } from "react";

const playfairDisplay = Playfair_Display({
  weight: ["700"],
  style: ["italic"],
  subsets: ["latin"],
  preload: false,
});

interface CompanyApproachesListProps {
  values: COMPANY_VALUES_QUERYResult;
}

const CompanyApproachesList: FC<CompanyApproachesListProps> = ({ values }) => {
  return (
      <AnimationWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeIn, delay: 0.15 }}
      >
        {/* Outer border wraps the whole grid so cells share edges cleanly */}
        <div className="border border-[#E1BC1C]/15 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, i) => {
              const isLastRow = i >= values.length - (values.length % 3 || 3);
              const isLastCol = (i + 1) % 3 === 0;

              return (
                  <div
                      key={i}
                      className={[
                        "group relative px-7 py-9 overflow-hidden transition-colors duration-300",
                        "hover:bg-[#E1BC1C]/[0.04]",
                        // Right border on all except last column
                        !isLastCol ? "border-r border-[#E1BC1C]/15" : "",
                        // Bottom border on all except last row
                        !isLastRow ? "border-b border-[#E1BC1C]/15" : "",
                      ].join(" ")}
                  >
                    {/* Hover gradient wash */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E1BC1C]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Index + title row */}
                    <div className="flex items-start gap-3 mb-3 relative">
                      {/* Ghost italic number */}
                      <span
                          className={`${playfairDisplay.className} text-4xl leading-none text-[#E1BC1C]/20 flex-shrink-0 mt-0.5 select-none`}
                      >
                    {i + 1}
                  </span>
                      <h5 className="text-[#E1BC1C] text-sm font-medium leading-snug pt-1.5">
                        {item.value}
                      </h5>
                    </div>

                    {/* Description — indented to align under title */}
                    <div className="pl-10 text-[#8a95a3] text-[13px] leading-relaxed relative">
                      {item.description ? (
                          <PortableText value={item.description} />
                      ) : (
                          "No description"
                      )}
                    </div>

                    {/* Corner accent dot */}
                    <div className="absolute bottom-3.5 right-4 w-1.5 h-1.5 rounded-full bg-[#E1BC1C]/20 group-hover:bg-[#E1BC1C]/50 transition-colors duration-300" />
                  </div>
              );
            })}
          </div>
        </div>
      </AnimationWrapper>
  );
};

export default CompanyApproachesList;