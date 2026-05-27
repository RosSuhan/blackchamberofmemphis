import style from './pageTierBlock.module.css'

type PriceTierProp = {
    tiers : {
        id : string
        tierName : string
        tierPrice : string
        tierTerm : string
        tierIntroHeading : string
        tierIntroText : string
        tierListHeading? : string
        tierListItem : string[]
        tierActionLink : string
        borderStyle : string
        borderWidth : string
        borderColor : string
    }[]
    
}

export default function PriceTier({tiers}: PriceTierProp){
    return(
        <div
            className={style.tierRow}
        >
            {tiers.map(({
                id, 
                tierName, 
                tierPrice, 
                tierTerm, 
                tierIntroHeading,
                tierIntroText,
                tierListHeading,
                tierListItem,
                tierActionLink,
                borderStyle,
                borderWidth,
                borderColor
            }) => (
                <div
                    className={style.tierBlock}
                    style={{borderStyle: borderStyle, borderWidth: borderWidth, borderColor: borderColor}}
                    key={id}
                >
                    <h2
                        className={style.tierHeading}
                    >
                        {tierName}
                    </h2>

                    <div
                        className={style.tierPriceRow}
                    >
                        <span
                            className={style.tierDollar}
                        >
                            $
                        </span>
                        <span
                            className={style.tierPriceNumber}
                        >
                            {tierPrice}
                        </span>
                        <span
                            className={style.tierTerm}
                        >
                            {`/${tierTerm}`}
                        </span>
                    </div>

                    <p
                        className={style.tierSubHeading}
                    >
                        {tierIntroHeading}
                    </p>

                    <div
                        className={style.tierIntro}
                        dangerouslySetInnerHTML={{__html: tierIntroText}}
                    />

                    <p
                        className={style.tierListHeading}
                    >
                        {tierListHeading ? tierListHeading : `You'll get:`}
                    </p>
                    <ul
                        className={style.tierList}
                    >
                        {tierListItem.map((item, index) => (
                            <li
                                key={index}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <a 
                        href={tierActionLink}
                        className={style.tierActionButton}
                    >
                        Get Started
                    </a>
                </div>
            ))}
        </div>
    )
}