import { SocialLink } from '@/lib/blackLedgerHonoree/blackLedgerLinkProp'
import style from '@/styles/blackLedgerStyles/blHero.module.css'
import Image from 'next/image'

type BlHeroProp = {
    backgroundImage : string,
    businessTitle : string,
    socialList : SocialLink[],
}

export default function BlHero({backgroundImage, businessTitle, socialList} : BlHeroProp){
    return (
        <section
            className={style.blHeroSection}
        >
            <Image
                src={backgroundImage}
                alt='background image'
                width={1200}
                height={500}
                className={style.blHeroBackgroundImage}
            />
            <div
                className={style.blHeroOverlay}
            >
                <span
                    className={style.blHeroSpan}
                >
                    Black Ledger Honoree
                </span>
                <h1
                    className={style.blHeroBusinessName}
                >
                    {businessTitle}
                </h1>

                {socialList.length > 0 && (
                    <div
                        className={style.blHeroSocialRow}
                    >
                        {socialList.map(({icon: Icon, href}, index) => (
                            
                                <a href={href}
                                    className={style.blHeroSocialLink}
                                    key={index}
                                >
                                    <Icon
                                        className={style.blHeroSocialIcon}
                                    />
                                </a>
                            
                        ))}
                    </div> 
                )}
            </div>
        </section>
    )
}