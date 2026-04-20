"use client";

import { dateFormatter } from "@/lib/dateFormatter";
import { urlFor } from "@/sanity/lib/image";
import { ArticleType } from "@/types/article-type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ArticleCardProps {
    article: ArticleType;
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/articles/${article.slug?.current}`)}
            className="group relative flex flex-col bg-white border border-black/[0.07] overflow-hidden cursor-pointer hover:border-[#c9a84c]/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300 h-full"
        >
            {/* Gold top accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] z-10 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Image */}
            {article?.mainImage ? (
                <div className="relative overflow-hidden flex-shrink-0">
                    <Image
                        className="w-full h-[200px] object-cover filter brightness-[0.8] grayscale-[10%] group-hover:brightness-90 group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500"
                        src={urlFor(article.mainImage).auto("format").url()}
                        alt={article.title ?? ""}
                        width={500}
                        height={200}
                    />
                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                </div>
            ) : (
                /* Placeholder */
                <div className="w-full h-[200px] bg-[#f0ede8] flex items-center justify-center flex-shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.3">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                    </svg>
                </div>
            )}

            {/* Body */}
            <div className="flex flex-col flex-1 gap-2.5 px-4 pt-3.5 pb-5">
                {/* Date */}
                {article.publishedAt && (
                    <p className="text-[#c9a84c] text-[10px] tracking-[0.14em] uppercase">
                        {dateFormatter(article.publishedAt)}
                    </p>
                )}

                {/* Title */}
                <h3 className="text-[#1a1a1a] text-[13.5px] font-normal leading-snug flex-1 group-hover:text-[#0d1117] transition-colors duration-200 line-clamp-3">
                    {article.title}
                </h3>

                {/* Slide-up CTA */}
                <span className="inline-flex items-center gap-1.5 text-[#c9a84c] text-[10px] tracking-[0.12em] uppercase opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
          Read Article
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
            </div>
        </div>
    );
};

export default ArticleCard;