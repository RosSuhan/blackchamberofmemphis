import style from '@/styles/doubleText.module.css'

type DoubleTextBoxProp = {
    doubleTextHeadingText: string,
    doubleTextParagraphText: string,
    doubleTextListBlockText: string,
}

export default function DoubleTextBox({doubleTextHeadingText, doubleTextParagraphText, doubleTextListBlockText} : DoubleTextBoxProp){
    return(
        <section
            className={style.doubleTextSection}
        >
            <h2
                className={style.doubleTextHeading}
            >
                {doubleTextHeadingText}
            </h2>

            <div
                className={style.doubleTextBlock}
            >
                <div
                    className={style.doubleSectionText}
                    dangerouslySetInnerHTML={{__html:doubleTextParagraphText}}
                />
                <div
                    className={style.doubleTextFeatureBlock}
                    dangerouslySetInnerHTML={{__html:doubleTextListBlockText}}
                />
            </div>
        </section>
    )
}