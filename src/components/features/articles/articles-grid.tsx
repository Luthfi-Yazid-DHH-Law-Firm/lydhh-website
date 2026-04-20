"use client";

import ArticlesCard from "@/components/composites/articles/articles-card";
import { ArticlesSkeletonGrid } from "@/components/composites/articles/article-skeleton-card";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { client } from "@/sanity/lib/client";
import {
  ARTICLES_COUNT_QUERY,
  ARTICLES_PAGINATED_QUERY,
} from "@/sanity/lib/queries";
import {
  ARTICLES_COUNT_QUERYResult,
  ARTICLES_PAGINATED_QUERYResult,
} from "@/sanity/types";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface ArticlesGridProps {
  initialArticles: ARTICLES_PAGINATED_QUERYResult;
  totalArticles: ARTICLES_COUNT_QUERYResult;
}

const limit = 7;

const ArticlesGrid: FC<ArticlesGridProps> = ({
                                               initialArticles,
                                               totalArticles,
                                             }) => {
  const [articles, setArticles] =
      useState<ARTICLES_PAGINATED_QUERYResult>(initialArticles);
  const [filteredTotal, setFilteredTotal] =
      useState<number>(totalArticles);
  const [loading, setLoading] = useState(false);
  const [fetchingFiltered, setFetchingFiltered] = useState(false);
  const [page, setPage] = useState(1);

  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const category = searchParams.get("category");

  // Refetch when filters change
  useEffect(() => {
    const fetchFiltered = async () => {
      setFetchingFiltered(true);
      try {
        const [filtered, count] = await Promise.all([
          client.fetch(
              ARTICLES_PAGINATED_QUERY,
              { end: limit - 1, search, category },
              { next: { revalidate: 60 } }
          ),
          client.fetch(
              ARTICLES_COUNT_QUERY,
              { search, category },
              { next: { revalidate: 60 } }
          ),
        ]);
        setArticles(filtered);
        setFilteredTotal(count);
        setPage(1);
      } catch (e) {
        console.error("Error fetching filtered articles:", e);
      } finally {
        setFetchingFiltered(false);
      }
    };
    fetchFiltered();
  }, [search, category]);

  const loadMore = async () => {
    if (loading || articles.length >= filteredTotal) return;
    setLoading(true);
    try {
      const nextPage = page + 1;
      const end = limit * nextPage - 1;
      const newArticles = await client.fetch(
          ARTICLES_PAGINATED_QUERY,
          { end, search, category },
          { next: { revalidate: 60 } }
      );
      setArticles((prev) => [...prev, ...newArticles.slice(prev.length)]);
      setPage(nextPage);
    } catch (e) {
      console.error("Error loading more:", e);
    } finally {
      setLoading(false);
    }
  };

  const hasMore = articles.length < filteredTotal;

  // ── Loading state: skeleton grid ──
  if (fetchingFiltered) {
    return <ArticlesSkeletonGrid count={6} />;
  }

  return (
      <AnimationWrapper classname="w-full space-y-8">
        {/* Article count */}
        {filteredTotal > 0 && (
            <p className="text-[#8a8a8a] text-[12px]">
              Showing{" "}
              <span className="text-[#c9a84c] font-medium">{articles.length}</span>{" "}
              of{" "}
              <span className="text-[#c9a84c] font-medium">{filteredTotal}</span>{" "}
              articles
            </p>
        )}

        {/* Grid */}
        {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((article) => (
                  <ArticlesCard key={article._id} article={article} />
              ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a84c"
                  strokeWidth="1"
                  opacity="0.4"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <p className="text-[#8a8a8a] text-sm">
                No articles found matching your criteria.
              </p>
            </div>
        )}

        {/* Load more */}
        {hasMore && (
            <div className="flex justify-center pt-4">
              <button
                  onClick={loadMore}
                  disabled={loading}
                  className="inline-flex items-center gap-2 border border-[#c9a84c]/35 bg-[#c9a84c]/[0.05] hover:bg-[#c9a84c]/12 hover:border-[#c9a84c]/60 text-[#c9a84c] text-[11px] tracking-[0.16em] uppercase px-7 py-3 transition-all duration-200 disabled:opacity-50"
              >
                {loading ? (
                    <>
                      <svg
                          className="animate-spin"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Loading...
                    </>
                ) : (
                    <>
                      Load More Articles
                      <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                      </svg>
                    </>
                )}
              </button>
            </div>
        )}
      </AnimationWrapper>
  );
};

export default ArticlesGrid;