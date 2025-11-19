"use client";

import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence, motion, TargetAndTransition, VariantLabels } from "motion/react";

interface AnimationWrapperProps {
    children: React.ReactNode;
    initial?: boolean | TargetAndTransition | VariantLabels | undefined;
    animate?: boolean | TargetAndTransition | VariantLabels;
    transition?: object;
    classname?: string;
};

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
    children,
    initial = { opacity: 0 },
    animate = { opacity: 1 },
    transition = { duration: 1 },
    classname
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(currentRef!);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isMounted]);

    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial={initial}
                animate={isMounted && inView ? animate : initial}
                transition={transition}
                className={classname}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimationWrapper;