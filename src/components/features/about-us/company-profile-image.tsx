"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion";
import Image from "next/image";

const CompanyProfileImage = () => {
  return (
      <AnimationWrapper
          classname="relative w-full flex items-center justify-center lg:justify-start"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeIn }}
      >
        {/* Gold corner brackets */}
        <div className="absolute -top-2.5 -left-2.5 w-11 h-11 border-t border-l border-[#c9a84c]/60 pointer-events-none z-10" />
        <div className="absolute -bottom-2.5 -right-2.5 w-11 h-11 border-b border-r border-[#c9a84c]/60 pointer-events-none z-10" />

        <Image
            src="/images/company-profile.webp"
            alt="Company Profile"
            width={420}
            height={520}
            className="w-full lg:w-[420px] h-[480px] lg:h-[520px] object-cover"
            style={{ filter: "brightness(0.95) contrast(1.02)" }}
        />
      </AnimationWrapper>
  );
};

export default CompanyProfileImage;