import Link from 'next/link'
import style from './partnerWithUs.module.css'

export default function PartnerWithUs(){
    const partnershipOptions = [
        {
            title: "Corporate Sponsorship",
            intro: "Invest in the future of Memphis while gaining visibility, access, and leadership positioning.",
            buttonName: "Explore Corporate Sponsorship",
            path: '/events/symposium/sponsorship'
        },
        // {
        //     title: "Creative & In-Kind Sponsorship",
        //     intro: " Showcase your services, contribute to the experience, and connect with new opportunities.",
        //     buttonName: "Become a Creative Partner",
        //     path: "/events/symposium/creative-production-sponsorship"
        // }
    ]

    return(
        <section
            className={style.partnerWithUsSection}
        >
            <h2
                className={style.partnerSectionHeading}
            >
                Partner With Us To Build Entrepreneur City
            </h2>
            <p
                className={style.partnerSectionParagraph}
            >
                The Symposium is a signature initiative of MemphisTEN, BCoM’s economic development framework, designed to:
            </p>

            {partnershipOptions.map(({title, intro, buttonName, path}, index) => (
                <div
                    className={style.partnerOptionBlock}
                    key={index}
                >
                    <h3
                        className={style.partnerTitle}
                    >
                        {title}
                    </h3>
                    <p
                        className={style.partnerIntro}
                    >
                        {intro}
                    </p>

                    <Link
                        href={path}
                        className={style.partnerCTAButton}
                    >
                        {buttonName}
                    </Link>
                </div>
            ))}
        </section>
    )
}