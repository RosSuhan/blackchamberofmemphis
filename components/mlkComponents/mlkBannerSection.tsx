import style from './mlkBanner.module.css'

type MLKBannerProp = {
    quoteText: string,
    quoteImage: string,
    textColor: string
}

export default function MLKBannerSection({quoteText, quoteImage, textColor}: MLKBannerProp){
    return(
        <section
            className={style.mlkBannerSection}
            style={{backgroundImage:`url(${quoteImage})`}}
        >
            <div
                className={style.mlkBannerBlock}
                style={{color:`${textColor}`}}
                dangerouslySetInnerHTML={{__html: quoteText}}
            />            
        </section>
    )
}