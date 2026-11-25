import PageHeroSection from "@/components/heroSections/pageHeroSection";
import WideTextSection from "@/components/symposiumComps/wideTextSection/page";
import OneColumn from "@/components/WordImageBlocks/OneColumn";


export default function getFoundLocalSEOandAIsearch(){
    return(
        <main>
            <PageHeroSection
                eventHost=""
                mainHeading="Get Found: Local SEO and AI Search for Memphis Businesses"
                subHeading="Helping Memphis businesses become more visible, discoverable and competitive in an increasingly digital marketplace."
                heroParagraph=""
                searchbar={false}
                ctaButtons={[]}
                placeholder=""
                initialSearchTerm=""
                eventDate="November 19"
                eventTime=""
                eventPrice=""
                eventAddress=""
                stateButtons={[]}
            />

            <WideTextSection
                wideTextSectionHeading=""
                wideTextSectionText={`
                    <p>On November 19, 2026, the Black Chamber of Memphis welcomed Rey Clemons of Uberwood Agency for an informative and practical workshop, Get Found: Local SEO and AI Search for Memphis Businesses.</p>
                    <p>The session explored an increasingly important question for business owners: When potential customers search for the products or services you offer, can they actually find your business?</p>
                    <p>With more consumers relying on Google Maps, online reviews and AI-powered tools like ChatGPT to discover local businesses, having an online presence is no longer enough. Businesses need to ensure that their information is accurate, consistent and easy for both search engines and potential customers to find.</p>`}
            />

            <OneColumn
                backgroundColor="var(--darkGrey)"
                textColor="#ffffff"
                headingIntro=""
                headingTextColor="var(--darkGold)"
                blockHeading="Why Online Visibility Matters"
                subHeading=""
                paragraph={`
                    <p class='globalText'>The numbers shared during the workshop highlighted just how important local search visibility has become:</p>
                    <ul class="globalText">
                        <li><strong>39% of local search clicks</strong> go to the top three businesses appearing in Google Maps results (First Page Sage, 2026).</li>
                        <li><strong>52% of consumers</strong> now use AI tools like ChatGPT to find local businesses, up from 9% just one year ago (SOCi, 2026).</li>
                        <li><strong>99% of consumers</strong> read reviews before visiting a business (SOCi, 2026).</li>
                    </ul>
                    <p class="globalText">These figures reinforce an important message: businesses that are easier to find, have credible reviews and maintain accurate online information are better positioned to attract potential customers.</p>
                `}
                multiWeekProgram = {false}
                multiEvents={[]}
            />

            <OneColumn
                backgroundColor="var(--grey)"
                textColor="#000000"
                blockHeading="The Three Foundations of Being Found"
                paragraph={`
                    <p class="globalText">One of the key takeaways from Rey's presentation was that businesses need to focus on three essential areas:</p>
                    <br/>
                    <h3 class="globalThirdHeading">1. Google Business Profile</h3>
                    <p class="globalText">Your Google Business Profile plays an important role in determining how your business appears in local search and Google Maps. Keeping your porfile complete, accurate and regularly updated helps Google understand what your business offers and which searches are relevant to you.</p>
                    <br/>
                    <h3 class="globalThirdHeading">2. Customer Reviews</h3>
                    <p>Reviews help establish credibility and trust. Encouraging satisfied customers to share their experiences and responding to both positive and negative feedback can strengthen your online reputation.</p>
                    <br/>
                    <h3 class="globalThirdHeading">3. Business Directory Listings</h3>
                    <p>Consistent business information across online directories helps reinforce your business's identity and makes it easier for search engines and AI tools to recognise and recommend your business.</p>
                    <p>An important point discussed during the workshop was that these same foundations influence both traditional Google search results and AI-generated business recommendations.</p>
                `}
                multiEvents={[]}
            />

            <OneColumn
                backgroundColor=""
                textColor=""
                blockHeading="How Google Determines Which Businesses Appear in the Top Three"
                multiEvents={[]}
                paragraph={`
                    <p class="globalText">Rey explained that Google considers three primary factors when determining local search rankings:</p>
                    <ul class="globalText">
                        <li><strong>Relevance:</strong> How closely your business profile matches what someone is searching for.</li>
                        <li><strong>Distance:</strong> How close your business is to the person performing the search.</li>
                        <li><strong>Prominence:</strong> How well-known and trusted your business appears online.</li>
                    </ul>
                    <p class="globalText">While business owners cannot control their physical location, they can influence many of the other signals that Google uses.</p>
                    <p class="globalText">The workshop highlighted five areas businesses can actively improve:</p>
                    <ul class="globalText">
                        <li>Selecting the most appropriate primary and secondary business categories.</li>
                        <li>Clearly describing their services using the language customers actually search for.</li>
                        <li>Building customer reviews and responding to feedback.</li>
                        <li>Regularly uploading photos and publishing business updates.</li>
                        <li>Maintaining consistent business listings across other online platforms.</li>
                    </ul>
                    <p>These improvements help search engines better understand what a business offers and where it belongs in relevant search results.</p>
                `}
            />

            {/* <OneColumn

            /> */}
        </main>
    )
}