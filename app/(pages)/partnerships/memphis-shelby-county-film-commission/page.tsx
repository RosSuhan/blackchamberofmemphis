import MultiCtaButtonRow from "@/components/callToAction/multiCtaButtonRow";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import OneColumn from "@/components/WordImageBlocks/OneColumn";
import QuoteHighlightBlock from "@/components/WordImageBlocks/QuoteHighlightBlock";
import TwoColumnTextImage from "@/components/WordImageBlocks/TwoColumnTextImage";


export default function MemphisShelbyCountyFilmComission(){
    const twoDirectoryList = [
        {
            eventTopic : "Get listed in the BCom Member Directory",
            eventDetails : `<p>Your listing on our website connects you with fellow entrepreneurs, potential partners, and clients across the Memphis/Shelby County business community.</p>`
        },{
            eventTopic : "Get listed in the Film Commission's Production Directory",
            eventDetails : `<p>Your listing at filmmemphis.org puts your business directly in front of film and television productions actively looking for Memphis/Shelby County-based vendors and service providers.</p>`
        }
    ]

    const ctaButtons = [
        {
            buttonLink : '/get-listed', 
            buttonName : "List Your Business on the BCoM Member Directory"
        },
        {
            buttonLink : 'https://tn.reel-scout.com/crew_registration.aspx?g=memphis', 
            buttonName : "Join the Film Commission's Production Directory"
        }
    ]

    return(
        <main>
            <PageHeroSection
                mainHeading = {'Memphis is on Camera - Is Your Business Ready?'}
                subHeading = {"A New Opportunity for BCoM Members"}
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = {''}
                initialSearchTerm = {''}
                eventDate = {''}
                eventTime = {''}
                eventAddress = {''}
                stateButtons={[]}
            />

            <OneColumn
                backgroundColor = {'var(--grey)'}
                textColor = {'var(--black)'}
                headingIntro = {''}
                headingTextColor = {''}
                blockHeading = {''}
                subHeading = {''}
                paragraph = {`
                    <p>Memphis is more than a city — it is a story that the world keeps coming back to tell. From Hollywood productions to independent films, Memphis has been a filming destination for decades, and that means one powerful thing for local businesses: opportunity.</p>
                    <p>The Black Chamber of Memphis (BCOM) is proud to announce our strategic partnership with the Memphis & Shelby County Film and Television Commission Foundation — and we want to make sure every one of our members is positioned to benefit.</p>`}
                multiWeekProgram = {false}
                multiEvents = {[]}
            />

            <TwoColumnTextImage
                rowDirection = {true}
                imageLink = {'/members/memphis-shelby-film-commission/image7.webp'}
                imageAlt = {''}
                imageWidth = {1200}
                imageHeight = {1200}
                blockHeading = {'Who Is the Film & Television Commission Foundation?'}
                blockText = {`
                    <p>Founded in 1985 by joint City/County resolution, the Memphis & Shelby County Film and Television Commission is the official City/County economic development agency for film and television. This is not an arts organization — it is an economic engine. The Commission works primarily to assist and recruit funded productions that will economically impact multiple sectors of the local community, including local hires and local vendors.</p>
                    <p>In short: when a production comes to Memphis/Shelby County, they need local businesses — caterers, transportation providers, hotels, construction workers, suppliers, and more. The Commission is the bridge that connects those productions to the Memphis/Shelby County community.</p>`}
                ctaLink = {''}
                buttonText = {''}
                columnBackgroundColor = {''}
            />

            <TwoColumnTextImage
                rowDirection = {false}
                imageLink = {'/members/memphis-shelby-film-commission/movie-scene-2.webp'}
                imageAlt = {''}
                imageWidth = {1042}
                imageHeight = {1286}
                blockHeading = {'The Numbers Tell the Story'}
                blockText = {`
                    <p>The film industry's impact on Memphis/Shelby County is real and tangible. Film Commissioner Linn Sitler has said: "There are very few areas of the local economy that aren't touched by a production." A single television series can transform the local economy — even one cancelled season of <span style="font-style:italic">Bluff City Law</span> generated an estimated $35 million to the state and local community. Productions bring jobs for truck drivers, carpenters, grip crews, and service providers — and sometimes the largest expense on a production is hotels.<p>
                    <p>That is money flowing directly into Memphis & Shelby County businesses — businesses just like yours.</p>`}
                ctaLink = {''}
                buttonText = {''}
                columnBackgroundColor = {''}
            />

            <OneColumn
                backgroundColor = {'var(--grey)'}
                textColor = {'var(--black)'}
                headingIntro = {''}
                headingTextColor = {''}
                blockHeading = {'Why Your Listing Matters'}
                subHeading = {''}
                paragraph = {`
                    <p>The Film Commission maintains a Production Directory — a searchable database that film and television productions actively use when they arrive in Memphis/Shelby County looking for local vendors, crew, and service providers. If your business is not listed, you are invisible to that opportunity.</p>
                    <p>Being listed on the Film Commission's directory means:</p>
                    <ul>
                        <li><strong>You get discovered.</strong> Productions searching for local vendors will find your business directly through the Commission's platform.</li>
                        <li><strong>You get credibility.</strong> Being part of the official City/County film resource signals that your business is professional, local, and ready to serve.</li>
                        <li><strong>You get connected.</strong> The Commission's network spans productions of every scale — from small indie films to major network series — all of which need local support.</li>
                    </ul>`}
                multiWeekProgram = {false}
                multiEvents = {[]}
            />

            <OneColumn
                backgroundColor = {'var(--black)'}
                textColor = {'var(--white)'}
                headingIntro = {''}
                headingTextColor = {''}
                blockHeading = {'Two Listings. Twice the Visibility.'}
                subHeading = {''}
                paragraph = {`
                    <p>As a BCoM member, we encourage you to take two simple steps to maximize your exposure:</p>
                    `}
                multiWeekProgram = {true}
                multiEvents = {twoDirectoryList}
                paragraphTwo = {"Both listings are free to access and together they create a powerful presence for your business across two of Memphis/Shelby County's most active business networks."}
            />

            <QuoteHighlightBlock
                backgroundColor = {'var(--white)'}
                lightboxBackground = {'var(--grey)'}
                lightboxTextColor = {'var(--black)'}
                quote = {`
                    <h3>Don't Wait for the Next Production to Pass You By</h3>
                    <p>Productions don't announce themselves in advance. When a film crew lands in Memphis, they go straight to the resources they know. Make sure your business is already there waiting.</p>`}
            />

            <MultiCtaButtonRow
                sectionBackground = {'var(--darkGrey)'}
                sectionTextColor = {'var(--white)'}
                sectionHeading = {'Get Listed Today. Be Ready For Tomorrow.'}
                sectionText = {''}
                sectionButtons = {ctaButtons}
            />
        </main>
    )
}