import MemberCard from "@/components/composites/member-card";
import { client } from "@/sanity/lib/client";
import { MEMBERS_NO_FOUNDER_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const MemberList = async () => {
  const members = await client.fetch(MEMBERS_NO_FOUNDER_QUERY, {}, options );
  return (
    <section className="w-full flex items-center justify-center py-20 px-8 lg:px-16 bg-black text-white">
      <div className="2xl:w-[1440px] w-full">
        <div className="mb-16">
          <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-2">
            <div className="text-center">
              <p className="text-xl text-[#E1BC1C] mb-3">Meet Our Team</p>
              <h2 className="text-3xl font-bold">
                You will introduce with our
                expert team{" "}
                <br />
                <span className="italic font-semibold bg-linear-to-r from-[#E1BC1C] to-[#a98e16] bg-clip-text text-transparent">
                  member
                </span>
              </h2>
            </div>
            <div className="h-1 w-12 bg-linear-to-r from-[#E1BC1C] to-[#a98e16] rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                members.map((member, i) => (
                    <MemberCard key={i} member={member}/>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default MemberList;
