import HomepageArticlesTitle from '@/components/features/homepage/homepage-articles-title';
import EmblaCarousel from '@/components/composites/carousel';
import React from 'react'

const HomepageArticles = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 py-20">
        <div className="w-full 2xl:w-[1440px] space-y-4 px-8 lg:px-16">
            <HomepageArticlesTitle />
            <EmblaCarousel slides={[0, 1, 2, 3, 4, 5]} viewAllHref='/articles'/>
        </div>
    </section>
  )
}

export default HomepageArticles;