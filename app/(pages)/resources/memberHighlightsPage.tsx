'use client'
import style from '@/styles/resourcesPage.module.css'
import { blogList } from '@/lib/blogList'
import ResourcesCatBlock from '@/components/CATSINGLEBLOCK/RESOURCESCATBLOCK'
// import Link from 'next/link'
// import { useState } from 'react'

type MemberHighlightsPageProp = {
    filterBlogArticles : {id?: string; blogName: string; blogImage: string; blogDescription : string; blogTitleColor: string; blogArticleDate: string; blogReadLink: string;}[]
    setSelectedBlogArticle : (value: string) => void
}

export default function MemberHighlightsPage({
    filterBlogArticles,
    setSelectedBlogArticle
}: MemberHighlightsPageProp){


    return(
        <section
            className = {style.resourcesBodySection}
        >
            <div
                className={style.resourcesSideBar}
            > 
                {blogList.map((blog) => (
                    <button
                        key={blog.id}
                        type='button'
                        className={style.subCatBtn}
                        onClick={() =>setSelectedBlogArticle(blog.id)}
                    >
                        {blog.blogName}
                    </button>
                ))}
            </div>
            <div
                className={style.resourcesInformationBlock}
            >
                {filterBlogArticles?.map((blog) => (
                    <ResourcesCatBlock
                        key = {blog.id}
                        articleImage = {blog.blogImage}
                        articleImageWidth = {1300}
                        articleImageHeight={800}
                        articleTitle = {blog.blogName}
                        articleDescription = {blog.blogDescription}
                        articleOffering={[]}
                        articleServeStage={[]}
                        articleReadPath = {blog.blogReadLink}
                    />
                ))}
            </div>
        </section>
    )
}