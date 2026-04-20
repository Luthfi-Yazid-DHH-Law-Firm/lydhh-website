import ServicesSidebarItems from "@/components/composites/our-services/services-sidebar-items";
import { client } from "@/sanity/lib/client";
import { ALL_SERVICES_QUERY, COMPANY_ADDRESSES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const ServicesSidebar = async () => {
  const services = await client.fetch(ALL_SERVICES_QUERY, {}, options);
  const addresses = await client.fetch(COMPANY_ADDRESSES_QUERY, {}, options);
  const mainAddress = addresses?.[0];

  return (
      <aside className="w-full bg-white border-r border-black/[0.07] flex flex-col gap-8 py-10">
        {/* Practice areas list */}
        <div>
          <p className="text-[#c9a84c] text-[9.5px] tracking-[0.22em] uppercase font-medium px-5 mb-3">
            Practice Areas
          </p>
          <nav className="flex flex-col">
            {services.map((service, i) => (
                <ServicesSidebarItems
                    key={i}
                    label={service.name ?? ""}
                    href={`/practice-areas/${service.slug?.current}`}
                />
            ))}
          </nav>
        </div>

        {/* Contact block */}
        <div className="px-5">
          {/* Block title */}
          <div className="flex items-center gap-2 text-[#0d1117] text-[12px] font-medium mb-4 pb-2 border-b border-[#c9a84c]/15">
            <div className="w-[3px] h-[12px] bg-gradient-to-b from-[#c9a84c] to-[#a98e16] flex-shrink-0" />
            Contact
          </div>

          {/* Address */}
          {mainAddress?.name && (
              <div className="flex items-start gap-2 mb-3">
                <svg
                    className="flex-shrink-0 mt-0.5 text-[#c9a84c]"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
                <p className="text-[#6b7785] text-[11.5px] leading-relaxed">
                  {mainAddress.name}
                </p>
              </div>
          )}

          {/* Email */}
          {mainAddress?.email && (
              <div className="flex items-center gap-2">
                <svg
                    className="flex-shrink-0 text-[#c9a84c]"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p className="text-[#6b7785] text-[11.5px]">{mainAddress.email}</p>
              </div>
          )}
        </div>
      </aside>
  );
};

export default ServicesSidebar;