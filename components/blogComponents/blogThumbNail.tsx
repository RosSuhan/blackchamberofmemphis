import style from '@/styles/blogThumbNail.module.css'
import Image from 'next/image'
import Link from 'next/link'

type BlogListProp = {
    id: string;
    blogName: string;
    blogImage: string;
    blogTitleColor: string;
    blogArticleDate: string;
    blogReadLink: string;
}

const blogList : BlogListProp[] = [
    {
        id: 'mlk',
        blogName: `Honoring Dr. Martin Luther King Jr.`,
        blogImage: `/blog/mlk/mlk-hero-desktop.webp`,
        blogTitleColor: `#ffffff`,
        blogArticleDate: "19 Jan 2026",
        blogReadLink: `/blog/honoring-martin-luther-king`
    },
    // {
    //     id: 'test',
    //     blogName: `Honoring Dr. Martin Luther King Jr.`,
    //     blogImage: `/blog/mlk/mlk-hero-desktop.webp`,
    //     blogTitleColor: `#ffffff`,
    //     blogArticleDate: "19 Jan 2026",
    //     blogReadLink: `/blog/honoring-martin-luther-king`
    // },
]


export default function BlogThumbNail(){
    return(
        <>
        {blogList.map(({id, blogName, blogImage, blogTitleColor, blogArticleDate, blogReadLink}: BlogListProp) => (
            <div
                className={style.blogBlock}
                key={id}
            >
                <div
                    className={style.blogContentBlock}
                >
                    <Image
                        src={blogImage}
                        alt={`Blog Image for ${blogName}`}
                        width={200}
                        height={200}
                        className={style.blogBackgroundImage}
                    />

                    <div
                        className={style.blogTextBlock}
                    >
                        <p
                            className={style.blogDate}
                        >
                            {blogArticleDate}
                        </p>

                        <div
                            className={style.blogTitleBlock}
                        >
                            <h2
                                className={style.blogTitle}
                                style={{color:blogTitleColor}}
                            >
                                {blogName}
                            </h2>

                            <Link
                                href={blogReadLink}
                                className={style.blogReadButton}
                            >   
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}