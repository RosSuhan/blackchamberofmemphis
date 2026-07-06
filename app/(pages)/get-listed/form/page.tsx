import PageHeroSection from "@/components/heroSections/pageHeroSection";
import ListingFormComponent from "./ListingFormComponent";
import Header from "@/components/nav/Header/page";
import Footer from "@/components/nav/Footer/page";


export default function GetListedForm(){

    return(
        <>
            <Header/>
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
            <Footer/>
        </>
    )
}