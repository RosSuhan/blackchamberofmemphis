'use client'
import { useState } from 'react'
import Image from 'next/image'
import style from './video.module.css'

type VideoBlockProps = {
    videoID: string
    title: string
}

export default function VideoBlock({
    videoID,
    title,
} : VideoBlockProps){
    const [ play, setPlay ] = useState(false)

    if (play){
        return(
            <div
                className={style.videoBlock}
            >
                <iframe 
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
                    title={title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className={style.video}
                    ></iframe>
            </div>
        )
    }
    return (
        <div
            className={style.thumbnailBlock}
        >
            <button
                onClick={() => setPlay(true)}
                className={style.thumbnail}
                aria-label={`Play ${title}`}
            >
                <Image
                    src={`https://i.ytimg.com/vi/${videoID}/hqdefault.jpg`}
                    alt={title}
                    fill
                    sizes="100vw"
                    className={style.thumbnailImage}
                />
                ▶
            </button>
        </div>
    )
}