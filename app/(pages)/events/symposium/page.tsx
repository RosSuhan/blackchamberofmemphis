import GallerySection from '@/components/GALLERYSECTION/page'
import BusinessSession from '@/components/symposiumComps/businessSession/page'
import SymposiumHero from '@/components/symposiumComps/hero/HeroSection'
import LastCtaSection from '@/components/symposiumComps/lastCTASection/page'
import PartnerLogoSlider from '@/components/symposiumComps/PartnerLogoSlider/page'
import PartnerWithUs from '@/components/symposiumComps/partnerWithUs/page'
import SymFooter from '@/components/symposiumComps/symFooter/page'
import WideTextSection from '@/components/symposiumComps/wideTextSection/page'
import VideoBlock from '@/components/VIDEO/page'
import EventSchema from '@/components/Schema/EventSchema'
import { CreateEventSchema } from '@/lib/schema/eventSchema'
import { symposiumPartners } from '@/lib/symposium'
import { Metadata } from 'next'
import SpeakerSection from '@/components/symposiumComps/speakerSection/page'
import PartnershipSection from '@/components/symposiumComps/PartnershipSection/page'

export const metadata: Metadata = {
    title: '2026 Memphis Business Symposium | Building Wealth in Our Community',
    description: "Join the 2026 Building Wealth in Our Community Symposium in Memphis. Connect with entrepreneurs, investors, business leaders, and partners driving access, investment, and economic mobility. Register today.",
    keywords: [
        'Memphis Business Symposium',
        'Memphis Business Conference',
        'Black Chamber of Memphis',
        'Building Wealth in Our Community Symposium',
        'Entrepreneurship Conference',
        'Business Networking Memphis',
        'Economic Development',
        'Small Business',
        'Minority Business',
        'Black-Owned Businesses',
        'Business Growth',
        'Procurement',
        'Access to Capital'
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/events/symposium'},
    openGraph: {
        title: 'Building Wealth in Our Community Symposium 2026',
        description: 'Experience a premier business symposium designed to help entrepreneurs and business leaders build stronger companies through access to capital, investment opportunities, procurement, technology, and meaningful connections. Registration is now open.',
        url: 'https://blackchamberofmemphis.org/events/symposium',
        siteName: 'Black Chamber of Memphis',
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: '/events/symposium/BCoM-Building-Wealth-in-Our-Community-Symposium.jpg',
                width: 1200,
                height: 630,
                alt: "BCoM Building Wealth in Our Community Symposium 2026"
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Building Wealth in Our Community Symposium 2026',
        description: "Join Memphis' premier business symposium focused on entrepreneurship, access to capital, investment, and economic mobility. Registration is now open.",
        images: ['/events/symposium/BCoM-Building-Wealth-in-Our-Community-Symposium.jpg']
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [
        { name: 'Black Chamber of Memphis' }
    ],
    category: 'Business Conference',
}

export default function Symposium(){
    const schema = CreateEventSchema({
        name : "Building Weath In Our Community Symposium: Building Entrepreneur City",
        description : "Join Memphis' premier business symposium focused on entrepreneurship, access to capital, investment, and economic mobility. Registration is now open.",
        image : '/events/symposium/BCoM-Building-Wealth-in-Our-Community-Symposium.jpg',
        url : 'https://blackchamberofmemphis.org/events/symposium',
        eventAttendanceMode : 'https://schema.org/OfflineEventAttendanceMode',
        startDate : '2026-10-02T08:30:00-05:00',
        endDate : '2026-10-02T16:00:00-05:00',
        location : {
            venue : "Reign Event Venue",
            streetAddress : '3243 Players Club Cir',
            postalCode : '38125',
        },
        organizer : {
            name : "Black Chamber of Memphis",
            url : 'https://blackchamberofmemphis.org',
            logo : 'https://blackchamberofmemphis.org/assets/BCM-Logo_Full-Color-Black-Text.webp',
        },
        offers : [
            {
                url : 'https://blackchamberofmemphis.org/events/symposium',
                name : "Member Ticket",
                availability : 'https://schema.org/InStock',
                price : 50,
                validFrom : '2026-07-15'
            },{
                url : 'https://blackchamberofmemphis.org/events/symposium',
                name : "Non-Member Ticket",
                availability : 'https://schema.org/InStock',
                price : 75,
                validFrom : '2026-07-15'
            },{
                url : 'https://blackchamberofmemphis.org/events/symposium',
                name : "AIM After Hours",
                availability : 'https://schema.org/InStock',
                price : 52,
                validFrom : '2026-07-15'
            }
        ],
    })

    const ctaButtons = [
        {
            // path: "/events/symposium/sponsorship",
            path: '#sponsorship',
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
            <EventSchema schema={schema}/>

            <SymposiumHero
                showButtons={true}
                ctaButtons={ctaButtons || []}
            />

            <VideoBlock
                videoID='ThCocbBHMM8'
                title='Building Wealth in Our Community Symposium'
            />

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

            <SpeakerSection/>
            
            <div
                id='sponsorship'
            >
                <PartnerWithUs/>
            </div>

            <PartnershipSection
                sectionBackground = '#a1995f'
                sectionHeading = {'Our 2026 Partners'}
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