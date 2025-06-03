import ArticlesCard from '@/components/composites/articles/articles-card'
import React from 'react'

const ArticlesGrid = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
    </div>
  )
}

export default ArticlesGrid