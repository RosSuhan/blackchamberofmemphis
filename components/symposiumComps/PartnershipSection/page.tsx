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

    const symposium2026GoldSponsors = [
        {
            name: "Pathway Lending",
            image: "/events/symposium/2026-sponsors/Pathway-Lending.png",
            alt: 'Black Chamber of Memphis 2025 Symposium Sponsor - Pathway Lending',
            width: 2835,
            height: 418,
            tier : 'gold'
        },
    ]

    const symposium2026SilverSponsors = [
            {
                name: "Convergence Memphis",
                image: "/events/symposium/2026-sponsors/convergence-logo.png",
                alt: 'Black Chamber of Memphis 2026 Symposium Sponsor - Convergence Memphis',
                width: 1230,
                height: 220,
                tier : 'silver'
            }, {
                name : 'Remoting.work',
                image : '/partners/remoting.work_bright_green.webp',
                alt: "Black Chamber of Memphis 2026 Symposium Sponsor - Remoting.work",
                width : 300,
                height : 300,
                tier : 'silver'
            },{
                name : 'Seeding Success',
                image : '/events/symposium/2026-sponsors/seeding-success.png',
                alt: "Black Chamber of Memphis 2026 Symposium Sponsor - Seeding Success",
                width : 738,
                height : 135,
                tier : 'silver'
            },
            {
                name : 'Paragon',
                image : '/partners/corporate_partner-paragon.webp',
                alt: "Black Chamber of Memphis 2026 Symposium Sponsor - Paragon",
                width : 300,
                height : 300,
                tier : 'silver'
            },{
                name : 'Mid-South Business Continuum',
                image : '/events/symposium/2026-sponsors/mid-south-bus-continuum.webp',
                alt: "Black Chamber of Memphis 2026 Symposium Sponsor - Mid-South Business Continuum",
                width : 1080,
                height : 1080,
                tier : 'silver'
            },
        ]

    const symposium2026VenuePartner = [
        {
            name: "Reign Venue",
            image: "/events/symposium/2026-sponsors/reign-logo-new.png",
            alt: 'Black Chamber of Memphis 2026 Symposium Sponsor - Reign Venue',
            width: 500,
            height: 500,
            tier : 'venuePartner'
        },
    ]

    return(
        <section
            className='partnershipSection'
            style={{background:`${sectionBackground}`}}
        >
            <h2 className='globalSecondHeading'>{sectionHeading}</h2>

            <GallerySection
                sectionBackground=''
                galleryHeadingText={'Gold'}
                galleryImages={symposium2026GoldSponsors}
            />

            <GallerySection
                sectionBackground=''
                galleryHeadingText='Silver'
                galleryImages={symposium2026SilverSponsors}
            />

            <GallerySection
                sectionBackground=''
                galleryHeadingText='Venue Partner'
                galleryImages={symposium2026VenuePartner}
            />
        </section>
    )
}