'use client'
import PageHeroSection from "@/components/heroSections/pageHeroSection"
import { allResources } from '@/lib/resources/allResources'
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

    // const [ selectedMainCategory, setSelectedMainCategory ] = useState('insights')
    const [ selectedMainCategory, setSelectedMainCategory ] = useState('eventHighlights')
    const [ selectedFilterCategory, setSelectedFilterCategory ] = useState('funding')
    const [ selectedSubCategory, setSelectedSubCategory ] = useState('')

    const handleMainCategoryChange = (category: string) => {
        setSelectedMainCategory(category)

        const selectedCategory = resourceCategoriesList.find(cat => cat.key === category)

        const firstFilter = selectedCategory?.filter?.[0]?.key ?? ''
        setSelectedFilterCategory(firstFilter)
        setSelectedSubCategory('')
    }

    const filteredArticles = allResources.filter(
        article => article.mainCategory === selectedMainCategory
    )

    const activeResourcesCategory = resourceCategoriesList.find(cat => cat.key === selectedMainCategory) // to get to insights
    const activeFilterCategory = activeResourcesCategory?.filter.find(filter => filter.key === selectedFilterCategory) // to get to funding, training ......
    const activeSubCategory = activeFilterCategory?.subCatList.find( subCatList => subCatList.key === selectedSubCategory)
    
    // This is for the events Filtering 
    


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
                    // filteredEvents = {filteredEvents}
                />
            )}

            {selectedMainCategory === 'memberHighlights' && (
                <MemberHighlightsPage/>
            )}
        </main>
    )
}