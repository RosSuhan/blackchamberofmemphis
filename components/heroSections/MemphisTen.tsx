'use client'
import style from '@/styles/mainHero.module.css'
import Image from 'next/image';
import Link from "next/link";
import MemphisTenHeroBackgroundImage from '@/public/assets/bcom-website-backgrounds.webp'


export default function MemphisTenHero(){
    return (
        <section
            className={style.mainHeroSection}
        >
            <div
                className={style.mainHeroOverlay}
            >
                <h1
                    className={style.heroMainHeading}
                >
                    Empowering Memphis Entrepreneurs to Scale and Succeed
                </h1>
                
                <h2
                    className={style.heroSubHeading}
                >
                    Helping small businesses grow into employers, job creators, and community leaders.
                </h2>

                <div
                    className={style.heroCtaRow}
                >
                    <Link
                        href={''}
                        className={style.mainCtaBtn}
                    >
                        Get Started
                    </Link>
                    <Link
                        href={'#memphisTenPrograms'}
                        className={style.secondCtaBtn}
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            <Image
                src={MemphisTenHeroBackgroundImage}
                alt=''
                width={320}
                height={300}
                className={style.backgroundImage}
            />
        </section>
    )
}