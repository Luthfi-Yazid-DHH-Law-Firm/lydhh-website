"use client";

import { MemberProps } from "@/types/member-type";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface MemberCardProps {
    member: MemberProps;
};

const MemberCard: FC<MemberCardProps> = ({ member }) => {
    const router = useRouter();
  return (
    <div 
        onClick={() => router.push(`/team/${member.slug?.current}`)}
        className="relative w-full h-96 overflow-hidden group cursor-pointer"
    >
        {member?.image ? (
        <Image
          className="w-full h-96 object-cover"
          src={urlFor(member.image)
            .auto("format")
            .url()}
          alt={member.name || ""}
          width="800"
          height="300"
        />
      ) : null}
        
        <div className="absolute inset-x-0 bottom-0 h-0 bg-black/80 group-hover:h-full transition-all duration-500 ease-in-out flex items-center justify-center">
            <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                See Profile
            </span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 text-white group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="text-lg font-bold line-clamp-1">{member?.name}</h3>
            <p className="text-sm opacity-90">{member?.position}</p>
        </div>
    </div>
  );
};

export default MemberCard;