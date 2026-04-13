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
  if (!addresses || addresses.length === 0) {
    return (
        <div className="w-full text-center py-12">
          <p className="text-gray-500">No addresses available</p>
        </div>
    );
  }

  return (
      <AnimationWrapper
          classname="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeIn, delay: 0.15 }}
      >
        {addresses.map((address, i) => (
            <div
                key={i}
                className="w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] min-h-[420px]"
            >
              {/* ── Map ── */}
              <div className="relative overflow-hidden min-h-[300px] lg:min-h-full">
                {address.location?.lat && address.location?.lng ? (
                    <iframe
                        src={`https://www.google.com/maps?q=${address.location.lat},${address.location.lng}&z=15&output=embed`}
                        className="w-full h-full min-h-[300px] lg:min-h-full border-0"
                        style={{ filter: "grayscale(20%) contrast(1.05)" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map for ${address.name ?? "Location"}`}
                    />
                ) : (
                    <div className="w-full h-full min-h-[300px] bg-[#0d1117] flex items-center justify-center">
                      <p className="text-[#6b7785] text-sm">Map not available</p>
                    </div>
                )}

                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E1BC1C] via-[#a98e16] to-transparent" />
                {/* Fade into info panel */}
                <div className="absolute top-0 right-0 bottom-0 w-14 bg-gradient-to-l from-[#0a0c0f] to-transparent hidden lg:block" />
              </div>

              {/* ── Info panel ── */}
              <div className="relative bg-[#0d1117] border-t lg:border-t-0 lg:border-l border-[#E1BC1C]/15 px-9 py-10 flex flex-col justify-center">
                {/* Left gold accent bar */}
                <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#E1BC1C]/50 to-transparent hidden lg:block" />

                {/* Label */}
                <p className="text-[#E1BC1C] text-[10px] tracking-[0.2em] uppercase font-medium mb-3">
                  Office Location
                </p>

                {/* Address name */}
                {address.name && (
                    <h3 className="text-white text-base font-medium leading-relaxed mb-7">
                      {address.name}
                    </h3>
                )}

                {/* Divider */}
                <div className="h-px bg-white/[0.06] mb-7" />

                {/* Contact items */}
                <div className="space-y-5">
                  {address.phone && (
                      <div className="flex items-center gap-3.5">
                        <div className="w-[34px] h-[34px] flex-shrink-0 border border-[#E1BC1C]/30 bg-[#E1BC1C]/[0.06] flex items-center justify-center">
                          <PhoneIcon className="w-[14px] h-[14px] text-[#E1BC1C]" />
                        </div>
                        <div>
                          <p className="text-[#6b7785] text-[10px] tracking-[0.12em] uppercase mb-0.5">
                            Phone
                          </p>
                          <p className="text-[#c8d0da] text-sm">{address.phone}</p>
                        </div>
                      </div>
                  )}

                  {address.email && (
                      <div className="flex items-center gap-3.5">
                        <div className="w-[34px] h-[34px] flex-shrink-0 border border-[#E1BC1C]/30 bg-[#E1BC1C]/[0.06] flex items-center justify-center">
                          <EnvelopeIcon className="text-[#E1BC1C] text-base" />
                        </div>
                        <div>
                          <p className="text-[#6b7785] text-[10px] tracking-[0.12em] uppercase mb-0.5">
                            Email
                          </p>
                          <p className="text-[#c8d0da] text-sm">{address.email}</p>
                        </div>
                      </div>
                  )}
                </div>

                {/* Directions button */}
                {address.location?.lat && address.location?.lng && (
                    <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${address.location.lat},${address.location.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-9 inline-flex items-center gap-2.5 border border-[#E1BC1C]/35 bg-[#E1BC1C]/[0.04] hover:bg-[#E1BC1C]/10 text-[#E1BC1C] text-[11px] tracking-[0.14em] uppercase px-5 py-2.5 transition-colors duration-200 self-start"
                    >
                      <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                      >
                        <polygon points="3 11 22 2 13 21 11 13 3 11" />
                      </svg>
                      Get Directions
                    </a>
                )}
              </div>
            </div>
        ))}
      </AnimationWrapper>
  );
};

export default ContactAddressList;