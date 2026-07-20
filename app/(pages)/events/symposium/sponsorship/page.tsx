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
import { presentingSponsorTiers } from '@/lib/symposiumUtils/PresentingSponsorTiers'
import { secondPresentingSponsorTiers } from '@/lib/symposiumUtils/secondPresentingSponsorTiers'
import { supportingSponsorTiers } from '@/lib/symposiumUtils/supportingSponsorTiers'
import { activationSponsorTiers } from '@/lib/symposiumUtils/activationSponsorTiers'
import { aimLaneSponsorshipTiers } from '@/lib/symposiumUtils/aimLaneSponsorshipTiers'
import PartnerLogoSlider from '@/components/symposiumComps/PartnerLogoSlider/page'

export default function Sponsorship(){
    const applySponsorshipLink = "https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Events/Register/2JFz3kqIqFNCz"

    const sponsorCtaButtons = [
        {
            path: applySponsorshipLink,
            buttonName: "Become a Sponsor",
            type : "external"
        },
        {   
            path: "/events/symposium/BCOM_Symposium_Package_070226.pdf",
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

    const symposium2026Partners = [
        {
            name: "Convergence Memphis",
            image: "/events/symposium/2026-sponsors/convergence-logo.png",
            alt: 'Black Chamber of Memphis 2026 Symposium Sponsor - Convergence Memphis',
            width: 1230,
            height: 220,
        },    {
            name: "Pathway Lending",
            image: "/events/symposium/2026-sponsors/Pathway-Lending.png",
            alt: 'Black Chamber of Memphis 2025 Symposium Sponsor - Pathway Lending',
            width: 2835,
            height: 418,
        },
        {
            name: "Reign Venue",
            image: "/events/symposium/2026-sponsors/reign-logo.png",
            alt: 'Black Chamber of Memphis 2026 Symposium Sponsor - Reign Venue',
            width: 500,
            height: 500
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
                sectionTitle={"Premier Sponsors:"}
                tiersToShow = {secondPresentingSponsorTiers}
                sponsorTitleBackground = {"#d8bca5"}
                sponsorshipApplicationLink = {applySponsorshipLink}
            />
{/* 
            <TierSection
                sectionBackground=''
                sectionTitle = {'AIM Lane Sponsorships'}
                tiersToShow = {aimLaneSponsorshipTiers}
                sponsorTitleBackground = {''}
                sponsorshipApplicationLink = {applySponsorshipLink}
            /> */}

            {/* <TierSection
                sectionBackground = {'#a1995f'}
                sectionTitle = {"Activation Sponsorships"}
                tiersToShow={activationSponsorTiers}
                sponsorTitleBackground = {'#d8bca5'}
                sponsorshipApplicationLink = {applySponsorshipLink}
            /> */}

            <TierSection
                // sectionBackground = {"#f1dbb9"}
                sectionBackground={""}
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
                sectionBackground='#a1995f'
                galleryHeadingText={"Our 2026 Partners"}
                galleryImages={symposium2026Partners}
            />

            <section
                style={{background:'#D8BCA5', padding:"3rem 0 5rem 0", width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}
            >
                <h2
                    // className='globalSecondHeading'
                    style={{fontSize:"1.802rem", width:"90%", textAlign:"center", textWrap:"balance"}}
                >
                    Our 2025 Partners
                </h2>

                <PartnerLogoSlider
                    partners={symposiumPartners}
                />
            </section>
            <SymFooter/>
        </main>
    )
}