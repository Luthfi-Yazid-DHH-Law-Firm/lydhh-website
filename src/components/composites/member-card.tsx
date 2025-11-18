"use client";

import { MemberProps } from "@/types/member-type";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { FOUNDER_PROFILEResult } from "@/sanity/types";

interface MemberCardProps {
  member?: MemberProps;
  founder?: FOUNDER_PROFILEResult;
}

const MemberCard: FC<MemberCardProps> = ({ member, founder }) => {
  const router = useRouter();
  const image = member?.image ?? founder?.mainImage;
  const altText = member?.name ?? founder?.name ?? "";
  const memberRoute = member ? `/team/${member?.slug?.current}` : "/our-founder";

  return (
    <div
      onClick={() => router.push(memberRoute)}
      className="relative w-full h-96 overflow-hidden group cursor-pointer"
    >
      {image ? (
        <Image
          className="w-full h-96 object-cover"
          src={urlFor(image).auto("format").url()}
          alt={altText}
          width={800}
          height={300}
        />
      ) : (
        <Image
          className="w-full h-96 object-cover"
          src="/images/Placeholder_Person.jpg"
          alt={altText}
          width={800}
          height={300}
        />
      )}

      <div className="absolute inset-x-0 bottom-0 h-0 bg-black/80 group-hover:h-full transition-all duration-500 ease-in-out flex items-center justify-center">
        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
          See Profile
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 text-white group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-lg font-bold line-clamp-1">{member?.name || founder?.name}</h3>
        <p className="text-sm opacity-90">{member?.position || "Founder"}</p>
      </div>
    </div>
  );
};

export default MemberCard;
