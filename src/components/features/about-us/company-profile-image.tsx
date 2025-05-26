"use client";

import { easeIn } from "motion";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import Image from "next/image";

const CompanyProfileImage = () => {
  return (
    <AnimationWrapper 
        classname="w-full flex items-start justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easeIn }}
    >
      <Image
        src="/company-profile.webp"
        alt="Company Profile Image"
        width={398}
        height={597}
        className="w-96 h-[597px] object-cover rounded-md"
      />
    </AnimationWrapper>
  );
};

export default CompanyProfileImage;
