"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { COMPANY_ADDRESSES_QUERYResult, COMPANY_PROFILE_QUERYResult } from "@/sanity/types";
import { easeIn } from "motion";
import { PortableText } from "next-sanity";
import React, { FC } from "react";

interface CompanyProfileDetailProps {
  profile: COMPANY_PROFILE_QUERYResult;
  address?: COMPANY_ADDRESSES_QUERYResult[number] | null;
}

// Styled PortableText for the company description
const descComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-[#4a4a4a] text-sm leading-[1.85] mb-4 last:mb-0">
          {children}
        </p>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className="text-[#0d1117] font-medium">{children}</strong>
    ),
  },
};

// Contact icon box component
const ContactItem = ({
                       icon,
                       label,
                       value,
                     }: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) => (
    <div className="flex items-start gap-3">
      <div className="w-[30px] h-[30px] flex-shrink-0 border border-[#c9a84c]/30 bg-[#c9a84c]/[0.05] flex items-center justify-center mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-[#c9a84c] text-[9.5px] tracking-[0.16em] uppercase font-medium mb-1">
          {label}
        </p>
        <p className="text-[#4a4a4a] text-[13px] leading-relaxed">{value}</p>
      </div>
    </div>
);

const CompanyProfileDetail: FC<CompanyProfileDetailProps> = ({ profile, address }) => {
  return (
      <AnimationWrapper
          classname="w-full flex flex-col items-start justify-center gap-0"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeIn, delay: 0.1 }}
      >
        {/* Eyebrow */}
        <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-3">
          About Us
        </p>

        {/* Title */}
        <h2 className="text-[#0d1117] text-2xl lg:text-3xl font-light leading-snug mb-3">
          {profile?.title ?? "About Luthfi Yazid DHH Law Firm"}
        </h2>

        {/* Gold rule */}
        <div className="w-9 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] rounded mb-6" />

        {/* Description from Sanity */}
        <div className="w-full">
          {profile?.description ? (
              <PortableText
                  value={profile.description}
                  components={descComponents as never}
              />
          ) : (
              <p className="text-[#4a4a4a] text-sm leading-[1.85]">
                Sorry, we are currently updating our company profile description.
              </p>
          )}
        </div>

        {/* Contact strip */}
        {address && (
            <div className="w-full mt-8 pt-7 border-t border-black/[0.08] flex flex-col gap-4">
              {address.name && (
                  <ContactItem
                      label="Office"
                      value={address.name}
                      icon={
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      }
                  />
              )}
              {address.phone && (
                  <ContactItem
                      label="Phone"
                      value={address.phone}
                      icon={
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.85-.85a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      }
                  />
              )}
              {address.email && (
                  <ContactItem
                      label="Email"
                      value={address.email}
                      icon={
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      }
                  />
              )}
            </div>
        )}
      </AnimationWrapper>
  );
};

export default CompanyProfileDetail;