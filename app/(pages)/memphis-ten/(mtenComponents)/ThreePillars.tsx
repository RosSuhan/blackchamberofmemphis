import style from '@/styles/threePillar.module.css'



export default function ThreePillars(){
    const pillars = [
        {
            title: 'Advocacy',
            caption: 'Championing equitable opportunities and policy reform.'
        },
        {
            title: 'Access',
            caption: 'Opening doors to funding, procurement, and training.'
        },
        {
            title: 'Acceleration',
            caption: 'Equipping entrepreneurs with mentorship and resources to scale.'
        }
    ]
    return(
        <section
            className={style.threePillarSection}
        > 
            <h2
                className={style.threePillarHeading}
            >
                MemphisTen Approach
            </h2>
            
            {pillars.map(({title, caption}, index) => (
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
                </div>
            ))}
        </section>
    )
}