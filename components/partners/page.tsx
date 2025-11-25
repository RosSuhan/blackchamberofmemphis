'use client'
import { useState } from "react"
import { clsx } from "clsx"
import style from '@/styles/partners.module.css'
import Image from "next/image"

const publicPartners = [
    {
        logo: "remotingwork",
        alt: "remoting.work"
    },{
        logo: "public-partner-100blackmen",
        alt: "100 Black Men of Memphis, Inc"
    },{
        logo: "public-partner-city-of-memphis",
        alt: "City of Memphis"
    },{
        logo: "public-partner-community-lift",
        alt: "Community Lift"
    },{
        logo: "public-partner-greater-memphis-chamber",
        alt: "Greater of Memphis Chamber"
    },{
        logo: "public-partner-lemoyne-owen",
        alt: "LeMoyne Owen College"
    },{
        logo: "public-partner-mamca",
        alt: "Memphis Area Minority Contractors Association"
    },{
        logo: "public-partner-mmbc-continuum",
        alt: "Mid-South Minority Business Council Continuum"
    },{
        logo: "public-partner-nareb-realtist",
        alt: "National Association of Real Estate Brokers"
    },{
        logo: "public-partner-nawbo",
        alt: "NAWBO Memphis"
    },{
        logo: "city_of_memphis_contract_compliance",
        alt: "City Of Memphis Contract Compliance"
    },{
        logo: "public-partner-river-city-capital-investment",
        alt: "River City Capital Investment"
    },{
        logo: "public-partner-sba",
        alt: "Small Business Administration"
    },{
        logo: "public-partner-sbdc",
        alt: "Tennessee Small Business Development Center"
    },{
        logo: "public-partner-tsmsdc",
        alt: "TSMSDC"
    },{
        logo: "public-partner-usbc",
        alt: "united States Black Chamber Incorporated"
    },{
        logo: "public-partner-epicenter",
        alt: "Epicenter"
    },{
        logo: "public-partner-bldg-memphis",
        alt: "Build, Live, Develop, Grow"
    }
]

const strategicPartners = [
    {
        logo: "remotingwork",
        alt: "remoting.work"
    },{
        logo: "stratigic-partner-small-business-association",
        alt: "Small Business Association"
    },{
        logo: "city_of_memphis_contract_compliance",
        alt: "City Of Memphis Contract Compliance"
    }
]

const corporatePartners = [
    {
        logo: "remotingwork",
        alt: "remoting.work"
    },{
        logo: "corporate-partner-tva",
        alt: "Tennessee Valey Authority"
    },{
        logo: "corporate_partner-autozone",
        alt: "AutoZone"
    },{
        logo: "corporate_partner-fedex",
        alt: "FedEx"
    },{
        logo: "corporate_partner-nike",
        alt: "Nike"
    },{
        logo: "corporate_partner-paragon",
        alt: "Paragon Bank"
    },{
        logo: "corporate-partners-pinnacle",
        alt: "Pinnale Financial Partners"
    },{
        logo: "corporate-partner-seal-of-shelby-county",
        alt: "Seal of Shelby County"
    }

]

export default function Partners(){

    const [ isPublicPartners, setPublicPartner ] = useState(true);
    const [ isStratigicPartners , setStratigicPartners ] = useState(false);
    const [ isCorporatePartners, setCorporatePartners ] = useState(false)

    return(
        <section
            className={style.partnersSection}
        >
            <h2
                className={style.partnersHeading}
            >
                OUR PARTNERS
            </h2>

            <div
                className={style.partnersButtonRow}
            >
                <button
                    className={clsx(style.partnersButton, isPublicPartners && style.partnersActiveButton)}
                    onClick={() => {
                        setPublicPartner(true)
                        setCorporatePartners(false)
                        setStratigicPartners(false)
                    }}
                >
                    Public Partners
                </button>

                <button
                    className={clsx(style.partnersButton, isStratigicPartners && style.partnersActiveButton)}
                    onClick={() => {
                        setPublicPartner(false)
                        setCorporatePartners(false)
                        setStratigicPartners(true)
                    }}
                >
                    Stratigic Partners
                </button>

                <button
                    className={clsx(style.partnersButton, isCorporatePartners && style.partnersActiveButton)}
                    onClick={() => {
                        setPublicPartner(false)
                        setCorporatePartners(true)
                        setStratigicPartners(false)
                    }}
                >
                    Corporate Partners
                </button>
            </div>

            <div
                className={clsx(style.hide, isPublicPartners && style.partnersLogoBlock)}
            >
                {publicPartners.map(({logo, alt}, z) => (
                    <Image
                        key={z}
                        src={"/partners/" + logo + ".webp"}
                        alt={alt}
                        width={300}
                        height={300}
                        className={style.partnersLogo}
                    />
                ))}
            </div>

            <div
                className={clsx(style.hide, isStratigicPartners && style.partnersLogoBlock)}
            >
                {strategicPartners.map(({logo, alt}, z) => (
                    <Image
                        key={z}
                        src={"/partners/" + logo + ".webp"}
                        alt={alt}
                        width={300}
                        height={300}
                        className={style.partnersLogo}
                    />
                ))}
            </div>

            <div
                className={clsx(style.hide, isCorporatePartners && style.partnersLogoBlock)}
            >
                {corporatePartners.map(({logo, alt}, z) => (
                    <Image
                        key={z}
                        src={"/partners/" + logo + ".webp"}
                        alt={alt}
                        width={300}
                        height={300}
                        className={style.partnersLogo}
                    />
                ))}
            </div>
        </section>
    )
}