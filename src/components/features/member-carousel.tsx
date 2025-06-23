"use client"

import Carousel from "@/components/composites/carousel";
import MemberCard from "@/components/composites/member-card";
import { MEMBERS_QUERYResult } from "@/sanity/types";

export default function MemberCarousel({
  members
}: {
  members: MEMBERS_QUERYResult
}) {
  
  return (
    <Carousel 
      viewAllHref="/team"
      slideClassName="flex-[0_0_75%] md:flex-[0_0_33.333%] lg:flex-[0_0_20%] min-w-0 pl-4"
    >
      {
        members.map((member, index) => (
          <MemberCard key={index} member={member}/>
        ))
      }
    </Carousel>
  );
};
