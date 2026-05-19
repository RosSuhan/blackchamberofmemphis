import StepRow from "@/components/FORMcomponents/StepRow";
import GetListedMainForm from "@/components/forms/GetListedMainForm";
import PageHeroSection from "@/components/heroSections/pageHeroSection";


export default function GetListedForm(){
    return(
        <main>
            <PageHeroSection
                mainHeading="List Your Business"
                subHeading=""
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = {""}
            />

            <StepRow/>

            <GetListedMainForm/>
        </main>
    )
}