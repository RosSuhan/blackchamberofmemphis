import style from './businessSessions.module.css'

export default function BusinessSession(){
    return(
        <section
            className={style.businessSessions}
        >
            <h2
                className={style.sessionHeading}
            >
                Featured Building Wealth Sessions
            </h2>

            <div
                className={style.sessionBlock}
            >
                <h3
                    className={style.sessionSubHeading}
                >
                    The Business Briefing: The State of the Economy & What You Should Know Now
                </h3>
                <p
                    className={style.sessionInfoText}
                >
                    A high-level economic outlook designed to translate today’s market conditions into practical business strategy. This session will break down key indicators—including interest rates, lending trends, consumer behavior, and sector shifts—and what they mean for growth, pricing, hiring, and capital decisions. Attendees will leave with clear insights to navigate uncertainty and position their businesses for stability and expansion.
                </p>
            </div>
            
            <div
                className={style.sessionBlock}
            >
                <h3
                    className={style.sessionSubHeading}
                >
                    Procurement Playbook: Building Capacity to Secure & Deliver Major Contracts
                </h3>
                <p
                    className={style.sessionInfoText}
                >
                    A tactical deep dive into positioning your business for contracts with corporations and public agencies. This session focuses on procurement pipelines, certification strategy, compliance preparation, and the internal systems required to successfully deliver at scale. Attendees will gain clarity on how to move from opportunity awareness to contract execution with confidence.
                </p>
            </div>

            <div
                className={style.sessionBlock}
            >
                <h3
                    className={style.sessionSubHeading}
                >
                    The Capital Stack: Aligning Capital with Business Strategy
                </h3>
                <p
                    className={style.sessionInfoText}
                >
                    A strategic examination of how successful companies leverage grants, debt financing, equity investments, contracts, and alternative funding tools to support business objectives at every stage of growth. Entrepreneurs will be encouraged to move beyond constantly chasing the next funding opportunity and toward developing a capital strategy aligned with their long-term business goals.
                </p>
            </div>
        </section>
    )
}