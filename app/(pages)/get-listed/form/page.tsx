import PageHeroSection from "@/components/heroSections/pageHeroSection";
import ListingFormComponent from "./ListingFormComponent";


export default function GetListedForm(){

    return(
        <main style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <PageHeroSection
                mainHeading="List Your Business"
                subHeading=""
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = {""}
                stateButtons={[]}
            />

            <ListingFormComponent/>
        </main>
    )
}