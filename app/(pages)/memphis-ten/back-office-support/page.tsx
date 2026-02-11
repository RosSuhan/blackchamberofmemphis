import style from '@/app/(pages)/memphis-ten/[id]/mtenSubPage.module.css'
import Image from 'next/image'

export default function BOSS(){
    return (
        <main
            className={style.mtenSubPageMain}
        >
            <section
                className={style.mtenSubPageHeroSection}
            >
                <div
                    className={style.mtenSubPageHeadingBlock}
                >
                    <h1
                        className={style.mtenSubPageMainHeading}
                    >
                        Back Office Support Services (BOSS)
                    </h1>
                    <h2
                        className={style.mtenSubPageCaptionHeading}
                    >
                        Back-Office & Operational Support powered by remoting.work — your Workforce-as-a-Service partner. 
                    </h2>
                    
                    {/* <Link
                        href={selectedProgram.formLink}
                        className={style.mtenSubPageHeroCTA}
                    >
                        {selectedProgram.ctaButtonName}
                    </Link> */}
                </div>
                <Image
                    src={'/assets/back-office-support.webp'}
                    alt={'Back Office Support Services from Remoting.work'}
                    width={400}
                    height={500}
                    className={style.subPageHeroBackImage}
                />
            </section>

            <section
                className={style.mtenProgramSection}
            >
                <p
                    className={style.mtenProgramTextBlock}
                >
                    The Black Chamber of Memphis has partnered with remoting.work to drive the Memphis TEN Initiative and deliver on BOSS. Through this partnership, our members can gain access to full-time and fractional back-office professionals who are fully managed and work from secure worksites to help them scale faster, operate leaner, and focus on growth. 
                </p>

                <a 
                    href=""
                    className={style.mtenSubPageHeroCTA}
                >
                    Get Started
                </a>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/ksAFPj8OKfw?si=mxX4R8TXVlu6kk-q" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className={style.mtenVideo}
                ></iframe>
            </section>

            {/* program description */}
            <section
                className={style.mtenProgramSection}
            >
                <h2
                    className={style.mtenProgramHeading}
                >
                    Growing a business shouldn’t mean doing everything yourself 
                </h2>
                <div
                    className={style.mtenProgramTextBlock}
                >
                    <p>
                        Most founders hit the same wall: 
                    </p>
                    <ul>
                        <li>
                            Admin work piles up 
                        </li>
                        <li>
                            Customers don’t get responses on time 
                        </li>
                        <li>
                            Marketing happens when you’re free 
                        </li>
                        <li>
                            Hiring feels expensive 
                        </li>
                        <li>
                            Operations become overwhelming 
                        </li>
                    </ul>
                    <p>
                        And when your time is stuck in the back office, growth stalls.
                        BOSS was created to change that.
                    </p>
                </div>
            </section>


            {/* process overview */}
            {/* <section
                className={style.mtenProcessSection}
            >
                <span
                    className={style.mtenProcessText}
                >
                    Apply &#8594; Assessment &#8594; Support &#8594; Scale
                </span>
            </section> */}

            {/* {selectedProgram.bottomParagraph ?  */}
                <section
                    // className={style.mtenProgramSection}
                >
                    
                        {/* <div
                            className={style.mtenProgramTextBlock}
                            dangerouslySetInnerHTML={{__html:selectedProgram.bottomParagraph}}
                        />  */}
                    
                </section>
            {/* : null} */}

            {/* eligibility */}
            <section
                // className={style.mtenEligilitySection}
            >
                <div
                    // className={style.mtenEligibilityContextBlock}
                >
                    <h2
                        // className={style.mtenEligibilityContextHeading}
                    >
                        Let&apos;s Get Started
                    </h2>
                    <div
                        // className={style.mtenEligibilityCtaRow}
                    >
                        {/* <Link
                            href={selectedProgram.formLink}
                            className={style.mtenEligibilityCTA}
                        >
                            {selectedProgram.ctaButtonName}
                        </Link> */}
                    </div>
                </div>
                {/* <Image
                    src={selectedProgram.backImage}
                    alt={selectedProgram.alt || ''}
                    width={400}
                    height={500}
                    className={style.mtenEligibilityImage}
                /> */}
            </section>
        </main>
    )
}