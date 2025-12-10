import type { Metadata } from "next";
import PageTitleSection from "@/components/pageTitleSection/page";
import EventsBlock from "@/components/EventsBlock/page";

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
            <PageTitleSection
                pageTitle="Events"
            />

            <EventsBlock/>
        </main>
    )
}