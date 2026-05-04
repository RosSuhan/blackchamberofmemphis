import PageHeroSection from "@/components/heroSections/pageHeroSection";
import PageTitleSection from "@/components/pageTitleSection/page";
import PastEvents from "@/components/PastEvents/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Past Events & Workshops | Black Chamber of Memphis Networking',
    description:
        'Explore past networking events, workshops, and business expos hosted by the Black Chamber of Memphis. Connect, collaborate, and grow your business community.',
    keywords: [
        'Memphis business past events',
        'networking Memphis',
        'Black Chamber events',
        'business workshops Memphis',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/past-events' },
    openGraph: {
        title: 'Past Events | Black Chamber of Memphis',
        description:
            'Read all about the business events, workshops, and networking opportunities that we attended in Memphis.',
        url: 'https://blackchamberofmemphis.org/past-events',
        images: [{ url: '/images/og-events.jpg', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Past Events | Black Chamber of Memphis',
        description:
        'Connect and grow your business through Memphis Chamber networking events.',
        images: ['/images/og-events.jpg'],
    },
};

export default function PastEventsPage(){
    return(
        <main>
            <PageHeroSection
                mainHeading='Past Events'
                subHeading=''
                searchbar = {false}
                ctaButtons={[]}
                placeholder = ""
            />
            
            <PastEvents/>
        </main>
    )
}