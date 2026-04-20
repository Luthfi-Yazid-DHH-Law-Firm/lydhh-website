import ArticleDetailBody from "@/components/features/articles/article-detail-body";
import { ARTICLE_QUERYResult } from "@/sanity/types";
import { FC } from "react";

interface ArticleDetailProps {
    article: ARTICLE_QUERYResult;
}

const ArticleDetail: FC<ArticleDetailProps> = ({ article }) => {
    return (
        <section className="relative w-full bg-[#f9f7f4] py-16 overflow-x-hidden">
            {/* Top gold divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

            <div className="w-full max-w-[800px] mx-auto px-6 lg:px-8">
                <ArticleDetailBody article={article} />
            </div>

            {/* Bottom gold divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        </section>
    );
};

export default ArticleDetail;