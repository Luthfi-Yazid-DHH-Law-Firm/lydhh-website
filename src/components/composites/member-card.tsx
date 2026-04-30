"use client";

import { MemberProps } from "@/types/member-type";
import { urlFor } from "@/sanity/lib/image";
import { FOUNDER_PROFILEResult } from "@/sanity/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface MemberCardProps {
  member?: MemberProps;
  founder?: FOUNDER_PROFILEResult;
  variant?: "light" | "dark";
}

const variants = {
  light: {
    card: "bg-white border-black/[0.07] hover:border-[#c9a84c]/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
    name: "text-[#0d1117]",
    fade: null,
  },
  dark: {
    card: "bg-[#0d1117] border-white/[0.06] hover:border-[#c9a84c]/30 hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]",
    name: "text-white",
    fade: "absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0d1117] to-transparent",
  },
};

const MemberCard: FC<MemberCardProps> = ({
                                           member,
                                           founder,
                                           variant = "light",
                                         }) => {
  const router = useRouter();
  const image = member?.image ?? founder?.secondImage;
  const altText = member?.name ?? founder?.name ?? "";
  const name = member?.name ?? founder?.name ?? "";
  const position = member?.position ?? "Founder/Managing Partner";
  const memberRoute = member
      ? `/team/${member?.slug?.current}`
      : "/our-founder";

  const v = variants[variant];

  return (
      <div
          onClick={() => router.push(memberRoute)}
          className={`group relative border overflow-hidden cursor-pointer transition-all duration-300 ${v.card}`}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          {/* Gold top accent on hover */}
          <div className="absolute top-0 left-0 right-0 h-[2px] z-10 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {image ? (
              <Image
                  className="w-full h-80 object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                  src={urlFor(image).auto("format").url()}
                  alt={altText}
                  width={400}
                  height={320}
              />
          ) : (
              <Image
                  className="w-full h-80 object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                  src="/images/Placeholder_Person.jpg"
                  alt={altText}
                  width={400}
                  height={320}
              />
          )}

          {/* Bottom fade — dark variant only */}
          {v.fade && <div className={v.fade} />}
        </div>

        {/* Info */}
        <div className="px-4 pt-3.5 pb-4">
          <p className="text-[#c9a84c] text-[9.5px] tracking-[0.18em] uppercase font-medium mb-1.5">
            {position}
          </p>
          <h3 className={`text-[13.5px] font-medium leading-snug line-clamp-2 ${v.name}`}>
            {name}
          </h3>
          {/* CTA — slides in on hover */}
          <span className="inline-flex items-center gap-1.5 mt-2.5 text-[#c9a84c] text-[10px] tracking-[0.12em] uppercase opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[250ms]">
          View Profile
          <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
        </div>
      </div>
  );
};

export default MemberCard;