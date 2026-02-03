'use client'
import style from '@/styles/eventsCalendar.module.css'
import { useState } from 'react';
import { isPastEvent } from '@/lib/utils/isPastEvent';
import { eventIndex } from '@/lib/eventsList/eventIndex'
import { getUSFederalHolidays } from '@/lib/utils/usFederalHolidays';
import { getLocalHolidayIndex } from '@/lib/eventsList/localHolidayIndex';
import { BaselineArrowBack } from '../icons/BaselineArrowBack';
import { BaselineArrowForward } from '../icons/BaselineArrowForward';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarGrid(){
    const [ currentDate, setCurrentDate ] = useState(new Date(2026, 1));

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const holidays = [
        ...getUSFederalHolidays(year),
        ...getLocalHolidayIndex(year)
    ]

    const allHolidays = [...eventIndex, ...holidays];

    const monthEvents = allHolidays.filter((event) => {
        if (!event.sortDate) return false;

        const date = new Date(event.sortDate);
        return (
            date.getMonth() === month &&
            date.getFullYear() === year
        );
    });

    return(
        <section
            className={style.eventsCalendarSection}
        >
            
            <div
                className={style.eventsCalendarHeader}
            >
                <button
                    className={style.eventsCalendarIcon}
                    onClick={() => setCurrentDate(new Date(year, month - 1))}
                >
                    <BaselineArrowBack/>
                </button>

                <h2
                    className={style.eventsCalendarMonthDate}
                >
                    {currentDate.toLocaleString("default", { month: "long" })}{" "}{year}
                </h2>

                <button
                    className={style.eventsCalendarIcon}
                    onClick={() => setCurrentDate(new Date(year, month + 1))}
                >
                    <BaselineArrowForward/>
                </button>
            </div>
            <div
                className={style.eventsCalendarGrid}
            >
                {DAYS.map((day) => (
                    <div
                        key={day}
                        className={style.dayName}
                    >
                        {day}
                    </div>
                ))}

                {/* Empty cells before first day */}
                {Array.from({ length: firstDay }).map((_, i) => (
                <div
                    key={`empty-${i}`}
                    className={`${style.dayCell} ${style.empty}`}
                />
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const events = monthEvents.filter(e => e.sortDate === dateStr);

                    return (
                        <div
                            key={day}
                            className={style.dayCell}
                        >
                            <span
                                className={style.date}
                            >
                                {day}
                            </span>

                            {events.slice(0, 2).map((event) => {
                                const past = isPastEvent(event.sortDate);
                                const eventHref = past ? `/past-events/${event.id}` : `/events/${event.id}`
                                return(
                                <a 
                                    key={event.id}
                                    href={event.type === 'holiday' ? undefined : eventHref}
                                    className={`${style.event} ${event.type === 'holiday' ? style.holiday : ''}`}
                                    title={event.eventName}
                                >
                                    {event.eventName}
                                </a>
                            )})}

                            {events.length > 2 && (
                                <span
                                    className={style.more}
                                >
                                    +{events.length - 2} more
                                </span>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}