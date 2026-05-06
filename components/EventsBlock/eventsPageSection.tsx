import { eventIndex } from '@/lib/eventsList/eventIndex';
import Calendar from '../CALENDAR/page'
import style from './eventsPageSection.module.css'
import FeaturedEvent from './FeaturedEvent'
import CATsingleBlock from '../CATSINGLEBLOCK/page';

export default function EventsPageSection(){
    const today = new Date();
    today.setHours(0,0,0,0)

    const filteredEvents = eventIndex.filter(event => {
        const eventDateObj = new Date(event.sortDate);
        eventDateObj.setHours(0,0,0,0);

        const isUpcomingEvent = eventDateObj >= today;

        return isUpcomingEvent
    })
    
    return (
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
                    featuredEventAddressLink = {"/events/symposium"}
                    featuredEventAddress = {"Epicenter, 150 Peabody Pl, Memphis, TN 38103, United States"}
                    featuredEventDescription = {"The Black Chamber of Memphis Symposium is a flagship event focused on advancing entrepreneurship, economic mobility, and wealth-building within the community. Bringing together business owners, leaders, and professionals, the event offers a dynamic mix of networking, expert-led discussions, and practical insights designed to help entrepreneurs start, grow, and scale sustainable businesses."}
                    featuredEventActionLink = {`/events/symposium`}
                    featuredEventActionBtnText = {'Read More'}
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
    )
}