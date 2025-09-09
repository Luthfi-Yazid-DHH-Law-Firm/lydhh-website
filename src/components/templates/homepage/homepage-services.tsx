import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import HomepageServicesTitle from "@/components/features/homepage/homepage-services-title";
import NoData from "@/components/features/no-data";
import HomepageServicesGrid from "@/components/features/homepage/homepage-services-grid";

const options = { next: { revalidate: 60 } };

const HomepageService = async () => {
  const services = await client.fetch(SERVICES_QUERY, {}, options );

  return (
    <section
      className="w-full flex items-center justify-center py-20 px-8 lg:px-16 bg-[#5E0302]/85 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url(/images/bg-parallax1-1.webp)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="2xl:w-[1440px] w-full">
        <HomepageServicesTitle />

        {/* Services Grid */}
        {
          services.length === 0 ?
            <NoData sectionName="services detail" />
            : <HomepageServicesGrid services={services} />
        }
      </div>
    </section>
  );
};

export default HomepageService;