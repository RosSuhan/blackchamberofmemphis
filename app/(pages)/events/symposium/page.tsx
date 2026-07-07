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
            image: "/events/symposium/2025-sponsors/CONVERGENCEMemphis.webp",
            alt: 'Black Chamber of Memphis 2025 Symposium Sponsor - Convergence Memphis',
            width: 400,
            height: 145,
        },
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
                    <p>The 2026 Building Wealth in Our Community Symposium is anchored in Building Entrepreneur City: Access, Investment, Mobility - a bold vision aligned with the City of Memphis’ commitment to positioning entrepreneurship as a key driver of economic growth. This approach recognizes that the strength of our city is directly tied to the success, sustainability, and scalability of its businesses.</p>
                    <p>This year’s Symposium will be an intentionally curated, limited-capacity convening for entrepreneurs, investors, corporate leaders, public-sector partners, and business infrastructure providers. Hosted at Epicenter, the experience focuses on the capital, relationships, technology, procurement pathways, and advisory support needed to help growth-ready businesses move forward.</p>
                    <p>With a strong emphasis on collaboration, the experience is designed to break down silos across sectors, elevate local voices, and highlight the real impact individual businesses have on shaping the city’s future. </p>
                    <p>More than a theme, Building Entrepreneur City is a call to align vision with action-challenging each participant to see their business not only as an individual venture, but as a critical part of Memphis’s long-term economic ecosystem.</p>

                    <ul style="list-style: none; padding:0; margin: 0; text-align: left">
                        <li>
                            <span>Date:</span>
                            Friday, October 2, 2026
                        </li>
                        <li>
                            <span>
                                Symposium Location:
                            </span>
                            To Be Confirmed
                        </li>
                        <li>
                            <span>Theme:</span>
                            Building Entreprener City: Access, Investment, Mobility
                        </li>
                        <li>
                            <span>
                                Price:
                            </span><br>
                            <strong>Members</strong> - $50; <br> Non-Members - $75 <br> AIM After Hours  Only Ticket - $52
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