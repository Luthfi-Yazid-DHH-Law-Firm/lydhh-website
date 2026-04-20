import HomepageTeamTitle from "@/components/features/homepage/homepage-team-title";
import MemberCarousel from "@/components/features/member-carousel";
import NoData from "@/components/features/no-data";
import { client } from "@/sanity/lib/client";
import { FOUNDER_PROFILE, MEMBERS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const HomepageTeam = async () => {
    const members = await client.fetch(MEMBERS_QUERY, {}, options);
    const founderProfile = await client.fetch(FOUNDER_PROFILE, {}, options);

    return (
        <section className="relative w-full bg-[#f9f7f4] py-20 overflow-hidden">
            {/* Top gold divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

            <div className="w-full 2xl:w-[1440px] mx-auto flex flex-col gap-10 px-8 lg:px-16">
                <HomepageTeamTitle />

                {members.length === 0 ? (
                    <NoData sectionName="member profile" />
                ) : (
                    <MemberCarousel members={members} founder={founderProfile} />
                )}
            </div>

            {/* Bottom gold divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        </section>
    );
};

export default HomepageTeam;