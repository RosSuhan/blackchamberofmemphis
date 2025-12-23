import style from '@/styles/programSinglePageHero.module.css'
import Image from 'next/image'
import Link from 'next/link'

type ProgramHeroType = {
    programHeroBackgroundImage: string,
    programMainTitle: string,
    programSubHeading: string,
    programCaption: string,
    programCtaLink: string,
    programCtaText: string,
    programCtaLink2: string, 
    programCtaText2: string,
}

export default function ProgramHero({programMainTitle, programSubHeading, programCaption, programHeroBackgroundImage, programCtaLink, programCtaText, programCtaLink2, programCtaText2}: ProgramHeroType){
    return (
        <section
            className={style.mainHeroSection}
        >
            <Image
                src={programHeroBackgroundImage}
                alt=''
                width={320}
                height={300}
                className={style.backgroundImage}
            />

            <div
                className={style.mainHeroOverlay}
            >
                <h1
                    className={style.heroMainHeading}
                >
                    {programMainTitle}
                </h1>
                
                <h2
                    className={style.heroSubHeading}
                >
                    {programSubHeading}
                </h2>

                {programCaption ? 
                    <p
                        className={style.heroCaption}
                    >
                        {programCaption}
                    </p>
                : null}

                <div
                    className={style.heroCtaRow}
                >
                    <Link
                        href={programCtaLink}
                        className={style.mainCtaBtn}
                    > 
                        {programCtaText}
                    </Link>

                    {programCtaLink2 ? 
                        <Link
                            href={programCtaLink2}
                            className={style.secondCtaBtn}
                        > 
                            {programCtaText2}
                        </Link>
                    : null}
                </div>
            </div>
        </section>
    )
}