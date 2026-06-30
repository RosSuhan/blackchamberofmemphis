import MultiCtaButtonRow from "@/components/callToAction/multiCtaButtonRow";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import OneColumn from "@/components/WordImageBlocks/OneColumn";
import TwoColumnText from "@/components/WordImageBlocks/TwoColumnText";
import TwoColumnTextVideo from "@/components/WordImageBlocks/TwoColumnTextVideo";

export default function KivaBlog(){
    const kivaCtaButtons = [
        {
            buttonLink: 'https://kiva.org/borrow/boomin',
            buttonName: 'Ready to apply?'
        },{
            buttonLink: 'https://boominu.com/kivasupport',
            buttonName: 'Have questions?'
        }
    ]

    return(
        <main>
            <PageHeroSection
                eventHost="Boomin University"
                mainHeading="Capital Without the Catch: What Small Business Owners Need to Know About Kiva Loans"
                subHeading="Presented by Boomin University | A Kiva Hub Partner"
                searchbar = {false}
                ctaButtons={[]}
                placeholder=""
                initialSearchTerm=""
                eventDate=""
                eventTime=""
                eventPrice=""
                eventAddress=""
                stateButtons={[]}
                selectedState=""
                setSelectedState={undefined}
            />

            <OneColumn
                backgroundColor="var(--grey)"
                textColor=""
                headingIntro=""
                headingTextColor=""
                blockHeading=""
                subHeading=""
                paragraph = {`<p>Access to business capital has long been one of the most significant barriers facing small business owners, particularly those in underserved communities. But a growing number of entrepreneurs are discovering a funding path that sidesteps the traditional barriers entirely. At a info session hosted by Boomin University, a Kiva Hub Partner, business owners were introduced to the Kiva loan program: a 0% interest, no-collateral, no-minimum-credit-score lending opportunity that is changing the way entrepreneurs access capital.</p>`}
                multiEvents={[]}
                multiWeekProgram = {false}
            />

            <TwoColumnTextVideo
                rowDirection = {true}
                sectionVideoLink= { "https://www.youtube.com/embed/_2L-woKk5sw?si=qUCszPFVwNocnpwa" }
                blockHeading="What Is Kiva?"
                blockText = {`
                    <p>Founded in 2005, Kiva is the world's first personal micro-lending platform. Rather than borrowing from a bank, borrowers receive funding from a global community of everyday people who pool small contributions to support entrepreneurs who have been shut out of traditional lending. Because lenders are driven by impact rather than profit, they expect repayment — but charge absolutely no interest.</p>
                    <p>The numbers speak for themselves. To date, Kiva has connected 2.6 million lenders worldwide, funding $2.1 billion across more than 95 countries. In the United States alone, since 2011, Kiva has fulfilled over 11,500 loans, supporting more than 10,000 businesses and disbursing $70 million in crowdfunded capital.</p>`}
                ctaLink=""
                buttonText=""
                columnBackgroundColor=""
            />

            <TwoColumnText
                backgroundColor=""
                textColor=""
                blockOneBackground=""
                blockTwoBackground="var(--grey)"
                blockHeadingOne="Why This Matters: The Gap in Small Business Lending"
                
                blockTextOne={`
                    <p>Traditional banks are often not designed to serve small or early-stage businesses. They typically require established credit history, collateral, and audited financials — requirements that many small business owners simply cannot meet.</p>
                    <p>When conventional lending is out of reach, many entrepreneurs turn to alternatives such as credit cards, online lenders, or payday lenders. These options, however, can carry annual percentage rates (APRs) ranging from 25% to 700%, creating a cycle of debt rather than a path to growth.</p>
                    <p>Kiva fills this gap directly.</p>`}
                blockHeadingTwo="The Kiva Loan at a Glance"
                blockTextTwo={`
                    <table style='width:100%'>
                        <thead style="color:red">
                            <td>Feature</td>
                            <td>Details</td>
                        </thead>
                        <tr>
                            <td>Loan Size</td>
                            <td>$1,000 - $15,000</td>
                        </tr>
                        <tr>
                            <td>Interest Rate</td>
                            <td>0% - always</td>
                        </tr>
                        <tr>
                            <td>Loan Term</td>
                            <td>12 - 36 months</td>
                        </tr>
                        <tr>
                            <td>Fees</td>
                            <td>$0</td>
                        </tr>
                    </table>
                    <p>Repayment is simple: the loan amount divided by the number of months equals a fixed monthly payment. For example, a $10,000 loan over 36 months comes to approximately $277.78 per month.</p>`}
                ctaLinkOne=""
                ctaLinkTwo=""
                buttonTextOne=""
                buttonTextTwo=""
            />


            <TwoColumnTextVideo
                rowDirection = {true}
                sectionVideoLink={'https://www.youtube.com/embed/mw_0auM12Ek?si=tavvLlEuWjyoJI-M'}
                blockHeading="Do You Qualify?"
                blockText = {`
                    <p>Eligibility requirements are straightforward. To apply, you must:</p>
                    <ol>
                        <li>Be over 18 years of age</li>
                        <li>Be using the loan for business purposes</li>
                        <li>Be based in the United States</li>
                        <li>Not be currently in foreclosure or active bankruptcy</li>
                        <li>Not operate in a restricted industry (such as MLM/direct sales or federally illegal activities)</li>
                        <li>Be willing to demonstrate social capital by having a small circle of friends and family lend to you first</li>
                    </ol>
                    <p>Certain business types are not eligible, including cannabis businesses, multi-level marketing schemes, adult entertainment, gig contract work (Uber, Lyft, DoorDash), and businesses primarily seeking to refinance personal debt or invest in equities.</p>`}
                ctaLink=""
                buttonText=""
                columnBackgroundColor=""
            />
            
            <OneColumn
                backgroundColor="var(--grey)"
                textColor=""
                headingIntro=""
                headingTextColor=""
                blockHeading="How the Process Works"
                subHeading=""
                paragraph = {`
                    <p>The Kiva journey moves through four stages:</p>
                    <ol>
                        <li><strong>Apply (30 minutes – 1 hour)</strong> Applications are submitted at kiva.org/borrow. Borrowers share their story, a strong photo, and answer financial questions. Tax returns and bank statements are not required, though they can help qualify for a larger loan amount.</li>
                        <li><strong>Kiva Review (1 – 3 weeks)</strong> Kiva evaluates the application using financial and social factors, including any Trustee endorsement, and sets the loan size accordingly.</li>
                        <li><strong>Fundraise (up to 45 days)</strong> The campaign begins with a private round where 5–40 friends and family lend a minimum of $25 each, proving social capital. It then moves to a public round open to Kiva's global community of 2 million lenders. U.S. borrowers have a 95% success rate of being fully funded.</li>
                        <li><strong>Repay (12 – 36 months)</strong> Once fully funded, the loan is disbursed via PayPal within 7 business days. Fixed monthly repayments begin one month after disbursement, and on-time repayment typically qualifies borrowers for double the loan amount on their next application.</li>
                    <ol>`}
                multiEvents={[]}
                multiWeekProgram = {false}
            />

            <TwoColumnTextVideo
                rowDirection = {true}
                sectionVideoLink={"https://www.youtube.com/embed/j-yQuCx-wjI?si=jtyReifJ-G9_fjXO"}
                blockHeading="What Can You Use the Loan For?"
                blockText = {`
                    <p>A Kiva loan can be used for a wide range of legitimate business needs, including:</p>
                    <ul>
                        <li>Purchasing equipment</li>
                        <li>Upgrading your business space</li>
                        <li>Hiring employees</li>
                        <li>Building working capital</li>
                    </ul>`}
                ctaLink=""
                buttonText=""
                columnBackgroundColor=""
            />

            <OneColumn
                backgroundColor="var(--grey)"
                textColor=""
                headingIntro=""
                headingTextColor=""
                blockHeading="The Role of Boomin University as a Kiva Hub"
                subHeading=""
                paragraph = {`  
                    <p>Boomin University serves as a Kiva Hub — acting as a Trustee, Platform Partner, and Managed Lending Partner. This means they can endorse your application, help you craft your story, and guide you through the entire process. A Trustee endorsement builds credibility with Kiva, can accelerate the review process, and in some cases, can unlock a larger loan amount.</p>
                    <p>Boomin University's involvement in Kiva is rooted in lived experience. Before becoming a Kiva Hub, the organization's founder raised a $5,000 Kiva loan for her own business, Black Business Boom — fully funded in less than six days by 124 lenders. That experience became the foundation for helping others do the same. To date, Boomin University has supported 40 borrowers to full funding, unlocking a combined $398,500 in capital.</p>`}
                multiEvents={[]}
                multiWeekProgram = {false}
            />

            <OneColumn
                backgroundColor=""
                textColor=""
                headingIntro=""
                headingTextColor=""
                blockHeading="Also From Boomin University: Free Marketing Program"
                subHeading=""
                paragraph = {`<p>For business owners looking to grow beyond capital access, Boomin University is also offering a free 4-week marketing program in partnership with the Black Chamber of Memphis. The program is designed to help business owners market with clarity, consistency, and confidence. Sessions include an in-person orientation on June 30, followed by virtual sessions every Tuesday at 6:30 PM CST on July 7, 14, 21, and 28. Each participant also receives free 1-on-1 coaching. Spots are limited — enroll at <a href="https://boominu.com/bcomjuly">boominu.com/bcomjuly</a>.</p>`}
                multiEvents={[]}
                multiWeekProgram = {false}
            />
            
            <MultiCtaButtonRow
                sectionBackground="var(--darkGrey)"
                sectionTextColor="var(--white)"
                sectionHeading="Ready to Take the Next Step?"
                sectionText = {`
                    <p>If you are a business owner who has been turned away from traditional funding, the Kiva loan program may be the opportunity you have been waiting for.</p>
                    <p>Capital without the catch is not just a tagline — for thousands of entrepreneurs, it has become a reality.</p>`}
                sectionButtons={kivaCtaButtons}
            />
        </main>
    )
}