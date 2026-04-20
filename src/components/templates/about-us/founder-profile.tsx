import FounderProfileAchievementList from "@/components/features/about-us/founder-profile-achievment-list";
import FounderProfileDetail from "@/components/features/about-us/founder-profile-detail";
import FounderProfileImage from "@/components/features/about-us/founder-profile-image";
import { client } from "@/sanity/lib/client";
import { FOUNDER_PROFILE } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const FounderProfile = async () => {
  const founderProfile = await client.fetch(FOUNDER_PROFILE, {}, options);

  return (
      <section className="relative w-full bg-[#f9f7f4] py-20 overflow-x-hidden">
        {/* Top gold divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col gap-16">
          {/* Image + bio row */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
            <FounderProfileImage image={founderProfile?.mainImage} />
            <FounderProfileDetail founder={founderProfile} />
          </div>

          {/* Achievement list — only shown on /our-founder */}
          <FounderProfileAchievementList founder={founderProfile} />
        </div>

        {/* Bottom gold divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </section>
  );
};

export default FounderProfile;