'use client'
import style from '@/styles/eventsCalendar.module.css'
import { eventIndex } from '@/lib/eventsList/eventIndex'

export default function CalendarAgende(){
    const today = new Date();

    const upcomingEvents = eventIndex.filter((event) => new Date(event.sortDate) >= today).sort((a, b) => new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime());

    return(
        <section
            className={style.agenda}
        >
            {upcomingEvents.map((event, index) => {
                const eventDate = new Date(event.sortDate);
                const monthKey = eventDate.toLocaleString("defaul", {
                    month: "long",
                    year: "numeric",
                });

                const prevEvent = upcomingEvents[index - 1];
                const prevMonthKey = prevEvent ? new Date(prevEvent.sortDate).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                })
                : null;

                const showMonthHeader = monthKey !== prevMonthKey;

                return(
                    <div
                        key={event.id}
                        className={style.monthAgenda}
                    >
                        {showMonthHeader && (
                            <h2
                                className={style.monthTitle}
                            >
                                {monthKey}
                            </h2>
                        )}

                        <a 
                            key={event.id}
                            href={`/events/${event.id}`}
                            className={style.agendaItem}
                        >
                            <div
                                className={style.agendaDate}
                            >
                                <span
                                    className={style.day}    
                                >
                                    {new Date(event.sortDate).getDate()}
                                </span>
                                <span
                                    className={style.weekday}
                                >
                                    {new Date(event.sortDate).toLocaleDateString("en-US", {
                                        weekday: "short"
                                    })}
                                </span>
                            </div>
                            <div
                                className={style.agendaDetails}
                            >
                                <strong
                                    className={style.agendaDetailsName}
                                >
                                    {event.eventName}
                                </strong>
                                {event.eventTime && (
                                    <span
                                        className={style.time}
                                    >
                                        {event.eventTime}
                                    </span>
                                )}
                            </div>
                        </a>
                    </div>
                )
            })}
        </section>
    )
}
// <h2
//                 className={style.monthTitle}
//             >
//                 {upcomingEvents.toLocaleString("default", {
//                     month: "long",
//                     year: "numeric"
//                 })}
//             </h2>

//             {upcomingEvents.map((event) => {
//                 const eventDate = new Date(event.sortDate);
//                 return(
//                     <a 
//                         key={event.id}
//                         href={`/events/${event.id}`}
//                         className={style.agendaItem}
//                     >
//                         <div
//                             className={style.agendaDate}
//                         >
//                             <span
//                                 className={style.day}    
//                             >
//                                 {new Date(event.sortDate).getDate()}
//                             </span>
//                             <span
//                                 className={style.weekday}
//                             >
//                                 {new Date(event.sortDate).toLocaleDateString("en-US", {
//                                     weekday: "short"
//                                 })}
//                             </span>
//                         </div>
//                         <div
//                             className={style.agendaDetails}
//                         >
//                             <strong
//                                 className={style.agendaDetailsName}
//                             >
//                                 {event.eventName}
//                             </strong>
//                             {event.eventTime && (
//                                 <span
//                                     className={style.time}
//                                 >
//                                     {event.eventTime}
//                                 </span>
//                             )}
//                         </div>
//                     </a>
//                 )
//             })}