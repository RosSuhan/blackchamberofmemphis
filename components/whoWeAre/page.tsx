import style from '@/styles/whoWeAre.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function WhoWeAre(){
    return(
        <section
            className={style.whoWeAreSection}
        >
            <div
                className={style.WhoWeAreTextBlockOne}
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

            <Image
                src={"/assets/aboutusimage2.webp"}
                alt=''
                width={2500}
                height={1700}
                className={style.whoWeAreImage}
            />

            <div
                className={style.WhoWeAreTextBlockTwo}
            >
                <h2
                    className={style.WhoWeAreHeading}
                >
                    HOW WE HELP
                </h2>
                <p
                    className={style.whoWeAreText}
                >
                    Back Office Support Services (BOSS) helps small businesses grow by providing affordable, skilled back-office talent for administrative, marketing, and operational support. By connecting companies with professionals from cost-effective economies, BOSS makes it easier to scale, increase revenue, and reinvest in local talent. Organizations like the Black Chamber of Memphis are already expanding their capacity and impact through this smart hiring solution.
                </p>

                <Link
                    href={'/memphis-ten/back-office-support'}
                    className={style.WhoWeAreLinkButton}
                >
                    Learn More
                </Link>
            </div>
        </section>
    )
}