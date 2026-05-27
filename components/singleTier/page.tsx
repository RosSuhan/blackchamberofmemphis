'use client'
import { useState } from 'react'
import style from './singleTier.module.css'
import Link from 'next/link'
import clsx from 'clsx'

type SingleTierProps = {
    tiersToShow : { 
        tIndex : string, 
        tierPriceColor : string, 
        tierTextColor: string, 
        tierBlockBackground : string, 
        amount : string, 
        sponsorTitle : string, 
        sponsorDate : string, 
        sponsorBenefits : string[],  
        featureHighlight : string,
        featureBenefits : string[],
    }[],
    sponsorTitleBackground : string,
    sponsorshipApplicationLink : string
}

export default function SingleTier({
    tiersToShow,
    sponsorTitleBackground,
    sponsorshipApplicationLink,
}: SingleTierProps){
    const [ showDetails, setShowDetails ] = useState<string | null>(null)

    return(
        <>
            {tiersToShow.map(({
                tIndex, 
                tierPriceColor, 
                tierTextColor, 
                tierBlockBackground, 
                amount, 
                sponsorTitle, 
                sponsorDate, 
                sponsorBenefits, 
                featureHighlight,
                featureBenefits,
            }) => (
                <div
                    key={tIndex}
                    className={style.tierContainer}
                >
                    <div
                        className={style.tierBlock}
                        style={{background: tierBlockBackground}}
                        // style={{display:"none"}}
                    >
                        <h3
                            className={style.tierPrice}
                            style={{color:`${tierPriceColor}`}}
                        >
                            <span
                                className={style.tierPriceCurrency}
                            >
                                $
                            </span>
                            {amount}
                        </h3>
                        {sponsorTitle ? 
                            <div
                                className={style.tierTitle}
                                style={{background: `${sponsorTitleBackground}`}}
                            >
                                {sponsorTitle}
                            </div>
                        : null}
                            
                        {sponsorDate ? 
                            <span
                                className={style.tierSponsorDate}
                                style={{color:`${tierTextColor}`}}
                            >
                                {sponsorDate}
                            </span>
                        : null}

                        {featureHighlight ? 
                            <span
                                className={style.tierhighlight}
                                style={{color:`${tierTextColor}`}}
                            >
                                {featureHighlight}
                            </span>
                        :null}
                        
                        <ul
                            className={style.tierList}
                            style={{color:`${tierTextColor}`}}
                        >
                            {featureBenefits.map((benefit, index) => (
                                <li
                                    key={index}
                                    className={style.tierItem}
                                >
                                    <span
                                        className={style.tierIcon}
                                    >
                                        &#10003;
                                    </span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>

                        <button 
                            type="button"
                            className={style.tierCTAButton}
                            onClick={() => setShowDetails(tIndex)}
                        >
                            View more
                        </button>
                    </div>
                    <div
                        className={clsx(style.inKindSponsorPopUpBlock, showDetails === tIndex && style.popUpOverlay)}
                        // className={style.popUpOverlay}
                    >
                        <div
                            className={style.inKindSponsorPopUp}
                        >
                            <div
                                className={style.closeButtonRow}
                            >
                                <button
                                    type='button'
                                    className={style.closeButton}
                                    onClick={() => setShowDetails(null)}
                                >
                                    X
                                </button>
                            </div>

                            {sponsorTitle ? 
                                <h3
                                    className={style.inKindSponsorTitle}
                                >
                                    {sponsorTitle}
                                </h3>
                            :
                                <h3
                                    className={style.inKindSponsorTitle}
                                >
                                    $ {amount}
                                </h3>  
                            }
                            <ul
                                className={style.popUpTierList}
                                // style={{color:`${tierTextColor}`}}
                            >
                                {sponsorBenefits.map((benefit, index) => (
                                    <li
                                        key={index}
                                        className={style.popUpTierItem}
                                    >
                                        <span
                                            className={style.tierIcon}
                                        >
                                            &#10003;
                                        </span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={sponsorshipApplicationLink}
                                className={style.applicationLink}
                            >
                                Apply for this Sponsorship
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
        
    )
}