"use client";

import { usePathname } from "next/navigation";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { capitalizeWords } from "@/lib/capitalizeFirstLetter";
import { EB_Garamond } from "next/font/google";
import { motion } from "motion/react";

const ebGaramond = EB_Garamond({
    weight: ["400"],
    style: ["italic"],
    subsets: ["latin"],
    preload: false,
});

const HeroSmall = () => {
    const path = usePathname();
    const pathSegments = path.split("/").filter((segment) => segment !== "");

    const breadcrumbItems: BreadcrumbItem[] = pathSegments.map(
        (segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            const isCurrentPage = index === pathSegments.length - 1;
            const label = capitalizeWords(segment.split("-").join(" "));
            return {
                label,
                href: isCurrentPage ? undefined : href,
            };
        }
    );

    // Article sub-pages show "Articles" as the title
    const isArticlePage = pathSegments[0] === "articles";

    const currentPageTitle = isArticlePage
        ? "Articles"
        : pathSegments.length > 0
            ? capitalizeWords(pathSegments[pathSegments.length - 1].split("-").join(" "))
            : "Home";

    return (
        <div
            className="relative w-full h-72 lg:h-80 flex flex-col items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url(/images/company-profile.webp)",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0a0c0f]/70" />

            {/* Left directional darkening */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0f]/60 via-transparent to-[#0a0c0f]/40" />

            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0f]/50 to-transparent" />

            {/* Gold top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center">
                {/* Eyebrow line + label */}
                <motion.div
                    className="flex items-center gap-2.5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                >
                    <div className="w-6 h-px bg-[#c9a84c]/70" />
                    <span className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase font-medium">
            Luthfi Yazid DHH Law Firm
          </span>
                    <div className="w-6 h-px bg-[#c9a84c]/70" />
                </motion.div>

                {/* Page title */}
                <motion.h1
                    className="text-white font-light leading-tight"
                    style={{ fontSize: "clamp(28px, 5vw, 44px)" }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    {currentPageTitle.split(" ").map((word, i, arr) =>
                            i === arr.length - 1 ? (
                                <span key={i}>
                {arr.length > 1 ? " " : ""}
                                    <span className={`${ebGaramond.className} italic text-[#c9a84c]`}>
                  {word}
                </span>
              </span>
                            ) : (
                                <span key={i}>{i > 0 ? " " : ""}{word}</span>
                            )
                    )}
                </motion.h1>

                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <Breadcrumb
                        items={breadcrumbItems}
                        maxItems={3}
                        className="[&_a]:text-white/50 [&_a]:hover:text-[#c9a84c] [&_a]:transition-colors [&_a]:text-[12px] [&_a]:tracking-[0.06em] [&_span]:text-[#c9a84c]/60 [&_li:last-child_span]:text-[#c9a84c] [&_li:last-child_span]:text-[12px]"
                    />
                </motion.div>
            </div>

            {/* Bottom gold divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        </div>
    );
};

export default HeroSmall;