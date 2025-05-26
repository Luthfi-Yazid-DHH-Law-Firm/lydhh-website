"use client";

import { easeIn } from "motion/react";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";

const ContactAddressTitle = () => {
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
          backgroundImage: "url(/jilo-logo-small.png)",
          backgroundSize: "60% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      />
      <h5 className="text-4xl font-semibold relative z-10">Our Addresses</h5>
    </AnimationWrapper>
  );
};

export default ContactAddressTitle;
