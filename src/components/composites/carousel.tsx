"use client";

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

type EmblaCarouselProps = {
  slides: number[];
  viewAllHref: string;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, viewAllHref, options }) => {
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
          {slides.map((index) => (
            <div
              className="flex-[0_0_75%] md:flex-[0_0_40%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
              key={index}
              style={{ transform: "translate3d(0, 0, 0)" }}
            >
              <div className="flex items-center justify-center h-76 text-4xl font-semibold rounded-3xl border-2 border-gray-300 select-none">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default EmblaCarousel;
