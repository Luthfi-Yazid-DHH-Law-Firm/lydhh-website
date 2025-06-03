import ArticleDetail from "@/components/templates/articles/article-detail";
import HeroSmall from "@/components/templates/hero-small";
import HomepageArticles from "@/components/templates/homepage/homepage-articles";

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
  return (
    <>
        <HeroSmall />
        <ArticleDetail />
        <HomepageArticles />
    </>
  );
};
