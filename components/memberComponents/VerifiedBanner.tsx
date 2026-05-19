import { Star } from '../icons/star'
import style from './VerifiedBanner.module.css'

type VerifiedBannerProp = {
    backgroundColor? : string
    textColor? : string
}

export default function VerifiedBanner({backgroundColor, textColor}: VerifiedBannerProp){
    return(
        <section
            className={style.verifiedBannerSection}
            style={{background:backgroundColor, color:textColor}}
        >
            <Star
                className={style.memberStar}
            />
            {/* <div
                className={style.verifiedBannerHeadingBlock}
            > */}
                <h3
                    className={style.verifiedBannerHeading}
                >
                    This is a Verified Chamber Member
                </h3>
            {/* </div>    */}
            <p
                className={style.verifiedBannerText}
            >
                Members gain access to exclusive opportunities, events, and increased visibility within the Memphis business community.
            </p>
        </section>
    )
}