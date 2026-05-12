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
import TwoColumnTextImage from '@/components/WordImageBlocks/TwoColumnTextImage'
import MultiCtaButtonRow from '@/components/callToAction/multiCtaButtonRow'
import CommunityLinkSection from '@/components/COMMUNITYlink/page'

export default function Sandbox(){
    // const eventActionBtn = [
    //     {
    //         name : 'Register Today',
    //         path: '/', 
    //         type: 'globalGoldButton'
    //     },
    //     {
    //         name : 'Register Now',
    //         path: '/', 
    //         type: 'globalGoldButton'
    //     },
    // ]

    const CTActionBtn = [
        {
            buttonName : 'Register Today',
            buttonLink: '/', 
            // type: 'globalGoldButton'
        },
        {
            buttonName : 'Register Now',
            buttonLink: '/', 
            // type: 'globalGoldButton'
        },
    ]

    return(
        <main
            className={style.pageHeroSection}
        >
            <TwoColumnTextImage
                rowDirection = {false}
                imageLink = {'/assets/aboutusimage1.webp'}
                imageAlt = {'Image of something'}
                imageWidth = {960}
                imageHeight = {1200}
                blockHeading = {'Start or Grow Your Business'} 
                blockText = {`
                    <p>Whether you're just getting started or ready to grow, we'll guide you with the right:</p>
                    <ul>
                        <li>steps,</li>
                        <li>resources, and</li>
                        <li>opportunities to move your business forward.</li>
                    </ul>
                    `}
                ctaLink = {"/"} 
                buttonText = {"Start Your Journey"}
            />

            {/* <MultiCtaButtonRow
                sectionBackground = {'var(--darkGrey)'}
                sectionTextColor = {'var(--white)'}
                sectionHeading = {'For Established Businesses & Corporate Partners'}
                sectionText = {'Partner with the Black Chamber of Memphis to expand your reach, connect with decision-makers, and play a role in shaping the local business ecosystem.'}
                sectionButtons = {CTActionBtn}
            /> */}

            <CommunityLinkSection/>
        </main>
    )
}