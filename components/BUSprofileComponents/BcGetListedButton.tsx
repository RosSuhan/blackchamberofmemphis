'use client'
import { useState } from 'react'
import style from './BcGetListedButton.module.css'
import ListingFormComponent from '@/app/(pages)/get-listed/form/ListingFormComponent'
import { eventIndex } from '@/lib/eventsList/eventIndex'
import clsx from 'clsx'
import Link from 'next/link'


export default function BcGetListedButton(){
    const [ formOpen, setFormOpen ] = useState(false)
    const [ eventsBlock, showEventsBlock ] = useState(false)

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
            className={style.bcGetListedButton}
        >
            <button
                className='globalGoldButton'
                onClick={() => {
                    showEventsBlock(!eventsBlock)
                    setFormOpen(false)
                }}
            >
                Events
            </button>
            <div
                className={clsx(eventsBlock ? style.eventsBlockDiv : style.hide)}
            >
                <Link
                    href={`/events/symposium`}
                    className={style.bcGetListedEventsButton}
                >
                    <span
                        className={style.bcEventName}
                    >
                        Building Wealth in Our Community Symposium
                    </span>
                    <span
                        className={style.bcEventDate}
                    >
                        October 2, 2026
                    </span>
                </Link>
                {filteredEvents.map((event, index) => (
                    <Link
                        key={index}
                        href={`/events/${event.path}`}
                        className={style.bcGetListedEventsButton}
                    >
                        <span
                            className={style.bcEventName}
                        >
                            {`${event.eventName}`}
                        </span>
                        <span
                            className={style.bcEventDate}
                        >
                            {`${event.eventDate}`}
                        </span>
                    </Link>
                ))}
            </div>

            <button 
                type="button"
                className="globalGoldButton"
                onClick={()=> {
                    setFormOpen(!formOpen)
                    showEventsBlock(false)
                }}
            >
                Get Listed
            </button>

            <div
                className={clsx(formOpen ? style.bcGetListedFormBlock : style.hide)}
            >
                <ListingFormComponent/>
            </div>
        </section>
    )
}