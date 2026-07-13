import GallerySection from '@/components/GALLERYSECTION/page'
import LogoSlider from '@/components/PartnerLogoSection/LogoSliderRow'
import BusinessSession from '@/components/symposiumComps/businessSession/page'
import CtaSection from '@/components/symposiumComps/CTAsection/page'
import SymposiumHero from '@/components/symposiumComps/hero/HeroSection'
import LastCtaSection from '@/components/symposiumComps/lastCTASection/page'
import PartnerLogoSlider from '@/components/symposiumComps/PartnerLogoSlider/page'
import PartnerWithUs from '@/components/symposiumComps/partnerWithUs/page'
import SymFooter from '@/components/symposiumComps/symFooter/page'
import ThreeBlockRow from '@/components/symposiumComps/threeBlockRow/page'
import WideTextSection from '@/components/symposiumComps/wideTextSection/page'
import VideoBlock from '@/components/VIDEO/page'
import { symposiumPartners } from '@/lib/symposium'

export default function Symposium(){
    const ctaButtons = [
        {
            path: "/events/symposium/sponsorship",
            buttonName: "Become a Sponsor",
            type : "internal" 
        },
        {   
            path: "https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Events/Register/J5F6AqzFJCzC3",
            buttonName: "Register To Attend",
            type : 'external'
        },
    ]

    const symposium2026Partners = [
        {
            name: "Convergence Memphis",
            image: "/events/symposium/2026-sponsors/convergence-logo.webp",
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
            image: "/events/symposium/2026-sponsors/Reign-Logo.png",
            alt: 'Black Chamber of Memphis 2026 Symposium Sponsor - Reign Venue',
            width: 500,
            height: 500
        }
    ]

    return (
        <main>
            <SymposiumHero
                showButtons={true}
                ctaButtons={ctaButtons || []}
            />

            {/* <ThreeBlockRow/> */}

            <VideoBlock/>

            <WideTextSection
                wideTextSectionHeading={"Building Wealth In Our Community Symposium"}
                wideTextSectionText = {`
                    <p>The 2026 Building Wealth in Our Community Symposium is the Black Chamber of Memphis' signature business mobility experience, convening entrepreneurs, investors, corporate leaders, public-sector partners, and business advisors for a day of practical strategies, meaningful connections, and actionable insights that help businesses access capital, secure contracts, leverage innovation, and accelerate growth.</p>
                    <p>Guided by this year's theme, <strong>Building Entrepreneur City: Access. Investment. Mobility.</strong>, the Symposium is designed to help growth-ready businesses move from opportunity to execution. Through engaging discussions, strategic networking, and expert guidance, participants will gain greater access to capital, procurement opportunities, technology, partnerships, and the resources needed to grow and compete.</p>
                    <p>The day concludes with <strong>AIM After Hours</strong>, an extended networking experience on site where attendees can continue building relationships and exploring new opportunities in a more relaxed setting.</p>
                    <p>Whether you are scaling your business, seeking investment, pursuing major contracts, or expanding your professional network, the Building Wealth in Our Community Symposium is where entrepreneurs and decision-makers come together to advance business mobility and strengthen Memphis through entrepreneurship.</p>

                    <ul style="list-style: none; padding:0; margin: 0; text-align: left">
                        <li>
                            <span>Date:</span>
                            Friday, October 2, 2026
                        </li>
                        <li>
                            <span>
                                Symposium Location:
                            </span>
                            Reign Event Venue
                        </li>
                        <li>
                            <span>Theme:</span>
                            Building Entreprener City: Access, Investment, Mobility
                        </li>
                        <li>
                            <span>
                                Price:
                            </span><br>
                            <strong>Black Chamber Members:</strong> $50; <br> <strong>Non-Members:</strong> $75 <br> <strong>AIM After Hours Only:</strong> $52
                        </li>
                    </ul>
                `}
            />
            {/* FedEx Event Center - 415 Great View Dr E Suite 103, Memphis, TN 38134 */}

            {/* <CtaSection/> */}

            <BusinessSession/>
            
            <div
                id='sponsorship'
            >
                <PartnerWithUs/>
            </div>
            
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

            <LastCtaSection
                buttonsInfo={ctaButtons || []}
            />

            <SymFooter/>
        </main>
    )
}