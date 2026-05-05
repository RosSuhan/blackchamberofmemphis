'use client'
import style from '@/styles/eventsPage.module.css'
import Image from 'next/image'
import { eventIndex } from '@/lib/eventsList/eventIndex'
import { useState } from 'react'
import ReadMore from '../READMORE/ReadMore'
import { Clock } from '../icons/Clock'

export default function PastEvents(){
    const [ searchTerm, setSearchTerm ] = useState('');
    
    const today = new Date();
    today.setHours(0,0,0,0);

    const filteredEvents = eventIndex.filter(event => {
        const eventDate = new Date(event.sortDate);
        eventDate.setHours(0,0,0,0);

        const isPastEvent = eventDate < today;

        const matchesSearch = event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) || event.eventDescription.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesSearch && isPastEvent
    }).sort((a,b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime());

    return(
        <section
            className={style.eventsDisplaySection}
        >
            <div
                className={style.eventsSearchBarRow}
            >
                <input 
                    type="text" 
                    placeholder='Search events...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={style.searchInput}
                />
            </div>

            {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                    
                    <div
                        className={style.eventsBlock}
                        key={event.id}
                    >
                        <Image
                            src={event.eventImage}
                            alt={event.eventImageAlt}
                            width={1300}
                            height={800}
                            className={style.eventsImage}
                        />
    
                        <div
                            className={style.eventsDetailsBlock}
                        >
                            <span
                                className={style.eventsDateTimeLocation}
                            >
                                <Clock
                                    className={style.eventsDateTimeLocationIcon}
                                /> 
                                {`${event.eventDate}`}
                            </span>
                            
                            <h2
                                className={style.eventsName}
                            >
                                {event.eventName}
                            </h2>
                            <p
                                className={style.eventsInfo}
                            >
                                <ReadMore
                                    text={event.eventPastDescription}
                                    limit={20}
                                />
                            </p>
                            
                            <div
                                className={style.eventsCTArow}
                            >
                                <a 
                                    href={`/past-events/${event.id}`}
                                    className={style.eventsCTA}
                                >
                                    Read more about this event
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p
                    className={style.sorryMessage}
                >
                    No events match your search or selected month.
                </p>
            )}
        </section>
    )
}