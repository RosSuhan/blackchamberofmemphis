import Link from 'next/link'
import style from './OneCtaButtonRow.module.css'

type OneCtaButtonSectionProp = {
    sectionBackground : string
    textColor : string
    ctaText : string,
    ctaLink : string,
    ctaButton : string
}

export default function OneCtaButtonRow({sectionBackground, textColor, ctaText, ctaButton, ctaLink}:OneCtaButtonSectionProp){
    return(
        <section
            className={style.oneCtaButtonSection}
            style={{background:sectionBackground}}
        >
            <div
                className={style.oneCtaTextBlock}
                style={{color:textColor}}
                dangerouslySetInnerHTML={{__html : ctaText}}
            />

            <div
                className={style.oneCtaButtonBlock}
            >
                <Link
                    href={ctaLink}
                    className='globalGoldButton'
                >
                    {ctaButton}
                </Link>
            </div>
        </section>
    )
}