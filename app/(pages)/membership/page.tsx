import PageHeroSection from "@/components/heroSections/pageHeroSection";
import TwoColumnTextImage from "@/components/WordImageBlocks/TwoColumnTextImage";
import MembershipTiers from "@/components/PRICETIERS/membershipTiers";


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
        <main>
            <PageHeroSection
                mainHeading = {'Grow Your Business with the Black Chamber of Memphis'}
                subHeading = {'From visibility and connections to procurement opportunities and leadership access—our membership is designed to help Memphis businesses thrive at every stage.'}
                searchbar = {false}
                ctaButtons = {heroCtaBtn}
                placeholder = {''}
                initialSearchTerm = {''}
                eventDate = {''}
                eventTime = {''}
                eventAddress = {''}
            />

            <TwoColumnTextImage
                rowDirection = {true}
                imageLink = {'/assets/members-of-bcom-1.webp'}
                imageAlt = {''}
                imageWidth = {2048}
                imageHeight = {1363}
                blockHeading = {'Access & Influence'}
                blockText = {'Connect with a powerful network of business leaders, decision-makers, and community partners. Gain opportunities to share your voice, shape conversations, and stay informed on initiatives that impact your business and industry.'}
                ctaLink = {''}
                buttonText = {''}
            />

            <TwoColumnTextImage
                rowDirection = {false}
                imageLink = {'/assets/members-of-bcom-2.webp'}
                imageAlt = {''}
                imageWidth = {2048}
                imageHeight = {1363}
                blockHeading = {'Business Growth Opportunities'}
                blockText = {'Unlock pathways to grow your business through referrals, partnerships, and exclusive opportunities. From events to collaborations, membership opens doors to new clients and meaningful connections.'}
                ctaLink = {''}
                buttonText = {''}
            />

            <TwoColumnTextImage
                rowDirection = {true}
                imageLink = {'/assets/members-of-bcom-3.webp'}
                imageAlt = {''}
                imageWidth = {2048}
                imageHeight = {1363}
                blockHeading = {'Visibility & Credibility'}
                blockText = {'Elevate your brand presence and build trust within the community. Showcase your business through our platforms and align with a respected organization that reinforces your credibility.'}
                ctaLink = {''}
                buttonText = {''}
            />

            <TwoColumnTextImage
                rowDirection = {false}
                imageLink = {'/assets/members-of-bcom-4.webp'}
                imageAlt = {''}
                imageWidth = {2048}
                imageHeight = {1363}
                blockHeading = {'Perks & Resources'}
                blockText = {'Access valuable tools, resources, and member-only benefits designed to support your success. From educational content to special offers, you gain practical advantages that add real value.'}
                ctaLink = {''}
                buttonText = {''}
            />

            <MembershipTiers/>
        </main>
    )
}