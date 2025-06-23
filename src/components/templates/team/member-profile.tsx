import MemberProfileDetail from "@/components/features/team/member-profile-detail";
import MemberProfileTitle from "@/components/features/team/member-profile-title";
import { MEMBER_QUERYResult } from "@/sanity/types";
import { FC } from "react";

interface MemberProfileProps {
  member: MEMBER_QUERYResult;
}

const MemberProfile: FC<MemberProfileProps> = ({ member }) => {
  return (
    <section className="w-full flex items-center justify-center px-8 lg:px-16 py-20">
      <div className="w-full 2xl:w-[1440px] flex flex-col items-center gap-10 justify-center">
        <MemberProfileTitle />
        <MemberProfileDetail member={member} />
      </div>
    </section>
  );
};

export default MemberProfile;
