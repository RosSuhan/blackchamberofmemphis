import style from '@/styles/mainHero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import MemphisTenHeroBackgroundImage from '@/public/assets/bcom-website-backgrounds.webp'


export default function CaseSupportHero(){
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
                    Unlock Economic Growth Through Black-Owned Businesses
                </h1>
                
                <h2
                    className={style.heroSubHeading}
                >
                    Help transform 4,000 solopreneurs into employers, creating 8,000 jobs and build a stronger Memphis.
                </h2>

                <div
                    className={style.heroCtaRow}
                >
                    <a
                        href={'https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/contribute/ep01ddP2'}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={style.mainCtaBtn}
                    >
                        Donate To Support
                    </a>
                    <Link
                        href={"/memphis-ten"}
                        className={style.secondCtaBtn}
                    >
                        Learn About MemphisTEN
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