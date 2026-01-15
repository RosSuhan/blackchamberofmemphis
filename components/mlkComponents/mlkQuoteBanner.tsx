import style from './mlkQuoteSection.module.css'

export default function MLKQuoteBanner(){
    return(
        <section
            className={style.mlkQuoteSection}
        >
            <div
                className={style.mlkQuoteBlock}
            >
                <cite>
                    the problem of racial injustice and the problem of economic injustice cannot be solved without a radical redistribution of political and economic power.
                </cite>
            </div>
            
        </section>
    )
}