import MtenProgram from '@/app/(pages)/memphis-ten/(mtenComponents)/MtenProgramSection'
import style from '@/styles/mTenOverview.module.css'


export default function MTenOverview(){
    return(
        <section
            className={style.mtenOverviewSection}
        >
            <h2
                className={style.mtenOverviewHeading}
            >
                MemphisTEN—Our Strategy to Create 8,000 Jobs by 2030
            </h2>

            <article
                className={style.mtenOverviewArticle}
            >
                <p>
                    BCOM’s signature initiative, MemphisTEN, aims to create 8,000 jobs by 2030 through targeted support for underrepresented entrepreneurs. MemphisTEN delivers more than a program—it delivers a plan to dismantle barriers and strengthen Memphis’ economy from within.
                </p>

                <p>
                    The Challenge: Memphis counts more than 50,000 underrepresented firms, yet only 1,000 operate as employer firms.
                </p>

                <p>
                    The Opportunity: By helping 4,000 solopreneurs hire their first employee, we will expand the number of underrepresented employer firms from 1,000 to 5,000—raising the share from 2% to 10%.
                </p>
            </article>

            <MtenProgram/>

            <p
                className={style.mtenOverviewArticle}
            >
                Through these strategies, BCOM operates as a driver of economic development—not just a networking hub. We deliver measurable results in business growth, job creation, and economic inclusion.
            </p>
        </section>
    )
}