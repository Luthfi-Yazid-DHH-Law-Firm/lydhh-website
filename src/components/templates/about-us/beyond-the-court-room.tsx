"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
    {
        number: "01",
        tagline: "Dispute Resolution",
        title: "Arbitration & ADR",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        intro: "Recognizing the need for efficient and confidential conflict management, LYDHH offers specialized expertise in resolving disputes outside traditional litigation.",
        items: [
            {
                label: "Arbitration",
                desc: "Representing clients in both domestic and international arbitration proceedings with seasoned advocacy.",
            },
            {
                label: "ADR Services",
                desc: "Skilled mediation and negotiation strategies designed to resolve disputes while saving time and preserving vital business relationships.",
            },
        ],
    },
    {
        number: "02",
        tagline: "Institutional Navigation",
        title: "Strategic Advocacy & Relations",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        intro: "Beyond traditional legal counsel, we help clients navigate Indonesia's broader institutional environment through targeted strategic engagement.",
        items: [
            {
                label: "Parliamentary & Government Relations",
                desc: "Strategic advocacy within legislative and executive branches to navigate policy changes effectively.",
            },
            {
                label: "NGO Relations",
                desc: "Facilitating constructive engagement with civil society and non-governmental stakeholders.",
            },
            {
                label: "Media Relations",
                desc: "Managing legal-related public communications and reputation management for accurate representation in the public sphere.",
            },
        ],
    },
    {
        number: "03",
        tagline: "Knowledge & Insight",
        title: "Curator",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
        ),
        intro: "LYDHH stays at the forefront of legal developments and shares that knowledge with our clients through curated publications and thought leadership.",
        items: [
            {
                label: "Notes from the Bar",
                desc: "Our monthly newsletter delivering curated legal insights on Indonesian and international developments directly to our clients.",
            },
            {
                label: "Legal Commentary",
                desc: "In-depth analysis of emerging regulations, landmark rulings, and policy shifts that may affect your business interests.",
            },
            {
                label: "Client Briefings",
                desc: "Tailored updates prepared for specific industries or matters, ensuring our clients are always informed and prepared.",
            },
        ],
    },
];

export default function BeyondTheCourtroom() {
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
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20 overflow-hidden">
            {/* Top divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-3">
                        Full-Spectrum Capabilities
                    </p>
                    <h2 className="text-[#0d1117] text-4xl lg:text-5xl font-light mb-3 leading-tight">
                        Beyond{" "}
                        <span className="italic text-[#c9a84c] font-serif">the Courtroom</span>
                    </h2>
                    <div className="flex justify-center mb-5">
                        <div className="w-11 h-0.5 bg-[#c9a84c]" />
                    </div>
                    <p className="text-[#8a8a8a] text-sm leading-relaxed max-w-lg mx-auto">
                        LYDHH delivers expertise that extends well beyond conventional legal
                        counsel — from dispute resolution to institutional navigation.
                    </p>
                </div>

                {/* Cards grid — 3 columns on large screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`
                                group relative bg-white p-10 border border-black/[0.08]
                                hover:border-[#c9a84c]/40 hover:shadow-[0_4px_24px_rgba(201,168,76,0.08)]
                                transition-all duration-500
                                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                            `}
                            style={{ transitionDelay: isVisible ? `${i * 150 + 200}ms` : "0ms" }}
                        >
                            {/* Top hover line */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Background number */}
                            <span className="absolute top-7 right-8 font-serif text-[64px] leading-none text-[#c9a84c]/10 select-none pointer-events-none">
                                {card.number}
                            </span>

                            {/* Icon box */}
                            <div className="w-11 h-11 border border-[#c9a84c]/40 bg-[#c9a84c]/[0.07] flex items-center justify-center mb-6">
                                {card.icon}
                            </div>

                            {/* Tagline + Title */}
                            <p className="text-[#c9a84c] text-[10px] tracking-[0.18em] uppercase font-medium mb-2">
                                {card.tagline}
                            </p>
                            <h3 className="text-[#0d1117] text-lg font-medium mb-4">
                                {card.title}
                            </h3>

                            {/* Intro */}
                            <p className="text-[#6b7280] text-sm leading-relaxed mb-6">
                                {card.intro}
                            </p>

                            {/* Divider */}
                            <div className="h-px bg-black/[0.07] mb-6" />

                            {/* Items */}
                            <div className="space-y-5">
                                {card.items.map((item, j) => (
                                    <div key={j} className="flex gap-3.5">
                                        <div className="flex-shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-[#c9a84c] opacity-70" />
                                        <div>
                                            <p className="text-[#1a1a1a] text-sm font-medium mb-1">
                                                {item.label}
                                            </p>
                                            <p className="text-[#6b7280] text-[12.5px] leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
        </section>
    );
}