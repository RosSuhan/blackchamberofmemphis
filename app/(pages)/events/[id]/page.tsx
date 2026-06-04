'use client'
import { eventIndex } from "@/lib/eventsList/eventIndex";
import { useParams } from "next/navigation";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import OneColumn from "@/components/WordImageBlocks/OneColumn";

export default function EventSingle(){
    const params = useParams();
    const id = params?.id as string

    if(!id) return null;

    const selectedEvent = eventIndex.find(c => c.id === id)

    const registrationLinks = [
        {
            name : selectedEvent?.registrationButtonText || "",
            path : selectedEvent?.registrationButtonLink || "",
            type : 'globalGoldButton'
        }
    ]
    return(
        <section>
            <PageHeroSection
                eventHost = {selectedEvent?.eventHostName}
                mainHeading = {selectedEvent?.eventName || ''}
                subHeading = {''}
                searchbar = {false}
                ctaButtons = {registrationLinks}
                placeholder = {''}
                eventDate = {selectedEvent?.eventDate}
                eventTime = {selectedEvent?.eventTime}
                eventAddress = {selectedEvent?.eventAddress}
            />

            <OneColumn
                backgroundColor = {'var(--white)'}
                textColor = {'var(--black)'}
                headingIntro = {''}
                headingTextColor = {''}
                blockHeading = {''}
                subHeading = {''}
                paragraph = {selectedEvent?.eventLongDescription || ""}
                multiWeekProgram = {false}
                multiEvents = {[]}
                paragraphTwo = {''}
            />
        </section>
    )
}