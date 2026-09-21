import PageHeroSection from "@/components/heroSections/pageHeroSection";
import TwoColumnTextImage from "@/components/WordImageBlocks/TwoColumnTextImage";
import MembershipTiers from "@/components/PRICETIERS/membershipTiers";
import { Metadata } from "next";
import Header from "@/components/nav/Header/page";
import Footer from "@/components/nav/Footer/page";
import NewMemberIntro from "./newMemberIntro";

export const metadata: Metadata = {
    title: 'Membership | The Front Door to Opportunity',
    description:
        'BCOM membership helps Black business owners grow, access capital, expand their networks, and  influence the future through stronger connections to opportunity.',
    keywords: [
        'join Black Chamber of Memphis',
        'Memphis chamber membership',
        'Memphis business membership',
        'small business networking Memphis',
        'Memphis procurement opportunities',
        'business growth Memphis',
        'Memphis entrepreneur membership',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/membership' },
    openGraph: {
        title: 'Membership Plans & Benefits | Join the Black Chamber of Memphis',
        description:
        'BCOM membership helps Black business owners grow, access capital, expand their networks, and  influence the future through stronger connections to opportunity.',
        url: 'https://blackchamberofmemphis.org/membership',
        siteName: 'Black Chamber of Memphis',
        images: [
        {
            url: '/assets/bcom-join-the-movement.png',
            width: 1200,
            height: 630,
            alt: 'Black Chamber of Memphis Membership Plans',
        },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Join the Black Chamber of Memphis | Membership Plans & Benefits',
        description:
        'Networking, procurement opportunities, business visibility, and community influence — explore membership plans starting at $37.50 and grow your business across Greater Memphis.',
        images: ['bcom-join-the-movement.png'],
    },
};

export default function Membership(){
    const heroCtaBtn = [
        {
            path : 'https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw',
            name : 'Become a Member',
            type : 'globalGoldButton'
        },
        {
            path : '/get-listed',
            name : 'Get Listed',
            type : 'globalGoldButton'
        }
    ]
    return(
        <>
            <Header/>
            <PageHeroSection
                mainHeading = {'The Front Door to Opportunity'}
                subHeading = {'From visibility and connections to procurement opportunities and leadership access—our membership is designed to help Memphis businesses thrive at every stage.'}
                searchbar = {false}
                ctaButtons = {heroCtaBtn}
                placeholder = {''}
                initialSearchTerm = {''}
                eventDate = {''}
                eventTime = {''}
                eventAddress = {''}
                stateButtons={[]}
            />

            <NewMemberIntro/>

            <MembershipTiers/>
            <Footer/>
        </>
    )
}