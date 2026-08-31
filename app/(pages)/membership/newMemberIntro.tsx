import Link from 'next/link'
import style from './newMemberIntro.module.css'
export default function NewMemberIntro(){
    return (
        <section
            className={style.newMemberIntroSection}
        >
            <div
                className={style.whyBcomNowRow}
            >
                <div
                    className={style.whyLeftBlock}
                >
                    <h2
                        className='globalSecondHeading'
                    >
                        WHY BCoM NOW
                    </h2>
                    <p
                        className='globalText'
                    >
                        Business owners can find information almost anywhere. What is harder to find are trusted relationships,  meaningful introductions, capital pathways, procurement opportunities, and a business community that  understands what growth requires. That is the space BCOM is building to own.
                    </p>
                </div>

                <div
                    className={style.whyRightBlock}
                >
                    <ul
                        className={style.whyBulletGreyBlock}
                    >
                        <li className={style.whyBulletItem}>Trusted relationships</li>
                        <li className={style.whyBulletItem}>Procurement opportunities</li>
                        <li className={style.whyBulletItem}>Capital connections</li>
                        <li className={style.whyBulletItem}>Strategic introductions</li>
                        <li className={style.whyBulletItem}>Peer learning communities</li>
                        <li className={style.whyBulletItem}>Advocacy & influence</li>
                    </ul>
                </div>
            </div>

            <div
                className={style.flipboxRow}
            >
                <div
                    className={style.flipBox}
                >
                    <h3
                        className={style.flipboxHeading}
                    >
                        GROW YOUR BUSINESS
                    </h3>
                    <p
                        className={style.flipboxText}
                    >
                        Build stronger pathways to revenue, customers, contracts, and strategic growth.
                    </p>
                </div>

                <div
                    className={style.flipBox}
                >
                    <h3
                        className={style.flipboxHeading}
                    >
                        ACCESS CAPITAL
                    </h3>
                    <p
                        className={style.flipboxText}
                    >
                        Strengthen readiness and connect to lenders, capital providers, and investment resources.
                    </p>
                </div>

                <div
                    className={style.flipBox}
                >
                    <h3
                        className={style.flipboxHeading}
                    >
                        EXPAND YOUR NETWORK
                    </h3>
                    <p
                        className={style.flipboxText}
                    >
                        Build relationships with business leaders, buyers, partners, and decision makers.
                    </p>
                </div>

                <div
                    className={style.flipBox}
                >
                    <h3
                        className={style.flipboxHeading}
                    >
                        INFLUENCE THE FUTURE
                    </h3>
                    <p
                        className={style.flipboxText}
                    >
                        Increase visibility and participate in the conversations shaping Memphis business and economic opportunity.
                    </p>
                </div>
            </div>

            <div
                className={style.aimRow}
            >
                <div
                    className={style.aimLeftBlock}
                >
                    <div
                        className={style.aimBlock}
                    >
                        <div
                            className={style.aimMeaning}
                        >
                            <div
                                className={style.aimletter}
                            >
                                A
                            </div>
                            <div
                                className={style.aimDescription}
                            >
                                <h3
                                    className={style.aimDescHeading}
                                >
                                    ACCESS
                                </h3>
                                <p
                                    className={style.aimDescText}
                                >
                                    Opens the door to relationships, capital, and opportunity.
                                </p>
                            </div>
                        </div>

                        <div
                            className={style.aimMeaning}
                        >
                            <div
                                className={style.aimletter}
                            >
                                I
                            </div>
                            <div
                                className={style.aimDescription}
                            >
                                <h3
                                    className={style.aimDescHeading}
                                >
                                    INVESTMENT
                                </h3>
                                <p
                                    className={style.aimDescText}
                                >
                                    Strengthens the capacity of the business to compete
                                </p>
                            </div>
                        </div>
                        <div
                            className={style.aimMeaning}
                        >
                            <div
                                className={style.aimletter}
                            >
                                M
                            </div>
                            <div
                                className={style.aimDescription}
                            >
                                <h3
                                    className={style.aimDescHeading}
                                >
                                    MOBILITY
                                </h3>
                                <p
                                    className={style.aimDescText}
                                >
                                    The movement that follows when a business is prepared to act.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={style.aimRightBlock}
                >
                    <p>
                        AIM connects the membership experience to BCOM’s broader business-growth narrative. Access opens pathways  to opportunity. Investment strengthens the capacity to compete. Mobility is the movement that follows when  businesses are prepared to act.
                    </p>
                    <p>
                        Your next opportunity may begin with a relationship, a resource, a buyer, a lender, or an introduction. Start at the  front door.
                    </p>

                    <Link
                        href={'#membership'}
                        className='globalGoldButton'
                        style={{marginTop:"1.5rem"}}
                    >
                        Explore Membership
                    </Link>
                </div>
            </div>
        </section>
    )
}