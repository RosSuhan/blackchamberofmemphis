import GallerySection from '@/components/GALLERYSECTION/page'
import BusinessSession from '@/components/symposiumComps/businessSession/page'
import CtaSection from '@/components/symposiumComps/CTAsection/page'
import SymposiumHero from '@/components/symposiumComps/hero/HeroSection'
import LastCtaSection from '@/components/symposiumComps/lastCTASection/page'
import PartnerWithUs from '@/components/symposiumComps/partnerWithUs/page'
import ThreeBlockRow from '@/components/symposiumComps/threeBlockRow/page'
import WideTextSection from '@/components/symposiumComps/wideTextSection/page'
import { symposiumPartners } from '@/lib/symposium'

export default function Symposium(){
    const ctaButtons = [
        {
            path: "#sponsorship",
            buttonName: "Become a Sponsor",
            type : "internal" 
        },
        {   
            path: "https://growthzone.bcom/registration",
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

            <ThreeBlockRow/>

            <WideTextSection/>

            <CtaSection/>

            <BusinessSession/>
            
            <div
                id='sponsorship'
            >
                <PartnerWithUs/>
            </div>
            

            <GallerySection
                sectionBackground='#D8BCA5'
                galleryHeadingText={"Our Partners"}
                galleryImages={symposiumPartners}
            />

            <LastCtaSection
                buttonsInfo={ctaButtons || []}
            />
        </main>
    )
}