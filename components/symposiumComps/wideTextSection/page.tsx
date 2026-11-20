import style from './wideTextSection.module.css'

type WideTextSectionProps = {
    wideTextSectionHeading? : string
    wideTextSectionText : string
}

export default function WideTextSection({wideTextSectionHeading, wideTextSectionText}: WideTextSectionProps){
    return(
        <section
            className={style.wideTextSection}
        >
            <div
                className={style.textBlock}
            >
                {wideTextSectionHeading ? 
                    <h2
                        className={style.textHeading}
                    >
                        {wideTextSectionHeading}
                    </h2>
                : null }
                <div
                    className={style.text}
                    dangerouslySetInnerHTML={{__html: wideTextSectionText}}
                />
                
            </div>
        </section>
    )
}