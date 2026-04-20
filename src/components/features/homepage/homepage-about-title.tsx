"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { urlFor } from "@/sanity/lib/image";
import { COMPANY_LOGO_QUERYResult } from "@/sanity/types";
import { easeIn } from "motion/react";
import { EB_Garamond } from "next/font/google";
import Image from "next/image";
import { FC } from "react";

const ebGaramond = EB_Garamond({
    weight: ["400", "600"],
    style: ["italic", "normal"],
    subsets: ["latin"],
    preload: false,
});

interface HomepageAboutTitleProps {
    logo: COMPANY_LOGO_QUERYResult;
}

const stats = [
    { num: "20+", label: "Practice Areas" },
    { num: "3",   label: "Core Pillars" },
    { num: "1",   label: "City, Global Reach" },
];

const HomepageAboutTitle: FC<HomepageAboutTitleProps> = ({ logo }) => {
    const logoUrl = logo?.image
        ? urlFor(logo.image).auto("format").url()
        : "/images/jilo-logo-small.png";

    return (
        <AnimationWrapper
            classname="relative flex flex-col justify-center py-16 lg:py-20 lg:pr-14 border-b lg:border-b-0 lg:border-r border-[#c9a84c]/20"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: easeIn }}
        >
            {/* Large ghost "LYDHH" behind content */}
            <span
                className={`${ebGaramond.className} absolute bottom-0 left-0 text-[120px] font-semibold leading-none text-[#c9a84c]/[0.055] select-none pointer-events-none whitespace-nowrap`}
            >
        LYDHH
      </span>

            {/* Eyebrow */}
            <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-5 relative">
                Who We Are
            </p>

            {/* Heading */}
            <h2
                className={`${ebGaramond.className} text-[#0d1117] text-4xl lg:text-5xl font-normal leading-[1.15] mb-8 relative`}
            >
                Who is
                <br />
                <em className="italic text-[#c9a84c]">LYDHH</em>
                <br />
                Law Firm?
            </h2>

            {/* Framed logo */}
            <div className="relative w-36 h-36 border border-[#c9a84c]/20 bg-[#c9a84c]/[0.03] flex items-center justify-center mb-10">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#c9a84c]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#c9a84c]" />

                <Image
                    src={logoUrl}
                    alt="LYDHH Law Firm Logo"
                    width={100}
                    height={100}
                    className="object-contain opacity-20 grayscale"
                />
            </div>

            {/* Stats row */}
            <div className="flex gap-8 relative">
                {stats.map((s) => (
                    <div key={s.label}>
                        <p
                            className={`${ebGaramond.className} text-3xl font-semibold text-[#c9a84c] leading-none`}
                        >
                            {s.num}
                        </p>
                        <p className="text-[#8a8a8a] text-[11px] mt-1 leading-tight">
                            {s.label}
                        </p>
                    </div>
                ))}
            </div>
        </AnimationWrapper>
    );
};

export default HomepageAboutTitle;