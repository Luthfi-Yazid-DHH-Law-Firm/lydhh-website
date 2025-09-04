import FounderProfileDetail from "@/components/features/about-us/founder-profile-detail";
import FounderProfileImage from "@/components/features/about-us/founder-profile-image";
import { client } from "@/sanity/lib/client";
import { FOUNDER_PROFILE } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const FounderProfile = async () => {
  const founderProfile = await client.fetch(FOUNDER_PROFILE, {}, options);
  return (
    <section className="w-full flex items-center justify-center py-20 px-8 lg:px-16">
      <div className="w-full 2xl:w-[1440px] grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0">
        <FounderProfileImage image={founderProfile?.mainImage} />
        <FounderProfileDetail founder={founderProfile} />
      </div>
    </section>
  );
};

export default FounderProfile;
