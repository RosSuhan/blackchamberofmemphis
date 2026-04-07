import SymposiumHero from '@/components/symposiumComps/hero/HeroSection'
import style from '@/styles/symposium.module.css'
import Image from 'next/image'

export default function Sponsorship(){

    const sponsors2025Logos = [
        {
            src: "pinnacle-financial-partners.webp",
            alt: "Pinnacle Financial Partners",
            width: 1562,
            height: 463
        },{
            src: "paragon-bank.webp",
            alt: "Paragon Bank",
            width: 225,
            height: 225
        },{
            src: "mmbclogo-final.webp",
            alt: "MMBC Continuum",
            width: 550,
            height: 161
        },{
            src: "remoting.work.webp",
            alt: "Remoting.work",
            width: 13828,
            height: 2665
        },{
            src: "independent-bank.webp",
            alt: "Independent Bank",
            width: 515,
            height: 515
        },{
            src: "pathway-lending.webp",
            alt: "Pathway Lending",
            width: 2835,
            height: 418
        },{
            src: "kudzukian.webp",
            alt: "Kudzukian",
            width: 476,
            height: 106
        },{
            src: "Memphis_Light,_Gas_and_Water_logo.svg",
            alt: "Memphis Light, Gas and Water",
            width: 476,
            height: 512
        },{
            src: "CONVERGENCEMemphis.webp",
            alt: "Convergence Memphis",
            width: 400,
            height: 145
        }
    ]

    return (
        <main>
            <SymposiumHero
                showButtons = {true}
            />

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
                {/* momentum mixer */}
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

                {/* title sponsor */}
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
                        <li>2026 Symposium Title Sponsor</li>
                        <li>Billboard Ad for 28 Days</li>
                        <li>1 News Interview</li>
                        <li>3 Minutes of Remarks at Al Events</li>
                        <li>1 Panelist or Moderator Spot</li>
                        <li>Promo Video Displayed at Symposium</li>
                        <li>Logo Displayed on Printed & Digital Material</li>
                        <li>On-site Activation</li>
                        <li>20 Symposium Tickets</li>
                        <li>20 Momentum Mixer Tickets</li>
                        <li>5 President&apos;s Power Tickets Breakfast</li>
                        <li>5 Speaker Meet & Greet Tickets</li>
                        <li>2 Branded Items in Attendee Bags</li>
                    </ul>
                </div>

                {/* presidents power breakfast sponsor */}
                <div>
                    <p>
                        <span>$</span>
                        25,000
                    </p>
                    <span>
                        President&apos;s Power Breakfast
                    </span>
                    <span>
                        August 27, 2026
                    </span>
                    <ul>
                        <li>2026 President&apos;s Power Breakfast Title Sponsor</li>
                        <li>Billboard Ad for 14 Days</li>
                        <li>3 Minutes of Remarks</li>
                        <li>Promo Video Displayed at Symposium</li>
                        <li>Logo Displayed on Printed & Digital Material</li>
                        <li>On-site Activation</li>
                        <li>15 Symposium Tickets</li>
                        <li>15 Momentum Mixer Tickets</li>
                        <li>5 President&apos;s Power Tickets Breakfast</li>
                        <li>5 Speaker Meet & Greet Tickets</li>
                        <li>1 Item Included in Attendee Bags</li>
                    </ul>
                </div>

                {/* keynote speaker sponsor */}
                <div>
                    <p>
                        <span>$</span>
                        15,000
                    </p>
                    <span>
                        Keynote Speaker
                    </span>
                    <ul>
                        <li>2026 Keynote Speaker Presenting Sponsor</li>
                        <li>Introduces Keynote Speaker</li>
                        <li>Logo Displayed on Printed & Digital Material</li>
                        <li>1 Vendor Table</li>
                        <li>10 Symposium Tickets</li>
                        <li>10 Speaker Meet & Greet Tickets</li>
                        <li>5 Momentum Mixer Tickets</li>
                        <li>1 President&apos;s Power Tickets Breakfast</li>
                        <li>1 Item Included in Attendee Bags</li>
                    </ul>
                </div>

                {/* panel sponsor */}
                <div>
                    <p>
                        <span>$</span>
                        10,000
                    </p>
                    <span>
                        Panel
                    </span>
                    <ul>
                        <li>Presenting Sponsor for 1 Main Stage Panel</li>
                        <li>1 Moderator or Panelist Spot</li>
                        <li>Logo Displayed on Printed & Digital Material</li>
                        <li>1 Vendor Table</li>
                        <li>8 Symposium Tickets</li>
                        <li>5 Speaker Meet & Greet Tickets</li>
                        <li>5 Momentum Mixer Tickets</li>
                        <li>1 President&apos;s Power Tickets Breakfast</li>
                        <li>1 Item Included in Attendee Bags</li>
                    </ul>
                </div>

                {/* breakout sponsor */}
                <div>
                    <p>
                        <span>$</span>
                        7,500
                    </p>
                    <span>
                        Breakout
                    </span>
                    <ul>
                        <li>Presenting Sponsor for 1 Breakout Session</li>
                        <li>2 minutes of Opening Remarks during the Breakout</li>
                        <li>Logo Displayed on Printed & Digital Material</li>
                        <li>1 Vendor Table</li>
                        <li>5 Symposium Tickets</li>
                        <li>3 Speaker Meet & Greet Tickets</li>
                        <li>3 Momentum Mixer Tickets</li>
                        <li>1 Item Included in Attendee Bags</li>
                    </ul>
                </div>

                {/* Gold sponsor */}
                <div>
                    <p>
                        <span>$</span>
                        5,000
                    </p>
                    <span>
                        Gold
                    </span>
                    <ul>
                        <li>Logo Displayed on Printed & Digital Material</li>
                        <li>1 Vendor Table</li>
                        <li>5 Symposium Tickets</li>
                        <li>5 Speaker Meet & Greet Tickets</li>
                        <li>5 Momentum Mixer Tickets</li>
                    </ul>
                </div>

                {/* Silver sponsor */}
                <div>
                    <p>
                        <span>$</span>
                        2,500
                    </p>
                    <span>
                        Silver
                    </span>
                    <ul>
                        <li>Name Displayed on Select Material</li>
                        <li>2 Symposium Tickets</li>
                        <li>2 Momentum Mixer Tickets</li>
                    </ul>
                </div>

                {/* bronze sponsor */}
                <div>
                    <p>
                        <span>$</span>
                        1,000
                    </p>
                    <span>
                        Bronze
                    </span>
                    <ul>
                        <li>Name Included on Post-Event Email & Social Media</li>
                        <li>2 Symposium Tickets</li>
                        <li>2 Momentum Mixer Tickets</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>2025 Sponsors</h2>

                {sponsors2025Logos.map(({src, alt, width, height}, index) => (
                    <div
                        className={style.sponsorGalleryImageBlock}
                        key={index}
                    >
                        <Image
                            src={`/2025-sponsors/${src}`}
                            alt={`2025 Symposium Sponsor - ${alt}`}
                            width={width}
                            height={height}
                            className={style.sponsorGalleryImage}
                        />
                    </div>
                ))}
            </section>
        </main>
    )
}