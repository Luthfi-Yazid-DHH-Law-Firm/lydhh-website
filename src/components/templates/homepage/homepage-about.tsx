import HomepageAboutTitle from "@/components/features/homepage/homepage-about-title";
import HomepageAboutDetail from "@/components/features/homepage/homepage-about-detail";
import { client } from "@/sanity/lib/client";
import { COMPANY_LOGO_QUERY, COMPANY_PROFILE_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const HomepageAbout = async () => {
  const logo = await client.fetch(COMPANY_LOGO_QUERY, {slug: "small-logo"}, options);
  const companyProfile = await client.fetch(COMPANY_PROFILE_QUERY, {}, options);
  return (
    <section
      className="w-full flex items-center justify-center py-20 px-8 lg:px-16"
    >
      <div className="w-full 2xl:w-[1440px] lg:h-80 grid grid-cols-1 lg:grid-cols-2 relative">
        <HomepageAboutTitle logo={logo} />
        <HomepageAboutDetail profile={companyProfile} />
      </div>
    </section>
  );
};

export default HomepageAbout;
