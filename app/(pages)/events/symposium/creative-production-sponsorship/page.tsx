import FAQSection from "@/components/symposiumComps/faqSection/page";
import SymposiumHero from "@/components/symposiumComps/hero/HeroSection";
import InKindSponsorOptions from "@/components/symposiumComps/inKindSponsorOptions/page";
import LastCtaSection from "@/components/symposiumComps/lastCTASection/page";
import SymFooter from "@/components/symposiumComps/symFooter/page";
import ThreeBlockRow from "@/components/symposiumComps/threeBlockRow/page";
import TierSection from "@/components/symposiumComps/tiersSection/page";


export default function CreativeProdSponsor(){
    const applicationLink = "/events/symposium/creative-production-sponsorship/application"

    const sponsorCtaButtons = [
        {
            path: applicationLink,
            buttonName: "Become a Sponsor",
            type : "internal"
        },
        {   
            path: "/events/symposium/Creative_Production_Symposium_Sponsorship_Deck.pdf",
            buttonName: "Download Sponsorship Deck",
            type : "download"
        },
    ]

    const supportingSponsorTiers = [
        {
            tIndex : "partnershipTwo",
            // tierBlockBackground : "#a1995f",
            // tierPriceColor : "#ffffff",
            // tierTextColor : "#ffffff",
            tierBlockBackground : "#D8BCA5",
            tierPriceColor : "#000000",
            tierTextColor : "#000000",
            amount : "15,000",
            sponsorTitle : "",
            sponsorDate : "",
            sponsorBenefits : [
                "Optional: Limited 3-day Digital Billboard Rotation",
                "Up to 60 second Promo Video During Main Stage Transition",
                "Logo Displayed on Printed & Digital Material",
                "1 Dedicated Sponsor Spotlight Post across BCoM platforms",
                "1 Post-event Spotlight Promo (video or reel shared within 60 days)",
                "On-stage Verbal Recognition During Main Program",
                "6 Symposium Tickets",
                "6 Momentum Mixer Tickets",
                "2 Speaker Meet & Greet Tickets",
                "1 President's Power Breakfast Tickets",
                "1 Item Included in Attendee Bags"
            ],
            featureBenefits : [
                "Multi-channel brand visibility across event platforms",
                "Video promotion during main stage transitions",
                "Featured brand exposure through dedicated spotlight content",
                "Verbal recognition during the main programme",
                "Curated access to attendees and networking opportunities",
            ],
            // featureHighlight : "Amplify your brand across digital, stage, and audience touchpoints"
            featureHighlight : ""
        },
        {
            tIndex : "partnershipOne",
            tierBlockBackground : "#a1995f",
            tierPriceColor : "#ffffff",
            tierTextColor : "#ffffff",
            amount : "20,000",
            sponsorTitle : "",
            sponsorDate : "",
            sponsorBenefits : [
                "Optional: Limited 7-day Digital Billboard Rotation",
                "1 Moderator or Panelist Spot (Subject to Availability)",
                "Up to 60 second Promo Video During Main Stage Transition",
                "Logo Displayed on Printed & Digital Material",
                "2 Dedicated Sponsor Spotlight Post across BCoM platforms",
                "1 Post-event Spotlight Promo (1 shared within 60 days)",
                "On-stage Verbal Recognition During Main Program",
                "On-site Activation",
                "10 Symposium Tickets",
                "10 Momentum Mixer Tickets",
                "2 Speaker Meet & Greet Tickets",
                "1 President's Power Breakfast Tickets",
                "1 Item Included in Attendee Bags"
            ],
            featureBenefits : [
                "High-impact brand visibility across event, media, and promotional channels",
                "On-stage presence with speaking or panel participation opportunity",
                "Integrated video promotion during main stage programming",
                "Direct audience engagement through on-site activation",
                "Premium access to attendees, speakers, and networking experiences"
            ],
            // featureHighlight : "Multi-channel brand exposure with on-stage presence and audience engagement"
            featureHighlight : ''
        },
        {
            tIndex : "partnershipThree",
            tierBlockBackground : "#D8BCA5",
            tierPriceColor : "#000000",
            tierTextColor : "#000000",
            amount : "10,000",
            sponsorTitle : "",
            sponsorDate : "",
            sponsorBenefits : [
                "Optional: Limited 3-day Digital Billboard Rotation",
                "Up to 60 second Promo Video During Main Stage Transition",
                "Logo Displayed on Printed & Digital Material",
                "1 Dedicated Sponsor Spotlight Post across BCoM platforms",
                "1 Post-event Spotlight Promo (video or reel shared within 60 days)",
                "On-stage Verbal Recognition During Main Program",
                "4 Symposium Tickets",
                "4 Momentum Mixer Tickets",
                "2 Speaker Meet & Greet Tickets",
                "1 Item Included in Attendee Bags"
            ],
            featureBenefits : [
                "Brand visibility across digital and on-site event channels",
                "Promotional spotlight across event platforms",
                "On-stage recognition during the programme",
                "Opportunity to connect with attendees through event presence",
                "Access to key sessions and networking experiences"
            ],
            // featureHighlight : "Build brand presence while connecting with a targeted audience"
            featureHighlight : ""
        },
    ]
    const creativeSponsorTiers = [
        {
            tIndex : "creativeSponsorTwo",
            tierBlockBackground : "#D8BCA5",
            tierPriceColor : "#000000",
            tierTextColor : "#000000",
            amount : "2,500",
            sponsorTitle : "",
            sponsorDate : "",
            sponsorBenefits : [
                "Logo Displayed on Digital Material",
                "Inclusion in Post-event group sponsor thank-you Graphic & Email",
                "On-stage Verbal Recognition During Main Program",
                "2 Symposium Tickets",
                "2 Momentum Mixer Tickets"
            ],
            featureBenefits : [
                "Brand visibility across digital event materials",
                "Inclusion in post-event sponsor recognition",
                "Verbal recognition during the programme",
                "Access to symposium and networking events",
            ],
            // featureHighlight : "Be recognised as a contributing partner to the event experience"
            featureHighlight : ""
        },
        {
            tIndex : "creativeSponsorOne",
            tierBlockBackground : "#121523",
            tierPriceColor : "#ffffff",
            tierTextColor : "#ffffff",
            amount : "5,000",
            sponsorTitle : "",
            sponsorDate : "",
            sponsorBenefits : [
                "Logo Displayed on Printed & Digital Material",
                "1 Dedicated Sponsor Spotlight Post across BCoM Platforms",
                "On-stage Verbal Recognition During Main Program",
                "1 Post-event Spotlight Promo (Video or reel shared within 60 days)",
                "1 Vendor Table",
                "2 Symposium Tickets",
                "2 Momentum Mixer Tickets",
                "1 Speaker Meet & Greet Ticket"
            ],
            featureBenefits : [
                "On-site activation to engage attendees directly",
                "Brand visibility across event materials and platforms",
                "Featured sponsor spotlight content",
                "Verbal recognition during the event",
                "Access to event and networking experiences"
            ],
            // featureHighlight : "Connect with attendees through on-site presence and promotion"
            featureHighlight : ""
        },
        {
            tIndex : "creativeSponsorThree",
            tierBlockBackground : "#D8BCA5",
            tierPriceColor : "#000000",
            tierTextColor : "#000000",
            amount : "500",
            sponsorTitle : "",
            sponsorDate : "",
            sponsorBenefits : [
                "On-stage Verbal Recognition During Main Program",
                "Inclusion in Post-event group sponsor thank-you Graphic & Email",
                "1 Symposium Tickets",
                "1 Momentum Mixer Tickets"
            ],
            featureBenefits : [
                "Recognition during the event programme",
                "Inclusion in post-event sponsor acknowledgements",
                "Access to the symposium and networking experience"
            ],
            // featureHighlight : "Support the event and gain community recognition"
            featureHighlight : ""
        }
    ]

    const inKindQandA = [
        {
            qIndex : "showcase-your-craft",
            question : "Showcase Your Craft in Real Time",
            answer : `<p>From decor to production to visual storytelling, your work becomes part of the attendee experience. Through curated activations, vendor presence, and promo features, your brand is not just seen—it’s experienced.</p>`
        },
        {
            qIndex : "connect-with-decision-makers",
            question : "Connect with Decision-Makers",
            answer : `<p>The Symposium places your work in front of individuals and organizations who influence contracts, collaborations, and future opportunities.</p>`
        },
        {
            qIndex : "extend-you-visibility",
            question : "Extend Your Visibility Beyond Event Day",
            answer : `<p>Gain strategic  exposure through sponsor spotlights, promo placements, recap content, and social media amplification designed to continue driving awareness and engagement after the Symposium concludes.</p>`
        }
    ]

    const guidelines = [
        {
            qIndex : "fair-market",
            question : "Fair Market Value Verification",
            answer : `
                <p>Sponsorship levels must correspond to the fair market value of the in-kind contribution.</p>
                <p>Vendors must submit:<p>
                <ul>
                    <li>Detailed proposal or scope of services</li>
                    <li>Estimated labor + production costs</li>
                </ul>
                <p>Final sponsorship level subject to BCoM review</p>
            `
        },
        {
            qIndex : "service-commitment",
            question : "Service Commitment",
            answer : `
                <p>Deliverables must meet the agreed-upon scope, timeline, and quality standards.</p>
                <p>A signed Memorandum of Understanding will outline expectations.</p>
                <p>Partial service fulfillment may result in an adjusted sponsorship tier.</p>
            `
        },
        {
            qIndex : "submission-requirement",
            question : "Submission Requirements",
            answer : `
                <p>All proposals must be submitted through the official online form and include:</p>
                <ul>
                    <li>Company Overview</li>
                    <li>Contact Information</li>
                    <li>Scope of Proposed Services</li>
                    <li>Itemized in-Kind Contribution (labor, materials, equipments, production, etc.)</li>
                    <li>Portfolio or Work Samples</li>
                    <li>Staffing & Execution Plan</li>
                </ul>
            `
        },
    ]

    return (
        <main>
            <SymposiumHero
                showButtons={true}
                ctaButtons={sponsorCtaButtons}
            />

            <ThreeBlockRow/>

            <FAQSection
                sectionHeading={'Why Sponsor?'}
                sectionIntro={`
                    <p><strong>Invest in the future of Memphis.</strong> <br/>Your partnership helps BCoM educate and equip entrepreneurs, while positioning your brand as a catalyst for economic growth and opportunity.</p>
                `}
                faqBlockWidth = {"90%"}
                qAList={inKindQandA}
                questionBackground = {"#977A66"}
                answerBackground = {"#ededed"}
            />

            <InKindSponsorOptions/>

            <TierSection
                // sectionBackground = {"#f1dbb9"}
                sectionBackground = {"#fffffff"}
                sectionTitle={"Creative Sponsors levels:"}
                tiersToShow = {supportingSponsorTiers}
                sponsorTitleBackground = {"#d8bca5"}
                sponsorshipApplicationLink={applicationLink}
            />

            <TierSection
                // sectionBackground = {"#f1dbb9"}
                sectionBackground = {"#fffffff"}
                sectionTitle={"Creative Sponsors levels:"}
                tiersToShow = {creativeSponsorTiers}
                sponsorTitleBackground = {"#d8bca5"}
                sponsorshipApplicationLink={applicationLink}
            />

            <FAQSection
                sectionHeading={'Guidelines'}
                sectionIntro={`
                    <p>The Creative & Production Partner Program is a service-based sponsorship opportunity where businesses contribute in-kind professional services to support the Symposium. In return, partners receive structured visibility, brand positioning, and access benefits aligned with each sponsorship tier.</p>
                `}
                faqBlockWidth = {"90%"}
                qAList={guidelines}
                questionBackground = {"#977A66"}
                answerBackground = {"#ededed"}
            />

            <LastCtaSection
                buttonsInfo={sponsorCtaButtons}
            />

            <SymFooter/>
        </main>
    )
}