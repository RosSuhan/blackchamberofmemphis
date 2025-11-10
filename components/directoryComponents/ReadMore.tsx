'use client'
import { useState } from "react"
import style from '@/styles/readMore.module.css'

interface ReadMoreProps {
    text: string;
    limit?: number;
}

export default function ReadMore({text, limit = 25}: ReadMoreProps){
    const [isExpanded, setIsExpanded] = useState(false);

    const words = text.split(" ");
    const isLongText = words.length > limit;
    const preview = words.slice(0, limit).join(" ");
    const displayText = isExpanded || !isLongText? text : `${preview}...`;

    return (
        <>
            {displayText}
            {isLongText && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={style.readMoreButton}
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            )}
        </>
    )
}