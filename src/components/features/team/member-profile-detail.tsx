import MemberBio from "@/components/composites/team/member-bio";
import MemberProfileImage from "@/components/composites/team/member-profile-image";
import { MEMBER_QUERYResult } from "@/sanity/types";
import React, { FC } from "react";

interface MemberProfileDetailProps {
  member: MEMBER_QUERYResult;
}

const MemberProfileDetail: FC<MemberProfileDetailProps> = ({ member }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 2xl:gap-20">
      <MemberProfileImage
        image={member?.image}
        name={member?.name}
        position={member?.position}
      />
      <MemberBio member={member} />
    </div>
  );
};

export default MemberProfileDetail;
