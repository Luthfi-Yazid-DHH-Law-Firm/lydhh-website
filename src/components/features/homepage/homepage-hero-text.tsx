"use client";

import { EB_Garamond } from "next/font/google";
import { easeOut, motion } from "motion/react";
import Link from "next/link";

const ebGaramond = EB_Garamond({
    weight: ["500"],
    style: ["italic"],
    subsets: ["latin"],
    preload: false,
});

// Shared animation factory
const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: easeOut, delay },
});

const stats = [
    { num: "20+", label: "Practice Areas" },
    { num: "3",   label: "Core Pillars" },
    { num: "Jakarta", label: "Global Reach" },
];

const HomepageHeroText = () => {
    return (
        <div className="absolute inset-0 z-10 flex flex-col justify-between">
            {/* ── Main content ── */}
            <div className="flex-1 flex items-center">
                <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16">
                    <div className="max-w-[640px]">
                        {/* Eyebrow */}
                        <motion.div
                            className="flex items-center gap-2.5 mb-6"
                            {...fadeUp(0)}
                        >
                            <div className="w-7 h-px bg-[#c9a84c]" />
                            <span className="text-[#c9a84c] text-[11px] tracking-[0.24em] uppercase font-medium">
                Luthfi Yazid DHH Law Firm
              </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className="text-white text-4xl lg:text-6xl font-light leading-[1.1] mb-5"
                            {...fadeUp(0.15)}
                        >
                            Your challenges,
                            <br />
                            <span className={`${ebGaramond.className} italic text-[#c9a84c]`}>
                Our commitment.
              </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-white/55 text-[15px] leading-relaxed font-light max-w-md mb-10"
                            {...fadeUp(0.3)}
                        >
                            Tailored legal solutions through collaborative teamwork, clear
                            communication, and unwavering professional integrity.
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                            {...fadeUp(0.45)}
                        >
                            {/* Primary */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 border border-[#c9a84c]/60 bg-[#c9a84c]/10 hover:bg-[#c9a84c]/20 text-[#c9a84c] text-[11px] tracking-[0.16em] uppercase px-7 py-3.5 transition-all duration-200"
                            >
                                Schedule an Appointment
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>

                            {/* Secondary */}
                            <Link
                                href="/about-us"
                                className="inline-flex items-center gap-1.5 text-white/40 hover:text-[#c9a84c] text-[12px] tracking-[0.08em] transition-colors duration-200"
                            >
                                Learn More
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                >
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Bottom stats strip ── */}
            <motion.div
                className="border-t border-[#c9a84c]/12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease: easeOut }}
            >
                <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16 flex items-stretch">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="py-4 pr-8 mr-8 border-r border-white/[0.07] last:border-r-0 last:mr-0"
                        >
                            <p
                                className="text-[#c9a84c] leading-none mb-1"
                                style={{ fontFamily: "'EB Garamond', serif", fontSize: "22px" }}
                            >
                                {stat.num}
                            </p>
                            <p className="text-white/30 text-[9.5px] tracking-[0.14em] uppercase">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* ── Scroll indicator (desktop only) ── */}
            <motion.div
                className="absolute right-10 bottom-10 hidden lg:flex flex-col items-center gap-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1, ease: easeOut }}
            >
                <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c]/60 to-transparent" />
                <span className="text-white/25 text-[9px] tracking-[0.18em] uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
            </motion.div>
        </div>
    );
};

export default HomepageHeroText;