import LogoScrollRow from './LogoScrollRow'
import LogoSliderRow from './LogoScrollRow'
import LogoSlider from './LogoSliderRow'
import LogoStaticRow from './LogoStaticRow'
import style from './partnerLogoSection.module.css'

const publicPartners = [
    {
        logo: "remoting.work_bright_green",
        alt: "remoting.work",
        logoWidth: 13828,
        logoHeight: 2665
    },
    {
        logo: "public-partner-100blackmen",
        alt: "100 Black Men of Memphis, Inc",
        logoWidth: 300,
        logoHeight: 300
    },
    {
        logo: "public-partner-city-of-memphis",
        alt: "City of Memphis",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-community-lift",
        alt: "Community Lift",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-greater-memphis-chamber",
        alt: "Greater of Memphis Chamber",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-lemoyne-owen",
        alt: "LeMoyne Owen College",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-mamca",
        alt: "Memphis Area Minority Contractors Association",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-mmbc-continuum",
        alt: "Mid-South Minority Business Council Continuum",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-nareb-realtist",
        alt: "National Association of Real Estate Brokers",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-nawbo",
        alt: "NAWBO Memphis",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-river-city-capital-investment",
        alt: "River City Capital Investment",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-sba",
        alt: "Small Business Administration",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-sbdc",
        alt: "Tennessee Small Business Development Center",
        logoWidth: 100,
        logoHeight: 100
    },{
        logo: "public-partner-tsmsdc",
        alt: "TSMSDC",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-usbc",
        alt: "united States Black Chamber Incorporated",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-epicenter",
        alt: "Epicenter",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "public-partner-bldg-memphis",
        alt: "Build, Live, Develop, Grow",
        logoWidth: 100,
        logoHeight: 100
    }
]

const strategicPartners = [
    {
        logo: "remoting.work_bright_green",
        alt: "remoting.work",
        logoWidth: 13828,
        logoHeight: 2665
    },{
        logo: "corporate-partner-seal-of-shelby-county",
        alt: "Seal of Shelby County",
        logoWidth: 300,
        logoHeight: 300
    },    {
        logo: "public-partner-city-of-memphis",
        alt: "City of Memphis",
        logoWidth: 300,
        logoHeight: 300
    },
    // {
    //     logo: "stratigic-partner-small-business-association",
    //     alt: "Small Business Association",
    //     logoWidth: 300,
    //     logoHeight: 300
    // }, part of federal partners
    // {
    //     logo: "city_of_memphis_contract_compliance",
    //     alt: "City Of Memphis Contract Compliance",
    //     logoWidth: 300,
    //     logoHeight: 300
    // }
    // missing 
]

const corporatePartners = [
    {
        logo: "remoting.work_bright_green",
        alt: "remoting.work",
        logoWidth: 13828,
        logoHeight: 2665
    },
    // {
    //     logo: "corporate-partner-tva",
    //     alt: "Tennessee Valey Authority",
    //     logoWidth: 300,
    //     logoHeight: 300
    // },
    // {
    //     logo: "corporate_partner-autozone",
    //     alt: "AutoZone",
    //     logoWidth: 100,
    //     logoHeight: 100
    // },{
    //     logo: "corporate_partner-fedex",
    //     alt: "FedEx",
    //     logoWidth: 300,
    //     logoHeight: 300
    // },
    {
        logo: "corporate_partner-nike",
        alt: "Nike",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "corporate_partner-paragon",
        alt: "Paragon Bank",
        logoWidth: 300,
        logoHeight: 300
    },{
        logo: "corporate-partners-pinnacle",
        alt: "Pinnale Financial Partners",
        logoWidth: 300,
        logoHeight: 300
    },
    {
        logo: "corporate-partner-seal-of-shelby-county",
        alt: "Seal of Shelby County",
        logoWidth: 300,
        logoHeight: 300
    }

]


export default function PartnerLogoSection(){
    return(
        <section
            className={style.partnerLogoSection}
        >
            <h2
                className='globalSecondHeading'
                style={{textAlign:"center"}}
            >
                Trusted By Our Community
            </h2>

            <h3
                className='globalThirdHeading'
            >
                Strategic Partners
            </h3>

            <LogoStaticRow
                partners={strategicPartners}
            />

            <h3
                className='globalThirdHeading'
                style={{marginTop:"3rem"}}
            >
                Corporate Partners
            </h3>

            <LogoScrollRow
                partners={corporatePartners}
                
            />

            <h3
                className='globalThirdHeading'
                style={{marginTop:"3rem"}}
            >
                Public Partners
            </h3>

            <LogoSlider
                partners={publicPartners}
            />
        </section>
    )
}