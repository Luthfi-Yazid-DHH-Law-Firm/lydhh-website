"use client";

import { motion } from 'motion/react';
import Image from "next/image";

const HeroBackground = () => {
  return (
    <div className="w-full h-screen overflow-hidden absolute inset-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image 
              alt="hero-image" 
              height={1000} 
              width={1000} 
              src="/company-profile.webp"
              className="object-cover w-full h-screen"
              priority
            />
          </motion.div>
        </div>
  )
}

export default HeroBackground