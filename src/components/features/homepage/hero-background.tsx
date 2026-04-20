"use client";

import { motion } from "motion/react";
import Image from "next/image";

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full">
            {/* Slow zoom-in on mount */}
            <motion.div
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3.5, ease: "easeOut" }}
                className="w-full h-full"
            >
                <Image
                    src="/images/company-profile.webp"
                    alt="LYDHH Law Firm"
                    fill
                    className="object-cover brightness-[0.45]"
                    priority
                />
            </motion.div>

            {/* Left-to-right gradient — darkens left where text lives */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0f]/85 via-[#0a0c0f]/40 to-transparent" />

            {/* Bottom gradient — grounds the stats strip */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0f]/60 via-transparent to-transparent" />
        </div>
    );
};

export default HeroBackground;