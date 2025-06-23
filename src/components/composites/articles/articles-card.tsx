import { dateFormatter } from "@/lib/dateFormatter";
import { urlFor } from "@/sanity/lib/image";
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot, Slug } from "@/sanity/types";
import { CalendarIcon } from "@sanity/icons";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ArticlesCardProps {
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
}
};

const ArticlesCard: FC<ArticlesCardProps> = ({ article }) => {
  return (
    <div className="shadow-sm">
      {
        article.mainImage ?
        <Image
          src={
            urlFor(article.mainImage)
            .auto("format")
            .url()
          }
          alt={article.title || ""}
          width={350}
          height={350}
          className="w-full h-64 object-cover"
        /> : null

      }
      <div className="p-8 space-y-2 bg-white">
        <div className="flex items-center gap-3 text-[#999999]">
          <CalendarIcon className="text-lg" />
          <p className="text-sm">{dateFormatter(article.publishedAt)}</p>
        </div>
        <p className="text-xl font-semibold mb-8">
          {article.title}
        </p>
        <Link
          href={`/articles/${article.slug?.current}`}
          className="bg-gray-300 text-[#333] py-2 px-4 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] hover:bg-linear-to-l hover:from-[#D5AA6D] hover:to-[#9B6F45] hover:text-white transition-colors"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default ArticlesCard;
