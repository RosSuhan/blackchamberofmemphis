import PageHeroSection from "@/components/heroSections/pageHeroSection";
import style from '@/components/symposiumComps/applicationForm/application.module.css'

export default function FarmToCouncilApplication(){
    return(
        <main style={{width:"100%", display:'flex', flexDirection:'column', alignItems:"center", background:'purple'}}>
            <PageHeroSection
                eventHost = {''} 
                mainHeading = {'Farm To Council interest Form'}
                subHeading = {''}
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = {''}
                initialSearchTerm = {''}
                eventDate = {''}
                eventTime = {''}
                eventPrice = {''}
                eventAddress = {''}
                stateButtons = {[]}
                selectedState = {''}
                setSelectedState = {undefined}
            />

            <section
                className={style.symFormSection}
                style={{background:'green'}}
            >
                <form
                    className={style.symForm}
                >
                    <h3
                        className={style.symFormH3}
                    >
                        Company Information
                    </h3>
                    <fieldset
                        className={style.symFormFieldset}
                    >
                        <legend
                            className={style.symFormLegend}
                        >
                            Business Name
                        </legend>
                        <input 
                            type="text" 
                            name="businessName"  
                            className=""
                        />
                    </fieldset>
                </form>
            </section>
        </main>
    )
}