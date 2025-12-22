'use client'
import { useParams } from "next/navigation"
import { eventIndex } from "@/lib/eventsList/eventIndex"
import style from '@/styles/eventSingle.module.css'
import Image from "next/image"

export default function PastEventBlog(){
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
                className={style.singleEventBio}
                dangerouslySetInnerHTML={{__html: selectedEvent?.eventPastBlog || ""}}
            />
        </article>
    )
}