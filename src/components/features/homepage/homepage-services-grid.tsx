import ServiceCard from "@/components/composites/service-card";
import { SERVICES_QUERYResult } from "@/sanity/types";
import { FC } from "react";

interface HomepageServicesGridProps {
  services: SERVICES_QUERYResult;
}

const HomepageServicesGrid: FC<HomepageServicesGridProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service, index) => (
        <ServiceCard key={index} index={index} service={service} />
      ))}
    </div>
  );
};

export default HomepageServicesGrid;
