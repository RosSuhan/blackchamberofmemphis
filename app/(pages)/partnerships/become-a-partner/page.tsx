import PageHeroSection from "@/components/heroSections/pageHeroSection";
import BecomePartnerForm from "./becomePartnerForm";


export default function BecomePartner(){
    return(
        <main>
            <PageHeroSection
                mainHeading = {'Start the Conversation'}
                subHeading = {"Tell us about your organisation and how you'd like to work with us. We'll be in touch."}
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = {''}
                initialSearchTerm = {''}
                eventDate = {''}
                eventTime = {''}
                eventAddress = {''}
                stateButtons={[]}
            />

            <BecomePartnerForm/>
        </main>
    )
}