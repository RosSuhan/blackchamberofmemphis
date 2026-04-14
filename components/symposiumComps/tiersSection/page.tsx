'use client'
import SingleTier from './singleTier/page'
import style from './tierSection.module.css'

type TierSectionProp = {
    sectionBackground : string
    sectionTitle : string
    tiersToShow : { 
        tIndex : string, 
        tierPriceColor : string, 
        tierTextColor: string, 
        tierBlockBackground : string, 
        amount : string, 
        sponsorTitle : string, 
        sponsorDate : string, 
        sponsorBenefits : string[], 
        featureBenefits : string[], 
        featureHighlight : string,
    }[],
    sponsorTitleBackground : string,
    sponsorshipApplicationLink : string,
}

export default function TierSection({
    sectionBackground, 
    sectionTitle, 
    tiersToShow,  
    sponsorTitleBackground, 
    sponsorshipApplicationLink,
}: TierSectionProp){
    return(
        <section
            className={style.tierSection}
            style={{background:`${sectionBackground}`}}
        >
            <h2
                className={style.tierHeading}
            >
                {sectionTitle}
            </h2>

            <div
                className={style.tierRowBlock}
            >
                <SingleTier
                    tiersToShow = {tiersToShow}
                    sponsorTitleBackground = { sponsorTitleBackground}
                    sponsorshipApplicationLink = {sponsorshipApplicationLink}
                />
            </div>
            
        </section>
    )
}