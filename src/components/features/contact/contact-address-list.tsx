"use client";

import { PhoneIcon } from "@/assets/service-icons";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { EnvelopeIcon, MarkerIcon } from "@sanity/icons";
import { easeIn } from "motion";

const ContactAddressList = () => {
  return (
    <AnimationWrapper
      classname="w-full lg:border-l border-gray-400 py-10 lg:pl-[60px] flex flex-col gap-4 justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <h6 className="text-2xl font-semibold text-[#A22C51]">
        Get in touch with us
      </h6>
      <div className="flex items-start lg:items-center gap-2 text-[#999999]">
        <MarkerIcon className="text-lg font-bold" />
        <p className="max-w-2xs">
          GKM Green Tower Floor 20 Jl. TB Simatupang Kav. 89-G, Jakarta Selatan
          (12520) - INDONESIA
        </p>
      </div>
      <div className="flex items-start lg:items-center gap-2 text-[#999999]">
        <MarkerIcon className="text-lg font-bold" />
        <p className="max-w-2xs">
          Jl. Waru Nomor 8-A, RT. 09, RW. 03, Gedong, Pasar Rebo, Jakarta Timur
          (13760) - INDONESIA
        </p>
      </div>
      <div className="flex items-center gap-2 text-[#999999]">
        <PhoneIcon className="w-[18px] h-[18px]" />
        <p className="max-w-2xs">+62 21 2949 0519</p>
      </div>
      <div className="flex items-center gap-2 text-[#999999]">
        <PhoneIcon className="w-[18px] h-[18px]" />
        <p className="max-w-2xs">+62 8778 6151</p>
      </div>
      <div className="flex items-center gap-2 text-[#999999]">
        <EnvelopeIcon className="text-lg font-bold" />
        <p className="max-w-2xs">info@jilolaw.com</p>
      </div>
    </AnimationWrapper>
  );
};

export default ContactAddressList;
