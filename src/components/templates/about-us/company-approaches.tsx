import CompanyApproachesList from "@/components/features/about-us/company-approaches-list";
import CompanyApproachesTitle from "@/components/features/about-us/company-approaches-title";
import { client } from "@/sanity/lib/client";
import { COMPANY_VALUES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const CompanyApproaches = async () => {
    const values = await client.fetch(COMPANY_VALUES_QUERY, {}, options);

    return (
        <section className="relative w-full flex items-center justify-center py-20 px-8 lg:px-16 bg-black text-white overflow-hidden">
            {/* Subtle radial glow at top center */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(225,188,28,0.07) 0%, transparent 70%)",
                }}
            />

            <div className="relative w-full 2xl:w-[1440px] flex flex-col items-center justify-center gap-14">
                <CompanyApproachesTitle />
                <CompanyApproachesList values={values} />
            </div>
        </section>
    );
};

export default CompanyApproaches;