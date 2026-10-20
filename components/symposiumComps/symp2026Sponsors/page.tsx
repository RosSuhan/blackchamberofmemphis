import LogoStaticRow from '@/components/PartnerLogoSection/LogoStaticRow'
import './symp2026Sponsors.css'
import Image from 'next/image'

export default function Symp2026Sponsors(){

    const symposium2026AllSponsors = [
        {
            name: "Pathway Lending",
            logo: "/events/symposium/2026-sponsors/Pathway-Lending.png",
            alt: 'Black Chamber of Memphis 2025 Symposium Sponsor - Pathway Lending',
            logoWidth: 2835,
            logoHeight: 418,
            tier : 'gold'
        },{
            name: "Reign Venue",
            logo: "/events/symposium/2026-sponsors/reign-logo-new.png",
            alt: 'Black Chamber of Memphis 2026 Symposium Sponsor - Reign Venue',
            logoWidth: 500,
            logoHeight: 500,
            tier : 'venuePartner'
        },{
            name: "Convergence Memphis",
            logo: "/events/symposium/2026-sponsors/convergence-logo.png",
            alt: 'Black Chamber of Memphis 2026 Symposium Sponsor - Convergence Memphis',
            logoWidth: 1230,
            logoHeight: 220,
            tier : 'silver'
        }, {
            name : 'Remoting.work',
            logo : '/partners/remoting.work_bright_green.webp',
            alt: "Black Chamber of Memphis 2026 Symposium Sponsor - Remoting.work",
            logoWidth : 300,
            logoHeight : 300,
            tier : 'silver'
        },{
            name : 'Seeding Success',
            logo : '/events/symposium/2026-sponsors/seeding-success.png',
            alt: "Black Chamber of Memphis 2026 Symposium Sponsor - Seeding Success",
            logoWidth : 738,
            logoHeight : 135,
            tier : 'silver'
        },
        {
            name : 'Paragon',
            logo : '/partners/corporate_partner-paragon.webp',
            alt: "Black Chamber of Memphis 2026 Symposium Sponsor - Paragon",
            logoWidth : 300,
            logoHeight : 300,
            tier : 'silver'
        },{
            name : 'Mid-South Business Continuum',
            logo : '/events/symposium/2026-sponsors/mid-south-bus-continuum.webp',
            alt: "Black Chamber of Memphis 2026 Symposium Sponsor - Mid-South Business Continuum",
            logoWidth : 1080,
            logoHeight : 1080,
            tier : 'silver'
        },
    ]

    return(
        <section
            className='symp2026SponsorsSection'
        >
            <h2
                className='symp2026SponsorsHeading'
            >
                Thank You to Our Sponsors
            </h2>
            <p
                className='symp2026SponsorsText'
            >
                Your support helped make this event possible
            </p>

            <div
                className='logoStaticRow'
            >
                {symposium2026AllSponsors.map(({logo, alt, logoWidth, logoHeight}, z) => (
                    <Image
                        key={z}
                        src={logo}
                        alt={alt}
                        width={logoWidth}
                        height={logoHeight}
                        className='partnersLogo'
                    />
                ))}
            </div>
        </section>
    )
}