import CompanyProfileDetail from "@/components/features/about-us/company-profile-detail";
import CompanyProfileImage from "@/components/features/about-us/company-profile-image";
import { client } from "@/sanity/lib/client";
import { COMPANY_PROFILE_QUERY, COMPANY_ADDRESSES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const CompanyProfile = async () => {
    const [companyProfile, addresses] = await Promise.all([
        client.fetch(COMPANY_PROFILE_QUERY, {}, options),
        client.fetch(COMPANY_ADDRESSES_QUERY, {}, options),
    ]);
    const mainAddress = addresses?.[0];

    return (
        <section className="relative w-full bg-[#f9f7f4] py-20 overflow-x-hidden">
            {/* Top gold divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

            <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <CompanyProfileImage />
                    <CompanyProfileDetail profile={companyProfile} address={mainAddress} />
                </div>
            </div>

            {/* Bottom gold divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        </section>
    );
};

export default CompanyProfile;