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
          className="aspect-video w-full rounded-t-lg"
        />
        : null
      }
      <div className="w-full px-7 py-8 space-y-5 prose max-w-full">
        <ArticleMetadata />
        {
          article?.body ?
          <PortableText value={article.body} components={BlockImageComponent} /> : "No descriptions"
        }
      </div>
    </div>
  );
};

export default ArticleDetailBody;
