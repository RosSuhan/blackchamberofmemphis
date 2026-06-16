import style from './sandbox.module.css'
import PageHeroSection from '@/components/heroSections/pageHeroSection'


export default async function Sandbox(){
    const resourcesCTAbuttons = [
        {
            name: 'Insights',
            path: '/',
            type: 'globalGoldButton'
        }
    ]

    return(
        <main
            className={style.pageHeroSection}
        >
            <PageHeroSection
                mainHeading = {'Insights, Stories & Community Impact'}
                subHeading = {"Explore resources to grow your business, discover community stories, and stay connected with what's happening across Memphis"} 
                searchbar = {true}
                ctaButtons ={[]} 
                placeholder = {''} 
                initialSearchTerm = {''} 
                eventDate = {''} 
                eventTime = {''} 
                eventAddress = {''}
                stateButtons={[]}
            />
        </main>
    )
}