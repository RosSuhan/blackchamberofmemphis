'use client'
import PageHeroSection from "@/components/heroSections/pageHeroSection"
import { allResources } from '@/lib/resources/allResources'
import { eventIndex } from '@/lib/eventsList/eventIndex'
import { blogList } from '@/lib/blogList'
import { useState } from 'react'
import { resourceCategoriesList } from '@/lib/resources/resourcesCategoriesList'
import InsightsPage from './insightsPage'
import EventHighlightsPage from './eventHighlightsPage'
import MemberHighlightsPage from "./memberHighlightsPage"


export default function ResourcesPage(){
    const resourcesStateButtons = [
        {
            name : 'Insights',
            key : 'insights',
        },{
            name : "Event Highlights",
            key : 'eventHighlights',
        },{
            name : 'Member Highlights',
            key : 'memberHighlights'
        }
    ]

    const eventCategoryList = [
        {
            name : "All Past Events",
            key : ''
        },{
            name : "Ribbon Cutting",
            key : 'ribbon-cutting'
        },{
            name : 'Workshop',
            key : 'workshop'
        },{
            name : 'Member Orientation',
            key : 'member-orientation'
        },{
            name : 'Quarterly Mixer',
            key : 'quarterly-mixer'
        }
    ]

    const [ selectedMainCategory, setSelectedMainCategory ] = useState('insights')
    // const [ selectedMainCategory, setSelectedMainCategory ] = useState('eventHighlights')
    const [ selectedFilterCategory, setSelectedFilterCategory ] = useState('funding')
    const [ selectedSubCategory, setSelectedSubCategory ] = useState('')
    const activeResourcesCategory = resourceCategoriesList.find(cat => cat.key === selectedMainCategory) // to get to insights
    const activeFilterCategory = activeResourcesCategory?.filter.find(filter => filter.key === selectedFilterCategory) // to get to funding, training ......
    const activeSubCategory = activeFilterCategory?.subCatList.find( subCatList => subCatList.key === selectedSubCategory)
    
    // This is for the events Filtering 
    const [eventTypeSelector, setEventTypeSelector] = useState('')

    // for blog articles
    const [selectedBlogArticle, setSelectedBlogArticle] = useState('')
        

    const handleMainCategoryChange = (category: string) => {
        setSelectedMainCategory(category)

        const selectedCategory = resourceCategoriesList.find(cat => cat.key === category)

        const firstFilter = selectedCategory?.filter?.[0]?.key ?? ''
        setSelectedFilterCategory(firstFilter)
        setSelectedSubCategory('')
    }

    const filteredArticles = allResources.filter(article => {
        const matchesMain = article.mainCategory === selectedMainCategory

        const matchesFilter = !selectedFilterCategory || article.filterCategory.includes(selectedFilterCategory)

        const matchesSub = !selectedSubCategory || article.subCategory.includes(selectedSubCategory)

        return(
            matchesMain &&
            matchesFilter &&
            matchesSub
        )
    })

    const today = new Date();
    today.setHours(0,0,0,0);

    const filteredEvents = eventIndex.filter(event => {
        const eventDate = new Date(event.sortDate);
        eventDate.setHours(0,0,0,0);

        const isPastEvent = eventDate < today;

        const matchesType = !eventTypeSelector || event.eventType === eventTypeSelector

        return isPastEvent && matchesType
    }).sort((a,b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime())

    const filterBlogArticles = !selectedBlogArticle ? blogList : blogList.filter(blog => blog.id === selectedBlogArticle)

    return(
        <main>
            <PageHeroSection
                mainHeading={"Insights, Stories & Community Impact"}
                subHeading={"Explore resources to grow your business, discover community stories, and stay connected with what’s happening across Memphis."}
                searchbar = {false}
                ctaButtons={[]}
                placeholder="Search Articles by Category or Topic"
                initialSearchTerm=""
                stateButtons = {resourcesStateButtons}
                selectedState = {selectedMainCategory}
                setSelectedState = {handleMainCategoryChange}
            />

            {selectedMainCategory === "insights" && (
                <InsightsPage
                    activeResourcesCategory={activeResourcesCategory}
                    setSelectedFilterCategory={setSelectedFilterCategory}
                    setSelectedSubCategory={setSelectedSubCategory}
                    activeFilterCategory={activeFilterCategory}
                    filteredArticles = {filteredArticles}
                />
            )}

            {selectedMainCategory === "eventHighlights" && (
                <EventHighlightsPage
                    eventCategoryList={eventCategoryList || []}
                    setEventTypeSelector={setEventTypeSelector}
                    filteredEvents = {filteredEvents}
                />
            )}

            {selectedMainCategory === 'memberHighlights' && (
                <MemberHighlightsPage
                    // blogList = {blogList}
                    setSelectedBlogArticle = {setSelectedBlogArticle}
                    filterBlogArticles = {filterBlogArticles}
                />
            )}
        </main>
    )
}