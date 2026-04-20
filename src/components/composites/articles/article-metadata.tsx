import { Slug } from "@/sanity/types";
import { formatDate } from "@/utils/format-date";
import { FC } from "react";

interface ArticleMetadataProps {
    publishedAt?: string | null;
    category?: Array<{
        title: string | null;
        slug: Slug | null;
    }> | null;
    author?: string | null;
}

const UserIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const CalendarIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const ArticleMetadata: FC<ArticleMetadataProps> = ({
                                                       publishedAt,
                                                       category,
                                                       author,
                                                   }) => {
    return (
        <div className="w-full mb-6 space-y-4">
            {/* Meta items row */}
            <div className="flex flex-wrap items-center gap-4">
                {/* Author */}
                <div className="flex items-center gap-1.5 text-[#8a8a8a] text-[12px]">
                    <span className="text-[#c9a84c]"><UserIcon /></span>
                    {author ?? "Unknown author"}
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-[#8a8a8a] text-[12px]">
                    <span className="text-[#c9a84c]"><CalendarIcon /></span>
                    {publishedAt ? formatDate(publishedAt) : "No date"}
                </div>

                {/* Category pills */}
                {category && category.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                        {category.map((cat) =>
                                cat.title ? (
                                    <span
                                        key={cat.title}
                                        className="inline-flex items-center border border-[#c9a84c]/30 bg-[#c9a84c]/[0.06] text-[#c9a84c] text-[10px] tracking-[0.14em] uppercase px-2.5 py-0.5"
                                    >
                  {cat.title}
                </span>
                                ) : null
                        )}
                    </div>
                )}
            </div>

            {/* Gold rule */}
            <div className="relative h-px bg-black/[0.07]">
                <div className="absolute left-0 top-0 bottom-0 w-9 bg-gradient-to-r from-[#c9a84c] to-[#a98e16]" />
            </div>
        </div>
    );
};

export default ArticleMetadata;