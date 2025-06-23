import ArticlesCard from '@/components/composites/articles/articles-card'
import AnimationWrapper from '@/components/wrappers/animation-wrapper';
import { client } from '@/sanity/lib/client';
import { ARTICLES_QUERY } from '@/sanity/lib/queries';

const options = { next: { revalidate: 60 } };

const ArticlesGrid = async () => {
  const articles = await client.fetch(ARTICLES_QUERY, {}, options);
  return (
    <AnimationWrapper classname='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          articles.map((article, i) => (
            <ArticlesCard key={i} article={article} />
          ))
        }
    </AnimationWrapper>
  )
}

export default ArticlesGrid