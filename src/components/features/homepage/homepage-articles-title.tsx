"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
    weight: ["600"],
    style: ["italic"],
    subsets: ["latin"],
    preload: false,
});

const HomepageArticlesTitle = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-10">
            {/* Left: eyebrow + heading */}
            <AnimationWrapper
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeIn }}
            >
                <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-4">
                    Monthly Articles
                </p>
                <h2 className="text-[#0d1117] text-3xl lg:text-4xl font-light leading-snug">
                    Learn something more from our latest{" "}
                    <span className={`${ebGaramond.className} italic text-[#c9a84c]`}>
            articles
          </span>
                </h2>
            </AnimationWrapper>

            {/* Right: description */}
            <AnimationWrapper
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: easeIn }}
            >
                <p className="text-[#8a8a8a] text-sm leading-relaxed">
                    We provide updates on legal developments in Indonesia by way of our
                    monthly newsletter &ldquo;Notes from the Bar&rdquo; that may be of
                    interest to our clientele. Stay tuned on this page for the latest
                    updates from us.
                </p>
            </AnimationWrapper>
        </div>
    );
};

export default HomepageArticlesTitle;