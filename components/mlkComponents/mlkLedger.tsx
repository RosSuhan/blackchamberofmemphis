import style from './mlkLedger.module.css'
// import MLKQuoteBanner from './mlkQuoteBanner'


export default function MLKLedger(){
    return(
        <section
            className={style.mlkLedgerSection}
        >
            <h2
                className={style.mlkLedgerHeader}
            >
                The Black Ledger: Invest in US.
            </h2>

            <p
                className={style.mlkLedgerParagraph}
            >
                Every city depends on institutions it can trust. Economic opportunity does not happen by chance. Systems direct access, assign risk, and determine who benefits from growth.
            </p>

            <p
                className={style.mlkLedgerParagraph}
            >
                Dr. Martin Luther King, Jr. understood this clearly. He tied civil rights to economic power and challenged the nation to confront the structures that shape jobs, wages, and ownership. He insisted that dignity demands more than aspiration. It demands systems that work.
            </p>

            <p
                className={style.mlkLedgerParagraph}
            >
                We want to highlight historically Black-led and Black serving institutions that actively sustain Memphis’ civic, cultural and economic life today. We will examine what these organizations do now, how they operate within existing systems, and why their work drives business growth, job creation, and economic participation.
            </p>

            <div
                className={style.mlkLedgerBanner}
            >
                <p
                    className={style.mlkLedgerBannerParagraph}
                >
                    Economic justice requires investment, accountability, and institutions that endure.
                </p>
            </div>

            <p
                className={style.mlkLedgerParagraph}
            >
                Through Memphis TEN, the Black Chamber of Memphis scales Black-owned businesses, expands access to opportunity, and creates jobs that strengthen families and neighborhoods. The Black Ledger advances that work by recognizing institutions that reduce risk, build trust, and keep pathways to opportunity open.
            </p>

            
        </section>
    )
}