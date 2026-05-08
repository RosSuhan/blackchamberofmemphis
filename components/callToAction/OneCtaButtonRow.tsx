import Link from 'next/link'
import style from './OneCtaButtonRow.module.css'

type OneCtaButtonSectionProp = {
    ctaText : string,
    ctaLink : string,
    ctaButton : string
}

export default function OneCtaButtonRow({ctaText, ctaButton, ctaLink}:OneCtaButtonSectionProp){
    return(
        <section
            className={style.oneCtaButtonSection}
        >
            <div
                className={style.oneCtaTextBlock}
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