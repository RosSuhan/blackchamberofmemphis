'use client'
import style from './mtenSubPage.module.css'
import { useParams } from 'next/navigation'
import { mtenPrograms } from '@/lib/mtenPrograms'
import Image from 'next/image';
import Link from 'next/link';
// import PageTitleSection from '@/components/pageTitleSection/page';

export default function SubPage(){
    const params = useParams();
    const id = params?.id as string;

    const selectedProgram = mtenPrograms.find(c => c.id === id);

    const progDescText = selectedProgram?.progDesc;
    const eligibilityText = selectedProgram?.eligibility;
    // const progOverviewText = selectedProgram?.progOverview
    const testimonials = selectedProgram?.success


    if(!id) return null;
    if(!selectedProgram) {return <p>Program not found.</p>}

    return(
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
                        {selectedProgram.title}
                    </h1>
                    <h2
                        className={style.mtenSubPageCaptionHeading}
                    >
                        {selectedProgram.titleCaption}
                    </h2>
                    
                    <Link
                        href={`/memphis-ten/${id}/application`}
                        className={style.mtenSubPageHeroCTA}
                    >
                        Apply Today
                    </Link>
                </div>
                <Image
                    src={selectedProgram.backImage}
                    alt={selectedProgram.alt || ''}
                    width={400}
                    height={500}
                    className={style.subPageHeroBackImage}
                />
            </section>

            {/* program description */}
            <section
                className={style.mtenProgramSection}
            >
                <h2
                    className={style.mtenProgramHeading}
                >
                    Program Description:
                </h2>
                <div 
                    dangerouslySetInnerHTML={{__html: progDescText || ''}}
                    className={style.mtenProgramTextBlock}
                />
            </section>


            {/* process overview */}
            <section
                className={style.mtenProcessSection}
            >
                <span
                    className={style.mtenProcessText}
                >
                    Apply &#8594; Assessment &#8594; Support &#8594; Scale
                </span>
            </section>

            {/* eligibility */}
            <section
                className={style.mtenEligilitySection}
            >
                <div
                    className={style.mtenEligibilityContextBlock}
                >
                    <h2
                        className={style.mtenEligibilityContextHeading}
                    >
                        Who can enroll?
                    </h2>
                    <div 
                        dangerouslySetInnerHTML={{__html: eligibilityText || ''}}
                        className={style.mtenEligibilityTextBlock}
                    />

                    <div
                        className={style.mtenEligibilityCtaRow}
                    >
                        <Link
                            href={`/memphis-ten/${id}/application`}
                            className={style.mtenEligibilityCTA}
                        >
                            Apply Today
                        </Link>
                    </div>
                </div>
                <Image
                    src={selectedProgram.backImage}
                    alt={selectedProgram.alt || ''}
                    width={400}
                    height={500}
                    className={style.mtenEligibilityImage}
                />
            </section>


            {/* success story */}

            {Array.isArray(testimonials) && testimonials.length > 0 && (
                <section className={style.mtenTestimonialSection}>
                    {testimonials.map(({participant, testimony}) => (
                        <div
                            className={style.mtenTestimonialBlock}
                            key={participant}
                        >
                            <p className={style.mtenTestimonialText}>
                                {`"${testimony}"`}
                            </p>
                            <span className={style.mtenTestimonialNameText}>
                                {participant}
                            </span>
                        </div>
                    ))}
                </section>
            )}
            {/* cta */}
        </main>
    )
}