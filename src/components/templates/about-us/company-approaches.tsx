import CompanyApproachesList from "@/components/features/about-us/company-approaches-list";
import CompanyApproachesTitle from "@/components/features/about-us/company-approaches-title";
import { client } from "@/sanity/lib/client";
import { COMPANY_VALUES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const CompanyApproaches = async () => {
  const values = await client.fetch(COMPANY_VALUES_QUERY, {}, options);
  return (
    <section className="w-full flex items-center justify-center py-20 px-8 lg:px-16 bg-black text-white">
        <div className="w-full 2xl:w-[1440px] flex flex-col items-center justify-center gap-12">
            <CompanyApproachesTitle />
            <CompanyApproachesList values={values} />
        </div>
    </section>
  );
};

export default CompanyApproaches;