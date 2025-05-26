"use client";

import { easeIn } from "motion";
import AnimationWrapper from "../../wrappers/animation-wrapper";
import LinkButton from "@/components/ui/link";

const HomepageAboutDetail = () => {
  return (
    <AnimationWrapper
      classname="w-full lg:border-l border-gray-400 py-10 lg:pl-[60px] flex flex-col gap-4 justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <h6 className="text-2xl font-semibold text-[#A22C51]">Welcome to JILO</h6>
      <p>
        We are Jakarta International Law Office (JILO), a modern commercial law
        firm based in Jakarta, dedicated to providing globally minded,
        client-focused legal solutions. Formed by visionary legal professionals,
        we aim to support international and local businesses with high-quality,
        practical services in today&apos;s evolving legal and commercial
        landscape.
      </p>
      <LinkButton href="/about-us">LEARN MORE</LinkButton>
    </AnimationWrapper>
  );
};

export default HomepageAboutDetail;
