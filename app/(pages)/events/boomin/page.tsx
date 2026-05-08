import OneCtaButtonRow from "@/components/callToAction/OneCtaButtonRow";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import OneColumn from "@/components/WordImageBlocks/OneColumn";


export default function Boomin(){
    const eventActionBtn = [
        {
            name : 'Register Now',
            path: '/', 
            type: 'globalGoldButton'
        }
    ]

    const events = [
        {
            eventTopic : "Fund U - Interest-Free Capital Match with Kiva",
            eventDateTime : "June 9, 2026 | 6:30 - 7:30 PM CST",
            eventAddressLink : 'Epicenter',
            eventAddress : "Epicenter",
            eventCtaButton : 'Register',
            eventCtaLink : '/register',
            eventDetails : `<p>Access Up to $15,000 in 0% Interest Capital. No Minimum Credit Score Required.</p>
                            <p>Need funding but don't want to deal with traditional banks? Through Boomin University's Kiva partnership, you can access loans between $1,000 and $15,000 at zero percent interest — with full support from start to funded.</p>
                            <p>Boomin University is an official Kiva Platform Partner, Trustee, and Managed Lending Partner, which means they walk with you through every step of the process. 100% of their borrowers have been fully funded.</p>
                            <h4>What You Get:</h4>
                            <ul>
                                <li>Fundraising strategy and application support</li>
                                <li>Access to a network of lenders and supporters</li>
                                <li>Loan matching support to help you reach your goal faster</li>
                                <li>Ongoing coaching and accountability throughout the process</li>
                            </ul>`
        },
        {
            eventTopic : "BCoM Annual Family Night at AutoZone Park",
            eventDateTime : "June 19, 2026",
            eventAddressLink : '/',
            eventAddress : "In-Person - AutoZone Park, Memphis",
            eventCtaButton : 'Register',
            eventCtaLink : '/register-now',
            eventDetails : `<p>Personalized Support Built Around Your Business.</p>
                            <p>This is Boomin University's most comprehensive offering. If you're an established entrepreneur who needs hands-on, customized support — not a one-size-fits-all program — Build to Boom is for you.</p>
                            <h4>What's Included:</h4>
                            <ul>
                                <li>One-on-one coaching tailored to your specific goals</li>
                                <li>Free accounting services to strengthen your financial management</li>
                                <li>Free marketing services to support visibility and growth</li>
                                <li>Strategic support across operations, finances, and marketing</li>
                            </ul>`
        },
        {
            eventTopic : "Boomin Marketing Program",
            eventDateTime : "June 30, 2026 | 5:30 - 7:30 PM CST",
            eventAddressLink : '',
            eventCtaButton : 'Register',
            eventCtaLink : '/',
            eventAddress : "In-person Orientation + Virtual",
            eventDetails : `<p>Clarify Your Message. Strengthen Your Marketing. Attract the Right Customers.<p>
                            <p>This program is for you if you want to communicate your value more clearly, market with confidence, and attract the right customers — consistently.</p>
                            <h4>What You'll Work On:</h4>
                            <ul>
                                <li>Identifying your ideal customer</li>
                                <li>Strengthening your brand message and positioning</li>
                                <li>Building a practical, actionable marketing plan</li>
                                <li>Showing up consistently and confidently in your marketing</li>
                            </ul>`
        },
        {
            eventTopic : "Boomin to the Bank",
            eventDateTime : "August 25, 2026 | 6:30 PM CST",
            eventAddressLink : '',
            eventAddress : "Virtual",
            eventCtaButton : 'Register',
            eventCtaLink : '/',
            eventDetails : `<p>Strengthen Your Financials. Build Confidence. Prepare for What's Next.</p>
                            <p>This program is for you if you want to better understand your finances, get organized, and build the financial readiness that lenders and investors look for.</p>
                            <h4>What You'll Work On:</h4>
                            <ul>
                                <li>Understanding your personal and business financials</li>
                                <li>Improving financial organization and decision-making</li>
                                <li>Learning what lenders look for when evaluating businesses</li>
                                <li>Building a step-by-step plan to strengthen your financial position</li>
                            </ul>`
        }
    ]
    
    return(
        <main>
            <PageHeroSection
                mainHeading = 'Boomin U 2026 Programs for Small Business Owners'
                subHeading = ''
                ctaButtons = {eventActionBtn}
                searchbar = {false}
                placeholder = ''
                eventDate = {'June - September, 2026'}
                eventTime = {''}
                eventAddress={''}
            />

            <OneColumn
                backgroundColor = {'var(--white)'}
                blockHeading = {'Building Real Pathways for Black Entrepreneurs'}
                paragraph = {`
                    <p>The Black Chamber of Memphis (BCoM) and Boomin University have joined forces to create something bigger than a program — a pipeline. This partnership brings together BCoM’s deep roots in the Memphis business community with Boomin University’s proven training, funding access, and founder-first approach.</p>
                    <p>Together, we’re equipping Black-owned and small businesses across the Mid-South with the tools, capital, and connections needed to grow, compete, and win — not someday, but now.</p>
                `}
                multiEvents={[]}
            />

            <OneColumn
                backgroundColor = {"var(--grey)"}
                blockHeading = {"From Idea to Income - and Beyond"}
                paragraph = {`
                    <p style="font-style: italic">This isn’t theory. This is execution.</p>
                    <p>The Boomin University x BCoM experience is designed to meet entrepreneurs exactly where they are — whether you're starting from scratch, trying to stabilize your business, or ready to scale.</p>
                    <p>Through a series of targeted programs, you’ll learn how to:</p>
                    <ul>
                        <li>Turn your idea into a real, revenue-generating business</li>
                        <li>Get your financial foundation right and become funding-ready</li>
                        <li>Access capital through trusted platforms like Kiva</li>
                        <li>Build systems that help you grow sustainably</li>
                    </ul>
                    <p>Each program is hands-on, practical, and built for real-world results — so you leave with progress, not just notes.</p>
                `}
                multiEvents={[]}
            />

            <OneColumn
                backgroundColor = {'var(--black)'}
                textColor = {"var(--white)"}
                blockHeading = {"One Pipeline. Four Pathways. Built For You"}
                headingTextColor = {"var(--darkGold)"}
                paragraph = {`
                    <p>Through this partnership, BCoM members and Mid-South entrepreneurs now have direct access to Boomin University's full suite of free and low-cost business programs — no runaround, no gatekeeping. The programs are designed to meet you where you are, whether you need to sharpen your marketing, get your finances investor-ready, access zero-interest capital, or get one-on-one coaching to take your business to the next level.</p>
                    <p>Every program is cohort-based or rolling enrollment — meaning you'll learn alongside other entrepreneurs, stay accountable, and walk away with tools you can put to work immediately. These aren't theoretical workshops. This is practical, structured support designed to move your business forward.</p>
                `}
                multiWeekProgram = {true}
                multiEvents={events}
            />

            <OneColumn
                backgroundColor = {"var(--white)"}
                textColor = ""
                headingIntro = ""
                headingTextColor = ""
                blockHeading = "What You Will Learn"
                subHeading = {""}
                multiWeekProgram = {false}
                multiEvents = {[]}
                paragraph = {`
                    <p>Whether you join one program or all four, you'll walk away with practical skills, stronger financials, and a clear path forward for your business.</p>
                    <h4>Marketing & Brand Clarity</h4>
                    <ul>
                        <li>How to identify and speak directly to your ideal customer</li>
                        <li>How to craft a brand message that clearly communicates your value</li>
                        <li>How to build a practical, actionable marketing plan you can implement immediately</li>
                        <li>How to show up consistently and confidently across your marketing channels</li>
                    </ul>
                    <h4>Financial Literacy & Funding Readiness</h4>
                    <ul>
                        <li>How to understand and manage both your personal and business finances</li>
                        <li>How to organize your financials for better decision-making</li>
                        <li>What lenders and investors actually look for when evaluating a business</li>
                        <li>How to build a step-by-step plan to strengthen your financial position over time</li>
                    </ul>
                    <h4>Capital Access</h4>
                    <ul>
                        <li>How to access zero-interest loans between $1,000 and $15,000 through Kiva</li>
                        <li>How to build a fundraising strategy that gets you fully funded</li>
                        <li>How to navigate the loan application process with guided support</li>
                        <li>How to leverage a global network of lenders to fund your business</li>
                    </ul>
                    <h4>Business Strategy & Growth</h4>
                    <ul>
                        <li>How to identify the specific gaps holding your business back</li>
                        <li>How to strengthen your operations, marketing, and finances simultaneously</li>
                        <li>How to set clear, measurable goals with accountability built in</li>
                        <li>How to position your business for sustainable, long-term growth</li>
                    </ul>`}
            />

            <OneCtaButtonRow
                ctaText = {`
                    <h3 className='globalThirdHeading'>Not Sure Where to Start? Start Here.</h3>
                    <p>If you're not sure which program is the right fit, that's okay. Boomin University's Navigate U session is designed to help you assess where your business is, explore your funding readiness, and get pointed in the right direction — no pressure, no sales pitch.</p>
                    `}
                ctaLink = {'/string'}
                ctaButton = {'Register...'}
            />
        </main>
    )
}