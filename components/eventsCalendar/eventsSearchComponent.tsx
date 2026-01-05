import style from '@/styles/eventsSearchBar.module.css'
import Link from 'next/link'

export default function EventsSearchBar(){
    return(
        <Link
            href={'/events/events-search'}
            className={style.eventsSearchButton}
        >
            <span
                className={style.longtext}
            >
                Do you know the event you are looking for?
            </span>
            <span
                className={style.eventsSearchCTA}
            >
                Search Your Event
            </span>
        </Link>
    )
}