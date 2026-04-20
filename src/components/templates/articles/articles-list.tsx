import ArticleSearchFilter from "@/components/features/articles/article-search-filter";
import ArticlesGrid from "@/components/features/articles/articles-grid";
import { client } from "@/sanity/lib/client";
import { ARTICLES_COUNT_QUERY, ARTICLES_PAGINATED_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const ArticlesList = async () => {
  const limit = 7;
  const params = { end: limit - 1, search: null, category: null };

  const [initialArticles, totalArticles] = await Promise.all([
    client.fetch(ARTICLES_PAGINATED_QUERY, params, options),
    client.fetch(ARTICLES_COUNT_QUERY, params, options),
  ]);

  return (
      <section className="relative w-full bg-[#f9f7f4] py-16 overflow-x-hidden">
        {/* Top gold divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16 space-y-8">
          <ArticleSearchFilter />
          <ArticlesGrid
              initialArticles={initialArticles}
              totalArticles={totalArticles}
          />
        </div>

        {/* Bottom gold divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </section>
  );
};

export default ArticlesList;