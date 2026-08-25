import GallerySection from '@/components/GALLERYSECTION/page'
import './partnership.css'

type PartnershipSectionProps = {
    sectionBackground? : string
    sectionHeading? : string
}


export default function PartnershipSection({
    sectionBackground,
    sectionHeading,
} : PartnershipSectionProps){

    const symposium2026Partners = [
            {
                name: "Convergence Memphis",
                image: "/events/symposium/2026-sponsors/convergence-logo.png",
                alt: 'Black Chamber of Memphis 2026 Symposium Sponsor - Convergence Memphis',
                width: 1230,
                height: 220,
            }, {
                name: "Reign Venue",
                image: "/events/symposium/2026-sponsors/reign-logo-new.png",
                alt: 'Black Chamber of Memphis 2026 Symposium Sponsor - Reign Venue',
                width: 500,
                height: 500
            },   {
                name: "Pathway Lending",
                image: "/events/symposium/2026-sponsors/Pathway-Lending.png",
                alt: 'Black Chamber of Memphis 2025 Symposium Sponsor - Pathway Lending',
                width: 2835,
                height: 418,
            },
            
            {
                name: "Lilac Impact Services",
                image: "/members/lilac-impact-services.webp",
                alt: 'Black Chamber of Memphis 2026 Symposium Sponsor - Lilac Impact Services',
                width: 1300,
                height: 800
            },{
                name : 'Paragon',
                image : '/partners/corporate_partner-paragon.webp',
                alt: "Black Chamber of Memphis 2026 Symposium Sponsor - Paragon",
                width : 300,
                height : 300
            }
        ]


    return(
        <section
            className='partnershipSection'
            style={{background:`${sectionBackground}`}}
        >
            <h2 className='globalSecondHeading'>{sectionHeading}</h2>

            <GallerySection
                sectionBackground=''
                galleryHeadingText={''}
                galleryImages={symposium2026Partners}
            />
        </section>
    )
}