import style from './mlkQuoteSection.module.css'

type MLKQuoteProp = {
    quoteText: string,
    quoteImage: string,
    textColor: string
}

export default function MLKQuoteBanner({quoteText, quoteImage, textColor}: MLKQuoteProp){
    return(
        <section
            className={style.mlkQuoteSection}
            style={{backgroundImage:`url(${quoteImage})`}}
        >
            <div
                className={style.mlkQuoteBlock}
                style={{color:`${textColor}`}}
                dangerouslySetInnerHTML={{__html: quoteText}}
            />            
        </section>
    )
}