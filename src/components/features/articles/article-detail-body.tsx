import ArticleMetadata from "@/components/composites/articles/article-metadata";
import { BlockImageComponent } from "@/sanity/block-image-component";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { FC } from "react";

interface ArticleDetailBodyProps {
  article: ARTICLE_QUERYResult;
};

const ArticleDetailBody: FC<ArticleDetailBodyProps> = ({ article }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg pb-5">
      {
        article?.mainImage ?
        <Image
          src={urlFor(article.mainImage)
            .auto("format")
            .url()
          }
          alt={article.title || ""}
          width={480}
          height={480}
          className="aspect-video object-contain w-full rounded-t-lg"
        />
        : null
      }
      <div className="w-full px-7 py-8 space-y-5">
        {/* Metadata outside prose */}
        <ArticleMetadata publishedAt={article?.publishedAt} category={article?.categories} author={article?.author} />
        
        {/* Only article content inside prose */}
        <div className="prose max-w-full">
          <h1 className="text-3xl font-bold">{article?.title || "No title"}</h1>
          {
            article?.body ?
            <PortableText value={article.body} components={BlockImageComponent} /> : "No descriptions"
          }
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailBody;