import MLKHero from "@/components/mlkComponents/mlkHero";
import MLKLedger from "@/components/mlkComponents/mlkLedger";
import MLKOurAction from "@/components/mlkComponents/mlkOurAction";
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Honoring the Life and Legacy of Dr. Martin Luther King, Jr. | Black Chamber of Memphis',
    description: 'Honoring Dr. Martin Luther King, Jr. and reflecting on his enduring call for economic justice, dignity, and opportunity in Memphis and beyond.',
    keywords: [
        'Martin Luther King Jr',
        'MLK legacy',
        'economic justice',
        'civil rights and economic justice',
        'Black economic empowerment',
        'Black-owned businesses',
        'Memphis civil rights',
        'Black Chamber of Memphis',
        'economic equity',
        'Dr. King economic justice'
    ],
    alternates: {
        canonical: 'https://blackchamberofmemphis.org/blog/honoring-martin-luther-king'
    },
    openGraph: {
        title: 'Honoring the Life and Legacy of Dr. Martin Luther King, Jr.',
        description: 'A reflection on Dr. King’s belief that civil rights and economic justice are inseparable—and how that vision guides our work today.',
        url: 'https://blackchamberofmemphis.org/blog/honoring-martin-luther-king',
        images: [
            {
                url: '/images/og-mlk.jpg',
                width: 1200,
                height: 630,
                alt: 'Honoring the life and legacy of Dr. Martin Luther King, Jr.'
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Honoring the Life and Legacy of Dr. Martin Luther King, Jr.',
        description: 'Reflecting on Dr. King’s call for economic justice, dignity, and opportunity—then and now.',
        images: ['/images/og-mlk.jpg'],
    },
};


export default function MLK(){
    return(
        <main
            style={{padding:"2rem 0 0 0"}}
        >
            <MLKHero/>

            <MLKLedger/>

            <MLKOurAction/>
        </main>
    )
}