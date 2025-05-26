import CompanyProfileDetail from "@/components/features/about-us/company-profile-detail";
import CompanyProfileImage from "@/components/features/about-us/company-profile-image";

const CompanyProfile = () => {
  return (
    <section className="w-full flex items-center justify-center py-20 px-8 lg:px-16">
      <div className="w-full 2xl:w-[1440px] grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0">
        <CompanyProfileImage />
        <CompanyProfileDetail />
      </div>
    </section>
  );
};

export default CompanyProfile;
