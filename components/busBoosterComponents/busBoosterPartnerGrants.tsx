import style from '@/styles/businessBoosterImpactReport/busBoosterParnerGrants.module.css'
import Image from "next/image";

export default function BusBoosterPartnerGrants(){
    return (
        <section
            className={style.busBoosterPartnerGrantsSection}
        >
            {/* left block */}
            <div
                className={style.busBoosPartGrantLeftBlock}
            >
                <div
                    className={style.busBoosPartGrantTopBlock}
                >
                    {/* gold block with partner image and title Partner Referrals */}
                    <div
                        className={style.busBoosPartGrantGoldBlock}
                    >
                        <Image
                            src={'/programs/business-booster/partners.webp'}
                            alt="Business Booster Partners Icon"
                            width={500}
                            height={500}
                            className={style.busBoosPartGrantIcon}
                        />
                        
                        <h2
                            className={style.busBoosPartGrantGoldHeading}
                        >
                            <span
                                className={style.busBoosPartGrantBigHeading}
                            >
                                Partner
                            </span>
                            <span
                                className={style.busBoosPartGrantSmallHeading}
                            >
                                Referrals
                            </span>
                        </h2>
                    </div>
                    <div
                        className={style.busBoosPartGrantPartnerListBlock}
                    >
                        <ul
                            className={style.busBoosPartGrantPartnerList}
                        >
                            <li
                                className={style.busBoosPartGrantPartnerItem}
                            >
                                EDGE
                            </li>
                            <li
                                className={style.busBoosPartGrantPartnerItem}
                            >
                                Epicenter
                            </li>
                            <li
                                className={style.busBoosPartGrantPartnerItem}
                            >
                                Memphis Medical District Collaborative
                            </li>
                            <li
                                className={style.busBoosPartGrantPartnerItem}
                            >
                                Pathway Lending 
                            </li>
                            <li
                                className={style.busBoosPartGrantPartnerItem}
                            >
                                River City Capital 
                            </li>
                            <li
                                className={style.busBoosPartGrantPartnerItem}
                            >
                                SCORE Memphis
                            </li>
                            <li
                                className={style.busBoosPartGrantPartnerItem}
                            >
                                Shelby County District Connectors
                            </li>
                            <li
                                className={style.busBoosPartGrantPartnerItem}
                            >
                                Tennessee Small Business Development Center 
                            </li>
                        </ul>
                    </div>
                </div>
                <p
                    className={style.busBoosterPartnerLeftBlockSubText}
                >
                    BCOM’s Business Booster is funded by The City of Memphis through the American Rescue Plan Act (ARPA). For more information visit blackchamberofmemphis.org
                </p>
            </div>

            {/* right block for images */}
            <div
                className={style.busBoosterPartnerGrantsRightBlock}
            >
                <Image
                    src={'/programs/business-booster/business-booster-winner-lets-be-frank.webp'}
                    alt="Business Booster Winner Let's be Frank"
                    width={2000}
                    height={1340}
                    className={style.busBoosterPartnerGrantWinnerImages}
                />

                <Image
                    src={'/programs/business-booster/business-booster-winner-hillboyz-wings-burger-bar.webp'}
                    alt="Business Booster Winner Hillboyz Wings & Burger Bar"
                    width={2000}
                    height={1340}
                    className={style.busBoosterPartnerGrantWinnerImages}
                />

                <Image
                    src={'/programs/business-booster/business-booster-winner-sobar-caribe.webp'}
                    alt="Business Booster Winner Sabor Caribe"
                    width={2000}
                    height={1340}
                    className={style.busBoosterPartnerGrantWinnerImages}
                />
            </div>
        </section>
    )
}