import type { Metadata } from "next";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import EventsPageSection from "@/components/EventsBlock/eventsPageSection";

export const metadata: Metadata = {
    title: 'Events & Workshops | Black Chamber of Memphis Networking',
    description:
        'Explore upcoming networking events, workshops, and business expos hosted by the Black Chamber of Memphis. Connect, collaborate, and grow your business community.',
    keywords: [
        'Memphis business events',
        'networking Memphis',
        'Black Chamber events',
        'business workshops Memphis',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/events' },
    openGraph: {
        title: 'Events | Black Chamber of Memphis',
        description:
            'Join business events, workshops, and networking opportunities in Memphis.',
        url: 'https://blackchamberofmemphis.org/events',
        images: [{ url: '/images/og-events.jpg', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Events | Black Chamber of Memphis',
        description:
        'Connect and grow your business through Memphis Chamber networking events.',
        images: ['/images/og-events.jpg'],
    },
};

export default function Events(){
    return(
        <main
            style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}
        >
            <PageHeroSection
                mainHeading = "Find events that move your business forward"
                subHeading = ""
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = ""
            />

            <EventsPageSection/>
        </main>
    )
}