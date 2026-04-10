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
                    
                    {/* <CountdownTimer
                        eventDate = {"August 27, 2026 00:00:00"}
                    /> */}
                    
                    <h2
                        className={style.symposiumEventDate}
                    >
                        August 27 - 28, 2026
                    </h2>
                    {showButtons ?
                        <TwoButtonRow
                            buttonsInfo={ctaButtons}
                        />
                    : null}
                </div>
                <Image
                    src={'/events/symposium/BCOM_Symposium_2025_Day2-16.jpg'}
                    alt=''
                    width={2048}
                    height={1363}
                    className={style.symposiumHeroBackgroundImage}
                />
            </section>
    )
}