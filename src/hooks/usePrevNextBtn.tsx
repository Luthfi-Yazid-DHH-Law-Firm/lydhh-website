"use client";

import { useCallback, useEffect, useState, ComponentPropsWithRef } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

// Button components
type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, disabled, ...restProps } = props

  return (
    <button
      className={`w-9 h-9 flex items-center justify-center rounded-full border-2 border-black focus:outline-none transition-colors ${
        disabled ? 'text-gray-400 border-gray-400' : 'text-black hover:bg-gray-100'
      }`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, disabled, ...restProps } = props

  return (
    <button
      className={`w-9 h-9 flex items-center justify-center rounded-full border-2 border-black focus:outline-none transition-colors ${
        disabled ? 'text-gray-400 border-gray-400' : 'text-black hover:bg-gray-100'
      }`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}