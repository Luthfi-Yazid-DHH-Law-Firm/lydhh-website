"use client";

import { FOUNDER_PROFILEResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface FounderCardProps {
    founder: FOUNDER_PROFILEResult;
    variant?: "light" | "dark";
}

/**
 * Variant differences:
 *
 * light  — used when the surrounding section has a light background (e.g. f9f7f4).
 *          Card uses a dark info panel (always readable) but gets a slightly
 *          stronger gold border so it stands out against the pale page bg.
 *          A soft box-shadow grounds it on the light surface.
 *
 * dark   — used when the surrounding section has a dark background (e.g. 0a0c0f).
 *          Card blends into the page with a subtle low-opacity border,
 *          no shadow needed since the dark bg provides contrast naturally.
 */
const variants = {
    light: {
        card: "border-[#c9a84c]/25 hover:border-[#c9a84c]/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]",
        infoBg: "bg-[#0d1117]",
        photoFade: "bg-gradient-to-l from-[#0d1117] to-transparent",
        name: "text-white",
        desc: "text-[#8a95a3]",
    },
    dark: {
        card: "border-[#c9a84c]/15 hover:border-[#c9a84c]/40 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
        infoBg: "bg-[#0d1117]",
        photoFade: "bg-gradient-to-l from-[#0d1117] to-transparent",
        name: "text-white",
        desc: "text-[#8a95a3]",
    },
};

const FounderCard: FC<FounderCardProps> = ({ founder, variant = "dark" }) => {
    const router = useRouter();
    const image = founder?.secondImage;
    const name = founder?.name ?? "";

    const v = variants[variant];

    return (
        <div
            onClick={() => router.push("/our-founder")}
            className={`group relative flex h-full min-h-[300px] bg-[#0d1117] border overflow-hidden cursor-pointer transition-all duration-300 ${v.card}`}
        >
            {/* Gold top accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] z-10 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Photo — left 55% */}
            <div className="relative w-[55%] flex-shrink-0 overflow-hidden">
                {image ? (
                    <Image
                        src={urlFor(image).auto("format").url()}
                        alt={name}
                        fill
                        className="object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                    />
                ) : (
                    <Image
                        src="/images/Placeholder_Person.jpg"
                        alt={name}
                        fill
                        className="object-cover object-top"
                    />
                )}
                {/* Right fade into info panel */}
                <div className={`absolute inset-y-0 right-0 w-16 ${v.photoFade}`} />
            </div>

            {/* Info panel */}
            <div className={`relative flex-1 flex flex-col justify-between px-6 py-6 ${v.infoBg}`}>
                {/* Founder badge */}
                <div className="inline-flex self-start items-center border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-3 py-1">
          <span className="text-[#c9a84c] text-[9px] tracking-[0.2em] uppercase font-medium">
            Founder
          </span>
                </div>

                {/* Name + bio */}
                <div className="mt-auto">
                    <p className="text-[#c9a84c] text-[9.5px] tracking-[0.18em] uppercase font-medium mb-2">
                        Managing Partner
                    </p>
                    <h3 className={`text-[17px] font-medium leading-snug mb-3 ${v.name}`}>
                        {name}
                    </h3>
                    <div className="w-7 h-px bg-[#c9a84c]/40 mb-3" />
                    <p className={`text-[12px] leading-relaxed line-clamp-3 ${v.desc}`}>
                        Distinguished legal practitioner with over three decades of
                        experience in corporate, environmental, and dispute resolution law.
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-[#c9a84c] text-[10px] tracking-[0.14em] uppercase border-b border-[#c9a84c]/30 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View Profile →
          </span>
                </div>
            </div>
        </div>
    );
};

export default FounderCard;