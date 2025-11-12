import ServicesSidebarItems from "@/components/composites/our-services/services-sidebar-items";
import { client } from "@/sanity/lib/client";
import { ALL_SERVICES_QUERY, COMPANY_ADDRESSES_QUERY } from "@/sanity/lib/queries";
import { EnvelopeIcon, MarkerIcon } from "@sanity/icons";

const options = { next: { revalidate: 60 } };

const ServicesSidebar = async () => {
  const services = await client.fetch(ALL_SERVICES_QUERY, {}, options);
  const addresses = await client.fetch(COMPANY_ADDRESSES_QUERY, {}, options);
    const mainAddress = addresses[0];
  return (
    <div className="w-full px-3 space-y-8">
      <div className="w-full flex flex-col gap-2">
        {services.map((service, i) => (
          <ServicesSidebarItems
            key={i}
            label={service.name || ""}
            href={service.slug?.current || ""}
          />
        ))}
      </div>
      <div className="w-full flex flex-col gap-5">
        <h3 className="font-medium text-2xl">Contact</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-2 text-[#999999]">
            <MarkerIcon className="w-[18px] h-[18px] font-bold" />
            <p className="w-3xs">
              {mainAddress.name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#999999]">
          <EnvelopeIcon className="text-lg font-bold" />
          <p className="w-3xs">info@lydhhlawfirm.com</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSidebar;
