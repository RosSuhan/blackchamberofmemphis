import CountdownTimer from '@/components/countDownTimer/page'
import style from '@/styles/symposium.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Sponsorship(){
    return (
        <main>
            <section
                className={style.symposiumHero}
            >
                <div
                    className={style.symposiumHeroOverlay}
                >
                    <h1
                        className={style.symposiumMainHeading}
                    >
                        <span className={style.symBigHeading}>BUILDING WEALTH</span>
                        <span className={style.symSmallHeading}>IN OUR</span>
                        <span className={style.symMedHeading}>COMMUNITY</span>
                    </h1>
                    
                    <CountdownTimer
                        eventDate = {"August 27, 2026 00:00:00"}
                    />
                    
                    <h2
                        className={style.symposiumEventDate}
                    >
                        August 27 - 28, 2026
                    </h2>
                    <div
                        className={style.symposiumCtaBtnRow}
                    >
                        <Link
                            href={''}
                            className={style.symposiumCta}
                        >
                            Sponsor
                        </Link>

                        <Link
                            href={''}
                            className={style.symposiumCta}
                        >
                            Register
                        </Link>
                    </div>
                </div>
                <Image
                    src={'/events/symposium/BCOM_Symposium_2025_Day2-16.jpg'}
                    alt=''
                    width={2048}
                    height={1363}
                    className={style.symposiumHeroBackgroundImage}
                />
            </section>

            <section>
                <h2>
                    Connect with Influencers
                </h2>
                <p>
                    Engage directly with seasoned business owners, corporate leaders, policymakers, and emerging entrepreneurs who are shaping the city’s economic future.
                </p>
            </section>

            <section>
                <h2>
                    Stand Out Across Platforms
                </h2>
                <p>
                    Gain prominent visibility through billboards, digital campaigns, printed material, media coverage, and on-site engagement.
                </p>
            </section>
            <section>
                <h2>
                    Lead as a Champion
                </h2>
                <p>
                    Demonstrate your commitment to strengthening Memphis’ business ecosystem and advancing economic growth. Sponsorship positions your brand as a leader invested in the city’s future.
                </p>
            </section>
            <section>
                <h2>
                    Expand Access & Opportunity
                </h2>
                <p>
                    Your support helps lower ticket costs and creates opportunities to sponsor attendance for local college students and emerging entrepreneurs—broadening participation and strengthening the business community.
                </p>
            </section>
            {/* sponsor tiers */}
            <section>
                <div>
                    <p>
                        <span>$</span>
                        25,000
                    </p>
                    <span>
                        Momentum Mixer
                    </span>
                    <span>
                        August 27, 2026
                    </span>
                    <ul>
                        <li>2026 Momentum Mixer Title Sponsor</li>
                        <li>Billboard Ad for 14 Days</li>
                        <li>3 Minutes of Remarks</li>
                        <li>Promo Video During Symposium</li>
                        <li>Logo Displayed on Printed & Digital Material</li>
                        <li>On-site Activation</li>
                        <li>15 Symposium Tickets</li>
                        <li>5 Speaker Meet & Greet Tickets</li>
                        <li>2 President&apos;s Power Tickets Breakfast</li>
                        <li>1 Item Included in Attendee Bags</li>
                    </ul>
                </div>

                <div>
                    <p>
                        <span>$</span>
                        50,000
                    </p>
                    <span>
                        Title Sponsor
                    </span>
                    <span>
                        August 27-28, 2026
                    </span>
                    <ul>
                        <li>2026 Momentum Mixer Title Sponsor</li>
                        <li>Billboard Ad for 28 Days</li>
                        <li>1 News Interview</li>
                        <li>3 Minutes of Remarks at Al Events</li>
                        <li>1 Panelist or Moderator Spot</li>
                        <li>Promo Video During Symposium</li>
                        <li>Logo Displayed on Printed & Digital Material</li>
                        <li>On-site Activation</li>
                        <li>15 Symposium Tickets</li>
                        <li>5 Speaker Meet & Greet Tickets</li>
                        <li>2 President&apos;s Power Tickets Breakfast</li>
                        <li>1 Item Included in Attendee Bags</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}