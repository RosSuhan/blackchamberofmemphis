import style from '@/styles/whoWeAre.module.css'
import Link from 'next/link'

export default function WhoWeAre(){
    return(
        <section
            className={style.whoWeAreSection}
        >
            <div
                className={style.WhoWeAreTextBlock}
            >
                <h2
                    className={style.WhoWeAreHeading}
                >
                    WHO WE ARE
                </h2>

                <p
                    className={style.whoWeAreText}
                >
                    Founded by a small group of Black business owners in the 1970s, the Black Chamber of Memphis is a cornerstone of economic empowerment for Black entrepreneurs. It is founded on fostering business growth, primarily through business acquisition, and community resilience by providing crucial support through education, advocacy, and networking opportunities. We aim to build generational wealth and create a thriving economic landscape that benefits all of Memphis.
                </p>

                <Link
                    href={'/about-us'}
                    className={style.WhoWeAreLinkButton}
                >
                    Learn More
                </Link>
            </div>

            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/83fMmw3R5JA?si=JT1vh8wlQlei-TNp" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className={style.whoWeAreVideo}
            />
        </section>
    )
}