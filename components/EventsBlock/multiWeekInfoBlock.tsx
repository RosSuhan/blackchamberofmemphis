import Link from 'next/link'
import { BaselineCalendarMonth } from '../icons/Calendar'
import { BaselineLocationOn } from '../icons/Location'
import style from './multiWeekInfoBlock.module.css'
import { MultiWeekInfoProp } from './multiWeekInfoBlockProp'

type MultiWeekEvents = {
    multiEvents : MultiWeekInfoProp[]
}

export default function MultiWeekInfoBlock({
    multiEvents
}: MultiWeekEvents
){
    return(
        <div
            className={style.multiWeekInfoSection}
        >
            {multiEvents.map((event, index) => (
                <div
                    className={style.infoBlock}
                    key={index}
                >
                    <h3
                        className='globalThirdHeading'
                        style={{borderBottom:"solid var(--darkGold) 2px", paddingBottom:".5rem", margin:"0"}}
                    >
                        { event.eventTopic}
                    </h3>

                    {event.address ? 
                    <ul
                        className={style.eventTimeList}
                    >
                        <li
                            className={style.eventTimeItem}
                        >
                            <BaselineCalendarMonth
                                className={style.eventIcon}
                            />
                            {event.eventDateTime}
                        </li>

                        <li
                            className={style.eventTimeItem}
                        >
                            {event.eventAddressLink ? 
                                <a 
                                    href={event.eventAddressLink}
                                    className={style.eventAddressLink}
                                >
                                    <BaselineLocationOn
                                        className={style.eventIcon}
                                    />
                                    {event.eventAddress}
                                </a>
                            : 
                                <>
                                    <BaselineLocationOn
                                        className={style.eventIcon}
                                    />
                                    {event.eventAddress}
                                </>
                            }
                        </li>
                    </ul> : null}

                    <div
                        className='globalSmallText'
                        dangerouslySetInnerHTML={{__html: event.eventDetails}}
                    />

                    {event.eventCtaLink ? 
                        <div
                            className={style.multiWeekInfoCtaButton}
                        >
                            <Link
                                href={event.eventCtaLink}
                                className='globalGoldButton'
                            >
                                {event.eventCtaButton}
                            </Link>
                        </div>
                    : null}
                </div>
            ))}
        </div>
    )
}