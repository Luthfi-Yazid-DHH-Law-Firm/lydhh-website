import ArticleDetail from "@/components/templates/articles/article-detail";
import HeroSmall from "@/components/templates/hero-small";
import HomepageArticles from "@/components/templates/homepage/homepage-articles";
import { client } from "@/sanity/lib/client";
import { ARTICLE_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await client.fetch(
    ARTICLE_QUERY,
    (params = await params),
    options
  );

  return (
    <>
      <HeroSmall />
      <ArticleDetail article={article} />
      <HomepageArticles />
    </>
  );
}
