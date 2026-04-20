"use client";

import { useEffect, useRef, useState } from "react";

export default function TeamAndVision() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 overflow-hidden bg-[#0a0c0f]"
        >
            {/* Subtle background texture overlay */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #c9a84c 0%, transparent 40%)`,
                }}
            />

            {/* Top gold divider line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-40" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section label */}
                <div
                    className={`text-center mb-4 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
          <span className="text-[#c9a84c] text-sm tracking-[0.25em] uppercase font-medium">
            Our Identity
          </span>
                </div>

                {/* Section heading */}
                <h2
                    className={`text-center text-white text-4xl lg:text-5xl font-light mb-4 leading-tight transition-all duration-700 delay-100 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    Our Team{" "}
                    <span className="italic text-[#c9a84c] font-serif">& Vision</span>
                </h2>

                {/* Gold underline */}
                <div
                    className={`flex justify-center mb-14 transition-all duration-700 delay-150 ${
                        isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    }`}
                >
                    <div className="w-12 h-0.5 bg-[#c9a84c]" />
                </div>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Image with overlay card */}
                    <div
                        className={`relative transition-all duration-800 delay-200 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"
                        }`}
                    >
                        {/* Main image */}
                        <div className="relative">
                            {/* Gold border frame effect */}
                            <div className="absolute -top-3 -left-3 w-24 h-24 border-t border-l border-[#c9a84c] opacity-60" />
                            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b border-r border-[#c9a84c] opacity-60" />

                            {/* Image using Unsplash - professional law firm team */}
                            <div className="relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80"
                                    alt="Legal professionals in a professional setting"
                                    className="w-full h-[420px] object-cover grayscale-[20%]"
                                    style={{ filter: "brightness(0.85) contrast(1.05)" }}
                                />
                                {/* Dark overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-60" />
                            </div>
                        </div>

                        {/* Floating founder badge */}
                        {/*<div className="absolute bottom-6 left-6 right-6 bg-[#0d1117]/90 border border-[#c9a84c]/30 backdrop-blur-sm px-5 py-4">*/}
                        {/*    <div className="flex items-center gap-4">*/}
                        {/*        <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/50 flex items-center justify-center flex-shrink-0">*/}
                        {/*            <svg*/}
                        {/*                width="18"*/}
                        {/*                height="18"*/}
                        {/*                viewBox="0 0 24 24"*/}
                        {/*                fill="none"*/}
                        {/*                stroke="#c9a84c"*/}
                        {/*                strokeWidth="1.5"*/}
                        {/*            >*/}
                        {/*                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />*/}
                        {/*                <circle cx="12" cy="7" r="4" />*/}
                        {/*            </svg>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <p className="text-white text-sm font-medium leading-tight">*/}
                        {/*                Dr. TM Luthfi Yazid, S.H., LL.M.*/}
                        {/*            </p>*/}
                        {/*            <p className="text-[#c9a84c] text-xs tracking-wide mt-0.5">*/}
                        {/*                Founder & Senior Partner*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    {/* Right: Text content */}
                    <div
                        className={`transition-all duration-800 delay-300 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-10"
                        }`}
                    >
                        {/* Main text block */}
                        <div className="mb-10">
                            <p className="text-gray-300 text-base leading-relaxed mb-6">
                                Led by our founder,{" "}
                                <span className="text-white font-medium">
                  Dr. TM Luthfi Yazid, S.H., LL.M.
                </span>
                                , our team consists of visionary legal professionals with deep
                                roots in the Indonesian legal community and extensive
                                international experience.
                            </p>
                            <p className="text-gray-300 text-base leading-relaxed">
                                At LYDHH, we are not just your lawyers — we are your strategic
                                partners. We stay ahead of legal shifts through our monthly
                                publication, ensuring that our clients are always informed,
                                prepared, and positioned for success.
                            </p>
                        </div>

                        {/* Publication highlight card */}
                        <div className="border border-[#c9a84c]/30 bg-[#c9a84c]/5 p-6 mb-10 relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#c9a84c]" />
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-0.5">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#c9a84c"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[#c9a84c] text-xs tracking-[0.2em] uppercase font-medium mb-1">
                                        Monthly Publication
                                    </p>
                                    <p className="text-white text-base font-medium italic font-serif mb-1">
                                        &#34;Notes from the Bar&#34;
                                    </p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Our curated legal insights keeping clients informed, prepared,
                                        and ahead of regulatory shifts.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Three pillars */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                {
                                    label: "Indonesian Roots",
                                    icon: (
                                        <path
                                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                                            strokeWidth="1.5"
                                            stroke="#c9a84c"
                                            fill="none"
                                        />
                                    ),
                                },
                                {
                                    label: "Global Experience",
                                    icon: (
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="#c9a84c"
                                            strokeWidth="1.5"
                                            fill="none"
                                        />
                                    ),
                                },
                                {
                                    label: "Strategic Partners",
                                    icon: (
                                        <path
                                            d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                                            stroke="#c9a84c"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            fill="none"
                                        />
                                    ),
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="text-center border border-white/10 p-4 hover:border-[#c9a84c]/40 transition-colors duration-300 group"
                                >
                                    <div className="flex justify-center mb-3">
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            className="group-hover:scale-110 transition-transform duration-300"
                                        >
                                            {item.icon}
                                        </svg>
                                    </div>
                                    <p className="text-gray-400 text-xs leading-tight group-hover:text-gray-300 transition-colors">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gold divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-40" />
        </section>
    );
}