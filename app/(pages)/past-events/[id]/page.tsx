'use client'
import { useParams } from "next/navigation"
import { eventIndex } from "@/lib/eventsList/eventIndex"
import style from '@/styles/eventSingle.module.css'
import Image from "next/image"
import { useState } from "react"
import clsx from "clsx"

export default function PastEventBlog(){
    const [ showGallery, setShowGallery ] = useState(false)

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
                className={style.toggleBtnRow}
            >
                <button 
                    type="button"
                    onClick={() => setShowGallery(false)}
                    className={clsx(showGallery ? style.toggleButton : style.toggleButtonActive)}
                >
                    Description
                </button>

                <button 
                    type="button"
                    onClick={() => setShowGallery(true)}
                    className={clsx(showGallery ? style.toggleButtonActive : style.toggleButton)}
                >
                    Images
                </button>
            </div>

            <div
                className={clsx(showGallery ? style.hide : style.singleEventBio)}
                dangerouslySetInnerHTML={{__html: selectedEvent?.eventPastBlog || ""}}
            />

            {selectedEvent?.eventGallery && selectedEvent?.eventGallery.length > 0 && (
                <div
                    className={clsx(showGallery ? style.galleryBlock : style.hide)}
                >
                    <h2
                        className={style.galleryHeading}
                    >
                        Event Gallery
                    </h2>

                    <div
                        className={style.masonryGrid}
                    >
                        {selectedEvent.eventGallery.map((image, index) => (
                            <div
                                key={index}
                                className={style.masonryItem}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={600}
                                    height={800}
                                    className={style.galleryImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
        </article>
    )
}