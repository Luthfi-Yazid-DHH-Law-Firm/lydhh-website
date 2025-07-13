"use client";

import ValueCard from "@/components/composites/value-card";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { COMPANY_VALUES_QUERYResult } from "@/sanity/types";
import { easeIn } from "motion";
import { PortableText } from "next-sanity";
import { FC } from "react";

interface CompanyApproachesListProps {
  values: COMPANY_VALUES_QUERYResult;
};

const CompanyApproachesList: FC<CompanyApproachesListProps> = ({ values }) => {
  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
        {values.map((item, i) => (
          <ValueCard
            key={i}
            className="w-full flex flex-col items-center justify-center border border-dashed border-[#E1BC1C]"
            index={i}
          >
            <div className="w-full text-center text-base">
                <h5 className="text-xl font-semibold mb-2 text-[#E1BC1C]">{item.value}</h5>
                {
                  item.description ?
                  <PortableText value={item.description}/>
                  : "No description"
                }
            </div>
          </ValueCard>
        ))}
      </div>
    </AnimationWrapper>
  );
};

export default CompanyApproachesList;
