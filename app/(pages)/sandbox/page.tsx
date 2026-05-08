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
    const eventActionBtn = [
        {
            name : 'Register Now',
            path: '/', 
            type: 'globalGoldButton'
        }
    ]

    return(
        <main
            className={style.pageHeroSection}
            // style={{background:"green", display:"flex", alignItems:"center", justifyContent:"space-evenly", padding:"4rem 0", flexWrap: "wrap", rowGap:"2rem", columnGap:'5%'}}
        >
        
        <PageHeroSection
            mainHeading = 'LeveledUp Money - Building Wealth, One Level at a Time'
            subHeading = 'A powerful four-part workshop series for Memphis solopreneurs & microbusiness owners'
            ctaButtons = {eventActionBtn}
            searchbar = {false}
            placeholder = ''
            eventDate = {'April 15, 2026'}
            eventTime = {'10 am - 12 pm'}
            eventAddress={'Epicenter, 150 Peabolt ave, Memphis'}
        />

        </main>
    )
}