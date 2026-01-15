import style from './mlkSection.module.css'
import clsx from 'clsx'

type MLKTextSectionProp = {
    paragraph: string,
    textStyle: boolean
}

export default function MLKTextSection({paragraph, textStyle}: MLKTextSectionProp) {
    return(
        <section
            className={style.mlkSection}
        >
            <p
                className={clsx(textStyle ? style.mlkTextItalic : style.mlkText)}
            >
                {paragraph}
            </p>
        </section>
    )
}