"use client";

import { easeIn } from "motion/react";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { COMPANY_LOGO_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image"; // Import urlFor function
import { FC } from "react";

interface HomepageAboutTitleProps {
  logo: COMPANY_LOGO_QUERYResult;
}

const HomepageAboutTitle: FC<HomepageAboutTitleProps> = ({ logo }) => {
  // Generate the image URL
  const backgroundImageUrl = logo?.image 
    ? urlFor(logo.image).auto("format").url()
    : "/jilo-logo-small.png";

  return (
    <AnimationWrapper
      classname="w-full h-80 flex items-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <div
        className="absolute inset-0 grayscale opacity-30"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "60% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      />
      <h5 className="text-4xl font-semibold relative z-10">Who is LYDHH Law Firm?</h5>
    </AnimationWrapper>
  );
};

export default HomepageAboutTitle;