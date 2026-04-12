"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion";
import {COMPANY_PROFILE_QUERYResult} from "@/sanity/types";
import {FC} from "react";
import {PortableText} from "next-sanity";

interface CompanyProfileDetailProps {
  profile: COMPANY_PROFILE_QUERYResult;
}

const CompanyProfileDetail: FC<CompanyProfileDetailProps> = ({ profile }) => {
  return (
    <AnimationWrapper 
        classname="w-full flex flex-col items-start justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easeIn }}
    >
      <h2 className="text-2xl font-semibold text-[#A22C51]">About Luthfi Yazid DHH Law Firm</h2>
      <div className="prose">
        {
          profile?.description ?
              <PortableText value={profile.description} />
              : <p>Sorry, we currently edit our company profile description to make you more interested to us</p>
        }
      </div>
    </AnimationWrapper>
  );
};

export default CompanyProfileDetail;
