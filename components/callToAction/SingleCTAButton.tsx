import style from '@/styles/callToActionSection.module.css'

type SingleCTAButtonProp = {
    singleCtaHeading: string,
    singleCtaText: string,
    singleCtaButtonLink: string,
    singleCtaButtonText: string,
}

export default function SingleCTAButton({singleCtaHeading, singleCtaText, singleCtaButtonLink, singleCtaButtonText}: SingleCTAButtonProp){
    return(
        <section
            className={style.callToActionSection}
        >
            <div
                className={style.callToActionWordBlock}
            >
                <h2
                    className={style.callToActionHeading}
                >
                    {singleCtaHeading}
                </h2>
            
                {singleCtaText ? 
                    <p
                        className={style.callToActionText}
                    >
                        {singleCtaText}
                    </p>
                : null}
            </div>

            <a href={singleCtaButtonLink}
                className={style.callToActionCTAButton}
            >
                {singleCtaButtonText}
            </a>
        </section>
    )
}

