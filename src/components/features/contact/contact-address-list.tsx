"use client";

import { PhoneIcon } from "@/assets/service-icons";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { EnvelopeIcon, MarkerIcon } from "@sanity/icons";
import { easeIn } from "motion";

const ContactAddressList = () => {
  return (
    <AnimationWrapper
      classname="w-full 2xl:w-[1440px] grid grid-cols-1 lg:grid-cols-2 relative px-8 lg:px-16 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <div className="w-full lg:px-8 space-y-5">
        <div className="flex items-start lg:items-center gap-2 text-[#999999]">
          <MarkerIcon className="text-lg font-bold" />
          <p className="max-w-2xs xl:max-w-lg">
            GKM Green Tower Floor 20 Jl. TB Simatupang Kav. 89-G, Jakarta
            Selatan (12520) - INDONESIA
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7045493097075!2d106.83410317499107!3d-6.302496493686701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1563912fed9%3A0xf4fa5584742669b6!2sJakarta%20International%20Law%20Office%20(JILO)!5e0!3m2!1sen!2sid!4v1750754510406!5m2!1sen!2sid"
          loading="lazy"
          className="w-full h-80"
        />
      </div>
      <div className="w-full lg:px-8 space-y-5">
        <div className="flex items-start lg:items-center gap-2 text-[#999999]">
          <MarkerIcon className="text-lg font-bold" />
          <p className="max-w-2xs xl:max-w-lg">
            Jl. Waru Nomor 8-A, RT. 09, RW. 03, Gedong, Pasar Rebo, Jakarta
            Timur (13760) - INDONESIA
          </p>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.4865985113928!2d106.85828933789823!3d-6.293263566134743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f30068af2779%3A0x145806c6fd3d2f03!2sDPP%20DePA-RI%20Dewan%20Pimpinan%20Pusat!5e0!3m2!1sen!2sid!4v1750757564919!5m2!1sen!2sid" 
          className="w-full h-80"
        />
      </div>
      <div className="w-full lg:col-span-2 flex flex-col md:flex-row items-center justify-center gap-4">
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
      </div>
    </AnimationWrapper>
  );
};

export default ContactAddressList;
