"use client";

import { dateFormatter } from "@/lib/dateFormatter";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLES_PAGINATED_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

type ArticleItem = ARTICLES_PAGINATED_QUERYResult[number];

interface ArticlesCardProps {
  article: ArticleItem;
}

const CalendarIcon = () => (
    <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const ArticlesCard: FC<ArticlesCardProps> = ({ article }) => {
  const router = useRouter();

  return (
      <div
          onClick={() => router.push(`/articles/${article.slug?.current}`)}
          className="group relative flex flex-col bg-white border border-black/[0.07] overflow-hidden cursor-pointer hover:border-[#c9a84c]/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300 h-full"
      >
        {/* Gold top accent on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] z-10 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Image */}
        {article.mainImage ? (
            <div className="relative overflow-hidden flex-shrink-0">
              <Image
                  src={urlFor(article.mainImage).auto("format").url()}
                  alt={article.title ?? ""}
                  width={500}
                  height={180}
                  className="w-full h-[180px] object-cover filter brightness-[0.9] grayscale-[10%] group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500"
              />
              {/* Bottom fade into card */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
            </div>
        ) : (
            <div className="w-full h-[180px] bg-[#f0ede8] flex items-center justify-center flex-shrink-0">
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a84c"
                  strokeWidth="1"
                  opacity="0.3"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
        )}

        {/* Body */}
        <div className="flex flex-col flex-1 gap-2 px-4 pt-3.5 pb-5">
          {/* Date */}
          {article.publishedAt && (
              <div className="flex items-center gap-1.5 text-[#c9a84c] text-[10px] tracking-[0.12em] uppercase">
                <CalendarIcon />
                {dateFormatter(article.publishedAt)}
              </div>
          )}

          {/* Title */}
          <h3 className="text-[#0d1117] text-[13.5px] font-normal leading-snug flex-1 group-hover:text-[#0d1117] line-clamp-3">
            {article.title}
          </h3>

          {/* Slide-up CTA */}
          <span className="inline-flex items-center gap-1.5 text-[#c9a84c] text-[10px] tracking-[0.12em] uppercase opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
          Read Article
          <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
        </div>
      </div>
  );
};

export default ArticlesCard;