import ArticleDetail from "@/components/templates/articles/article-detail";
import HeroSmall from "@/components/templates/hero-small";
import HomepageArticles from "@/components/templates/homepage/homepage-articles";
import { client } from "@/sanity/lib/client";
import { ARTICLE_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Articles | Jakarta International Law Office",
  description: "Jakarta International Law Office focus on delivering best solution to the client’s problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "jilo", "jilolaw", "jakarta", "indonesia"]
};

const options = { next: { revalidate: 60 } };

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = await client.fetch(
    ARTICLE_QUERY,
    resolvedParams,
    options
  );

  if (!article) {
    notFound();
  }

  return (
    <>
      <HeroSmall />
      <ArticleDetail article={article} />
      <HomepageArticles />
    </>
  );
}
