import ArticleMetadata from "@/components/composites/articles/article-metadata";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ArticleDetailBodyProps {
    article: ARTICLE_QUERYResult;
}

// Styled PortableText components for article body
const articleBodyComponents = {
    types: {
        image: ({
                    value,
                }: {
            value: { asset?: object; alt?: string; caption?: string };
        }) => {
            if (!value?.asset) return null;
            return (
                <figure className="my-8">
                    <div className="relative overflow-hidden">
                        <Image
                            src={urlFor(value).auto("format").url()}
                            alt={value.alt ?? "Article image"}
                            width={760}
                            height={500}
                            className="w-full h-auto object-cover"
                            style={{ filter: "brightness(0.97)" }}
                        />
                        {/* Subtle gold bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c9a84c]/60 via-[#c9a84c]/20 to-transparent" />
                    </div>
                    {value.caption && (
                        <figcaption className="mt-3 text-center text-[#8a8a8a] text-[12px] italic">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
    },
    block: {
        normal: ({ children }: { children?: React.ReactNode }) => (
            <p className="text-[#3a3a3a] text-[15px] leading-[1.9] mb-5 last:mb-0">
                {children}
            </p>
        ),
        h1: ({ children }: { children?: React.ReactNode }) => (
            <h2 className="font-serif text-[#0d1117] text-[24px] font-medium mt-10 mb-4 pb-2.5 border-b border-[#c9a84c]/20">
                {children}
            </h2>
        ),
        h2: ({ children }: { children?: React.ReactNode }) => (
            <h2 className="font-serif text-[#0d1117] text-[24px] font-medium mt-10 mb-4 pb-2.5 border-b border-[#c9a84c]/20">
                {children}
            </h2>
        ),
        h3: ({ children }: { children?: React.ReactNode }) => (
            <h3 className="text-[#0d1117] text-[17px] font-medium mt-7 mb-3">
                {children}
            </h3>
        ),
        blockquote: ({ children }: { children?: React.ReactNode }) => (
            <blockquote className="border-l-2 border-[#c9a84c] pl-5 my-6 italic text-[#5a5a5a] text-[15px] leading-relaxed">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: { children?: React.ReactNode }) => (
            <ul className="space-y-2.5 mb-5">{children}</ul>
        ),
        number: ({ children }: { children?: React.ReactNode }) => (
            <ol className="space-y-2.5 mb-5 counter-reset-[item]">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }: { children?: React.ReactNode }) => (
            <li className="flex items-baseline gap-2.5 text-[#3a3a3a] text-[15px] leading-relaxed">
                <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#c9a84c] opacity-70 mt-[9px]" />
                <span>{children}</span>
            </li>
        ),
        number: ({ children }: { children?: React.ReactNode }) => (
            <li className="text-[#3a3a3a] text-[15px] leading-relaxed list-decimal list-inside">
                {children}
            </li>
        ),
    },
    marks: {
        // strong: ({ children }: { children?: React.ReactNode }) => (
        //     <strong className="text-[#0d1117] font-medium">{children}</strong>
        // ),
        em: ({ children }: { children?: React.ReactNode }) => (
            <em className="text-[#5a5a5a] italic">{children}</em>
        ),
        link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] underline underline-offset-2 decoration-[#c9a84c]/40 hover:decoration-[#c9a84c] transition-colors"
            >
                {children}
            </a>
        ),
    },
};

const ArticleDetailBody: FC<ArticleDetailBodyProps> = ({ article }) => {
    return (
        <div className="w-full">
            {/* Back link */}
            <Link
                href="/articles"
                className="inline-flex items-center gap-1.5 text-[#8a8a8a] text-[11px] tracking-[0.1em] uppercase mb-8 hover:text-[#c9a84c] transition-colors duration-200 group"
            >
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    className="group-hover:-translate-x-0.5 transition-transform duration-200"
                >
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                Back to Articles
            </Link>

            {/* Hero image */}
            {article?.mainImage && (
                <div className="w-full overflow-hidden mb-10">
                    <Image
                        src={urlFor(article.mainImage).auto("format").url()}
                        alt={article.title ?? "Article hero"}
                        width={800}
                        height={450}
                        className="w-full aspect-video object-cover"
                        style={{ filter: "brightness(0.95)" }}
                    />
                </div>
            )}

            {/* Metadata */}
            <ArticleMetadata
                publishedAt={article?.publishedAt}
                category={article?.categories}
                author={article?.author}
            />

            {/* Article title */}
            <h1
                className="text-[#0d1117] text-3xl lg:text-4xl font-light leading-snug mb-8"
                style={{ fontFamily: "'EB Garamond', serif" }}
            >
                {article?.title ?? "No title"}
            </h1>

            {/* Body */}
            <div className="w-full">
                {article?.body ? (
                    <PortableText
                        value={article.body}
                        components={articleBodyComponents as never}
                    />
                ) : (
                    <p className="text-[#8a8a8a] text-sm italic">No content available.</p>
                )}
            </div>
        </div>
    );
};

export default ArticleDetailBody;