import ArticleSearchFilter from "@/components/features/articles/article-search-filter";
import ArticlesGrid from "@/components/features/articles/articles-grid";
import { client } from "@/sanity/lib/client";
import { ARTICLES_COUNT_QUERY, ARTICLES_PAGINATED_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const ArticlesList = async () => {
  const limit = 7;
  const initialEnd = limit - 1;
  const initialSearch = null;
  const initialCategory = null;

  const params = {
    end: initialEnd,
    search: initialSearch,
    category: initialCategory
  }

  const [initialArticles, totalArticles] = await Promise.all([
    client.fetch(ARTICLES_PAGINATED_QUERY, params, options),
    client.fetch(ARTICLES_COUNT_QUERY, params, options),
  ]);
  return (
    <section className="w-full flex items-center justify-center py-20 px-8 lg:px-16 text-black">
      <div className="2xl:w-[1200px] w-full space-y-10">
        <ArticleSearchFilter />
        <ArticlesGrid
          initialArticles={initialArticles}
          totalArticles={totalArticles}
        />
      </div>
    </section>
  );
};

export default ArticlesList;
