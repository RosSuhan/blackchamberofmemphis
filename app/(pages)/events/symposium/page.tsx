import GallerySection from '@/components/GALLERYSECTION/page'
import BusinessSession from '@/components/symposiumComps/businessSession/page'
import CtaSection from '@/components/symposiumComps/CTAsection/page'
import SymposiumHero from '@/components/symposiumComps/hero/HeroSection'
import LastCtaSection from '@/components/symposiumComps/lastCTASection/page'
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
                            Friday, August 28, 2026
                        </li>
                        <li>
                            <span>
                                Symposium Location:
                            </span>
                            Epicenter, 150 Peabody Place
                        </li>
                        <li>
                            <span>Theme:</span>
                            Building Entreprener City: Access, Investment, Mobility
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
                sectionBackground='#D8BCA5'
                galleryHeadingText={"Our 2025 Partners"}
                galleryImages={symposiumPartners}
            />

            <LastCtaSection
                buttonsInfo={ctaButtons || []}
            />

            <SymFooter/>
        </main>
    )
}