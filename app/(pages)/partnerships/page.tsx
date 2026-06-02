import PageHeroSection from "@/components/heroSections/pageHeroSection";
import OneColumn from "@/components/WordImageBlocks/OneColumn";
import TwoColumnTextImage from "@/components/WordImageBlocks/TwoColumnTextImage";


export default function PartnerSingle(){
    return(
        <main>
            <PageHeroSection
                mainHeading = {'Aligned for Impact'}
                subHeading = {'Every partnership BCoM forms is built around one question: does it create real opportunity for our members? Here is who we are working with — and why it matters.'}
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = {''}
                initialSearchTerm = {''}
                eventDate = {''}
                eventTime = {''}
                eventAddress = {''}
            />

            <OneColumn
                backgroundColor = {'var(--grey)'}
                textColor = {'var(--black)'}
                headingIntro = {''}
                headingTextColor = {''}
                blockHeading = {'Stronger Together. Further Together'}
                subHeading = {''}
                paragraph = {`
                    <p>Memphis has never moved forward alone. Its greatest achievements — in business, in culture, in community — have always been the result of people and organisations choosing to stand in the same corner, working toward the same future.</p>
                    <p>At the Black Chamber of Memphis, we believe that the growth of Black-owned businesses depends not just on what happens inside our four walls, but on who we choose to build with beyond them. That is why we are intentional about the partnerships we form — not for the sake of having partners, but because the right ones open doors that our members cannot always open alone.</p>`}
                multiWeekProgram = {false}
                multiEvents = {[]}
                paragraphTwo = {''}
            />

            <TwoColumnTextImage
                rowDirection = {false}
                imageLink = {''} 
                imageAlt = {''} 
                imageWidth = {100} 
                imageHeight = {100} 
                blockHeading = {"Our Vision for Partnership"} 
                blockText = {`
                    <p>We are building a coalition of organisations that are genuinely invested in the economic advancement of Black entrepreneurs and Black-owned businesses across the Greater Memphis area.</p>
                    <p>Each partnership we enter is guided by three questions:</p>
                    <details
                        style="margin:1rem 0"
                    >
                        <summary
                            style="border:1px var(--grey) solid; padding: .5rem 1rem; background:var(--darkGold); border-radius:8px"
                        >
                            Does it create real opportunity for our members?
                        </summary>
                        <div
                            style="background:var(--grey); padding:1rem; border-radius:0 0 8px 8px"
                        >We pursue relationships that translate into tangible benefits — contracts, visibility, access, and resources that go directly to the businesses in our network.</div>
                    </details>

                    <details
                        style="margin:1rem 0"
                    >
                        <summary
                            style="border:1px var(--grey) solid; padding: .5rem 1rem; background:var(--darkGold); border-radius:8px"
                        >
                            Does it strengthen Memphis as a whole?
                        </summary>
                        <div
                            style="background:var(--grey); padding:1rem; border-radius:0 0 8px 8px"
                        >BCoM's growth is tied to the city's growth. We partner with organisations that see economic inclusion not as a programme, but as a foundation for a stronger, more resilient Memphis.</div>
                    </details>

                    <details
                        style="margin:1rem 0"
                    >
                        <summary
                            style="border:1px var(--grey) solid; padding: .5rem 1rem; background:var(--darkGold); border-radius:8px"
                        >Is it built for the long term?</summary>
                        <div
                            style="background:var(--grey); padding:1rem; border-radius:0 0 8px 8px"
                        >We are not interested in one-time collaborations or symbolic gestures. We build working relationships — ones that evolve as our community's needs evolve.</div>
                    </details>`}
                ctaLink = {''}
                buttonText = {''}
                columnBackgroundColor = {''}
            />

            <TwoColumnTextImage
                rowDirection = {true}
                imageLink = {''} 
                imageAlt = {''} 
                imageWidth = {100} 
                imageHeight = {100} 
                blockHeading = {"What Our Partnerships Mean for You"} 
                blockText = {`
                    <p>As a BCoM member, our partnerships are your partnerships. When we align with an organisation, we do so with the goal of creating a direct line between their resources, networks, and opportunities and the businesses in our directory.</p>
                    <p>That may look like:</p>
                    <ul>
                        <li>Priority visibility to industries and productions actively seeking local vendors</li>
                        <li>Access to economic development programmes and resources typically reserved for larger enterprises</li>
                        <li>A stronger collective voice in civic and business conversations that shape Memphis's future</li>
                        <li>New markets and sectors that BCoM members can enter because we have laid the groundwork</li>
                    </ul>
                        <p>We will always be clear about what each partnership offers and how you can take advantage of it.</p>`}
                ctaLink = {''}
                buttonText = {''}
                columnBackgroundColor = {''}
            />
        </main>
    )
}