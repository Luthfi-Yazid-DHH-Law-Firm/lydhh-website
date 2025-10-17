"use client";

import { easeIn } from "motion";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import LinkButton from "@/components/ui/link";
import { COMPANY_PROFILE_QUERYResult } from "@/sanity/types";
import { FC } from "react";
import { PortableText } from "next-sanity";

interface HomepageAboutDetailProps {
  profile: COMPANY_PROFILE_QUERYResult;
}

const HomepageAboutDetail: FC<HomepageAboutDetailProps> = ({ profile }) => {
  return (
    <AnimationWrapper
      classname="w-full lg:border-l border-gray-400 py-10 lg:pl-[60px] flex flex-col gap-4 justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <h6 className="text-2xl font-semibold text-[#A22C51]">
        {profile?.title || "Welcome to LYDHH Law Firm"}
      </h6>
      {profile?.summary ? (
        <PortableText value={profile.summary} />
      ) : (
        <p>
          We are Luthfi Yazid  DHH (LYDHH) Law Firm, a modern commercial
          law firm based in Jakarta, dedicated to providing globally minded,
          client-focused legal solutions. Formed by visionary legal
          professionals, we aim to support international and local businesses
          with high-quality, practical services in today&apos;s evolving legal
          and commercial landscape.
        </p>
      )}
      <LinkButton href="/about-us">LEARN MORE</LinkButton>
    </AnimationWrapper>
  );
};

export default HomepageAboutDetail;
