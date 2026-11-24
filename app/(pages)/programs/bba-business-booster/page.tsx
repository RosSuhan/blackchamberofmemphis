import PageHeroSection from "@/components/heroSections/pageHeroSection";
import "./bba-bus-booster.css";
import TwoColumnTextImage from "@/components/WordImageBlocks/TwoColumnTextImage";
import TwoColumnText from "@/components/WordImageBlocks/TwoColumnText";
import OneCtaButtonRow from "@/components/callToAction/OneCtaButtonRow";
import QuoteHighlightBlock from "@/components/WordImageBlocks/QuoteHighlightBlock";

export default function bbaBusinessBooster(){
    const boosterFormLink = 'https://docs.google.com/document/d/1F_yIlBFrlJUSz2J4WMjw6M9B9WwdHkiPjCMYQsRJcpg/edit?tab=t.wa8lmhg8k2y'

    const boosterCTALink = [
        {
            name: 'Apply Today',
            path: boosterFormLink,
            type : 'globalGoldButton'
        }
    ]
    return (
        <main>
            <PageHeroSection
                eventHost ={''}
                mainHeading={'BBA Business Booster'}
                subHeading={'Empowering the Hospitality, Tourism & Food Industry in a Post-Covid World'}
                heroParagraph={''}
                searchbar={false}
                ctaButtons={boosterCTALink}
                placeholder={''}
                initialSearchTerm={''}
                eventDate={''} 
                eventTime={''}
                eventPrice={''}
                eventAddress={''}
                stateButtons={[]}
                selectedState={''}
                // setSelectedState={}
            />

            <TwoColumnTextImage
                rowDirection = {false}
                imageLink={"/programs/business-booster/business-booster-winner-hillboyz-wings-burger-bar.webp"}
                imageAlt={"Winners of the Business Booster Program 2025"}
                imageWidth={2000}
                imageHeight={1340}
                blockHeading={""}
                blockText={`<p>The Black Chamber of Memphis (BCoM) is accepting applications for the final cohort of our Business Booster Program, supporting Memphis-based food service, hospitality, and toursm businesses with the training, resources, and financial assistance needed to strengthen operations and position themselves for long-term growth.</p>
                    <p>To date, Business Booster has awarded $430,000 in direct funding, training more than 120 food operators, and provided over 200 hours of individualized business coaching.</p>
                `}

            />


            <section
                className="trainingBlockCall"
            >

                <div
                    className="darkBlock"
                >
                    <h2
                        className="trainingCallHeading"
                    >
                        Upcoming Food Service Training:
                    </h2>
                    <p
                        className="trainingCallText"
                        style={{lineHeight: "2rem"}}
                    >
                        <strong>Mandatory In-Person Training:</strong>
                        Thursday, December 3 | 9:00 AM - 1:30 PM
                        <br/>
                        <span>
                            The training location will be provided upon acceptance
                        </span>
                        
                    </p>
                    <p
                        className="trainingCallText"
                    >
                        <strong>Virtual Group Training:</strong>
                        Monday, December 7
                    </p>
                    <p
                        className="trainingCallText"
                    >
                        <strong>Application Deadline:</strong>
                         Sunday, November 29, 2026
                    </p>
                </div>
            </section>

            <TwoColumnText
                backgroundColor={'var(--grey)'}
                textColor={"#000000"}
                blockHeadingOne={'What this program offers'}
                blockTextOne={`
                    <p>Through this final cohort, participants will receive:</p>
                    <ul>
                        <li>No-cost business <strong>training and personalized coaching</strong> from industry experts.</li>
                        <li>Access to resources and strategic partners to support business development and growth.</li>
                        <li>An opportunity to qualify for a <strong>$3,000 grant</strong> upon successful completion of program requiremtnes by the end of the year.</li>
                    </ul>        
                `}
                blockHeadingTwo={"Business Eligibility Requirements"}
                blockTextTwo={`
                    <p>To qualify, businesses must:</p>
                    <ul>
                        <li>Be located within Memphis city limits.</li>
                        <li>Operate in the food service, hospitality, or tourism industry.</li>
                        <li>Have been in operation on or before March 3, 2020, and remain active.</li>
                        <li>Have no more than 500 employees.</li>
                        <li>Provide a current business license, IRS EIN letter or Schedule C, and state incorporation documents, as applicable.</li>
                        <li>Have not received Business Booster funding previously.</li>
                    </ul>
                `}
            />

            <OneCtaButtonRow
                sectionBackground={""}
                textColor={""}
                ctaText={`
                    <h2 class="globalSecondHeading">
                        For questions or additional information, please contact:
                    </h2>    
                    <p
                        class="globalText"
                        style="line-height: 1.5"
                    >
                        Jasmine Bowden <br/> Director of Strategic Programs & Partnerships <br/> Black Chamber of Memphis <br/> <a href="tel:+19018008041">901-800-8041</a> | <a href="mailto:jasmine@bbamemphis.com">jasmine@bbamemphis.com</a>
                    </p>
                    <br/>
                    <p
                        class="globalText"
                        style="line-height:1.5; font-style:italic; width:90dvw"
                    >
                        The Business Booster Program is funded by the City of Memphis through the American Rescue Plan Act (ARPA).
                    </p>
                `}
                ctaLink={boosterFormLink}
                ctaButton={"Apply Now"}
            />
        </main>
    )
}