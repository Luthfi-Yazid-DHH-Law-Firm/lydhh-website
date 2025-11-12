import ServiceCard from "@/components/composites/service-card";
import { client } from "@/sanity/lib/client";
import { ALL_SERVICES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const ServicesList = async () => {
  const services = await client.fetch(ALL_SERVICES_QUERY, {}, options);

  return (
    <section className="w-full flex items-center justify-center py-20 px-8 lg:px-16 text-black">
      <div className="2xl:w-[1440px] w-full">
        {/* Section Header */}
        <div className="mb-16">
          <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-2">
            <div className="text-center">
              <p className="text-xl text-[#E1BC1C] mb-3">Our Practice Areas</p>
              <h2 className="text-3xl font-bold">
                We are here to fight against any
                <br />
                violance with{" "}
                <span className="italic font-semibold bg-linear-to-r from-[#E1BC1C] to-[#a98e16] bg-clip-text text-transparent">
                  experience
                </span>
              </h2>
            </div>
            <div className="h-1 w-12 bg-linear-to-r from-[#E1BC1C] to-[#a98e16] rounded" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} service={service} textColor="text-black"/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
