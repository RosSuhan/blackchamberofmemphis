import CATsingleBlock from "@/components/CATSINGLEBLOCK/page"
import style from './partnerCatSection.module.css'

export default function PartnerCatSection(){
    const collaboratePartners = [
        {
            key : '',
            star : false,
            featureImage : '/',
            featureName : 'string',
            featureText : 'string',
            featureTextLimit : 12,
            featureLink : '/',
            featureLinkText : 'string'
        }
    ]

    return(
        <section
            className="partnerCatSection"
        >
            <h2
                className="globalSecondHeading"
            >
                Our Partners
            </h2>
            <p
                className="globalText"
            >
                We are proud to work alongside the following organisations, each sharing our commitment to a thriving, inclusive Memphis economy.
            </p>

            <div>
                {collaboratePartners.map(({key, star, featureImage, featureName, featureText, featureTextLimit, featureLink, featureLinkText}) => (
                    <CATsingleBlock
                        key = {key}
                        star = {star}
                        featureImage = {featureImage}
                        featureName = {featureName}
                        featureText = {featureText}
                        featureTextLimit = {featureTextLimit}
                        featureLink = {featureLink}
                        featureLinkText = {featureLinkText}
                    />
                ))}
            </div>
        </section>
    )
}