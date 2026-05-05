'use client'
import style from '@/styles/eventsPage.module.css'
import Image from 'next/image'
import { Clock } from '../icons/Clock'
import { BaselineLocationOn } from '../icons/Location'
import { eventIndex } from '@/lib/eventsList/eventIndex'
import { useState } from 'react'
import ReadMore from '../READMORE/ReadMore'

export default function EventsBlock(){
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ selectedMonth, setSelectedMonth ] = useState('all')

    const today = new Date();
    today.setHours(0,0,0,0);

    const filteredEvents = eventIndex.filter(event => {
        const matchesSearch = event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) || event.eventDescription.toLowerCase().includes(searchTerm.toLowerCase());

        const eventDateObj = new Date(event.sortDate);
        eventDateObj.setHours(0,0,0,0);

        const matchesMonth = selectedMonth === "all" || eventDateObj.getMonth() + 1 === Number(selectedMonth);

        const isUpcomingEvent = eventDateObj >= today;

        return matchesSearch && matchesMonth && isUpcomingEvent
    })
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

                <select 
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className={style.monthSelect}
                >
                    <option value="all">All Months</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
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
                                {`${event.eventDate} - ${event.eventTime}`}
                            </span>
                            <a 
                                href={event.eventAddressLink}
                                className={style.eventsDateTimeLocation}
                            >
                                <BaselineLocationOn
                                    className={style.eventsDateTimeLocationIcon}
                                /> 
                                {event.eventAddress}
                            </a>
                            
                            <h2
                                className={style.eventsName}
                            >
                                {event.eventName}
                            </h2>
                            <p
                                className={style.eventsInfo}
                            >
                                <ReadMore
                                    text={event.eventDescription}
                                    limit={20}
                                />
                            </p>
                            
                            <div
                                className={style.eventsCTArow}
                            >
                                <a 
                                    href={event.eventCTAbuttonLink}
                                    className={style.eventsCTA}
                                >
                                    {event.eventCTAbuttonText}
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