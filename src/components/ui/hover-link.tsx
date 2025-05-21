"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { FC, ReactNode, useState } from "react";

interface HoverLinkProps {
    children: ReactNode;
    href: string;
    classname?: string;
    FlyOutContent?: ReactNode;
};

const HoverLink: FC<HoverLinkProps> = ({ children, href, classname, FlyOutContent }) => {
    const [hover, setHover] = useState<boolean>(false);
    const pathname = usePathname();

    const subRoute = pathname.replace(/(\/[^\/]+\/[^\/]+).*/, "$1");
    const active = href === pathname || href === subRoute;

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`relative w-fit h-fit ${classname}`}
        >
            <a href={href} className="relative font-medium text-base">
                {children}
                <span
                    className={`absolute -bottom-8 -left-2 -right-2 h-1 origin-left rounded-full bg-linear-to-r from-[#E1BC1C] to-[#997d03] transition-transform duration-300 ease-out ${
                      hover || active ? "scale-x-100" : "scale-x-0"
                    }`}
                />
            </a>
            <AnimatePresence>
                {
                    (hover && FlyOutContent) && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            style={{ translateX: "-50%" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute left-1/2 top-14 bg-white text-black"
                        >
                            <div className="absolute -top-9 left-0 right-0 h-6 bg-transparent" />
                            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-transparent" />
                            { FlyOutContent }
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
};

export default HoverLink;