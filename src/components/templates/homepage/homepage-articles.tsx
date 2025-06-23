import ArticleCarousel from '@/components/features/article-carousel';
import HomepageArticlesTitle from '@/components/features/homepage/homepage-articles-title';
import { client } from '@/sanity/lib/client';
import { ARTICLES_QUERY } from '@/sanity/lib/queries';

const options = { next: { revalidate: 60 } };

const HomepageArticles = async () => {
  const articles = await client.fetch(ARTICLES_QUERY, {}, options );
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 py-20">
        <div className="w-full 2xl:w-[1440px] space-y-4 px-8 lg:px-16">
            <HomepageArticlesTitle />
            <ArticleCarousel articles={articles}/>
        </div>
    </section>
  )
}

export default HomepageArticles;