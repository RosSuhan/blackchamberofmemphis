import OneCtaButtonRow from "@/components/callToAction/OneCtaButtonRow";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import TwoColumnText from "@/components/WordImageBlocks/TwoColumnText";

export default function GetListedPage(){
    return(
        <main>
            <PageHeroSection
                mainHeading="Get Your Business Listed"
                subHeading="Share your business with the community - we'll help you refine and present it professionally so it stands out and gets discovered."
                searchbar = {false}
                ctaButtons={[]}
                placeholder=""
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
                    <h3>Contact Information</h3>
                    <h3>Busic business details</h3>
                    <h3>A business description</h3>
                    <h3>Website and social links</h3>`}
                ctaLinkOne = {''}
                ctaLinkTwo = {''}
                buttonTextOne = {''}
                buttonTextTwo = {''}
            />

            <OneCtaButtonRow
                sectionBackground = {"var(--darkGrey)"}
                textColor = {"var(--white)"}
                ctaText = {`Don't worry if you don't have everything ready - you can still submit and update later.`}
                ctaLink = {"/get-listed/step-one"}
                ctaButton = {"Get Started"}
            />
        </main>
    )
}