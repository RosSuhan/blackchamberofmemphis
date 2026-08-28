import PageHeroSection from "@/components/heroSections/pageHeroSection";
import OneColumn from "@/components/WordImageBlocks/OneColumn";
import TwoColumnText from "@/components/WordImageBlocks/TwoColumnText";

export default function HrStrategyRoom(){
    return(
        <main>
            <PageHeroSection
                eventHost = {"Tailor Made Global Consulting"}
                mainHeading = {"The HR Strategy Room"}
                subHeading = {''}
                ctaButtons = {[]}
                searchbar = {false}
                placeholder = {""}
                eventDate = {'Tuesday, October 27, 2026'}
                eventTime = {"7:30 am - 1 pm"}
                eventAddress = {""}
                stateButtons = {[]}
            />
            <OneColumn
                headingIntro = {"A STRATEGIC WORKING EXPERIENCE"}
                headingTextColor = {"var(--darkGold)"}
                blockHeading = {"Practice the judgment strategic HR work requires."}
                paragraph = {`The HR Strategy Room is a curated, in-person experience for HR professionals building stronger strategic capability. The morning will focus on reasoning through complex business situations, testing assumptions, strengthening decisions, and examining the questions participants are navigating in their own work.`}
                multiWeekProgram = {false}
                multiEvents = {[]}
            />

            <TwoColumnText
                blockHeadingOne = {"THE EXPERIENCE"}
                blockTextOne = {`
                    <ul style="">
                        <li style="display:flex; flex-direction: column">
                            <span style="font-weight:800">Reason through complexity</span>
                            <span>Examine business situations without rushing to the most fimiliar answer.</span>
                        </li>
                        <li style="display:flex; flex-direction: column">
                            <span style="font-weight:800">Test assumptions</span>
                            <span>Make the th</span>
                        </li>
                    </ul>`}
            />
        </main>
    )
}