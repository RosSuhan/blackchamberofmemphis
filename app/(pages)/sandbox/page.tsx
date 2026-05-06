import Link from 'next/link'
import style from './sandbox.module.css'
import Image from 'next/image'
import ReadMore from '@/components/READMORE/ReadMore'
import CATsingleBlock from '@/components/CATSINGLEBLOCK/page'
import PageHeroSection from '@/components/heroSections/pageHeroSection'
import BusinessBlock from '@/components/directoryComponents/BusinessBlock'
import FeaturedEvent from '@/components/EventsBlock/FeaturedEvent'
import Calendar from '@/components/CALENDAR/page'
import { eventIndex } from '@/lib/eventsList/eventIndex'

export default function Sandbox(){

    const today = new Date();
    today.setHours(0,0,0,0)

    const filteredEvents = eventIndex.filter(event => {
        const eventDateObj = new Date(event.sortDate);
        eventDateObj.setHours(0,0,0,0);

        const isUpcomingEvent = eventDateObj >= today;

        return isUpcomingEvent
    })

    return(
        <main
            className={style.pageHeroSection}
            // style={{background:"green", display:"flex", alignItems:"center", justifyContent:"space-evenly", padding:"4rem 0", flexWrap: "wrap", rowGap:"2rem", columnGap:'5%'}}
        >
        
        </main>
    )
}