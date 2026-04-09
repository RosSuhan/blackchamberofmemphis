import style from './inKindSponsor.module.css'
import InKindSponsorBlock from './inKindSponsorBlock/page'

export default function InKindSponsorOptions(){
    return(
        <section
            className={style.inKindSponsorSection}
        >
            <h2
                className={style.inKindSponsorHeading}
            >
                Partner Categories
            </h2>

            <p
                className={style.inKindSponsorText}
            >
                To support strong, well-aligned proposals, we’ve outlined the anticipated scope of work across each service category. This guidance is intended to help partners develop accurate submissions that reflect both the scale and production quality of the Symposium.
            </p>
            <p
                className={style.inKindSponsorText}
            >
                While these scopes provide a foundation, we welcome creativity. Vendors are encouraged to propose thoughtful enhancements and innovative solutions that elevate the overall experience while aligning with the tone, audience, and execution standards of a 300+ attendee regional convening.
            </p>
            <p
                className={style.inKindSponsorText}
            >
                Final scopes will be refined and confirmed in partnership with selected vendors.
            </p>

            <InKindSponsorBlock/>

        </section>
    )
}