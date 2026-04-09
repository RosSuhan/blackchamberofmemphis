'use client'
import Image from 'next/image'
import style from './ctaSection.module.css'

export default function CtaSection(){
    return(
        <section
            className={style.ctaSection}
        >
            <div
                className={style.ctaTextBlock}
            >
                <h3
                    className={style.ctaHeading}
                >
                    Event Experience
                </h3>
                <ul
                    className={style.ctaList}
                >
                    <li
                        className={style.ctaItem}
                    >
                        Momentum: Offical Pre-Symposium Party
                    </li>
                    <li
                        className={style.ctaItem}
                    >
                        Presidents Breakfast
                    </li>
                    
                    <li
                        className={style.ctaItem}
                    >
                        Conversations and Workshops
                    </li>
                </ul>
                <a href="#sponsorship"
                    className={style.ctaButton}
                >
                    Become a Sponsor
                </a>
            </div>
            <Image
                src={'/events/symposium/BCOM_Symposium_2025_Day2-16.jpg'}
                alt=''
                width={2048}
                height={1363}
                className={style.sectionFeatureImage}
            />
        </section>
    )
}

