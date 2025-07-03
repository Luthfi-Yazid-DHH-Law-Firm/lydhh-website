"use client";

import ArticlesCard from '@/components/composites/articles/articles-card'
import AnimationWrapper from '@/components/wrappers/animation-wrapper';
import { client } from '@/sanity/lib/client';
import { ARTICLES_PAGINATED_QUERY, ARTICLES_COUNT_QUERY } from '@/sanity/lib/queries';
import { ARTICLES_COUNT_QUERYResult, ARTICLES_PAGINATED_QUERYResult } from '@/sanity/types';
import { useSearchParams } from 'next/navigation';
import { FC, useState, useEffect } from 'react';

interface ArticlesGridProps {
  initialArticles: ARTICLES_PAGINATED_QUERYResult;
  totalArticles: ARTICLES_COUNT_QUERYResult;
};

const ArticlesGrid: FC<ArticlesGridProps> = ({ initialArticles, totalArticles }) => {
  const [articles, setArticles] = useState<ARTICLES_PAGINATED_QUERYResult>(initialArticles);
  const [filteredTotal, setFilteredTotal] = useState<number>(totalArticles);
  const [loading, setLoading] = useState(false);
  const [fetchingFiltered, setFetchingFiltered] = useState(false);
  const [page, setPage] = useState(1);

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const search = params.get("search");
  const category = params.get("category");

  const limit = 7;

  // Reset articles when filters change
  useEffect(() => {
    const fetchFilteredArticles = async () => {
      setFetchingFiltered(true);
      try {
        const end = limit - 1; // Reset to first page
        
        // Fetch filtered articles
        const filteredArticles = await client.fetch(
          ARTICLES_PAGINATED_QUERY,
          { end, search, category },
          { next: { revalidate: 60 } }
        );
        
        const filteredCount = await client.fetch(
          ARTICLES_COUNT_QUERY,
          { search, category },
          { next: { revalidate: 60 } }
        );

        setArticles(filteredArticles);
        setFilteredTotal(filteredCount);
        setPage(1); // Reset to first page
      } catch (error) {
        console.error('Error fetching filtered articles:', error);
      } finally {
        setFetchingFiltered(false);
      }
    };

    fetchFilteredArticles();
  }, [search, category]); // Trigger when search or category changes

  const loadMoreArticles = async () => {
    if (loading || articles.length >= filteredTotal) return;

    setLoading(true);
    try {
      const nextPage = page + 1;
      const end = limit * nextPage - 1; // Convert to 0-based index for GROQ

      const newArticles = await client.fetch(
        ARTICLES_PAGINATED_QUERY,
        { end, search, category },
        { next: { revalidate: 60 } }
      );

      const articlesAfterCurrent = newArticles.slice(articles.length);
      setArticles(prev => [...prev, ...articlesAfterCurrent]);
      setPage(nextPage);
    } catch (error) {
      console.error('Error loading more articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const hasMore = articles.length < filteredTotal;

  // Show loading state when fetching filtered results
  if (fetchingFiltered) {
    return (
      <AnimationWrapper classname='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {/* You can add skeleton loaders here */}
          <div className='text-center col-span-full'>Loading filtered articles...</div>
        </div>
      </AnimationWrapper>
    );
  }

  return (
    <AnimationWrapper classname='w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {articles.map((article) => (
          <ArticlesCard key={article._id} article={article} />
        ))}
      </div>
      
      {articles.length === 0 && (
        <div className='text-center py-8'>
          <p className='text-gray-500'>No articles found matching your criteria.</p>
        </div>
      )}
      
      {hasMore && (
        <div className='mt-8 text-center'>
          <button
            onClick={loadMoreArticles}
            disabled={loading}
            className='px-6 py-3 text-white bg-linear-to-l from-[#c0a013] to-[#e1bc1c] rounded-md'
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </AnimationWrapper>
  );
};

export default ArticlesGrid;