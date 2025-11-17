import style from '@/styles/caseSupportChallenge.module.css'

export default function CaseSupportChallenge(){
    return (
        <section
            className={style.caseSupportChallengeSection}
        >
            <h2
                className={style.caseSupportChallengeHeading}
            >
                Memphis is Missing Out on Thousands of Jobs
            </h2>

            <div
                className={style.caseSupportChallengeStatsRow}
            >
                <div
                    className={style.caseSupportChallengeStatsBlock}
                >
                    <span
                        className={style.caseSupportChallengeMainStat}
                    >
                        64%
                    </span>
                    <span
                        className={style.caseSupportChallengeSubStat}
                    >
                        of Memphis residents are African American
                    </span>
                </div>

                <div
                    className={style.caseSupportChallengeStatsBlock}
                >
                    <span
                        className={style.caseSupportChallengeMainStat}
                    >
                        73%
                    </span>
                    <span
                        className={style.caseSupportChallengeSubStat}
                    >
                        of employer firms are minority-owned
                    </span>
                </div>

                <div
                    className={style.caseSupportChallengeStatsBlock}
                >
                    <span
                        className={style.caseSupportChallengeMainStat}
                    >
                        50,000+
                    </span>
                    <span
                        className={style.caseSupportChallengeSubStat}
                    >
                        underrepresented firms in Memphis
                    </span>
                </div>

                <div
                    className={style.caseSupportChallengeStatsBlock}
                >
                    <span
                        className={style.caseSupportChallengeMainStat}
                    >
                        1,000
                    </span>
                    <span
                        className={style.caseSupportChallengeSubStat}
                    >
                        are employers
                    </span>
                </div>
            </div>
            <article
                className={style.caseSupportChallengeArticle}
            >
                <p>
                Memphis stands at a crossroads. Our city cannot reach its full potential unless Black-owned businesses thrive. The Black Chamber of Memphis (BCOM) leads that charge—building the infrastructure for inclusive growth, driving job creation, opening pathways to capital, and expanding opportunity across the city. When Black businesses grow, Memphis grows.
                </p>

                <p>
                    Black-owned businesses serve as engines of entrepreneurship and anchors of community stability, job creation, and generational wealth. Yet, while 64% of Memphis’ population is African American, only 7.3% of employer firms are minority-owned. This gap defines both a challenge and an opportunity.
                </p>

                <p>
                    In Memphis—and across the nation—the real frontier of economic equity lies in helping non-employer firms become employer firms. Each time an entrepreneur expands from one person’s dream into a business that hires others, they strengthen families, communities, and the city’s economic future.
                </p>
            </article>

            <p
                className={style.caseSupportChallengeParagraph}
            >
                When solopreneurs become employers, they strengthen families, fuel neighborhoods, and grow Memphis&apos; economy.
            </p>
        </section>
    )
}