import Link from 'next/link'
import style from './sandbox.module.css'
import Image from 'next/image'
import ReadMore from '@/components/READMORE/ReadMore'
import CATsingleBlock from '@/components/CATSINGLEBLOCK/page'
import PageHeroSection from '@/components/heroSections/pageHeroSection'
import BusinessBlock from '@/components/directoryComponents/BusinessBlock'

export default function Sandbox(){
    return(
        <main
            className={style.pageHeroSection}
            // style={{background:"green", display:"flex", alignItems:"center", justifyContent:"space-evenly", padding:"4rem 0", flexWrap: "wrap", rowGap:"2rem", columnGap:'5%'}}
        >
            <PageHeroSection
                mainHeading = "Find events that move your business forward"
                subHeading = ""
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = ""
            />

            <section
                className={style.calendarSection}
            >
                <div
                    className={style.calendarSidebar}
                >
                    Sidebar
                </div>
                <div
                    className={style.calendarEvents}
                >
                    <BusinessBlock
                        id = {'syposium'}
                        blockPath = {'/events/symposium'}
                        blockImage = {'/events/symposium/BCOM_Symposium_2025_Day2-16.jpg'}
                        blockTitle='Building Wealth in Our Community Symposium'
                        blockDescription=''
                    />
                </div>
            </section>
        </main>
    )
}