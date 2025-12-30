import PageTitleSection from "@/components/pageTitleSection/page";
import EventsBlock from "@/components/EventsBlock/page";
import EventsCalendar from "@/components/eventsCalendar/page";

export default function EventsDemo(){
    return(
        <main
            style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}
        >
            <PageTitleSection
                pageTitle="Events"
            />

            <EventsCalendar/>

        </main>
    )
}