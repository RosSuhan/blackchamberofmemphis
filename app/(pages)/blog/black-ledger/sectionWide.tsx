import style from '@/styles/blackLedgerStyles/blSectionWide.module.css'

type SectionWideProp = {
    sectionHeading : string,
    answerText : string
}

export default function SectionWide({sectionHeading ,answerText} : SectionWideProp){
    return (
        <section
            className={style.sectionWideBlock}
        >
            <h2
                className={style.sectionTitle}
            >
                {sectionHeading}
            </h2>
            <div
                className={style.sectionText}
                dangerouslySetInnerHTML={{__html: answerText}}
            />
        </section>
    )
}