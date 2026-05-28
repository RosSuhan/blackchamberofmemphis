import PageHeroSection from "@/components/heroSections/pageHeroSection";
import OneColumn from "@/components/WordImageBlocks/OneColumn";
import TwoColumnTextImage from "@/components/WordImageBlocks/TwoColumnTextImage";
import type { Metadata } from 'next';
import OurTeam from "../our-team/page";
import MultiCtaButtonRow from "@/components/callToAction/multiCtaButtonRow";

export const metadata: Metadata = {
    title: 'Black Chamber of Memphis | Empowering Local Businesses in Memphis',
    description:
        'The Black Chamber of Memphis supports and empowers local businesses across Greater Memphis through advocacy, networking, education, and economic development programs. Join today and grow your business.',
    keywords: [
        'Black Chamber of Commerce Memphis',
        'Memphis business network',
        'Memphis small business',
        'local entrepreneurship Memphis',
        'Memphis business community',
        'economic development Memphis',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org' },
    openGraph: {
        title: 'Empowering Local Businesses in Greater Memphis',
        description:
        'Advocacy. Networking. Growth. The Black Chamber of Memphis is building lasting economic opportunity across Greater Memphis. Join the movement.',
        url: 'https://blackchamberofmemphis.org',
        siteName: 'Black Chamber of Memphis',
        images: [
        {
            url: '/assets/bcom-building-black-business-in-memphis-since-1970.png',
            width: 1200,
            height: 630,
            alt: 'Black Chamber of Memphis Community',
        },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Empowering Local Businesses in Greater Memphis',
        description:
        'Advocacy. Networking. Growth. The Black Chamber of Memphis is building lasting economic opportunity across Greater Memphis. Join the movement.',
        images: ['/assets/bcom-building-black-business-in-memphis-since-1970.png'],
    },
};

export default function AboutUs(){

    const ctaRowButtons = [
        {
            buttonLink : '/get-listed',
            buttonName : 'List Your Business'
        },
        {
            buttonLink : '/membership',
            buttonName : 'Explore Membership'
        }
    ]
    return(
        <main>
            <PageHeroSection
                mainHeading="Building Legacy. Strengthening Memphis."
                subHeading=""
                searchbar = {false}
                ctaButtons={[]}
                placeholder=""
            />

            <TwoColumnTextImage
                rowDirection = {true}
                imageLink = {"/assets/aboutusimage1.webp"}
                imageAlt = {""}
                imageWidth = {960} //960 × 1200
                imageHeight = {1200}
                blockHeading = {"Our Mission"}
                blockText = {`<p>The Black Chamber of Memphis (BCOM) is dedicated to building a thriving community of entrepreneurs and business owners through meaningful connections, resources, and advocacy. We walk alongside our members at every stage of their business journey — from startup to succession — equipping them with the tools they need to grow and sustain generational wealth. Rooted in Memphis and committed to our community, we champion economic empowerment that uplifts families, strengthens neighborhoods, and shapes a more prosperous future for all.</p>`}
                ctaLink = {""}
                buttonText = {""}
            />

            <TwoColumnTextImage
                rowDirection = {false}
                imageLink = {"/assets/aboutusimage2.webp"}
                imageAlt = {""}
                imageWidth = {960}
                imageHeight = {1200}
                blockHeading = {"Our Vision"}
                blockText = {`<p>The Black Chamber of Memphis envisions a Memphis where every entrepreneur has an equal opportunity to build, grow, and leave a lasting legacy. We see a future where thriving businesses anchor strong communities, and where economic equity is not just a goal — it is our shared reality. Through collaboration, education, and unwavering support, BCOM strives to be the heartbeat of business excellence and community prosperity in Memphis and beyond.</p>`}
                ctaLink = {""}
                buttonText = {""}
            />

            <OneColumn
                backgroundColor = {'var(--darkGrey)'} 
                textColor = {'var(--white)'} 
                headingIntro = {''} 
                headingTextColor = {''} 
                blockHeading = {'What We Do'} 
                subHeading = {''} 
                paragraph = {`
                    <p>The Black Chamber of Memphis (BCOM) is dedicated to driving economic growth and prosperity in the Memphis region by empowering entrepreneurs and Minority and Women-Owned Business Enterprises (MWBEs). Through a robust offering of strategic, high-impact programs, BCOM fosters an environment where businesses not only survive but thrive. We are committed to providing top-tier education, advocacy, and business development opportunities, ensuring that our members have the tools and resources necessary to seize economic opportunities and achieve sustainable growth.</p>
                    <p>At the heart of BCOM’s mission is a relentless focus on innovation and strategic thinking. We believe that by cultivating a supportive ecosystem for MWBEs, we can unlock new avenues for economic advancement and community development. Our programs are carefully designed to address the unique challenges faced by our members, providing them with the knowledge, connections, and support they need to excel in an increasingly competitive marketplace. Whether through tailored workshops, advocacy initiatives, or networking events, BCOM is here to propel your business toward a future of unparalleled success and prosperity.</p>`} 
                multiWeekProgram = {false} 
                multiEvents = {[]}
            />

            <OneColumn
                backgroundColor = {"var(--white)"}
                textColor = {"var(--black)"}
                headingIntro=""
                headingTextColor=""
                blockHeading = {"Generational Wealth"}
                subHeading=""
                paragraph = {`
                    <p>Where does wealth come from? How is wealth created? Oftentimes, it's generational, it's inheritance. … But, the other place that wealth comes from is business.</p>
                    <p>We don't have the luxury of waiting 20 years to start a business, and grow that business, in order to narrow the wealth gap. Instead, we can add acquisitions as one of the tools in the toolkit.</p>
                    <p>For instance, 95% of manufacturing companies are owned by baby boomers. If those owners retire — or, as we all will, expire — without a succession plan, the companies go away.</p>
                    <p>The tax base goes away, the employment base will go away. … So, we've created succession solutions where we'll target those baby boomer-owned businesses. … We'll have conversations with them … and match those opportunities with Black minority business owners and entrepreneurs who are looking to acquire those businesses.</p>
                    <p>Essentially, we've created an exit strategy for the owner, who has a succession challenge. And, we've created an expanding wealth opportunity for business owners who are trying to grow their businesses.</p>`}
                multiWeekProgram = {false}
                multiEvents = {[]}
            />

            <OurTeam/>

            <MultiCtaButtonRow
                sectionBackground = {'var(--darkGrey'} 
                sectionTextColor = {'var(--white)'}
                sectionHeading = {'Ready to grow with us? Become a BCoM Member today.'}
                sectionText = {'Partner with the Black Chamber of Memphis to expand your reach, connect with decision-makers, and play a role in shaping the local business ecosystem.'}
                sectionButtons = {ctaRowButtons}
            />
        </main>
    )
}