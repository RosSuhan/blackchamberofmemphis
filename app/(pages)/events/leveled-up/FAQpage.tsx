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
        ans: `<p>All sessions will be held <strong>in person at Epicenter Memphis</strong>.</p>`
    },
    {
        faqIndex : 'q2',
        qes: `Will recordings be available afterward?`,
        ans: `<p>Recordings will not be available after the workshops.<p>`
    },{
        faqIndex : 'q3',
        qes: `Are participants choosing one time slot for all four sessions?`,
        ans: `<p>Participants will choose one time slot (10:00 AM–12:00 PM or 2:00 PM–4:00 PM) and must attend that same slot for all four workshops.</p>`
    },{
        faqIndex : 'q4',
        qes: `Are the time slots identical for each week?`,
        ans: `<p>The time slots remain identical across all dates.</p>`
    },{
        faqIndex : 'q5',
        qes: `Are seats limited?`,
        ans: `<p>Yes. Each time slot is limited to 25 participants to ensure a high-quality, interactive experience.</p>`
    },{
        faqIndex : "q6",
        qes: `Is there a waitlist?`,
        ans: `<p>Yes. Once a session reaches capacity, a waitlist will open.</p>`
    },{
        faqIndex: 'q7',
        qes: `Is there a cost to attend?`,
        ans: `<p>The series is free for ITEP participants, BCoM Members, and paid BCoM participants. Pricing for non-members will be announced shortly.`
    },{
        faqIndex : 'q7',
        qes: `Who is this workshop designed for?`,
        ans: `
            <p>LeveledUp Money is open to business owners of all sizes, ages, and structures - from emerging solopreneurs to established small businesses.</p>
            <p>No prior financial or tax experience is required; however, attendees must be decision-makers in their business.</p>`
    },{
        faqIndex: 'q8',
        qes: `Will there be printed materials?`,
        ans: `
            <p>A printed workbook will be provided at Workshop 1</p>
            <p>Participants will receive access to a digital portal with worksheets, templates, and toolkits used throughout the four-part series</p>`
    },{
        faqIndex: 'q9',
        qes: `Is one-on-one coacing included?`,
        ans: `<p>One complimentary 45-minute one-on-one coaching session provided by Leveled Up Money<p>
                <p>Sessions may be facilitated by Brooke Benjamin Kelley, Esq., LL.M., or a qualified Leveled Up Money coach</p>
                <p>Sessions are intended to help participants apply workshop concepts to their business</p>`
    },{
        faqIndex: 'q10',
        qes: `Can participants reschedule their time slot?`,
        ans: `<p>Yes - rescheduling is allowed <strong>only if</strong> space is available in the alternate time slot, and applies to all remaining sessions.</p>`
    },{
        faqIndex: 'q11',
        qes: `What should you know about parking and accessibility?`,
        ans: `<p>Parking is <strong>not free</strong>, and attendees will receive confirmed parking instructions once finalized.</p>
            <p>The venue is <strong>fully accessible</strong>.</p>
            <p>Light refreshments and water will be provided.</p>`
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