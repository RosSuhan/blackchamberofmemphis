import { FacebookFill } from '@/components/icons/FacebookIcon'
import { Instagram } from '@/components/icons/InstagramIcon'
import { BaselineMail } from '@/components/icons/MailIcon'
import { TiktokIcon } from '@/components/icons/TikTokIcon'
import style from '@/styles/blackLedgerStyles/blHero.module.css'
import Image from 'next/image'

type BlHeroProp = {
    backgroundImage: string,
    businessTitle: string,
}

export default function BlHero({backgroundImage, businessTitle} : BlHeroProp){
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

                <div
                    className={style.blHeroSocialRow}
                >
                    <a href=""
                        className={style.blHeroSocialLink}
                    >
                        <FacebookFill
                            className={style.blHeroSocialIcon}
                        />
                    </a>

                    <a href=""
                        className={style.blHeroSocialLink}
                    >
                        <BaselineMail
                            className={style.blHeroSocialIcon}
                        />
                    </a>

                    <a href=""
                        className={style.blHeroSocialLink}
                    >
                        <Instagram
                            className={style.blHeroSocialIcon}
                        />
                    </a>

                    <a href=""
                        className={style.blHeroSocialLink}
                    >
                        <TiktokIcon
                            className={style.blHeroSocialIcon}
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}