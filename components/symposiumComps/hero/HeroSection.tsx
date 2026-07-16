'use client'
import CountdownTimer from '@/components/countDownTimer/page'
import style from './heroSection.module.css'
import Image from 'next/image'
import TwoButtonRow from '@/components/TWOBUTTONROW/page'

type SymposiumHeroProps = {
    showButtons: boolean,
    ctaButtons: {path: string, buttonName: string}[],
}

export default function SymposiumHero({showButtons, ctaButtons}: SymposiumHeroProps){
    return(
        <section
                className={style.symposiumHero}
            >
                <div
                    className={style.symposiumHeroOverlay}
                >
                    <h1
                        className={style.symposiumMainHeading}
                    >
                        <span className={style.symBigHeading}>BUILDING WEALTH</span>
                        <span className={style.symSmallHeading}>IN OUR</span>
                        <span className={style.symMedHeading}>COMMUNITY</span>
                    </h1>
                    
                    <CountdownTimer
                        eventDate = {"October 2, 2026 00:00:00"}
                    />
                    
                    <h2
                        className={style.symposiumEventDate}
                    >
                        October 2, 2026
                    </h2>
                    {showButtons ?
                        <TwoButtonRow
                            buttonsInfo={ctaButtons}
                        />
                    : null}
                </div>
                <Image
                    src={'/events/symposium/symposium-2026-hero.webp'}
                    alt=''
                    width={750}
                    height={900}
                    className={style.symposiumHeroBackgroundImageMobile}
                />
                <Image
                    src={'/events/symposium/bcom-symposium-2025.webp'}
                    alt=''
                    width={2048}
                    height={1363}
                    className={style.symposiumHeroBackgroundImageDesktop}
                />
            </section>
    )
}