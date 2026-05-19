import style from '@/styles/doubleText.module.css'

type DoubleTextBoxProp = {
    doubleTextHeadingText?: string,
    doubleTextBlockOne: string,
    doubleTextBlockTwo: string,
    backgroundColor? : string
}

export default function DoubleTextBox({doubleTextHeadingText, doubleTextBlockOne, doubleTextBlockTwo, backgroundColor} : DoubleTextBoxProp){
    return(
        <section
            className={style.doubleTextSection}
            style={{background:backgroundColor}}
        >
            {doubleTextHeadingText ? 
                <h2
                    className={style.doubleTextHeading}
                >
                    {doubleTextHeadingText}
                </h2>
            : null }

            <div
                className={style.doubleTextBlock}
            >
                <div
                    className={style.doubleSectionText}
                    dangerouslySetInnerHTML={{__html:doubleTextBlockOne}}
                />
                <div
                    className={style.doubleTextFeatureBlock}
                    dangerouslySetInnerHTML={{__html:doubleTextBlockTwo}}
                />
            </div>
        </section>
    )
}