"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { FOUNDER_PROFILEResult } from "@/sanity/types";
import { easeIn } from "motion";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface FounderProfileDetailProps {
  founder: FOUNDER_PROFILEResult;
}

const FounderProfileDetail: FC<FounderProfileDetailProps> = ({ founder }) => {
  const pathname = usePathname();
  return (
    <AnimationWrapper
      classname="w-full flex flex-col items-start justify-start gap-4 mt-10 lg:mt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <div>
        <h2 className="text-lg font-semibold text-[#A22C51]">Meet Our Founder</h2>
        <h3 className="text-2xl bg-linear-to-r from-[#E1BC1C] to-[#a98e16] bg-clip-text text-transparent font-bold">{ founder?.name || "" }</h3>
      </div>
      <div className="prose max-w-full">
        {
          founder?.summary ?
          <PortableText value={founder?.summary} />
          : "No descriptions"
        }
        { pathname.includes("/our-founder") ? null : (
        <Link href="/our-founder" className="no-underline">
          <p className="text-base mt-2 bg-linear-to-r from-[#E1BC1C] to-[#a98e16] bg-clip-text text-transparent font-bold">Read more about our founder</p>
        </Link>
        )}
      </div>
    </AnimationWrapper>
  );
};

export default FounderProfileDetail;