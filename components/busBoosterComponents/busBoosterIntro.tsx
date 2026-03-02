import style from '@/styles/businessBoosterImpactReport/busBoosterIntro.module.css'
import Image from 'next/image'

export default function BusBoosterIntro(){
    return(
        <section
            className={style.busBoosterIntro}
        >
            <p
                className={style.busBoosterIntroText}
            >
                The Business Booster is a flagship initiative of the Black Chamber of Memphis, created to support  hospitality, food service, and tourism businesses that were disproportionately impacted by the COVID-19 pandemic. The program provides cohort-based training, one-on-one coaching, mentorship, and $5,000 grants to help entrepreneurs stabilize operations, strengthen capacity, and position their businesses for long-term growth. During the 2024–2025 program year, Business Booster awarded $430,000 to 86 grantees, reaching entrepreneurs across nearly every Memphis neighborhood.
            </p>

            <div
                className={style.busBoosterIntroBlocksRow}
            >
                <div
                    className={style.busBoosterGoldBlock}
                >
                    <Image
                        src={"/programs/business-booster/moneyAwarded.png"}
                        alt=''
                        width={500}
                        height={500}
                        className={style.busBoosterIconImage}
                    />
                    <span>$430,000</span>
                    <span>Awarded</span>
                </div>

                <div
                    className={style.busBoosterGreyBlock}
                >
                    <Image
                        src={"/programs/business-booster/grantees.png"}
                        alt=''
                        width={500}
                        height={500}
                        className={style.busBoosterIconImage}
                    />
                    <span>86 Grantees</span>
                    <span>98% Retention</span>
                </div>
            </div>
        </section>
    )
}