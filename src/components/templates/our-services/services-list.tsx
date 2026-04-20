import ServiceCard from "@/components/composites/service-card";
import { client } from "@/sanity/lib/client";
import { ALL_SERVICES_QUERY } from "@/sanity/lib/queries";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  weight: ["600"],
  style: ["italic"],
  subsets: ["latin"],
  preload: false,
});

const options = { next: { revalidate: 60 } };

const ServicesList = async () => {
  const services = await client.fetch(ALL_SERVICES_QUERY, {}, options);

  return (
      <section className="relative w-full bg-[#f9f7f4] py-20 overflow-x-hidden">
        {/* Top gold divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-4">
              Our Practice Areas
            </p>
            <h2 className="text-[#0d1117] text-3xl lg:text-4xl font-light mb-3">
              We are here to fight against any violence with{" "}
              <span className={`${ebGaramond.className} italic text-[#c9a84c]`}>
              experience
            </span>
            </h2>
            <div className="w-11 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] rounded mx-auto" />
          </div>

          {/* Services grid — light variant, shared borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#c9a84c]/10 border border-[#c9a84c]/10">
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    index={index}
                    service={service}
                />
            ))}
          </div>
        </div>

        {/* Bottom gold divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </section>
  );
};

export default ServicesList;