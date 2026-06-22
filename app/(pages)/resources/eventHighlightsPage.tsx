'use client'
import ResourcesCatBlock from '@/components/CATSINGLEBLOCK/RESOURCESCATBLOCK'
import { eventIndex } from '@/lib/eventsList/eventIndex'
import style from '@/styles/resourcesPage.module.css'
import { useState } from 'react'


export default function EventHighlightsPage(){
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

    const [eventTypeSelector, setEventTypeSelector] = useState('')

    const today = new Date();
        today.setHours(0,0,0,0);
    
        const filteredEvents = eventIndex.filter(event => {
            const eventDate = new Date(event.sortDate);
            eventDate.setHours(0,0,0,0);
    
            const isPastEvent = eventDate < today;
    
            const matchesType = !eventTypeSelector || event.eventType === eventTypeSelector

            return isPastEvent && matchesType
        }).sort((a,b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime())

    console.log(eventTypeSelector)

    

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
                        articleTitle = {event.eventName}
                        articleDescription = {event.eventPastDescription}
                        articleOffering = {[]}
                        articleServeStage={[]}
                        articleReadPath = {`/past-events/${event.id}`}
                    />
                ))}
            </div>
            
        </section>
    )
}