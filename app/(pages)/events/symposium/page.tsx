import SymposiumHero from '@/components/symposiumComps/hero/HeroSection'
import ThreeBlockRow from '@/components/symposiumComps/threeBlockRow/page'
// import WideTextSection from '@/components/symposiumComps/wideTextSection/page'
import style from '@/styles/symposium.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Symposium(){
    const ctaButtons = [
        {   
            path: "/",
            buttonName: "Register To Attend"
        },
        {
            path: "#sponsorship",
            buttonName: "Become a Sponsor"
        }
    ]

    return (
        <main>
            <SymposiumHero
                showButtons={true}
                ctaButtons={ctaButtons || []}
            />

            <ThreeBlockRow/>

            <section
                className={style.twoColumnSection}
            >
                <div
                    className={style.columnOne}
                >
                    <h2
                        className={style.textHeading}
                    >
                        Building Wealth In Our Community Symposium
                    </h2>
                    <p
                        className={style.text}
                    >
                        The Symposium is BCoM’s annual convening and fundraiser—bringing together business founders, corporate partners, public agencies, and industry leaders for a day of practical insight, strategic connections, and economic activation.
                    </p>
                    <p
                        className={style.text}
                    >
                        The Symposium blends education, access, visibility, and relationship-building. It is designed to equip businesses with the insights and partnerships needed to compete, scale, and remain resilient in today’s market.
                    </p>

                    <ul
                        className={style.nonBulletList}
                    >
                        <li
                            className={style.nonBulletItem}
                        >
                            <span
                                className={style.goldText}
                            >Date:</span>
                            <span>August 27 – August 28, 2026</span>
                        </li>
                        <li
                            className={style.nonBulletItem}
                        >
                            <span
                                className={style.goldText}
                            >Location:</span>
                            <span>The Guest House at Graceland</span>
                        </li>
                        <li
                            className={style.nonBulletItem}
                        >
                            <span
                                className={style.goldText}
                            >Theme:</span>
                            <span>Building Entreprener City</span>
                        </li>
                        <li
                            className={style.nonBulletItem}
                        >
                            <span
                                className={style.goldText}
                            >Expected Attendance:</span>
                            <span>200+ entrepreneurs, executives, policymakers, and professionals from across the region</span>
                        </li>
                    </ul>
                </div>

                <Image
                    src={'/events/symposium/BCOM_Symposium_2025_Day2-16.jpg'}
                    alt=''
                    width={2048}
                    height={1363}
                    className={style.sectionFeatureImage}
                />
            </section>

            <section
                className={style.twoColumnCtaSection}
            >
                <div
                    className={style.twoColumnFirstBlock}
                >
                    <h3
                        className={style.textHeadingH3}
                    >
                        The Experience
                    </h3>
                    <ul
                        className={style.bulletList}
                    >
                        <li
                            className={style.bulletItem}
                        >
                            Momentum: Offical Pre-Symposium Party
                        </li>
                        <li
                            className={style.bulletItem}
                        >
                            Presidents Breakfast
                        </li>
                        
                        <li
                            className={style.bulletItem}
                        >
                            Conversations and Workshops
                        </li>
                    </ul>
                </div>
                <div
                    className={style.sectionCtaBtnRow}
                >
                    <a href=""
                        className={style.sectionCta}
                    >Get Your Ticket</a>
                </div>
            </section>

            <section
                className={style.twoColumnSection}
            >
                <Image
                    src={'/events/symposium/BCOM_Symposium_2025_Day2-16.jpg'}
                    alt=''
                    width={2048}
                    height={1363}
                    className={style.sectionFeatureImage}
                />
                <div
                    className={style.columnOne}
                >
                    <h2
                        className={style.textHeading}
                    >
                        The Business Briefing: The State of the Economy & What You Should Know Now
                    </h2>
                    <p
                        className={style.text}
                    >
                        A high-level economic outlook designed to translate today’s market conditions into practical business strategy. This session will break down key indicators—including interest rates, lending trends, consumer behavior, and sector shifts—and what they mean for growth, pricing, hiring, and capital decisions. Attendees will leave with clear insights to navigate uncertainty and position their businesses for stability and expansion.
                    </p>
                </div>
            </section>

            <section
                className={style.wideTextSection}
            >
                <h2
                    className={style.textHeading}
                >
                    Retail Ready: Scaling Distribution & Driving Sales Beyond Your Home Market
                </h2>
                <p
                    className={style.text}
                >
                    This session equips growth-minded brands with the strategies needed to expand beyond local markets. From preparing for retail buyers to optimizing distribution channels and strengthening e-commerce operations, leaders will gain actionable insights to increase reach, revenue, and operational readiness. Designed for businesses ready to scale, this conversation bridges ambition with execution.
                </p>
            </section>

            <section
                className={style.twoColumnSection}
            >
                <div
                    className={style.columnOne}
                >
                    <h2
                        className={style.textHeading}
                    >
                        Procurement Playbook: Building Capacity to Secure & Deliver Major Contracts
                    </h2>
                    <p
                        className={style.text}
                    >
                        A tactical deep dive into positioning your business for contracts with corporations and public agencies. This session focuses on procurement pipelines, certification strategy, compliance preparation, and the internal systems required to successfully deliver at scale. Attendees will gain clarity on how to move from opportunity awareness to contract execution with confidence.
                    </p>
                </div>
                <Image
                    src={'/events/symposium/BCOM_Symposium_2025_Day2-16.jpg'}
                    alt=''
                    width={2048}
                    height={1363}
                    className={style.sectionFeatureImage}
                />
            </section>

            <section
                className={style.sponsorshipSection}
            >
                <div>
                    <Link
                        href={'/events/symposium/sponsorship'}
                    >Become a Sponsor</Link>
                </div>

                <div>
                    <Link
                        href={'/events/symposium/creative-production-sponsorship'}
                    >Creative & Production  In-Kind Sponsorships</Link>
                </div>
            </section>
            
            {/* <section>
                featured speakers section showing all the speakers
            </section> */}

            {/* <section>
                breakout sessions
            </section> */}

            {/* <section>
                Sponsorship Opportunities with Q&A
            </section> */}
        </main>
    )
}