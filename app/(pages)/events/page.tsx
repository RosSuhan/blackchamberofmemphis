import type { Metadata } from "next";
import PageTitleSection from "@/components/pageTitleSection/page";
import EventsCalendar from "@/components/eventsCalendar/page";
import Link from "next/link";

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

            <Link
                href={'/events/events-search'}
                style={{margin:"2rem 0 1rem 0", padding:"1rem 2rem", border:"solid var(--gold) 2px", borderRadius:"8px", textDecoration:"none", color:"var(--gold)", fontSize:"1.25rem", background:"#3e3e3e"}}
            >
                Do you know the event you are looking for?

                <span
                    style={{marginLeft:"2rem"}}
                >
                    Search Your Event
                </span>
            </Link>

            <EventsCalendar/>
        </main>
    )
}