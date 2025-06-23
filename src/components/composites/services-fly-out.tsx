"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { SERVICES_QUERYResult } from "@/sanity/types";

const ServicesFlyOut = () => {
  const [services, setServices] = useState<SERVICES_QUERYResult>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const fetchedServices = await client.fetch(SERVICES_QUERY);
        setServices(fetchedServices);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 flex flex-col space-y-3">
        {loading ? (
          <div className="text-sm text-gray-500">Loading services...</div>
        ) : (
          <>
            {services.map((service, i) => (
              <Link
                key={i}
                href={`/our-services/${service.slug?.current}`}
                className="blox text-sm hover:underline border-b border-gray-200 pb-3"
              >
                {service.name}
              </Link>
            ))}
            <Link className="blox text-sm hover:underline" href="/our-services">
              Other Services
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ServicesFlyOut;