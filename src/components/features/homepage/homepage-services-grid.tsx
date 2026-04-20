import ServiceCard from "@/components/composites/service-card";
import { SERVICES_QUERYResult } from "@/sanity/types";
import { FC } from "react";

interface HomepageServicesGridProps {
  services: SERVICES_QUERYResult;
}

const HomepageServicesGrid: FC<HomepageServicesGridProps> = ({ services }) => {
  return (
      /*
       * Seamless grid: 1px gap on a gold-tinted background creates shared borders
       * between cards without each card needing its own border — cleaner at scale.
       */
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#c9a84c]/10 border border-[#c9a84c]/10">
        {services.map((service, index) => (
            <ServiceCard key={index} index={index} service={service} variant="dark" />
        ))}
      </div>
  );
};

export default HomepageServicesGrid;