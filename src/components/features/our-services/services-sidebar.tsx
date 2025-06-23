import { PhoneIcon } from "@/assets/service-icons";
import ServicesSidebarItems from "@/components/composites/our-services/services-sidebar-items";
import { client } from "@/sanity/lib/client";
import { ALL_SERVICES_QUERY } from "@/sanity/lib/queries";
import { EnvelopeIcon, MarkerIcon } from "@sanity/icons";

const options = { next: { revalidate: 60 } };

const ServicesSidebar = async () => {
  const services = await client.fetch(ALL_SERVICES_QUERY, {}, options);
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
            <MarkerIcon className="text-lg font-bold" />
            <p className="max-w-3xs">
              GKM Green Tower Floor 20 Jl. TB Simatupang Kav. 89-G, Jakarta
              Selatan (12520) - INDONESIA
            </p>
          </div>
          <div className="flex items-start gap-2 text-[#999999]">
            <MarkerIcon className="text-lg font-bold" />
            <p className="max-w-3xs">
              Jl. Waru Nomor 8-A, RT. 09, RW. 03, Gedong, Pasar Rebo, Jakarta
              Timur (13760) - INDONESIA
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#999999]">
          <PhoneIcon className="w-[18px] h-[18px]" />
          <p className="max-w-2xs">+62 21 2949 0519</p>
        </div>
        <div className="flex items-center gap-2 text-[#999999]">
          <PhoneIcon className="w-[18px] h-[18px]" />
          <p className="max-w-2xs">+62 8778 6151</p>
        </div>
        <div className="flex items-center gap-2 text-[#999999]">
          <EnvelopeIcon className="text-lg font-bold" />
          <p className="max-w-2xs">info@jilolaw.com</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSidebar;
