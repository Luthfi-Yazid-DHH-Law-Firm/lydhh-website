import HomepageAboutTitle from "@/components/features/homepage/homepage-about-title";
import HomepageAboutDetail from "@/components/features/homepage/homepage-about-detail";
import { client } from "@/sanity/lib/client";
import { COMPANY_LOGO_QUERY, COMPANY_PROFILE_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const HomepageAbout = async () => {
  const logo = await client.fetch(COMPANY_LOGO_QUERY, { slug: "small-logo" }, options);
  const companyProfile = await client.fetch(COMPANY_PROFILE_QUERY, {}, options);

  return (
      <section className="relative w-full bg-[#f9f7f4] overflow-hidden">
        {/* Top gold divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
            <HomepageAboutTitle logo={logo} />
            <HomepageAboutDetail profile={companyProfile} />
          </div>
        </div>

        {/* Bottom gold divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </section>
  );
};

export default HomepageAbout;