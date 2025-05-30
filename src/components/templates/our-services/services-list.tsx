import {
  BookOpenIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  GunIcon,
  HomeIcon,
  ScaleIcon,
} from "@/assets/service-icons";
import ServiceCard from "@/components/composites/image-card";
import { ArrowRightIcon } from "@sanity/icons";

const ServicesList = () => {
  const services = [
    { title: "Family Law", icon: BriefcaseIcon },
    { title: "Civil Law", icon: ScaleIcon },
    { title: "Criminal Law", icon: GunIcon },
    { title: "Business Law", icon: DocumentTextIcon },
    { title: "Education Law", icon: BookOpenIcon },
    { title: "Real Estate law", icon: HomeIcon },
  ];

  return (
    <section className="w-full flex items-center justify-center py-20 px-8 lg:px-16 bg-[#f4f4f4] bg-cover bg-center bg-no-repeat text-black">
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
            <ServiceCard key={index} index={index} href="/">
              <div className="w-full flex items-center justify-between text-black">
                <p className="text-lg font-semibold">{service.title}</p>
                <ArrowRightIcon className="text-xl font-semibold" />
              </div>
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
