import ArticlesGrid from "@/components/features/articles/articles-grid"

const ArticlesList = () => {
  return (
    <section className="w-full flex items-center justify-center py-20 px-8 lg:px-16 text-black">
        <div className="2xl:w-[1200px] w-full">
            <ArticlesGrid />
        </div>
    </section>
  )
}

export default ArticlesList