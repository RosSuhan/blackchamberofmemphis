'use client'
import Image from "next/image";
import style from '@/styles/eventSingle.module.css'
import { BaselineCalendarMonth } from "@/components/icons/Calendar";
import { Clock } from "@/components/icons/Clock";
import { BaselineLocationOn } from "@/components/icons/Location";

import { eventIndex } from "@/lib/eventsList/eventIndex";
import { useParams } from "next/navigation";

export default function EventSingle(){
    const params = useParams();
    const id = params?.id as string

    if(!id) return null;

    const selectedEvent = eventIndex.find(c => c.id === id)
    return(
        <article
            className={style.eventSinglePage}
        >
            <Image
                src={selectedEvent?.eventImage || ""}
                alt={selectedEvent?.eventName || ""}
                width={1300}
                height={800}
                className={style.singleEventImage}
            />

            <div
                className={style.eventSchedule}
            >
                <span
                    className={style.eventScheduleItem}
                >
                    <BaselineCalendarMonth
                        className={style.eventSingleIcon}
                    />
                    {selectedEvent?.eventDate}
                </span>
                <span
                    className={style.eventScheduleItem}
                >
                    <Clock
                        className={style.eventSingleIcon}
                    />
                    {selectedEvent?.eventTime}
                </span>
                <span
                    className={style.eventScheduleItem}
                >
                    {selectedEvent?.eventAddressLink ? 
                        <>
                            <a href={selectedEvent?.eventAddressLink}>
                                <BaselineLocationOn
                                    className={style.eventSingleIcon}
                                />
                                {selectedEvent?.eventAddress}
                            </a>
                        </>
                    : 
                        <>
                            <BaselineLocationOn
                                className={style.eventSingleIcon}
                            />
                            {selectedEvent?.eventAddress}
                        </>}
                </span>
            </div>

            <div
                className={style.singleEventBio}
                dangerouslySetInnerHTML={{__html: selectedEvent?.eventLongDescription || ""}}
            />
        </article>
    )
}