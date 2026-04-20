import Carousel from "@/components/composites/carousel";
import ArticleCard from "@/components/composites/article-card";
import { ARTICLES_QUERYResult } from "@/sanity/types";
import { FC } from "react";

interface ArticleCarouselProps {
    articles: ARTICLES_QUERYResult;
}

const ArticleCarousel: FC<ArticleCarouselProps> = ({ articles }) => {
    return (
        <Carousel
            viewAllHref="/articles"
            variant="light"
            slideClassName="flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_33.333%] min-w-0 pl-4 h-full"
        >
            {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
            ))}
        </Carousel>
    );
};

export default ArticleCarousel;