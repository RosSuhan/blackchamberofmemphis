'use client'
import SymposiumHero from '@/components/symposiumComps/hero/HeroSection'
import { symposiumPartners } from '@/lib/symposium'
import GallerySection from '@/components/GALLERYSECTION/page'
import ThreeBlockRow from '@/components/symposiumComps/threeBlockRow/page'
import LastCtaSection from '@/components/symposiumComps/lastCTASection/page'
import TierSection from '@/components/symposiumComps/tiersSection/page'
import FAQSection from '@/components/symposiumComps/faqSection/page'
import SymFooter from '@/components/symposiumComps/symFooter/page'
import OneColumn from '@/components/WordImageBlocks/OneColumn'

export default function Sponsorship(){
    const applySponsorshipLink = "https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Events/Register/J5F6AqzFJCzC3"

    const sponsorCtaButtons = [
        {
            path: applySponsorshipLink,
            buttonName: "Become a Sponsor",
            type : "external"
        },
        {   
            path: "/events/symposium/Symposium_Sponsorship_Deck_2026.pdf",
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
        // {
        //     tIndex : "presentOne",
        //     tierBlockBackground : "#a29e96",
        //     tierPriceColor : "#000000",
        //     tierTextColor : "#000000",
        //     amount : "25,000",
        //     sponsorTitle : "Momentum Mixer",
        //     sponsorDate : "August 27, 2026",
        //     sponsorBenefits : [
        //         "2026 Momentum Mixer Title Sponsor",
        //         "Billboard Ad for 14 Days",
        //         "3 Minutes of Remarks",
        //         "Promo Video During Symposiums",
        //         "Logo Displayed on Printed & Digital Material",
        //         "On-site Activation",
        //         "15 Symposium Tickets",
        //         "15 Momentum Mixer Tickets",
        //         "5 Speaker Meet & Greet Tickets",
        //         "2 President's Power Tickets Breakfast",
        //         "1 Item Included in Attendee Bags",
        //     ],
        //     featureBenefits : [
        //         "Exclusive branding as the Momentum Mixer Title Sponsor",
        //         "Speaking opportunity during the networking event",
        //         "High-impact visibility across event platforms and promotions",
        //         "Direct attendee engagement through on-site activation",
        //         "Strong guest access with networking-focused ticket allocation"
        //     ],
        //     featureHighlight : "Own the networking experience"
        // },
        {
            tIndex : "presentTwo",
            // tierBlockBackground : "#2d353c",
            tierBlockBackground : "#977A66",
            tierPriceColor : "#ffffff",
            tierTextColor : "#ffffff",
            amount : "30,000",
            sponsorTitle : "Title Sponsor",
            sponsorDate : "August 28, 2026",
            sponsorBenefits : [
                "2026 Symposium Title Sponsor",
                "Billboard Ad for 14 Days",
                "1 News Interview",
                "3 Minutes of Remarks",
                "1 Panelist or Moderator Spot",
                "Promo Video Displayed at Symposium",
                "Logo Displayed on Printed & Digital Material",
                "On-site Activation",
                "10 Symposium Tickets",
                "5 Chairman's Council Cocktail Mixer Tickets",
                "2 Items in Attendee Bags",
            ],
            featureBenefits : [
                "Headline branding as the official Symposium Title Sponsor",
                "On-stage presence including remarks and panel participation",
                "Major media exposure including billboard campaign and press interview",
                "Premium brand visibility across all event and marketing channels",
                "VIP access and hosting opportunities with top-tier ticket allocation"
            ],
            featureHighlight : "Own the entire symposium experience"
        },
        {
            tIndex : "presentThree",
            tierBlockBackground : "#a29e96",
            tierPriceColor : "000000",
            tierTextColor : "#000000",
            amount : "15,000",
            sponsorTitle : "Chairman's Council Cocktail Mixer",
            sponsorDate : "August 27, 2026",
            sponsorBenefits : [
                "2026 Chairman's Council Cocktail Mixer Title Sponsor",
                "Billboard Ad for 7 Days",
                "3 Minutes of Remarks",
                "Promo Video During Symposium",
                "Logo Displayed on Printed & Digital Material",
                "On-site Activation",
                "5 Symposium Tickets",
                "5 Chairman's Council Cocktail Mixer Ticket",
                "1 Item Included in Attendee Bags"
            ],
            featureBenefits : [
                "Title sponsorship of the exclusive President's Power Breakfast",
                "Speaking opportunity in a high-level, intimate setting",
                "Premium visibility across event materials and promotions",
                "Direct engagement with speakers and VIP attendees",
                "Curated access through premium ticket allocation"
            ],
            featureHighlight : "Own the leadership room"
        },
    ]

    const secondPresentingSponsorTiers = [
        {
            tIndex : "secondPresentOne",
            // tierBlockBackground : "#2d353c",
            // tierPriceColor : "#ffffff",
            // tierTextColor : "#ffffff",
            tierBlockBackground : "#ffffff",
            tierPriceColor : "#2d353c",
            tierTextColor : "#2d353c",
            amount : "10,000",
            sponsorTitle : "Panel",
            sponsorDate : "",
            sponsorBenefits : [
                "Presenting Sponsor for 1 Main Stage Panel",
                "1 Moderator or Panelist Spot",
                "Logo Displayed on Printed & Digital Material",
                "1 Vendor Table",
                "5 Symposium Tickets",
                "2 Chairman's Council Cocktail Mixer Tickets",
                "1 Item Included in Attendee Bags"
            ],
            featureBenefits : [
                "Sponsorship of a main stage panel session",
                "Opportunity to participate as moderator or panelist",
                "Brand visibility across event materials and promotions",
                "Direct audience engagement via exhibitor presence",
                "Access to attendees and speakers through ticket allocation"
            ],
            featureHighlight : "Be part of the conversation"
        },
        {
            tIndex : "secondPresentTwo",
            tierBlockBackground : "#977A66",
            tierPriceColor : "#ffffff",
            tierTextColor : "#ffffff",
            amount : "15,000",
            sponsorTitle : "Keynote Speaker",
            sponsorDate : "",
            sponsorBenefits : [
                "2026 Keynote Speaker Presenting Sponsor",
                "Introduces Keynote Speaker",
                "Logo Displayed on Printed & Digital Material",
                "1 Vendor Table",
                "5 Symposium Tickets",
                "3 Chairman's Council Cocktail Mixer Tickets",
                "1 Item Included in Attendee Bags",
            ],
            featureBenefits : [
                "Exclusive association with the keynote speaker experience",
                "Opportunity to introduce the keynote on stage",
                "Strong brand visibility across event and promotional platforms",
                "On-site activation to engage attendees directly",
                "Access to key moments with curated ticket allocation"
            ],
            featureHighlight : "Align your brand with the main voice of the event"
        },
        {
            tIndex : "secondPresentThree",
            // tierBlockBackground : "#2d353c",
            // tierPriceColor : "#ffffff",
            // tierTextColor : "#ffffff",
            tierBlockBackground : "#ffffff",
            tierPriceColor : "#2d353c",
            tierTextColor : "#2d353c",
            amount : "7,500",
            sponsorTitle : "Breakout",
            sponsorDate : "",
            sponsorBenefits : [
                "Presenting Sponsor for 1 Breakout Session",
                "2 minutes of Opening Remarks during the Breakout",
                "Logo Displayed on Printed & Digital Material",
                "1 Vendor Table",
                "3 Symposium Tickets",
                "2 Chairman's Council Cocktail Mixer Tickets",
                "1 Item Included in Attendee Bags",
            ],
            featureBenefits : [
                "Sponsorship of a breakout session",
                "Opportunity to address attendees during the session",
                "Brand visibility across event materials",
                "On-site presence to connect with attendees",
                "Targeted access through curated ticket allocation"
            ],
            featureHighlight : "Engage with focused audience"
        }
    ]

    const supportingSponsorTiers = [

        {
            tIndex : "supportingOne",
            // tierBlockBackground : "#2d353c",
            // tierPriceColor : "#ffffff",
            // tierTextColor : "#ffffff",
            tierBlockBackground : "#a29e96",
            tierPriceColor : "#000000",
            tierTextColor : "#000000",
            amount : "2,500",
            sponsorTitle : "Silver",
            sponsorDate : "",
            sponsorBenefits : [
                "Name Displayed on Select Material",
                "2 Symposium Tickets",
                "2 Chairman's Council Cocktail Mixer Tickets",
                "1 Vendor Table",
            ],
            featureBenefits : [
                "Brand visibility across select event materials",
                "On-site presence at the Momentum Mixer",
                "Access to both the symposium and networking experiences",
                "Increased opportunity to engage with attendees and peers",
            ],
            featureHighlight : "Build visibility and start engaging"
        },
        {
            tIndex : "supportingTwo",
            tierBlockBackground : "#977A66",
            tierPriceColor : "#ffffff",
            tierTextColor : "#ffffff",
            amount : "5,000",
            sponsorTitle : "Gold",
            sponsorDate : "",
            sponsorBenefits : [
                "Logo Displayed on Printed & Digital Material",
                "1 Vendor Table",
                "3 Symposium Tickets",
                "2 Chairman's Council Cocktail Mixer Tickets",
            ],
            featureBenefits : [
                "Expanded brand visibility across digital and on-site event channels",
                "Direct audience engagement through on-site activation",
                "Access to exclusive speaker and networking experiences",
                "Generous ticket allocation for team and client hosting",
            ],
            featureHighlight : "Strengthen your presence and connections"
        },
        {
            tIndex : "supportingThree",
            // tierBlockBackground : "#2d353c",
            // tierPriceColor : "#ffffff",
            // tierTextColor : "#ffffff",
            tierBlockBackground : "#a29e96",
            tierPriceColor : "#000000",
            tierTextColor : "#000000",
            amount : "1,000",
            sponsorTitle : "Bronze",
            sponsorDate : "",
            sponsorBenefits : [
                "Name Included on Post-Event Email & Social Media",
                "2 Symposium Tickets",
                "1 Vendor Table at Momentum Mixer",
            ],
            featureBenefits : [
                "Brand recognition across post-event communications and social media",
                "Access to the symposium and networking events",
                "Entry-level presence at the Momentum Mixer",
                "Opportunity to connect with attendees in a relaxed setting",
            ],
            featureHighlight : "Get your brand in the room",
        }
    ]
    return (
        <main>
            <SymposiumHero
                showButtons={true}
                ctaButtons={sponsorCtaButtons}
            />

            <OneColumn
                backgroundColor='#2d353c'
                textColor='var(--white)'
                headingIntro=''
                headingTextColor=''
                blockHeading=''
                subHeading=''
                paragraph = {`
                    <p>The 2026 BCOM Symposium offers sponsors a focused opportunity to align with entrepreneurship, economic mobility, and business growth in Memphis. With a curated audience of approximately 120 entrepreneurs, investors, public-sector leaders, corporate partners, and ecosystem builders, the event is designed for high-quality engagement and long-term community investment. Your sponsorship helps BCOM create a practical business growth experience centered on access to capital, investment readiness, procurement visibility, technology adoption, and business mobility.</p>`}
                multiEvents={[]}
            />

            {/* <ThreeBlockRow/> */}

            <TierSection
                // sectionBackground = {"#f1dbb9"}
                sectionBackground={"#ffffff"}
                sectionTitle={"Presenting Sponsors:"}
                tiersToShow = {presentingSponsorTiers}
                sponsorTitleBackground = {"#d8bca5"}
                sponsorshipApplicationLink = {applySponsorshipLink}
            />

            <TierSection
                sectionBackground = {"#a1995f"}
                // sectionBackground={"#ffffff"}
                sectionTitle={"Presenting Sponsors:"}
                tiersToShow = {secondPresentingSponsorTiers}
                sponsorTitleBackground = {"#d8bca5"}
                sponsorshipApplicationLink = {applySponsorshipLink}
            />

            <TierSection
                // sectionBackground = {"#f1dbb9"}
                sectionBackground={"#ffffff"}
                sectionTitle={"Supporting Sponsors:"}
                tiersToShow = {supportingSponsorTiers}
                sponsorTitleBackground = {"#d8bca5"}
                sponsorshipApplicationLink = {applySponsorshipLink}
            />

            <OneColumn
                backgroundColor='#2d353c'
                textColor='var(--white)'
                headingIntro=''
                headingTextColor=''
                blockHeading='Why Sponsor?'
                subHeading=''
                paragraph={`
                    <p>Your sponsorship is an investment in business growth, economic mobility, and the future of entrepreneurship in Memphis. By partnering with BCOM, you gain access to a focused room of entrepreneurs, funders, civic leaders, business advisors, and decision-makers actively shaping the local and regional business landscape.</p>
                    <ul style="text-align:left">
                        <li>Be positioned as a partner in Memphis’ entrepreneurial future</li>
                        <li>Engage directly with growth-ready businesses and ecosystem leaders</li>
                        <li>Align with a timely civic and economic development platform</li>
                        <li>Support practical conversations around capital, procurement, innovation, and business readiness</li>
                        <li>Gain visibility across event marketing, digital channels, onsite materials, and post-event storytelling</li>
                    </ul>`}
                multiEvents={[]}
            />

            {/* <FAQSection
                sectionHeading={'Why Sponsor?'}
                sectionIntro={`
                    <p><strong>Invest in the future of Memphis.</strong> <br/>Your partnership helps BCoM educate and equip entrepreneurs, while positioning your brand as a catalyst for economic growth and opportunity.</p>
                `}
                faqBlockWidth = {"90%"}
                qAList={corporateQandA}
                questionBackground = {"#977A66"}
                answerBackground = {"#ededed"}
            /> */}

            <LastCtaSection
                buttonsInfo={sponsorCtaButtons}
            />

            <GallerySection
                sectionBackground='#D8BCA5'
                galleryHeadingText={"Our 2025 Partners"}
                galleryImages={symposiumPartners}
            />
            <SymFooter/>
        </main>
    )
}