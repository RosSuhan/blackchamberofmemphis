'use client'
import ResourcesCatBlock from '@/components/CATSINGLEBLOCK/RESOURCESCATBLOCK'
import { EventListType } from '@/lib/eventsList/eventListTypes'
import style from '@/styles/resourcesPage.module.css'
// import { useState } from 'react'

type EventHighlightsPageProps = {
    eventCategoryList: {name:string, key:string}[]
    setEventTypeSelector : (value: string) => void
    filteredEvents : EventListType[]
}


export default function EventHighlightsPage({
    eventCategoryList,
    setEventTypeSelector,
    filteredEvents
}: EventHighlightsPageProps){

    return (
        <section
            className = {style.resourcesBodySection}
        >
            <div
                className={style.resourcesSideBar}
            >
                {eventCategoryList.map(({name, key}, index) =>(
                    <button 
                        key={index}
                        type="button"
                        className={style.subCatBtn}
                        onClick={() => setEventTypeSelector(key)}
                    >
                        {name}
                    </button>
                ))}
                
            </div>
            <div
                className={style.resourcesInformationBlock}
            >
                {filteredEvents?.map((event, index) => (
                    <ResourcesCatBlock
                        key = {index}
                        articleImage = {event.eventImage}
                        articleImageWidth = {1300}
                        articleImageHeight = {800}
                        articleTitle = {event.eventName}
                        articleDescription = {event.eventPastDescription}
                        articleOffering = {[]}
                        articleServeStage={[]}
                        articleReadPath = {`${event.blogPostReadLink}`}
                    />
                ))}
            </div>
            
        </section>
    )
}