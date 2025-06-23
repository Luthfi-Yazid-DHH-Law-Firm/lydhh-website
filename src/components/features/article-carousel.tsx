import Carousel from "@/components/composites/carousel";
import ArticleCard from "@/components/composites/article-card";
import { ARTICLES_QUERYResult } from "@/sanity/types";
import { FC } from "react";

interface ArticleCarouselProps {
  articles: ARTICLES_QUERYResult;
};

const ArticleCarousel: FC<ArticleCarouselProps> = ({ articles }) => {
  return (
    <Carousel viewAllHref="/articles">
      {
        articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))
      }
    </Carousel>
  );
};

export default ArticleCarousel;
