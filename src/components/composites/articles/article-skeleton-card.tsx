/**
 * ArticleSkeletonCard
 * Shimmer placeholder shown while articles are loading.
 * Matches the ArticlesCard dimensions exactly.
 */
const ArticleSkeletonCard = () => (
    <div className="bg-white border border-black/[0.07] overflow-hidden animate-pulse">
        {/* Image placeholder */}
        <div className="w-full h-[180px] bg-[#e8e4de]" />

        {/* Body placeholder */}
        <div className="px-4 pt-4 pb-5 flex flex-col gap-3">
            {/* Date line */}
            <div className="h-2.5 w-20 bg-[#e8e4de] rounded" />
            {/* Title lines */}
            <div className="h-3.5 w-full bg-[#e8e4de] rounded" />
            <div className="h-3.5 w-3/4 bg-[#e8e4de] rounded" />
            {/* CTA placeholder */}
            <div className="h-2.5 w-24 bg-[#e8e4de] rounded mt-1" />
        </div>
    </div>
);

/**
 * ArticlesSkeletonGrid
 * Full grid of skeleton cards — use as the loading fallback in ArticlesGrid.
 */
export const ArticlesSkeletonGrid = ({ count = 6 }: { count?: number }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: count }).map((_, i) => (
            <ArticleSkeletonCard key={i} />
        ))}
    </div>
);

export default ArticleSkeletonCard;