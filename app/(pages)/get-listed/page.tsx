import OneCtaButtonRow from "@/components/callToAction/OneCtaButtonRow";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import TwoColumnText from "@/components/WordImageBlocks/TwoColumnText";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Get Your Business Listed | Black Chamber of Memphis Directory',
    description:
        'Submit your business to the Black Chamber of Memphis Business Directory. Complete a short form, our team reviews and refines your listing, and you go live — getting discovered by the Greater Memphis community.',
    keywords: [
        'list my business Memphis',
        'add business to Memphis directory',
        'Black Chamber of Memphis business listing',
        'Memphis business directory submission',
        'get discovered Memphis',
        'Memphis small business listing',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/get-listed' },
    openGraph: {
        title: 'Get Your Business Listed | Black Chamber of Memphis Directory',
        description:
        'Submit your business details, our team refines your listing, and you go live in the Black Chamber of Memphis Business Directory — reaching local customers across Greater Memphis.',
        url: 'https://blackchamberofmemphis.org/get-listed',
        siteName: 'Black Chamber of Memphis',
        images: [
        {
            url: '/images/og-get-listed.jpg',
            width: 1200,
            height: 630,
            alt: 'Get Your Business Listed on the Black Chamber of Memphis Directory',
        },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Get Your Business Listed | Black Chamber of Memphis Directory',
        description:
        'Submit your business, get reviewed by our team, and go live in the Black Chamber of Memphis Directory. Start getting discovered across Greater Memphis.',
        images: ['/images/og-get-listed.jpg'],
    },
};

export default function GetListedPage(){
    return(
        <main>
            <PageHeroSection
                mainHeading="Get Your Business Listed"
                subHeading="Share your business with the community - we'll help you refine and present it professionally so it stands out and gets discovered."
                searchbar = {false}
                ctaButtons={[]}
                placeholder=""
                stateButtons={[]}
            />

            <TwoColumnText
                backgroundColor = {''}
                textColor = {''}
                blockOneBackground = {''}
                blockTwoBackground = {'var(--grey)'}
                blockHeadingOne = {""}
                blockHeadingTwo = {""}
                blockTextOne = {`
                    <h2 class="globalThirdHeading"/>1. Submit Your Details</h2>
                    <p class="globalText">Complete a short form with your business information</p>
                    <h2 class="globalThirdHeading">2. We Review & Refine</h2>
                    <p>Our team reviews your sumbission and may edit it for clarity and consistency.
                    <h2 class="globalThirdHeading">3. Go Live</h2>
                    <p class="globalText">Once approved, your listing is published and shared with our audience.</p>`}
                blockTextTwo = {`
                    <h3 style="text-align:center">Contact Information</h3>
                    <h3 style="text-align:center">Busic business details</h3>
                    <h3 style="text-align:center">A business description</h3>
                    <h3 style="text-align:center">Website and social links</h3>`}
                ctaLinkOne = {''}
                ctaLinkTwo = {''}
                buttonTextOne = {''}
                buttonTextTwo = {''}
            />

            <OneCtaButtonRow
                sectionBackground = {"var(--darkGrey)"}
                textColor = {"var(--white)"}
                ctaText = {`Don't worry if you don't have everything ready - you can still submit and update later.`}
                ctaLink = {"/get-listed/form"}
                ctaButton = {"Get Started"}
            />
        </main>
    )
}