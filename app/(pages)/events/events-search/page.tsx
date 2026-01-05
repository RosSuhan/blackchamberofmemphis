import EventsBlock from "@/components/EventsBlock/page";
import PageTitleSection from "@/components/pageTitleSection/page";


export default function EventsSearch(){
    return(
        <section>
            <PageTitleSection
                pageTitle="Events Search"
            />
            <EventsBlock/>
        </section>
    )
}