import style from '@/styles/businessBoosterImpactReport/busBoosterSupportSection.module.css'
import Image from 'next/image'

export default function BusBoosterSupport(){
    return(
        <section
            className={style.busBoosterSupportSection}
        >
            <p
                className={style.busBoosterSupportText}
            >
                Business Booster delivers a holistic support model that combines technical assistance with trusted ecosystem partnerships to ensure entrepreneurs have access to the tools and relationships needed to succeed. In 2024–2025, participants received more than 200 hours of direct coaching, and referrals to key resource partners, resulting in over 135 food operators trained. By pairing capital with education, coaching, and connection, Business Booster strengthens individual businesses while contributing to a more resilient, inclusive local economy.
            </p>

            <div
                className={style.busBoosterSupportIconRow}
            >
                <div
                    className={style.busBoosterIconOuterBlock}
                >
                    <Image
                        src={'/programs/business-booster/coaching.webp'}
                        alt='Business Booster Direct Coaching Hours'
                        width={500}
                        height={500}
                        className={style.busBoosterIcon}
                    />

                    <div
                        className={style.busBoosterIconText}
                    >
                        <span
                            className={style.busBoosterIconGoldText}
                        >
                            200+
                        </span>
                        <span
                            className={style.busBoosterIconWhiteText}
                        >
                            DIRECT COACHING HOURS
                        </span>
                    </div>
                </div>

                <div
                    className={style.busBoosterIconOuterBlock}
                >
                    <Image
                        src={'/programs/business-booster/trained.webp'}
                        alt='Business Booster Direct Coaching Hours'
                        width={500}
                        height={500}
                        className={style.busBoosterIcon}
                    />

                    <div
                        className={style.busBoosterIconText}
                    >
                        <span
                            className={style.busBoosterIconGoldText}
                        >
                            135+
                        </span>
                        <span
                            className={style.busBoosterIconWhiteText}
                        >
                            FOOD OPERATORS TRAINED
                        </span>
                    </div>
                </div>

                <div
                    className={style.busBoosterIconOuterBlock}
                >
                    <Image
                        src={'/programs/business-booster/matches.webp'}
                        alt='Business Booster Direct Coaching Hours'
                        width={500}
                        height={500}
                        className={style.busBoosterIcon}
                    />

                    <div
                        className={style.busBoosterIconText}
                    >
                        <span
                            className={style.busBoosterIconGoldText}
                        >
                            30
                        </span>
                        <span
                            className={style.busBoosterIconWhiteText}
                        >
                            MENTOR MATCHES
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}