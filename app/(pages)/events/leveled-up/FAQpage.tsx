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
        qes: `What should participants bring?`,
        ans: `
            <p>We are finalizing the preparation guidelines.</p>
            <p>A confirmation email will be sent with details on what to bring (e.g., laptop, documents, or nothing required).`
    },{
        faqIndex: 'q9',
        qes: `Is one-on-one coacing included?`,
        ans: `<p>Yes! All participants who complete the full four-part series will receive access to free 45-minute one-on-one coaching sessions with Brooke Benjamin.</p>
            <p>These sessions are available after the workshop series concludes.</p>`
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
    },{
        faqIndex: 'q12',
        qes: `Will participants receive any materials after the workshop?`,
        ans: `<p>Decisions regarding workbooks, templates, certificates, and additional resources are still being finalized.</p>
                <p>Updates will be shared before the first session.</p>`
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