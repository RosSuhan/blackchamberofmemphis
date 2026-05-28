import MemphisTenHero from "@/components/heroSections/MemphisTen";
import MtenMatters from "./(mtenComponents)/MtenMatters";
import ThreePillars from "./(mtenComponents)/ThreePillars";
import type { Metadata } from 'next';
import MtenByNumbers from "./(mtenComponents)/MtenByNumbers";
import MtenCallToAction from "./(mtenComponents)/MtenCallToAction";
import MTenOverview from "@/components/mTenOverview/page";

export const metadata: Metadata = {
    title: 'MemphisTen | Small Business Growth & Job Creation Initiative | Black Chamber of Memphis',
    description:
        'MemphisTen is the Black Chamber of Memphis economic empowerment initiative targeting 8,000 new jobs by 2030. Through advocacy, access, and acceleration — we help Memphis small businesses scale, hire, and thrive.',
    keywords: [
        'MemphisTen',
        'Memphis small business growth',
        'Memphis job creation initiative',
        'small business support Memphis',
        'Memphis entrepreneur programme',
        'back office support Memphis',
        'Memphis procurement support',
        'Black Chamber of Memphis initiative',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/memphis-ten' },
    openGraph: {
        title: 'MemphisTen | Helping Memphis Small Businesses Scale & Create Jobs',
        description:
        'MemphisTen is BCOM\'s signature initiative to create 8,000 jobs by 2030 — supporting Memphis entrepreneurs through back office services, procurement pipelines, and acquisition strategies.',
        url: 'https://blackchamberofmemphis.org/memphis-ten',
        siteName: 'Black Chamber of Memphis',
        images: [{ url: '/images/og-memphisten.jpg', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MemphisTen | Helping Memphis Small Businesses Scale & Create Jobs',
        description:
        'BCOM\'s MemphisTen initiative aims to create 8,000 Memphis jobs by 2030 through advocacy, procurement access, back office support, and business acceleration.',
        images: ['/images/og-memphisten.jpg'],
    },
}; 

export default function MemphisTen(){
    return(
        <main>
            <MemphisTenHero/>

            <MtenMatters/>

            <ThreePillars/>

            <MtenByNumbers/>

            <MTenOverview/>

            <MtenCallToAction/>

        </main>
    )
}