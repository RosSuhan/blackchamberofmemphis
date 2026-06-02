import CATsingleBlock from "@/components/CATSINGLEBLOCK/page"
import style from './partnerCatSection.module.css'

export default function PartnerCatSection(){
    const collaboratePartners = [
        {
            key : 'memphisShelbyFilm',
            star : false,
            featureImage : '/members/memphis-shelby-county-film-commission.webp',
            featureName : 'Memphis/Shelby County Film Commission',
            featureText : 'Founded by joint City/County resolution in 1985, the Memphis & Shelby County Film and Television Commission is the official economic development agency for film and television in the region. When productions come to Memphis, they need local businesses — caterers, transportation providers, construction crews, suppliers, and more. Our partnership ensures that BCoM members are visible, listed, and ready to be found when those opportunities arrive.',
            featureTextLimit : 15,
            featureLink : 'memphis-shelby-county-film-commission',
            featureLinkText : 'string'
        }
    ]

    return(
        <section
            className={style.partnerCatSection}
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

            <div
                className={style.partnersLinksRow}
            >
                {collaboratePartners.map(({key, star, featureImage, featureName, featureText, featureTextLimit, featureLink, featureLinkText}) => (
                    <CATsingleBlock
                        key = {key}
                        star = {star}
                        featureImage = {featureImage}
                        featureName = {featureName}
                        featureText = {featureText}
                        featureTextLimit = {featureTextLimit}
                        featureLink = {`/partnerships/${featureLink}`}
                        featureLinkText = {'Read More'}
                    />
                ))}
            </div>
        </section>
    )
}