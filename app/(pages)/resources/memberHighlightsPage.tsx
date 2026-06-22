'use client'
import style from '@/styles/resourcesPage.module.css'
import { blogList } from '@/lib/blogList'
import ResourcesCatBlock from '@/components/CATSINGLEBLOCK/RESOURCESCATBLOCK'
import Link from 'next/link'
// import { useState } from 'react'

export default function MemberHighlightsPage(){
    // const [selectedBlogArticle, setSelectedBlogArticle] = useState('')

    // const filterBlogArticles = blogList.find(blog => blog.id === selectedBlogArticle)

    return(
        <section
            className = {style.resourcesBodySection}
        >
            {/* <div
                className={style.resourcesSideBar}
            > */}
                {/* {blogList.map((blog, index) => (
                    <Link
                        href={blog.blogReadLink}
                        key={index}
                        className={style.subCatBtn}
                        style={{textDecoration:'none'}}
                    >
                        {blog.blogName}
                    </Link>
                    <button
                        key={blog.id}
                        type='button'
                        className={style.subCatBtn}
                    >
                        {blog.blogName}
                    </button>
                ))} */}
            {/* </div> */}
            <div
                className={style.resourcesInformationBlock}
                style={{width:'100%'}}
            >
                {blogList?.map((blog) => (
                    <ResourcesCatBlock
                        key = {blog.id}
                        articleImage = {blog.blogImage}
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