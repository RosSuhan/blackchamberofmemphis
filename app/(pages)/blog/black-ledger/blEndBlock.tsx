import style from '@/styles/blackLedgerStyles/blEndBlock.module.css'

type BlEndBlockProp = {
    endText : string,
}

export default function BlEndBlock({endText} : BlEndBlockProp){
    return (
        <section
            className={style.blEndBlockSection}
        >
            <div
                className={style.blEndBlockText}
                dangerouslySetInnerHTML={{__html: endText}}
            />
        </section>
    )
}