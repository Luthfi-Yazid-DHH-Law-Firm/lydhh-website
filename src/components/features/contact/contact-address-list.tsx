"use client";

import { PhoneIcon } from "@/assets/service-icons";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { COMPANY_ADDRESSES_QUERYResult } from "@/sanity/types";
import { EnvelopeIcon } from "@sanity/icons";
import { easeIn } from "motion";
import { FC } from "react";

interface ContactAddressListProps {
  addresses: COMPANY_ADDRESSES_QUERYResult;
}

const ContactAddressList: FC<ContactAddressListProps> = ({ addresses }) => {
  return (
    <AnimationWrapper
      classname="w-full 2xl:w-[1440px] grid grid-cols-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      {!addresses || addresses.length === 0 ? (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500">No addresses available</p>
        </div>
      ) : (
        addresses.map((address, i) => (
          <div className="w-full flex flex-col items-center lg:items-start lg:flex-row px-5 lg:px-8 gap-10" key={i}>
            {/* Map */}
            {address.location?.lat && address.location?.lng ? (
              <iframe
                src={`https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&center=${address.location.lat},${address.location.lng}&zoom=15`}
                width="60%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title={`Map for ${address.name || 'Location'}`}
              />
            ) : (
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg">
                <p className="text-gray-500">Map not available - missing coordinates</p>
              </div>
            )}
            {/* Address Info */}
            <div className="space-y-3 text-center lg:text-start">
              {address.name && (
                <h3 className="text-lg font-semibold text-gray-800">
                  {address.name}
                </h3>
              )}

              {address.phone && (
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#999999]">
                  <PhoneIcon className="w-[18px] h-[18px]" />
                  <p className="text-sm">{address.phone}</p>
                </div>
              )}

              {address.email && (
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#999999]">
                  <EnvelopeIcon className="text-lg font-bold" />
                  <p className="text-sm">{address.email}</p>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </AnimationWrapper>
  );
};

export default ContactAddressList;