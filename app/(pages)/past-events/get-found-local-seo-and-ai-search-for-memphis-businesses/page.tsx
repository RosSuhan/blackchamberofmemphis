import PageHeroSection from "@/components/heroSections/pageHeroSection";
import WideTextSection from "@/components/symposiumComps/wideTextSection/page";


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

            
        </main>
    )
}