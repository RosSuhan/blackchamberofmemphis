'use client'
import style from './leveledUp.module.css'
import clsx from "clsx";
import { ChevronDown } from "@/components/icons/ChevronDown";
import { ChevronUp12 } from "@/components/icons/ChevronUp";
import { useState } from "react";

const faqList = [
    {
        faqIndex : 'q1',
        qes: `Will the workshop sessions be <strong>in person</strong>, <strong>virtual</strong>, or <strong>hybrid</strong>?`,
        ans: `The sessions will be <strong>in person</strong>.`
    },
    {
        faqIndex : 'q2',
        qes: `Will recordings be available afterward?`,
        ans: `No recordings will be available`
    },{
        faqIndex : 'q3',
        qes: `Are participants choosing one time slot for all four sessions?`,
        ans: `Yes, you can only choose one time slot and that will be for all 4 workshops.`
    },{
        faqIndex : 'q4',
        qes: `Are the time slots identical for each week?`,
        ans: `Yes, it is identical for each week.`
    },{
        faqIndex : 'q5',
        qes: `Are seats limited?`,
        ans: `Yes, seats are very limited and the workshop is very popular. Therefore, you should not hisitate to book your seat.`
    },{
        faqIndex : 'q6',
        qes: `Is the workshop <strong>free, paid, or free for members only?`,
        ans: `Free for members only.`
    }
]


export default function FAQpage(){
    const [ openQuestion, setOpenQuestion ] = useState<string | null>(null)

    return(
        <>
            {faqList.map(({faqIndex, qes, ans}, f) => (
                    <div
                        key={f}
                        className={style.faqBlock}
                    >
                        <h3
                            className={style.faqQuestionBlock}
                            onClick={() => setOpenQuestion(openQuestion === faqIndex ? null : faqIndex)}
                        >
                            <div
                                dangerouslySetInnerHTML={{__html: qes}}
                                className={clsx(style.faqQuestion, openQuestion === faqIndex && style.faqActive)}
                            />

                            <ChevronDown
                                className={clsx(style.chev, openQuestion === faqIndex && style.close)}
                            />

                            <ChevronUp12
                                className={clsx(style.chev, openQuestion !== faqIndex && style.close)}
                            />
                        </h3>
                        
                        <div 
                            dangerouslySetInnerHTML={{__html: ans}}
                            className={clsx(style.faqAnswer, openQuestion !== faqIndex && style.close)}
                        />
                    </div>
                ))}
        </>
    )
}