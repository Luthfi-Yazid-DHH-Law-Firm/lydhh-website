import ArticleDetailBody from '@/components/features/articles/article-detail-body'
import { ARTICLE_QUERYResult } from '@/sanity/types'
import { FC } from 'react';

interface ArticleDetailProps {
  article: ARTICLE_QUERYResult;
}

const ArticleDetail: FC<ArticleDetailProps> = ({ article }) => {
  return (
    <section className='w-full flex items-center justify-center py-20 px-4 lg:px-16'>
        <div className='w-full lg:w-[830px]'>
            <ArticleDetailBody article={article} />
        </div>
    </section>
  )
}

export default ArticleDetail