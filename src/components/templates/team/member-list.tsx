import { client } from "@/sanity/lib/client";
import {
  FOUNDER_PROFILE,
  MEMBERS_NO_FOUNDER_QUERY,
} from "@/sanity/lib/queries";
import { MemberProps } from "@/types/member-type";
import { EB_Garamond } from "next/font/google";
import FounderCard from "@/components/composites/founder-card";
import MemberCard from "@/components/composites/member-card";

const ebGaramond = EB_Garamond({
  weight: ["600"],
  style: ["italic"],
  subsets: ["latin"],
  preload: false,
});

const options = { next: { revalidate: 60 } };

const MemberList = async () => {
  const members = await client.fetch(MEMBERS_NO_FOUNDER_QUERY, {}, options);
  const founderProfile = await client.fetch(FOUNDER_PROFILE, {}, options);

  return (
      <section className="relative w-full bg-[#0a0c0f] py-20 overflow-x-hidden">
        {/* Top gold divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16">
          {/* ── Header ── */}
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-4">
              Meet Our Team
            </p>
            <h2 className="text-white text-3xl lg:text-4xl font-light mb-3">
              You will introduce with our expert team{" "}
              <span className={`${ebGaramond.className} italic text-[#c9a84c]`}>
              members
            </span>
            </h2>
            <div className="w-11 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] rounded mx-auto" />
          </div>

          {/* ── Grid ── */}
          {/*
          Layout: 4-column grid
          - Founder card spans 2 columns (horizontal split: photo left, info right)
          - Members fill the remaining cells in a uniform 4-col grid
          - The founder card + 2 members = first row of 4 cols
        */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Featured founder card — 2 cols wide */}
            <div className="lg:col-span-2">
              <FounderCard founder={founderProfile} />
            </div>

            {/* First 2 members fill the remaining cols in row 1 */}
            {members.slice(0, 2).map((member: MemberProps, i: number) => (
                <MemberCard key={`top-${i}`} member={member} variant="dark" />
            ))}

            {/* Remaining members — all 4 cols from row 2 onward */}
            {members.slice(2).map((member: MemberProps, i: number) => (
                <MemberCard key={`rest-${i}`} member={member} variant="dark" />
            ))}
          </div>
        </div>

        {/* Bottom gold divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </section>
  );
};

export default MemberList;