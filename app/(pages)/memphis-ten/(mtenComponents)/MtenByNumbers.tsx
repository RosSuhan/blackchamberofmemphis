import style from '@/styles/mTenByNumbers.module.css'
import Image from 'next/image'

const byNumbersInfoBlocks = [
    {
        number: "50K+",
        textOne: "Nonemployer Firms",
        textTwo: "Solo entrepreneurs ready to scale and hire their first employees"
    },{
        number: "1K+",
        textOne: "Minority Employer Firms",
        textTwo: "Established businesses with existing payroll infrastructure"
    },{
        number: "46%",
        textOne: "African American Adults",
        textTwo: "Significant portion of Memphis population with entrepreneurial potential"
    },{
        number: "7.3%",
        textOne: "Minority-Owned Firms",
        textTwo: "Current percentage of employer firms - highlighting the opportunity gap"
    }
]

export default function MtenByNumbers(){
    return(
        <section
            className={style.mtenByNumbersSection}
        >
            <div
                className={style.mtenByNumbersWhiteRow}
            >
                <h2
                    className={style.mtenByNumbersMainHeading}
                >
                    Memphis by the Numbers
                </h2>

                {byNumbersInfoBlocks.map(({number, textOne, textTwo}, z) => (
                    <div
                        key={z}
                        className={style.mtenByNumbersInfoBlock}
                    >
                        <span
                            className={style.mtenByNumberBigText}
                        >
                            {number}
                        </span>
                        <span
                            className={style.mtenByNumbersTextOne}
                        >
                            {textOne}
                        </span>
                        <span
                            className={style.mtenByNumberTextTwo}
                        >
                            {textTwo}
                        </span>
                    </div>
                ))}
            </div>

            <h2
                className={style.mtenByNumbersSecondMainHeading}
            >
                Business Growth
            </h2>

            <Image
                src={'/assets/event/DSC01939.jpg'}
                alt={"Black Chamber of Memphis Symposium Event"}
                width={3600}
                height={2400}
                className={style.mtenByNumbersBlockImage}
            />

            <div
                className={style.mtenByNumbersParagraphBlock}
            >
                <p
                    className={style.mtenByNumbersParagraph}
                >
                    Think of it like physics: moving a block at rest requires a stronger push than keeping it in motion. The same is true for business growth.
                </p>
                <p
                    className={style.mtenByNumbersParagraph}
                >
                    A solo entrepreneur faces &quot;static friction&quot; — lack of capital, no payroll systems, limited back-office support, and steep learning curves. Making that first hire demands disproportionate effort.
                </p>
                <p
                    className={style.mtenByNumbersParagraph}
                >
                    Established small firms already have infrastructure in place; adding the next employee is like accelerating a moving object. By meeting firms where they are, we ensure both the &quot;first hire&quot; and &quot;next hire&quot; contribute to our 8,000-job goal.
                </p>
            </div>
        </section>
    )
}