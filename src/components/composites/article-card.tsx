"use client";

import { dateFormatter } from "@/lib/dateFormatter";
import { urlFor } from "@/sanity/lib/image";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
  Slug,
} from "@/sanity/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ArticleCardProps {
  article: {
    _id: string;
    title: string | null;
    slug: Slug | null;
    mainImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
    publishedAt: string | null;
    categories: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
      [internalGroqTypeReferenceTo]?: "category";
    }> | null;
  };
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    const router = useRouter();
  return (
    <div 
        onClick={() => router.push(`/articles/${article.slug?.current}`)}
        className="relative w-full h-96 overflow-hidden group cursor-pointer"
    >
        {article?.mainImage ? (
        <Image
          className="w-full h-96 object-cover"
          src={urlFor(article.mainImage)
            .auto("format")
            .url()}
          alt={article.title || ""}
          width="800"
          height="300"
        />
      ) : null}
        
        <div className="absolute inset-x-0 bottom-0 h-0 bg-black/80 group-hover:h-full transition-all duration-500 ease-in-out flex items-center justify-center">
            <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                See Profile
            </span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 text-white group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="text-lg font-bold line-clamp-2">{article.title}</h3>
            <p className="text-sm opacity-90">{dateFormatter(article.publishedAt)}</p>
        </div>
    </div>
  );
};

export default ArticleCard;