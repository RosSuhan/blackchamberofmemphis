import Link from 'next/link'
import style from './multiCtaButton.module.css'

type MultiCtaButtonRowProp = {
    sectionBackground : string
    sectionTextColor : string
    sectionHeading : string
    sectionText : string
    sectionButtons : {buttonLink : string, buttonName : string}[]
}

export default function MultiCtaButtonRow({
    sectionBackground,
    sectionTextColor,
    sectionHeading, 
    sectionText, 
    sectionButtons
}:MultiCtaButtonRowProp){
    return(
        <section
            className={style.multiCtaSection}
            style={{background:sectionBackground, color:sectionTextColor}}
        >
            <h2
                className='globalSecondHeading'
                style={{textAlign:'center'}}
            >
                {sectionHeading}
            </h2>
            <p
                className='globalText'
                style={{textAlign:'center'}}
            >
                {sectionText}
            </p>

            <div
                className={style.ctaButtonRow}
            >
                {sectionButtons.map((button, index) => (
                    <Link
                        href={button.buttonLink}
                        className='globalGoldButton'
                        key={index}
                    >
                        {button.buttonName}
                    </Link>
                ))}
            </div>
        </section>
    )
}