import style from '@/styles/mtenCallToAction.module.css'
import Link from 'next/link'

export default function MtenCallToAction() {
    return(
        <section
            className={style.mtenCallToActionSection}
        >
            <h2
                className={style.mtenCallToActionMainHeading}
            >
                Join the Movement
            </h2>

            <p
                className={style.mtenCallToActionMainText}
            >
                The moment is now. Memphis stands ready to deliver results through homegrown solutions and local hiring.
            </p>

            <div
                className={style.mtenCallToActionReasonRow}
            >
                <div
                    className={style.mtenCTAReason}
                >
                    <h3
                        className={style.mtenCTAReasonHeading}
                    >
                        Your investment helps Back Office Support Services
                    </h3>
                    <p
                        className={style.mtenCTAReasonText}
                    >
                        Help nonemployer firms make their crucial first hire
                    </p>
                </div>

                <div
                    className={style.mtenCTAReason}
                >
                    <h3
                        className={style.mtenCTAReasonHeading}
                    >
                        Your investment helps Procurement Pipelines
                    </h3>
                    <p
                        className={style.mtenCTAReasonText}
                    >
                        Channel public spending into small, local firms
                    </p>
                </div>

                <div
                    className={style.mtenCTAReason}
                >
                    <h3
                        className={style.mtenCTAReasonHeading}
                    >
                        Your investment helps Acquisition Strategies
                    </h3>
                    <p
                        className={style.mtenCTAReasonText}
                    >
                        Transition ownership and sustain existing jobs
                    </p>
                </div>

                <div
                    className={style.mtenCTAReason}
                >
                    <h3
                        className={style.mtenCTAReasonHeading}
                    >
                        Invest in MemphisTEN
                    </h3>
                    <p
                        className={style.mtenCTAReasonText}
                    >
                        Technical assistance and networking for local businesses
                    </p>
                </div>
            </div>

            <Link
                href={'https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/contribute/ep01ddP2'}
                className={style.mtenCallToActionButton}
            >
                Donate Today
            </Link>
        </section>
    )
}