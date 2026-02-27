import type { Metadata } from "next"
import NewDirectory from "./newDirectory";

export const metadata: Metadata = {
    title: 'Black-Owned Business Directory in Memphis | Support Local Entrepreneurs',
    description:
        'Discover and support Black-owned businesses in Memphis through the official Black Chamber of Memphis Business Directory. Find trusted local entrepreneurs, services, and community leaders.',
    keywords: [
        'Black-owned business directory Memphis',
        'Memphis business listings',
        'support Black businesses Memphis',
        'local Black entrepreneurs',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/business-directory' },
    openGraph: {
        title: 'Business Directory | Black Chamber of Memphis',
        description:
            'Discover and support Black-owned businesses in Memphis through the official Black Chamber of Memphis Business Directory. Find trusted local entrepreneurs, services, and community leaders.',
        url: 'https://blackchamberofmemphis.org/business-directory',
        images: [{ url: '/images/og-directory.jpg', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Business Directory | Black Chamber of Memphis',
        description:
            'Discover and support Black-owned businesses in Memphis through the official Black Chamber of Memphis Business Directory. Find trusted local entrepreneurs, services, and community leaders.',
        images: ['/images/og-directory.jpg'],
    },
};

export default function BusinessDirectory(){

    return(
        <main
            style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}
        >
            <NewDirectory/>
        </main>
    )
}