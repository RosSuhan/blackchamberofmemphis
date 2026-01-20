import style from '@/styles/threePillar.module.css'

export default function ThreeTextBlock(){
    const itepPeople = [
        {
            title: 'Job Seekers',
            caption: 'Individuals seeking industry-recognized certifications, job-ready skills, and access to full-time employment opportunities, including community and reentry residents looking to build sustainable career pathways.'
        },{
            title: 'Entrepreneurs',
            caption: 'Business owners and entrepreneurs seeking leadership development, industry-specific training, and support to strengthen workforce pipelines, improve operations, and grow their businesses.',
        },{
            title: 'Employers & Partners',
            caption: 'Employers and organizations interested in hiring skilled talent, shaping industry-aligned workforce training, and contributing to long-term community economic development.',
        }

    ]
    return(
        <section
            className={style.threePillarSection}
        >
            <h2
                className={style.threePillarHeading}
            >
                Who ITEP Is For
            </h2>

            {itepPeople.map(({title, caption}, index) => (
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