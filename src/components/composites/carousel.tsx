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
  slideClassName?: string; // Optional prop to customize slide wrapper styles
};

const Carousel: React.FC<CarouselProps> = ({ 
  children, 
  viewAllHref, 
  options,
  slideClassName = "flex-[0_0_75%] md:flex-[0_0_40%] lg:flex-[0_0_33.333%] min-w-0 pl-4" 
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <AnimationWrapper 
        classname="w-full mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: easeIn }}
    >
      {/* Controls */}
      <div className="w-full flex justify-between items-center mb-7">
        <div className="grid grid-cols-2 gap-2 items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
            <ArrowLeftIcon />
          </PrevButton>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
            <ArrowRightIcon />
          </NextButton>
        </div>
        <div className="w-4/5 h-[1px] hidden lg:block bg-gray-400" />
        <LinkButton
          href={viewAllHref}
          underline={false}
          className="border p-3 text-black bg-transparent hover:text-[#E1BC1C] transition-colors duration-300"
        >
          View All
        </LinkButton>
      </div>
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Container */}
        <div className="flex -ml-4 touch-pan-y">
          {/* Slides */}
          {React.Children.map(children, (child, index) => (
            <div
              className={slideClassName}
              key={index}
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