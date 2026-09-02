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
                    <ul style="display: flex; flex-direction: column; row-gap: 1rem">
                        <li style="display:flex; flex-direction: column">
                            <span style="font-size:1.5rem; font-weight:800; color: var(--darkGold);">Reason through complexity</span>
                            <span>Examine business situations without rushing to the most fimiliar answer.</span>
                        </li>
                        <li style="display:flex; flex-direction: column">
                            <span style="font-size:1.5rem; font-weight:800; color: var(--darkGold);">Test assumptions</span>
                            <span>Make the thinking behind important recommendations more visible and defensible.</span>
                        </li>
                        <li style="display:flex; flex-direction: column">
                            <span style="font-size:1.5rem; font-weight:800; color: var(--darkGold);">Strengthen decisions</span>
                            <span>Connect people and organizational choices to the outcomes the business requires.</span>
                        </li>
                        <li style="display:flex; flex-direction: column">
                            <span style="font-size:1.5rem; font-weight:800; color: var(--darkGold);">Bring your own questions</span>
                            <span>Use the perspectives in the cohort to examine challenges from your work.</span>
                        </li>
                    </ul>`}
                blockHeadingTwo = {"DESIGNED FOR"}
                blockTextTwo = {`
                    <ul style="display: flex; flex-direction: column; row-gap: 1rem">
                        <li style="display:flex; flex-direction: column">
                            <span style="font-size:1.5rem; font-weight:800; color: var(--darkGold);">HR generalists and HRBPs</span>
                            <span>Professionals working close to business leaders and operating priorities.</span>
                        </li>
                        <li style="display:flex; flex-direction: column">
                            <span style="font-size:1.5rem; font-weight:800; color: var(--darkGold);">HR specialists</span>
                            <span>Talent, rewards, learning, HR operations, and related disciplines.</span>
                        </li>
                        <li style="display:flex; flex-direction: column">
                            <span style="font-size:1.5rem; font-weight:800; color: var(--darkGold);">HR departments of one</span>
                            <span>Practitioners who need both strategic range and an external peer network.</span>
                        </li>
                        <li style="display:flex; flex-direction: column">
                            <span style="font-size:1.5rem; font-weight:800; color: var(--darkGold);">HR managers and directors</span>
                            <span>Leaders strengthening their own capability or nominating a team member.</span>
                        </li>
                    </ul>`}
            />
        </main>
    )
}