"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageType } from "@/types/sanity-image-type";
import { easeIn } from "motion";
import Image from "next/image";
import { FC } from "react";

interface FounderProfileImageProps {
  image: SanityImageType;
}

const FounderProfileImage: FC<FounderProfileImageProps> = ({ image }) => {
  if (!image) return null;

  return (
      <AnimationWrapper
          classname="relative flex-shrink-0 w-full lg:w-[400px]"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeIn }}
      >
        {/* Gold corner brackets */}
        <div className="absolute -top-2.5 -left-2.5 w-12 h-12 border-t border-l border-[#c9a84c]/60 pointer-events-none z-10" />
        <div className="absolute -bottom-2.5 -right-2.5 w-12 h-12 border-b border-r border-[#c9a84c]/60 pointer-events-none z-10" />

        <Image
            src={urlFor(image).auto("format").url()}
            alt="Company Founder"
            width={400}
            height={520}
            className="w-full lg:w-[400px] h-[480px] lg:h-[520px] object-cover object-top"
            style={{ filter: "brightness(0.95) contrast(1.03)" }}
        />
      </AnimationWrapper>
  );
};

export default FounderProfileImage;