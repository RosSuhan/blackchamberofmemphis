import style from '@/styles/callToActionSection.module.css'

export default function BecomeAPartner(){
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
                    Partner With Us to Build a Stronger Memphis
                </h2>
                <p
                    className={style.callToActionText}
                >
                    Whether you’re a corporation, government agency, foundation, or individual supporter—your partnership accelerates economic inclusion and job creation.
                </p>
            </div>

            <a href=""
                className={style.callToActionCTAButton}
            >
                Become a Partner
            </a>
        </section>
    )
}