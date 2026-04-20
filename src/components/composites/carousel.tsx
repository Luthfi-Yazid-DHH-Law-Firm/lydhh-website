"use client";

import React, { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "@/hooks/usePrevNextBtn";
import { ArrowLeftIcon, ArrowRightIcon } from "@sanity/icons";
import LinkButton from "@/components/ui/link";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion";

type CarouselProps = {
    children: ReactNode;
    viewAllHref: string;
    options?: EmblaOptionsType;
    slideClassName?: string;
    variant?: "light" | "dark";
};

const carouselVariants = {
    light: {
        btn: "border-black/15 bg-white hover:border-[#c9a84c] hover:text-[#c9a84c]",
        btnDisabled: "border-black/10 text-black/25 cursor-not-allowed",
        divider: "bg-black/10",
        viewAll: "border-black/15 bg-white text-[#0d1117] hover:border-[#c9a84c] hover:text-[#c9a84c]",
    },
    dark: {
        btn: "border-white/10 bg-transparent text-white hover:border-[#c9a84c] hover:text-[#c9a84c]",
        btnDisabled: "border-white/5 text-white/20 cursor-not-allowed",
        divider: "bg-white/8",
        viewAll: "border-[#c9a84c]/35 bg-[#c9a84c]/[0.05] text-[#c9a84c] hover:bg-[#c9a84c]/12 hover:border-[#c9a84c]/60",
    },
};

const Carousel: React.FC<CarouselProps> = ({
                                               children,
                                               viewAllHref,
                                               options,
                                               slideClassName = "flex-[0_0_75%] md:flex-[0_0_40%] lg:flex-[0_0_20%] min-w-0 pl-4",
                                               variant = "light",
                                           }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const v = carouselVariants[variant];

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <AnimationWrapper
            classname="w-full mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: easeIn }}
        >
            {/* Controls row */}
            <div className="w-full flex items-center gap-3 mb-8">
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                    className={[
                        "w-9 h-9 border flex items-center justify-center rounded-sm flex-shrink-0 transition-all duration-200",
                        prevBtnDisabled ? v.btnDisabled : v.btn,
                    ].join(" ")}
                >
                    <ArrowLeftIcon className="text-base" />
                </PrevButton>

                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                    className={[
                        "w-9 h-9 border flex items-center justify-center rounded-sm flex-shrink-0 transition-all duration-200",
                        nextBtnDisabled ? v.btnDisabled : v.btn,
                    ].join(" ")}
                >
                    <ArrowRightIcon className="text-base" />
                </NextButton>

                <div className={`flex-1 h-px hidden lg:block ${v.divider}`} />

                <LinkButton
                    href={viewAllHref}
                    underline={false}
                    className={`border px-4 py-2.5 text-[11px] tracking-[0.14em] rounded-sm uppercase flex-shrink-0 transition-all duration-200 ${v.viewAll}`}
                >
                    View All
                </LinkButton>
            </div>

            {/* Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4 touch-pan-y">
                    {React.Children.map(children, (child, index) => (
                        <div
                            key={index}
                            className={slideClassName}
                            style={{ transform: "translate3d(0, 0, 0)" }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </AnimationWrapper>
    );
};

export default Carousel;