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
            featureLink : '/partnerships/memphis-shelby-county-film-commission',
        },
        {
            key : 'remoting',
            star : false,
            featureImage : '/members/remoting.webp',
            featureName : 'Remoting.work',
            featureText : "Growing a business shouldn't mean doing everything yourself. Through our partnership with remoting.work, BCoM members can access vetted, full-time or fractional back-office professionals — covering admin, marketing, operations, customer support, and more — for as low as $6 an hour, with payroll, compliance, and management fully handled. Less time in the back office means more time focused on growth.",
            featureLink : 'https://blackchamberofmemphis.org/memphis-ten/back-office-support',
        },
        {
            key : "boominU",
            star : false,
            featureImage : '/members/boomin-u.webp',
            featureName : "Boomin Universaty",
            featureText : "Boomin University is an entrepreneurial development organization that helps small business owners access capital, business coaching, marketing support, and growth programs designed to scale sustainable businesses.",
            featureLink : 'https://blackchamberofmemphis.org/events/boomin'
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
                {collaboratePartners.map(({key, star, featureImage, featureName, featureText, featureLink}) => (
                    <CATsingleBlock
                        key = {key}
                        star = {star}
                        featureImage = {featureImage}
                        featureName = {featureName}
                        featureText = {featureText}
                        featureTextLimit = {15}
                        featureLink = {featureLink}
                        featureLinkText = {'Read More'}
                    />
                ))}
            </div>
        </section>
    )
}