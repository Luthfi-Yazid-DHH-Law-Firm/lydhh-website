"use client";

import { easeIn } from "motion/react";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";

const ContactAddressTitle = () => {
  return (
    <AnimationWrapper
        classname="w-full h-full flex flex-col items-center justify-center relative gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easeIn }}
    >
      <h2 className="text-3xl text-[#E1BC1C] font-bold">Our Address</h2>
      <h4 className="text-xl font-medium text-[#A22C51]">Get in touch with us</h4>
    </AnimationWrapper>
  );
};

export default ContactAddressTitle;
