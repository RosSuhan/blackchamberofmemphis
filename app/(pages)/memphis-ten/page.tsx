import MemphisTenHero from "@/components/heroSections/MemphisTen";
import MtenMatters from "./(mtenComponents)/MtenMatters";
import ThreePillars from "./(mtenComponents)/ThreePillars";
import type { Metadata } from 'next';
import MtenByNumbers from "./(mtenComponents)/MtenByNumbers";
import MtenCallToAction from "./(mtenComponents)/MtenCallToAction";
import MTenOverview from "@/components/mTenOverview/page";

export const metadata: Metadata = {
    title: 'MemphisTen | Celebrating Black Entrepreneurs in Memphis',
    description: 'Discover MemphisTen — a bold initiative of the Black Chamber of Memphis showcasing top Black-owned businesses and innovators shaping the city’s economic future.',
    keywords: [
        'MemphisTen',
        'Memphis Black-owned businesses',
        'Memphis entrepreneurship',
        'Chamber business initiative',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/memphisten' },
    openGraph: {
        title: 'MemphisTen by the Black Chamber of Memphis',
        description: 'Highlighting Memphis’s leading Black entrepreneurs and innovators shaping the future.',
        url: 'https://blackchamberofmemphis.org/memphisten',
        images: [{ url: '/images/og-memphisten.jpg', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MemphisTen | Black Chamber of Memphis',
        description: 'Celebrating top Black-owned businesses and innovators in Memphis.',
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