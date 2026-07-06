import Image from 'next/image'
import style from './BcPartnersRow.module.css'

export default function BCPartnersRow(){

    const bcPartnerList = [
        {
            logo: "remoting.work_bright_green",
            alt: "remoting.work",
            logoWidth: 13828,
            logoHeight: 2665
        },{
            logo: "stratigic-partner-small-business-association",
            alt: "Small Business Association",
            logoWidth: 300,
            logoHeight: 300
        },{
            logo: "city_of_memphis_contract_compliance",
            alt: "City Of Memphis Contract Compliance",
            logoWidth: 300,
            logoHeight: 300
        },{
            logo: "corporate-partner-tva",
            alt: "Tennessee Valey Authority",
            logoWidth: 300,
            logoHeight: 300
        },{
            logo: "corporate_partner-autozone",
            alt: "AutoZone",
            logoWidth: 100,
            logoHeight: 100
        },{
            logo: "corporate_partner-fedex",
            alt: "FedEx",
            logoWidth: 300,
            logoHeight: 300
        },{
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
        },{
            logo: "corporate-partner-seal-of-shelby-county",
            alt: "Seal of Shelby County",
            logoWidth: 300,
            logoHeight: 300
        }
    ]
    return(
        <section
            className={style.bcPartnerRow}
        >
            <h2
                className={style.bcPartnersHeading}
            >
                IN PARTNERSHIP WITH
            </h2>

            <div
                className={style.bcPartnerLogoRow}
            >

                {bcPartnerList.map(({logo, alt, logoWidth, logoHeight},index) => (
                    <Image
                        key={index}
                        src={`/partners/${logo}.webp`}
                        alt={alt}
                        width={logoWidth}
                        height={logoHeight}
                        className={style.bcPartnerLogo}
                    />
                ))}
            </div>
            
        </section>
    )
}