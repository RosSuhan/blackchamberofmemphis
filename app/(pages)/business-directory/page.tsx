import type { Metadata } from "next"
import { Suspense } from "react";
import NewDirectory from "./newDirectory";

export const metadata: Metadata = {
    title: 'Memphis Business Directory | Black Chamber of Memphis',
    description:
        'Discover and support local businesses in Memphis through the official Black Chamber of Memphis Business Directory. Find trusted local entrepreneurs, services, and community leaders across Greater Memphis.',
    keywords: [
        'Memphis business directory',
        'local business listings Memphis',
        'Memphis small business directory',
        'find local businesses Memphis',
        'Greater Memphis entrepreneurs',
        'Black Chamber of Memphis directory',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/business-directory' },
    openGraph: {
        title: 'Memphis Business Directory | Black Chamber of Memphis',
        description:
        'Browse the official Black Chamber of Memphis Business Directory. Discover and support trusted local entrepreneurs, services, and community leaders across Greater Memphis.',
        url: 'https://blackchamberofmemphis.org/business-directory',
        images: [{ url: '/assets/bcom-building-black-business-in-memphis-since-1970.png', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Memphis Business Directory | Black Chamber of Memphis',
        description:
        'Browse the official Black Chamber of Memphis Business Directory. Discover and support trusted local entrepreneurs, services, and community leaders across Greater Memphis.',
        images: ['/images/og-directory.jpg'],
    },
};

export default function BusinessDirectory(){

    return(
        <main
            style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}
        >
            <Suspense fallback={<div>Loading directory...</div>}>
                <NewDirectory/>
            </Suspense>
        </main>
    )
}