import ArticleCarousel from "@/components/features/article-carousel";
import HomepageArticlesTitle from "@/components/features/homepage/homepage-articles-title";
import NoData from "@/components/features/no-data";
import { client } from "@/sanity/lib/client";
import { ARTICLES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const HomepageArticles = async () => {
    const articles = await client.fetch(ARTICLES_QUERY, {}, options);

    return (
        <section className="relative w-full bg-[#f9f7f4] text-[#0d1117] py-20 overflow-x-hidden">
            {/* Subtle radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)",
                }}
            />

            {/* Top gold divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

            <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16">
                <HomepageArticlesTitle />

                {articles.length === 0 ? (
                    <NoData sectionName="articles" />
                ) : (
                    <ArticleCarousel articles={articles} />
                )}
            </div>

            {/* Bottom gold divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        </section>
    );
};

export default HomepageArticles;