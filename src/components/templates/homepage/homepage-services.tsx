import { BookOpenIcon, BriefcaseIcon, DocumentTextIcon, GunIcon, HomeIcon, ScaleIcon } from "@/assets/service-icons";
import LinkButton from "@/components/ui/link";
import ServiceCard from "@/components/features/homepage/home-service-card";
import { ArrowRightIcon } from "@sanity/icons";

const HomepageService = () => {
  const services = [
    { title: 'Family Law', icon: BriefcaseIcon },
    { title: 'Civil Law', icon: ScaleIcon },
    { title: 'Criminal Law', icon: GunIcon },
    { title: 'Business Law', icon: DocumentTextIcon },
    { title: 'Education Law', icon: BookOpenIcon },
    { title: 'Real Estate law', icon: HomeIcon },
  ];

  return (
    <section
      className="w-full flex items-center justify-center py-20 px-8 lg:px-16 bg-black/85 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url(/bg-parallax1-1.webp)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="2xl:w-[1440px] w-full">
        {/* Section Header */}
        <div className="mb-16">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-2">
            <div className="text-start">
              <p className="text-lg text-[#E1BC1C] mb-3">Our Practice Areas</p>
              <h2 className="text-2xl font-bold">
                We are here to fight against any<br />
                violance with <span className="text-[#E1BC1C] italic font-normal">experience</span>
              </h2>
            </div>
            <div className="w-1/2 h-[1px] hidden lg:block bg-[#E1BC1C]" />
            <LinkButton href="/" underline={false} className="border p-3 text-white hover:text-[#E1BC1C] transition-colors duration-300">
              Explore All
            </LinkButton>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              href="/"
            >
              <div className="w-full flex items-center justify-between">
                <p className="text-lg font-semibold">{service.title}</p>
                <ArrowRightIcon className="text-xl font-semibold"/>
              </div>
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageService;