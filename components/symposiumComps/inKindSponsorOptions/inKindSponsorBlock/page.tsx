'use client'
import { useState } from 'react'
import style from './inKindSponsorBlock.module.css'
import clsx from 'clsx'
import Link from 'next/link'

export default function InKindSponsorBlock(){
    const [ sponsorPopup, setSponsorPopup ] = useState<string | null>(null)

    const inKindSponsorOptions = [
        {
            popIndex : "popOne",
            title : "Creative Media Services (Design)",
            info : "Development of visual assets to support marketing, branding, and the on-site experience.",
            moreInfo : `
                <h3>Anticipated Scope:</h3>
                <ul>
                    <li>Social media posts</li>
                    <li>Featured speakers & entertainment graphics</li>
                    <li>Sponsor graphics</li>
                    <li>Session graphics</li>
                    <li>Event countdown graphics</li>
                    <li>Influencer content assets</li>
                    </li>General event graphics</li>
                    <li>Eventbrite header</li>
                    <li>Email header</li>
                    <li>Stage backdrop design</li>
                    <li>Step-and-repeat design</li>
                    <li>Signage and environmental branding</li>
                    <li>Program design</li>
                    <li>Slide deck templates and presentation visuals</li>
                    <li>Wayfinding materials</li>
                    <li>Coordination across all visual touchpoints to ensure brand consistency</li>
                </ul>`
        },
        {
            popIndex : "popTwo",
            title : "Decor & Design",
            info : "Design and execution of cohesive visual elements to elevate the event environment.",
            moreInfo : `
                <h3>Anticipated Scope:</h3>
                <ul>
                    <li>Stage furniture and soft seating elements</li>
                    <li>Pipe and drape or environmental design features</li>
                    <li>Branded or experiential activations</li>
                    <li>Coordination with floral, signage, and creative media partners</li>
                    <li>Installation and breakdown</li>
                </ul>
            `
        },
        {
            popIndex : "popThree",
            title : "Entertainment",
            info : "Curated entertainment experiences aligned with a professional audience.",
            moreInfo : `
                <h3>Momentum – Thursday, August 27:</h3>
                <ul>
                    <li>DJ or live entertainment (soloist, band, or hybrid)</li>
                    <li>High-energy, networking-friendly atmosphere (business/social vibe)</li>
                    <li>Optional Vendors (e.g., karaoke or engagement features)</li>
                </ul>
                <h3>Symposium – Friday, August 28:</h3>
                <ul>
                    <li>DJ for transitions, announcements, and audience engagement</li>
                </ul>
            `
        },
        {
            popIndex : "popFour",
            title : "Event Production (A/V, Lighting, Stage, Sound)",
            info : "Full-service production support to ensure a high-quality, seamless experience for all programming.",
            moreInfo : `
                <h3>Anticipated Scope:</h3>
                <ul>
                    <li>Audio/visual setup for main stage and breakout sessions</li>
                    <li>Stage design and setup (in coordination with decor vendor)</li>
                    <li>Lighting</li>
                    <li>Sound engineering for speakers, panels, and entertainment</li>
                    <li>Technical management and on-site support throughout both event days</li>
                </ul>
            `
        },
        {
            popIndex : "popFive",
            title : "Floral Design",
            info : "Design, produce, and install floral elements to enhance the overall event experience across both days.",
            moreInfo : `
                <h3>Anticipated Scope:</h3>
                <ul>
                    <li>Stage floral design and accents (main stage + breakout spaces as needed)</li>
                    <li>Grand entrance arrangements</li>
                    <li>Up to 30 small-scale arrangements (e.g., bud vases) for highboys, coffee tables, rounds, and stage accent tables</li>
                    <li>Design continuity across Momentum (Thursday) and Symposium (Friday)</li>
                    <li>Installation, transfer between events (if reused), and post-event breakdown</li>
                </ul>
            `
        },
        {
            popIndex : "popSix",
            title : "Influencer & Social Media Management",
            info : "Promo, Real-time, and post-event content to amplify visibility, engagement, and attendance.",
            moreInfo : `
                <h3>Anticipated Scope:</h3>
                <ul>
                    <li>Development of promotional content leading up to the event (reels, short-form video, announcements, etc.)</li>
                    <li>Manage BCoM’s Social Media Page</li>
                    <li>Reshare post to personal/business page</li>
                    <li>Live social media coverage (stories, posts, short-form video) during both event days</li>
                    <li>Audience engagement content during the event</li>
                    <li>Post-event recap content</li>
                    <li>Alignment with overall event messaging and branding</li>
                </ul>
            `
        },
        {
            popIndex : "popSeven",
            title : "Event Planner",
            info : "Operational support to ensure seamless planning and execution.",
            moreInfo : `
                <h3>Anticipated Scope:</h3>
                <ul>
                    <li>Vendor coordination and communication</li>
                    <li>Day-of event management and troubleshooting</li>
                    <li>Stage management and run-of-show execution</li>
                    <li>Staffing coordination (contractors and/or volunteers)</li>
                    <li>Support for registration, breakout sessions, and attendee flow</li>
                </ul>
                <h3>Additional Support:</h3>
                <ul>
                    <li>Coordination of speakers (scheduling, confirmations, briefing materials)</li>
                    <li>Oversight of setup and breakdown across all event components</li>
                </ul>
            `
        },
        {
            popIndex : "popEight",
            title : "Public Relations",
            info : "Drive visibility and attendance through press and advertising.",
            moreInfo : `
                <h3>Anticipated Scope:</h3>
                <ul>
                    <li>Develop and circulate press releases to major media outlets</li>
                    <li>Securing media interviews and press coverage</li>
                    <li>Outreach to media partners and press attendance coordination</li>
                    <li>Support in securing advertising placements </li>
                    <li>Email marketing support (attendees, members, partners)</li>
                    <li>Strategies to support registration growth and audience engagement</li>
                </ul>
            `
        },
        {
            popIndex : "popNine",
            title : "Photography",
            info : "Promo, Real-time, and post-event content to amplify visibility, engagement, and attendance.",
            moreInfo : `
                <h3>A. Headshot Photography</h3>
                <ul>
                    <li>On-site professional headshot station</li>
                    <li>Lighting, backdrop, and quick turnaround workflow</li>
                    <li>Designed for high participant volume</li>
                </ul>
                <h3>B. Event Photography</h3>
                <ul>
                    <li>Full coverage of Momentum (Thursday) and Symposium (Friday)</li>
                    <li>Capturing key moments, speakers, audience engagement, and networking</li>
                </ul>
                <h3>C. Selfie/Photo Activation</h3>
                <ul>
                    <li>Branded selfie station or interactive photo experience</li>
                    <li>Setup for both event days</li>
                    <li>Optional instant sharing or digital delivery integration</li>
                </ul>
            `
        },
        {
            popIndex : "popTen",
            title : "Signage & Environmental Branding",
            info : "Production and installation of branded materials to support wayfinding and visual identity.",
            moreInfo : `
                <h3>Anticipated Scope:</h3>
                <ul>
                    <liStep-and-repeat backdrop (printing and production)></li>
                    <li>Stage backdrop (printing/production as applicable)</li>
                    <li>Easel signage</li>
                    <li>Retractable banners</li>
                    <li>Wayfinding signage</li>
                    <li>Digital program (if applicable)</li>
                    <li>Coordination with creative/design team</li>
                </ul>
            `
        },
        {
            popIndex : "popEleven",
            title : "Videography",
            info : "Design and execution of cohesive visual elements to elevate the event environment.",
            moreInfo : `
                <h3>A. Event Coverage</h3>
                <ul>
                    <li>Video capture of Momentum (Thursday) and Symposium (Friday)</li>
                    <li>Highlighting key moments, audience engagement, and overall experience</li>
                </ul>
                <h3>B. Interview Content</h3>
                <ul>
                    <li>On-site interviews with attendees, speakers, and partners</li>
                    <li>Short-form content capture for post-event marketing and storytelling</li>
                </ul>
            `
        },
    ]

    return(
        <div
            className={style.inKindSponsorOptionRow}
        >
            {inKindSponsorOptions.map(({title, info, moreInfo, popIndex}, x) => (
                <div
                    className={style.inKindSponsor}
                    key={x}
                >
                    <h3
                        className={style.inKindSponsorTitle}
                    >
                        {title}
                    </h3>
                    <p
                        className={style.inKindSponsorInfo}
                    >
                        {info}
                    </p>
                    <button 
                        type="button"
                        className={style.inKindSponsorCTA}
                        onClick={() => setSponsorPopup(sponsorPopup === popIndex ? null : popIndex )}
                    >
                        Read more
                    </button>
                    <div
                        className={clsx(style.inKindSponsorPopUpBlock, sponsorPopup === popIndex && style.popUpOverlay)}
                        // className={style.popUpOverlay}
                    >
                        <div
                            className={style.inKindSponsorPopUp}
                        >
                            <div
                                className={style.closeButtonRow}
                            >
                                <button
                                    type='button'
                                    className={style.closeButton}
                                    onClick={() => setSponsorPopup(null)}
                                >
                                    X
                                </button>
                            </div>
                            <h3
                                className={style.inKindSponsorTitle}
                            >
                                {title}
                            </h3>
                            <div
                                dangerouslySetInnerHTML={{__html: moreInfo}}
                                className={style.popUpText}
                            />

                            <Link
                                href={"/events/symposium/creative-production-sponsorship/application"}
                                className={style.applicationLink}
                            >
                                Apply for this Sponsorship
                            </Link>
                        </div>
                    </div>
                        
                </div>
            ))}
        </div>
    )
}