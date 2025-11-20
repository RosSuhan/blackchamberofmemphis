import style from '@/styles/threePillar.module.css'



export default function ThreePillars(){
    const pillars = [
        {
            title: 'Advocacy',
            caption: 'Championing equitable opportunities and policy reform.',
            bullets: ["Policy Advocacy", "Market Advocacy", "Platform Advocacy", "Resource Advocacy"]
        },
        {
            title: 'Access',
            caption: 'Opening doors to funding, procurement, and training.',
            bullets: ["Procurement Access", "Capital Access", "Operational Access", "Network Access"]
        },
        {
            title: 'Acceleration',
            caption: 'Equipping entrepreneurs with mentorship and resources to scale.',
            bullets: ["Solopreneur Development", "Business Growth", "Leadership Development", "Strategic Scaling"]
        }
    ]
    return(
        <section
            className={style.threePillarSection}
        > 
            <h2
                className={style.threePillarHeading}
            >
                MemphisTEN Approach
            </h2>
            
            {pillars.map(({title, caption, bullets}, index) => (
                <div
                    className={style.pillarBlock}
                    key={index}
                >
                    <h3
                        className={style.pillarBlockTitle}
                    >
                        {title}
                    </h3>
                    <p
                        className={style.pillarBlockCaption}
                    >
                        {caption}
                    </p>

                    {bullets && (
                        <ul
                            className={style.pillarList}
                        >
                            {bullets.map((item, b) => (
                                <li
                                    key={b}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </section>
    )
}