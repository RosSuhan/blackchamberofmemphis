import BlogThumbNail from "@/components/blogComponents/blogThumbNail";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import PageTitleSection from "@/components/pageTitleSection/page";
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Blog & Insights | Black Chamber of Memphis | Business, Leadership & Community Impact',
    description: 'Explore insights, stories, and perspectives from the Black Chamber of Memphis highlighting business leadership, economic empowerment, and community impact across Memphis and the Mid-South.',
    keywords: [
        'Black Chamber of Memphis blog',
        'Memphis business insights',
        'economic empowerment stories',
        'community impact businesses',
        'Black-owned business leadership',
        'Memphis entrepreneurship resources',
    ],
    alternates: {
        canonical: 'https://blackchamberofmemphis.org/blog',
    },
    openGraph: {
        title: 'Blog & Insights | Black Chamber of Memphis',
        description: 'Stories and perspectives on business leadership, economic equity, and community impact in Memphis and the Mid-South.',
        url: 'https://blackchamberofmemphis.org/blog',
        images: [
            {
                url: '/images/og-blog.jpg',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog & Insights | Black Chamber of Memphis',
        description: 'Insights and stories highlighting business leadership, economic empowerment, and community impact.',
        images: ['/images/og-blog.jpg'],
    },
};


export default function Blog(){
    return(
        <main>
            <PageHeroSection
                mainHeading='Blog'
                subHeading=''
                searchbar = {false}
                ctaButtons={[]}
                placeholder=""
            />

            <section
                style={{width:"100%", minHeight:"50svh", display:"flex", flexWrap:"wrap", alignItems:"flex-start", justifyContent:"space-evenly", padding:"3rem 0", rowGap:"2rem"}}
            >
                <BlogThumbNail/>
            </section>
            
        </main>
    )
}