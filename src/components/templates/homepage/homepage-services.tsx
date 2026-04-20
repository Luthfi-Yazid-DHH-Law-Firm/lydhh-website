import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import HomepageServicesTitle from "@/components/features/homepage/homepage-services-title";
import NoData from "@/components/features/no-data";
import HomepageServicesGrid from "@/components/features/homepage/homepage-services-grid";

const options = { next: { revalidate: 60 } };

const HomepageService = async () => {
    const services = await client.fetch(SERVICES_QUERY, {}, options);

    return (
        <section className="relative w-full bg-[#0a0c0f] text-white py-20 overflow-x-hidden">
            {/* Subtle radial glow at the bottom */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 70%)",
                }}
            />

            {/* Top gold divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

            <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16">
                <HomepageServicesTitle />

                {services.length === 0 ? (
                    <NoData sectionName="services detail" />
                ) : (
                    <HomepageServicesGrid services={services} />
                )}
            </div>

            {/* Bottom gold divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        </section>
    );
};

export default HomepageService;