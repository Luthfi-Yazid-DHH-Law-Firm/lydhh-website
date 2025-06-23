import ArticlesList from "@/components/templates/articles/articles-list";
import HeroSmall from "@/components/templates/hero-small";
import HomepageContact from "@/components/templates/homepage/homepage-contact";
import HomepageTeam from "@/components/templates/homepage/homepage-team";

export default function ArticlesPage() {
  return (
    <>
      <HeroSmall />
      <ArticlesList />
      <HomepageContact />
      <HomepageTeam />
    </>
  );
};
