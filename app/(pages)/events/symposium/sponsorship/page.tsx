'use client'
import SymposiumHero from '@/components/symposiumComps/hero/HeroSection'
import { symposiumPartners } from '@/lib/symposium'
import GallerySection from '@/components/GALLERYSECTION/page'
import ThreeBlockRow from '@/components/symposiumComps/threeBlockRow/page'
import LastCtaSection from '@/components/symposiumComps/lastCTASection/page'
import TierSection from '@/components/symposiumComps/tiersSection/page'
import FAQSection from '@/components/symposiumComps/faqSection/page'

export default function Sponsorship(){
    const sponsorCtaButtons = [
        {
            path: "https://growthzone",
            buttonName: "Become a Sponsor",
            type : "external"
        },
        {   
            path: "/download",
            buttonName: "Download Sponsorship Deck",
            type : "download"
        },
    ]

    const corporateQandA = [
        {
            qIndex : "connect-with-influencers",
            question : "Connect with Influencers",
            answer : `<p>Engage directly with seasoned business owners, corporate leaders, policymakers, and emerging entrepreneurs who are shaping the city’s economic future.</p>`
        },
        {
            qIndex : "stand-out-across-platforms",
            question : "Stand Out Across Platforms",
            answer : `<p>Gain prominent visibility through billboards, digital campaigns, printed material, media coverage, and on-site engagement.</p>`
        },
        {
            qIndex : "lead-as-champion",
            question : "Lead as a Champion",
            answer : `<p>Demonstrate your commitment to strengthening Memphis’ business ecosystem and advancing economic growth. Sponsorship positions your brand as a leader invested in the city’s future.</p>`
        },
        {
            qIndex : "expand-access",
            question : "Expand Access & Opportunity",
            answer : `<p>Your support helps lower ticket costs and creates opportunities to sponsor attendance for local college students and emerging entrepreneurs—broadening participation and strengthening the business community.</p>`
        },
    ]

    const presentingSponsorTiers = [
        {
            tIndex : "presentOne",
            tierBlockBackground : "#a29e96",
            tierPriceColor : "#000000",
            tierTextColor : "#000000",
            amount : "25,000",
            sponsorTitle : "Momentum Mixer",
            sponsorDate : "August 27, 2026",
            sponsorBenefits : [
                "2026 Momentum Mixer Title Sponsor",
                "Billboard Ad for 14 Days",
                "3 Minutes of Remarks",
                "Promo Video During Symposiums",
                "Logo Displayed on Printed & Digital Material",
                "On-site Activation",
                "15 Symposium Tickets",
                "5 Speaker Meet & Greet Tickets",
                "2 President's Power Tickets Breakfast",
                "1 Item Included in Attendee Bags",
            ]
        },
        {
            tIndex : "presentTwo",
            tierBlockBackground : "#2d353c",
            tierPriceColor : "#ffffff",
            tierTextColor : "#ffffff",
            amount : "50,000",
            sponsorTitle : "Title Sponsor",
            sponsorDate : "August 27-28, 2026",
            sponsorBenefits : [
                "2026 Symposium Title Sponsor",
                "Billboard Ad for 28 Days",
                "1 News Interview",
                "3 Minutes of Remarks at Al Events",
                "1 Panelist or Moderator Spot",
                "Promo Video Displayed at Symposium",
                "Logo Displayed on Printed & Digital Material",
                "On-site Activation",
                "20 Symposium Tickets",
                "20 Momentum Mixer Tickets",
                "5 President's Power Tickets Breakfast",
                "5 Speaker Meet & Greet Tickets",
                "2 Branded Items in Attendee Bags",
            ]
        },
        {
            tIndex : "presentThree",
            tierBlockBackground : "#a29e96",
            tierPriceColor : "000000",
            tierTextColor : "#000000",
            amount : "25,000",
            sponsorTitle : "President's Power Breakfast",
            sponsorDate : "August 27, 2026",
            sponsorBenefits : [
                "2026 President's Power Breakfast Title Sponsor",
                "Billboard Ad for 14 Days",
                "3 Minutes of Remarks",
                "Promo Video Displayed at Symposium",
                "Logo Displayed on Printed & Digital Material",
                "On-site Activation",
                "15 Symposium Tickets",
                "15 Momentum Mixer Tickets",
                "5 President's Power Tickets Breakfast",
                "5 Speaker Meet & Greet Tickets",
                "1 Item Included in Attendee Bags"
            ]
        },
    ]

    return (
        <main>
            <SymposiumHero
                showButtons={false}
                ctaButtons={sponsorCtaButtons}
            />

            <ThreeBlockRow/>

            <TierSection
                sectionBackground = {"#f1dbb9"}
                sectionTitle={"Presenting Sponsors:"}
                tiersToShow = {presentingSponsorTiers}
                sponsorTitleBackground = {"#d8bca5"}
            />

            <FAQSection
                sectionHeading={'Why Sponsor?'}
                sectionIntro={`
                    <p><strong>Invest in the future of Memphis.</strong> <br/>Your partnership helps BCoM educate and equip entrepreneurs, while positioning your brand as a catalyst for economic growth and opportunity.</p>
                `}
                faqBlockWidth = {"90%"}
                qAList={corporateQandA}
                questionBackground = {"#977A66"}
                answerBackground = {"#ededed"}
            />

            <LastCtaSection
                buttonsInfo={sponsorCtaButtons}
            />

            {/* <section>
                <h2>
                    Connect with Influencers
                </h2>
                <p>
                    Engage directly with seasoned business owners, corporate leaders, policymakers, and emerging entrepreneurs who are shaping the city’s economic future.
                </p>
            </section> */}

            {/* <section>
                <h2>
                    Stand Out Across Platforms
                </h2>
                <p>
                    Gain prominent visibility through billboards, digital campaigns, printed material, media coverage, and on-site engagement.
                </p>
            </section> */}
            {/* <section>
                <h2>
                    Lead as a Champion
                </h2>
                <p>
                    Demonstrate your commitment to strengthening Memphis’ business ecosystem and advancing economic growth. Sponsorship positions your brand as a leader invested in the city’s future.
                </p>
            </section> */}
            {/* <section>
                <h2>
                    Expand Access & Opportunity
                </h2>
                <p>
                    Your support helps lower ticket costs and creates opportunities to sponsor attendance for local college students and emerging entrepreneurs—broadening participation and strengthening the business community.
                </p>
            </section> */}
            {/* sponsor tiers */}
            {/* <section> */}
                

                {/* keynote speaker sponsor */}
                {/* <div>
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
                </div> */}

                {/* panel sponsor */}
                {/* <div>
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
                </div> */}

                {/* breakout sponsor */}
                {/* <div>
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
                </div> */}

                {/* Gold sponsor */}
                {/* <div>
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
                </div> */}

                {/* Silver sponsor */}
                {/* <div>
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
                </div> */}

                {/* bronze sponsor */}
                {/* <div>
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
            </section> */}
            <GallerySection
                sectionBackground='#D8BCA5'
                galleryHeadingText={"Our Partners"}
                galleryImages={symposiumPartners}
            />

        </main>
    )
}