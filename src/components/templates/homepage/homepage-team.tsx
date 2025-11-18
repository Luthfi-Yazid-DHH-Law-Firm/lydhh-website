import HomepageTeamTitle from "@/components/features/homepage/homepage-team-title";
import MemberCarousel from "@/components/features/member-carousel";
import NoData from "@/components/features/no-data";
import { client } from "@/sanity/lib/client";
import { FOUNDER_PROFILE, MEMBERS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const HomepageTeam = async () => {
  const members = await client.fetch(MEMBERS_QUERY, {}, options );
  const founderProfile = await client.fetch(FOUNDER_PROFILE, {}, options);
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full 2xl:w-[1440px] space-y-4 text-start px-8 lg:px-16">
        <HomepageTeamTitle />
        {
          members.length === 0 ?
            <NoData sectionName="member profile" />
            : <MemberCarousel members={members} founder={founderProfile} />
        }
      </div>
    </section>
  );
};

export default HomepageTeam;
