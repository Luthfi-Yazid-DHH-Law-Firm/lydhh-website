import ArticleFallback from "@/components/features/articles/article-fallback";
import ArticlesList from "@/components/templates/articles/articles-list";
import HeroSmall from "@/components/templates/hero-small";
import HomepageContact from "@/components/templates/homepage/homepage-contact";
import HomepageTeam from "@/components/templates/homepage/homepage-team";
import { Suspense } from "react";

export default function ArticlesPage() {
  return (
    <Suspense fallback={<ArticleFallback />}>
      <HeroSmall />
      <ArticlesList />
      <HomepageContact />
      <HomepageTeam />
    </Suspense>
  );
};
