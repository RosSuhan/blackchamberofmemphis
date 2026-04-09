import style from './businessSessions.module.css'

export default function BusinessSession(){
    return(
        <section
            className={style.businessSessions}
        >
            <h2
                className={style.sessionHeading}
            >
                Confirmed Building Wealth Sessions
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
                    Retail Ready: Scaling Distribution & Driving Sales Beyond Your Home Market
                </h3>
                <p
                    className={style.sessionInfoText}
                >
                    This session equips growth-minded brands with the strategies needed to expand beyond local markets. From preparing for retail buyers to optimizing distribution channels and strengthening e-commerce operations, leaders will gain actionable insights to increase reach, revenue, and operational readiness. Designed for businesses ready to scale, this conversation bridges ambition with execution.
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
        </section>
    )
}