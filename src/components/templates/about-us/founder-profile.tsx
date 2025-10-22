import FounderProfileAchievementList from "@/components/features/about-us/founder-profile-achievment-list";
import FounderProfileDetail from "@/components/features/about-us/founder-profile-detail";
import FounderProfileImage from "@/components/features/about-us/founder-profile-image";
import { client } from "@/sanity/lib/client";
import { FOUNDER_PROFILE } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const FounderProfile = async () => {
  const founderProfile = await client.fetch(FOUNDER_PROFILE, {}, options);
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full 2xl:w-[1440px] space-y-4 text-start px-8 lg:px-16">
        <div className="w-full flex flex-col lg:flex-row lg:gap-20">
          <FounderProfileImage image={founderProfile?.mainImage} />
          <FounderProfileDetail founder={founderProfile} />
        </div>
        <FounderProfileAchievementList founder={founderProfile} />
      </div>
    </section>
  );
};

export default FounderProfile;
