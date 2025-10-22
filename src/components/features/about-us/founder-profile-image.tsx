"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import Image from "next/image";
import { easeIn } from "motion";
import { FC } from "react";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageType } from "@/types/sanity-image-type";

interface FounderProfileImageProps {
  image: SanityImageType;
}

const FounderProfileImage: FC<FounderProfileImageProps> = ({ image }) => {
  return (
    <AnimationWrapper 
        classname="w-full lg:w-fit flex items-start md:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easeIn }}
    >
      {
        image ?
        <Image
          src={urlFor(image)
            .auto("format")
            .url()
          }
          alt="Company Founder Image"
          width={398}
          height={597}
          className="w-[600px] object-cover rounded-md"
        />
        : null
      }
    </AnimationWrapper>
  );
};

export default FounderProfileImage;
