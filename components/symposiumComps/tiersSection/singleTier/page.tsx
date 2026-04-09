'use client'
import style from './singleTier.module.css'

type SingleTierProps = {
    tiersToShow : { tIndex : string, tierPriceColor : string, tierTextColor: string, tierBlockBackground : string, amount : string, sponsorTitle : string, sponsorDate : string, sponsorBenefits : string[]}[],
    sponsorTitleBackground : string,
}

export default function SingleTier({
    tiersToShow,
    sponsorTitleBackground,
}: SingleTierProps){
    return(
        <>
            {tiersToShow.map(({tIndex, tierPriceColor, tierTextColor, tierBlockBackground, amount, sponsorTitle, sponsorDate, sponsorBenefits}) => (
                <div
                    className={style.tierBlock}
                    style={{background: tierBlockBackground}}
                    key={tIndex}
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
                    <div
                        className={style.tierTitle}
                        style={{background: `${sponsorTitleBackground}`}}
                    >
                        {sponsorTitle}
                    </div>
                    {sponsorDate ? 
                        <span
                            className={style.tierSponsorDate}
                            style={{color:`${tierTextColor}`}}
                        >
                            {sponsorDate}
                        </span>
                    : null}
                    
                    <ul
                        className={style.tierList}
                        style={{color:`${tierTextColor}`}}
                    >
                        {sponsorBenefits.map((benefit, index) => (
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
                </div>
            ))}
        </>
        
    )
}