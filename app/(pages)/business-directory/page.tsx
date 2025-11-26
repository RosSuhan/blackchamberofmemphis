import PageTitleSection from "@/components/pageTitleSection/page"
import style from '@/styles/businessDirectory.module.css'
import Link from "next/link"
import { categories } from '@/lib/categories'
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Black-Owned Business Directory | Memphis Entrepreneurs & Services',
    description:
        'Find and support Memphis-area Black-owned businesses with the Black Chamber of Memphis Directory — your trusted guide to local entrepreneurs, products, and services.',
    keywords: [
        'Black-owned business directory Memphis',
        'Memphis business listings',
        'support Black businesses Memphis',
        'local Black entrepreneurs',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/directory' },
    openGraph: {
        title: 'Business Directory | Black Chamber of Memphis',
        description:
            'Discover and support Black-owned businesses in the Greater Memphis area.',
        url: 'https://blackchamberofmemphis.org/directory',
        images: [{ url: '/images/og-directory.jpg', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Business Directory | Black Chamber of Memphis',
        description:
            'Explore Memphis’s network of Black-owned businesses and community entrepreneurs.',
        images: ['/images/og-directory.jpg'],
    },
};

export default function BusinessDirectory(){

    return(
        <main
            className={style.businessDirectoryPage}
        >
            <PageTitleSection
                pageTitle="All Categories:"
            />

            {/* searchBar */}

            <section
                className={style.busDirectorySection}
            >
                {categories.map(({name, id}, index) => (
                    <Link
                        key={index}
                        href={"/business-directory/" + id}
                        className={style.categorieLink}
                    >
                        {name}
                    </Link>
                ))}
                    
            </section>
        </main>
    )
}