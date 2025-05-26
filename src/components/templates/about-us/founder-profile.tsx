import FounderProfileDetail from "@/components/features/about-us/founder-profile-detail";
import FounderProfileImage from "@/components/features/about-us/founder-profile-image";

const FounderProfile = () => {
  return (
    <section className="w-full flex items-center justify-center py-20 px-8 lg:px-16">
      <div className="w-full 2xl:w-[1440px] grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0">
        <FounderProfileImage />
        <FounderProfileDetail />
      </div>
    </section>
  );
};

export default FounderProfile;
