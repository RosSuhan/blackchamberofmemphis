import { BrandDatabricks } from '@/components/icons/BrandDatabricks'
import { GlobeOutline } from '@/components/icons/Globe'
import { Instagram } from '@/components/icons/InstagramIcon'
import { BaselineMail } from '@/components/icons/MailIcon'
import { OpenBookOutline } from '@/components/icons/OpenBookOutline'
import { Phone } from '@/components/icons/Phone'
import style from '@/styles/mortar.module.css'
import Image from 'next/image'


export default function Mortar(){

    const mortarSteps = [
        {
            stepHeading: `Equip early-stage entrepreneurs`,
            stepText: `With the mindset, tools, and practical training needed to move from ideation to execution and sustainability.`
        },{
            stepHeading: `Increase business readiness`,
            stepText: `Through structured curriculum focused on strategy, financial fundamentals, customer discovery, and operational discipline.`
        },{
            stepHeading: `Expand access to culturally responsive entrepreneurship education`,
            stepText: `That reflects the lived experiences, creativity, and innovation of Memphis founders.`
        },{
            stepHeading: `Strengthen Memphis’ small-business ecosystem`,
            stepText: `By connecting founders to trusted capital providers, technical assistance partners, and subject-matter experts.`
        },{
            stepHeading: `Support long-term economic impact`,
            stepText: `By helping entrepreneurs build businesses grounded in ownership, reinvestment, and community stability.`
        }
    ]

    return (
        <main>
            <section
                className={style.mortarHero}
            >
                <div
                    className={style.mortarHeroLogoBlock}
                >
                    <Image
                        src={'/programs/mortar/mortar-logo.webp'}
                        alt=''
                        width={1095}
                        height={675}
                        className={style.mortarHeroLogo}
                    />

                    <h1
                        className={style.mortarHeroHeading}
                    >
                        Inaugural Sponsorship & Engagement
                    </h1>
                </div>

                {/* <span
                    className={style.mortarHeroItalicSpan}
                >
                    Partnering for Impact, Growth, and Visibility
                </span> */}
            </section>

            <section
                className={style.mortarAboutSection}
            >
                <h2
                    className={style.mortarAboutHeading}
                >
                    ABOUT MORTAR
                </h2>

                <p
                    className={style.mortarAboutText}
                >
                    MORTAR is a nationally recognized entrepreneurship organization founded in Cincinnati with a mission to expand access to business ownership. MORTAR delivers structured, cohort-based entrepreneurship training designed to support founders navigating barriers to traditional business support systems.
                </p>
                <p
                    className={style.mortarAboutText}
                >
                    Through its signature entrepreneurship academies, MORTAR provides practical business education, accountability, and capital-readiness tools, helping entrepreneurs clarify their ideas, strengthen their business models, and prepare for sustainable growth.
                </p>
                <p
                    className={style.mortarAboutText}
                >
                    <strong>At the culmination of the 16-week program, participating businesses compete in a Pitch Night for cash awards.</strong> These funds provide flexible capital to help businesses scale operations, strengthen infrastructure, or advance production based on their growth stage and needs.
                </p>
            </section>

            <section
                className={style.mortarTwoColumnSection}
            >
                <div
                    className={style.mortarTextColumn}
                >
                    <p
                        className={style.mortarParagraph}
                    >
                        To date, MORTAR has supported hundreds of entrepreneurs through its training programs, helping founders launch, stabilize, and grow businesses across a wide range of industries. Its model is recognized for its rigor, founder-centered approach, and measurable outcomes, making MORTAR a trusted partner for cities, corporations, and philanthropic institutions seeking to strengthen local entrepreneurship ecosystems.
                    </p>

                    <h3
                        className={style.mortarBlockHeading}
                    >
                        MORTAR’s curriculum emphasizes:
                    </h3>

                    <ul
                        className={style.mortarGoldButtonList}
                    >
                        <li
                            className={style.mortarGoldButton}
                        >
                            Customer Discovery & Validation
                        </li>
                        <li
                            className={style.mortarGoldButton}
                        >
                            Financial Fundamentals and Cash-flow Management
                        </li>
                        <li
                            className={style.mortarGoldButton}
                        >
                            Strategic Planning and Execution
                        </li>
                        <li
                            className={style.mortarGoldButton}
                        >
                            Pitch Preparation and Capital Readiness
                        </li>
                        <li
                            className={style.mortarGoldButton}
                        >
                            Peer Learning and Ecosystem Connection
                        </li>
                    </ul>
                </div>
                <div
                    className={style.mortarImageColumn}
                >
                    <Image
                        src={'/programs/mortar/mortar-image.webp'}
                        alt=''
                        width={640}
                        height={480}
                        className={style.mortarImage}
                    />
                </div>
            </section>

            <section
                className={style.mortarTwoColumnWhiteSection}
            >
                <div
                    className={style.mortarImageOddColumn}
                >
                    <Image
                        src={'/programs/mortar/mortar-group-1.webp'}
                        alt=''
                        width={640}
                        height={480}
                        className={style.mortarOddImage}
                    />
                </div>

                <div
                    className={style.mortarTextColumn}
                >
                    <h3
                        className={style.mortarBlockHeading}
                    >
                        MORTAR Memphis
                    </h3>

                    <p
                        className={style.mortarParagraph}
                    >
                        Through its expansion into Memphis, MORTAR brings a proven national framework, aligned with BCoM’s MemphisTen initiative to help businesses scale and hire employees,  while working in close partnership with local ecosystem leaders to ensure programming is place-based, culturally grounded, and responsive to Memphis’ unique entrepreneurial landscape.
                    </p>
                    <p
                        className={style.mortarParagraph}
                    >
                        Inspired by a hip-hop framework for entrepreneurship, the academy reflects the same principles that have shaped generations of artists into moguls: vision, grind, storytelling, discipline, collaboration, and investment.
                    </p>
                    <p
                        className={style.mortarParagraph}
                    >
                        Just as hip-hop has evolved across decades—innovating, adapting, and reinvesting into new voices—MORTAR Memphis is designed to cultivate the next generation of the city’s entrepreneurs by training founders, aligning ecosystem partners, and scaling impact together.
                    </p>
                </div>
            </section>

            <section
                className={style.mortarTableSection}
            >
                <ul
                    className={style.mortarTableList}
                >
                    {mortarSteps.map(({stepHeading, stepText},index) => (
                        <li
                            key={index}
                            className={style.mortarListItem}
                        >
                            <BrandDatabricks
                                className={style.mortarIcon}
                            />


                            <span
                                className={style.stepTitle}
                            >
                                {stepHeading}
                            </span>
                            <span
                                className={style.steptext}
                            >
                            {` ${stepText}`}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            <section
                className={style.mortarSponsorSection}
            >
                <h2
                    className={style.mortarSponsorHeading}
                >
                    Become an Inaugural Sponsor Today
                </h2>

                <p
                    className={style.mortarSponsorText}
                >
                    Inaugural sponsors play a critical role in launching MORTAR Memphis. Your support helps provide early access to capital-readiness education, trusted mentorship, and practical business infrastructure—removing common barriers that prevent promising ideas from becoming viable businesses.
                </p>
                <p
                    className={style.mortarSponsorText}
                >
                    By investing at the ground level, you help strengthen Memphis’s business ecosystem, expand pathways to ownership, and contribute to long-term economic vitality across the city. Inaugural sponsors are not only supporting individual entrepreneurs—they are helping to shape the foundation of a program designed to deliver lasting community impact.
                </p>

                <div
                    className={style.mortarSponsorCTArow}
                >
                    <p
                        className={style.mortarSponsorRowText}
                    >
                        For more information on sponsorship opportunities and benefits.
                    </p>
                    <button
                        className={style.mortarSponsorButton}
                    >
                        Learn More
                    </button>
                </div>
            </section>

            <section
                className={style.mortarContactSection}
            >
                <div
                    className={style.mortarContactLinkBlock}
                >
                    <a href="tel:+19018008041"
                        className={style.mortarContactLink}
                    >
                        <div
                            className={style.mortarContactIcon}
                        >
                            <Phone/>
                        </div>
                        
                        901 800 8041
                    </a>

                    <a href=""
                        className={style.mortarContactLink}
                    >
                        
                        <Instagram
                            className={style.mortarContactInstagramIcon}
                        />
                        @bomemphis
                    </a>

                    <a href="mailto:jasmine@bbamemphis.com"
                        className={style.mortarContactLink}
                    >
                        <div
                            className={style.mortarContactIcon}
                        >
                            <BaselineMail/>
                        </div>
                        jasmine@bbamemphis.com
                    </a>

                    <a href="https://blackchamberofmemphis"
                        className={style.mortarContactLink}
                    >
                        <div
                            className={style.mortarContactIcon}
                        >
                            <GlobeOutline/>
                        </div>
                        Website
                    </a>
                </div>
            </section>
        </main>
    )
}