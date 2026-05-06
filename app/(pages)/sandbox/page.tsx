import Link from 'next/link'
import style from './sandbox.module.css'
import Image from 'next/image'
import ReadMore from '@/components/READMORE/ReadMore'
import CATsingleBlock from '@/components/CATSINGLEBLOCK/page'
import PageHeroSection from '@/components/heroSections/pageHeroSection'
import BusinessBlock from '@/components/directoryComponents/BusinessBlock'
import FeaturedEvent from '@/components/EventsBlock/FeaturedEvent'
import Calendar from '@/components/CALENDAR/page'
import { eventIndex } from '@/lib/eventsList/eventIndex'

export default function Sandbox(){

    const today = new Date();
    today.setHours(0,0,0,0)

    const filteredEvents = eventIndex.filter(event => {
        const eventDateObj = new Date(event.sortDate);
        eventDateObj.setHours(0,0,0,0);

        const isUpcomingEvent = eventDateObj >= today;

        return isUpcomingEvent
    })

    return(
        <main
            className={style.pageHeroSection}
            // style={{background:"green", display:"flex", alignItems:"center", justifyContent:"space-evenly", padding:"4rem 0", flexWrap: "wrap", rowGap:"2rem", columnGap:'5%'}}
        >
            <PageHeroSection
                mainHeading = "Find events that move your business forward"
                subHeading = ""
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = ""
            />

            <section
                className={style.calendarSection}
            >
                <div
                    className={style.calendarSidebar}
                >
                
                    <Calendar/>
                    
                </div>
                <div
                    className={style.calendarEvents}
                >
                    <FeaturedEvent
                        // featuredEventId
                        featuredImage = {'/events/symposium/BCOM_Symposium_2025_Day2-16.jpg'}
                        featuredImageAlt = {'Black Chamber of Memphis Building Wealth In Our Community Symposium - August 28, 2026'}
                        featuredImageWidth = {2048}
                        featuredImageHeight = {1363}
                        featuredEventName = {'Building Wealth In Our Community Symposium'}
                        featuredEventDateTime = {'August 28, 2026'}
                        featuredEventPrice = {"Free"}
                        featuredEventAddressLink = {"/"}
                        featuredEventAddress = {"Epicenter"}
                        featuredEventDescription = {"The Black Chamber of Memphis Symposium is a flagship event focused on advancing entrepreneurship, economic mobility, and wealth-building within the community. Bringing together business owners, leaders, and professionals, the event offers a dynamic mix of networking, expert-led discussions, and practical insights designed to help entrepreneurs start, grow, and scale sustainable businesses."}
                    />

                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <CATsingleBlock
                                key = {event.id}
                                featureImage = {event.eventImage}
                                featureName = {event.eventName}
                                featureText = {event.eventDescription}
                                featureTextLimit = {15}
                                featureLink = {`/events/${event.id}`}
                                featureDate = {`${event.eventDate} ${event.eventTime}`}
                                featurePrice = {''}
                                featureLocation = {event.eventAddress}
                                featureLinkText = {'Read More'}
                            />
                        ))
                    ):
                        <p>
                            No events match your search or selected month.
                        </p>
                    }
                </div>
            </section>
        </main>
    )
}