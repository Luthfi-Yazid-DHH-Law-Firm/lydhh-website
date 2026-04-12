import { MEMBER_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import { FC } from "react";

interface MemberBioProps {
  member: MEMBER_QUERYResult
}

const MemberBio: FC<MemberBioProps> = ({ member }) => {
  return (
    <div className="prose">
      {
        member?.biography ?
        <PortableText value={member.biography} />
        : <p>No Biodata Provided</p>
      }
    </div>
  );
};

export default MemberBio;
