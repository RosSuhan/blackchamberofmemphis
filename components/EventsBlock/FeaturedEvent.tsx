import Image from 'next/image'
import style from './featuredEvent.module.css'
import Link from 'next/link'
import ReadMore from '../READMORE/ReadMore'
import { BaselineCalendarMonth } from '../icons/Calendar'
import { BaselineLocationOn } from '../icons/Location'
import { featureEventProp } from './featureEventProp'

export default function FeaturedEvent({
    featuredEventId,
    featuredImage,
    featuredImageWidth,
    featuredImageHeight,
    featuredImageAlt,
    featuredEventName,
    featuredEventDateTime,
    featuredEventPrice,
    featuredEventAddressLink,
    featuredEventAddress,
    featuredEventDescription,
    featuredEventActionLink,
    featuredEventActionBtnText
}: featureEventProp){
    return (
        <div
            className={style.featuredEventBlock}
            key={featuredEventId}
        >
            <Image
                src={featuredImage}
                alt={featuredImageAlt}
                width={featuredImageWidth}
                height={featuredImageHeight}
                className={style.featuredEventImage}
            />


            <div
                className={style.featuredEventDescBlock}
            >
                <Link
                    href={'blockPath'}
                    className={style.featuredEventNameLink}
                >
                    <h2
                        className={'globalThirdHeading'}
                    >
                        {featuredEventName}
                    </h2>
                </Link>
                <ul
                    className={style.featuredEventTimeList}
                >
                    <li
                        className={style.featuredEventTimeItem}
                    >
                        <BaselineCalendarMonth
                            className={style.featuredEventIcon}
                        />

                        {featuredEventDateTime}
                    </li>
                    <li
                        className={style.featuredEventTimeItem}
                    >
                        <div
                            style={{fontSize:"1.2rem", fontWeight:"800"}}
                            className={style.featuredEventIcon}
                        >
                            $
                        </div>
                        {featuredEventPrice}
                    </li>
                    <li
                        className={style.featuredEventTimeItem}
                    >
                        <a href={featuredEventAddressLink}
                            className={style.featuredEventAddressLink}
                        >
                            <BaselineLocationOn
                                className={style.featuredEventIcon}
                            />
                            {featuredEventAddress}
                        </a>
                    </li>
                </ul>

                <article
                    className={style.featuredEventDesciption}
                >
                    <ReadMore
                        text = {featuredEventDescription}
                        limit={15}
                    />
                </article>
            </div>
            <div
                className={style.featuredEventActionBtn}
            >
                <Link
                    href={featuredEventActionLink}
                    className={'globalBlackButton'}
                >
                    {featuredEventActionBtnText}
                </Link>
            </div>
        </div>
    )
}