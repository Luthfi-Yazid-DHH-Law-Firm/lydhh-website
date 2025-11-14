import { Slug } from "@/sanity/types";
import { formatDate } from "@/utils/format-date";
import { CalendarIcon, UlistIcon, UserIcon } from "@sanity/icons";
import { FC } from "react";

interface ArticleMetadataProps {
  publishedAt?: string | null;
  category?: Array<{
      title: string | null;
      slug: Slug | null;
    }> | null;
  author?: string | null;
};

const ArticleMetadata: FC<ArticleMetadataProps> = ({ publishedAt, category, author }) => {
  return (
    <div className="w-full text-gray-400 space-y-3">
      <div className="w-full flex flex-wrap gap-5">
        <div className="flex gap-1 items-center">
          <UserIcon className="text-lg" />
          <p className="text-sm">{author || "Unknown author"}</p>
        </div>
        <div className="flex gap-1 items-center">
            <CalendarIcon className="text-lg" />
            <p className="text-sm">{publishedAt ? formatDate(publishedAt) : "No date available"}</p>
        </div>
        <div className="flex gap-1 items-center">
            <UlistIcon className="text-lg" />
            <div className="flex gap-1 items-center">
              {category && category.length > 0 ? (
                category.map((cat, index) => (
                  <span key={cat.title} className="text-sm">
                    {cat.title}
                    {index < category.length - 1 && ", "}
                  </span>
                ))
              ) : (
                <span>No category</span>
              )}
            </div>
        </div>
      </div>

      <div className="w-full relative flex flex-col justify-end">
        <div className="absolute w-10 h-[3px] bg-linear-to-r from-[#E1BC1C] to-[#a98e16]" />
        <div className="w-full h-0.5 bg-gray-100" />
      </div>
    </div>
  );
};

export default ArticleMetadata;
