import style from '@/styles/homeHero.module.css'
import Image from 'next/image'


export default function HomeHero(){
    return(
        <section
            className={style.homeHeroSection}
        >
            <div
                className={style.homeHeroOverlay}
            >
                <Image
                    src={"/assets/BCM-Logo_White.webp"}
                    alt='Black Chamber of Memphis'
                    width={2501}
                    height={1059}
                    className={style.homeHeroLogo}
                />
                <h1
                    className={style.homeHeroHeading}
                >
                    INVESTING WHERE IT&apos;S NEEDED MOST
                </h1>
            </div>
            <div className={style.homeheroWhiteCurve} />
        </section>
    )
}