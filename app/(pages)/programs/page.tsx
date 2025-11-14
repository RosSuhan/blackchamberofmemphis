'use client'
import style from '@/styles/programMain.module.css'
import { clsx } from 'clsx';
import StayInformedSection from "@/components/forms/stayInformed";
import Image from 'next/image';
import { ChevronDown } from '@/components/icons/ChevronDown';
import { ChevronUp12 } from '@/components/icons/ChevronUp';
import { useState } from 'react';
import PageTitleSection from '@/components/pageTitleSection/page';

const programsList = [
    {
        id : "memphisTen",
        pImage: "/assets/BuildToScalewebp.webp",
        pImageWidth: 2560,
        pImageHeight: 1707,
        gText : "Helping solopreneurs hire their first employee.",
        pHeading : "MEMPHIS TEN",
        pText : `<p>BCOM's signature initiative, MemphisTEN, aims to create 8,000 jobs by 2030 through targeted support for underrepresented entrepreneurs. MemphisTEN delivers more than a program — it delivers a plan to dismantle barriers and strengthen Memphis' economy from within.<p>`,
        direction: "row",
        pButtonText : "Learn More",
        pButtonLink : "/memphis-ten",
        pButtonCaption : "Be part of the growth!",
        pDetails : [
            {
                dIndex: "boss",
                detailHeading : "Back Office Support (BOSS)",
                detailParagraph : `BOSS (Back Office Support Services) provides back office support to solopreneurs and small businesses to help them grow and scale. In partnership with Remoting.work, BCoM provides access to a talented pool of marketing and administrative professionals available on a fractional or full-time basis, thus allowing the entrepreneur to focus their time and energy on growing their business. Click here to learn more about the accounting, creative services, customer service, digital marketing and other services available.</p>`,
            },{
                dIndex: "procurement",
                detailHeading : "Procurement Support",
                detailParagraph : `<p>The Black Chamber of Memphis, through our Memphis TEN initiative, is committed to helping its members grow by unlocking the millions of dollars of contracts available through procurement opportunities with educational, local and quasi-governmental entities. We facilitate connections between our members and procurement officials to support competitive bids. BCoM members also receive our Local Government Procurement Weekly, a curated list of procurement opportunities for goods and services, automatically delivered to their email every Tuesday. Click here to learn more.</p>`
            },{
                dIndex: "acquisition",
                detailHeading : "Acquisition Program",
                detailParagraph : `<p><strong>Facilitating Business Creation or Acquisition</strong><br/>
                        The Black Chamber of Memphis offers our Succession Solutions program to business owners in the area. The program's main goal is to bridge the gap in Memphis' economy and promote cultural diversity. In order to do that, we identify target sectors that have high growth potential for our Memphis professionals and help facilitate business creation or acquisition.
                    </p>
                    <p>
                        Whether you are an entrepreneur looking to acquire a business or a business owner considering selling, our program offers a platform to connect and match potential buyers and sellers. We bring together a network of Memphis entrepreneurs, ambitious managers, and community partners to create valuable opportunities for business ownership and growth. Start your path to success with our Succession Solutions today.
                    </p>`
            },{
                dIndex: "memberSupport",
                detailHeading : "Membership Support",
                detailParagraph : ``
            }
        ]
    },{
        id : "bcom-business-booster",
        pImage: "/assets/BCOM-BusinessBooster.webp",
        pImageWidth: 7775,
        pImageHeight: 4785,
        gText : "Empowering the Hospitality, Tourism & Food Industry in a Post-Covid World",
        pHeading : "BCOM Business Booster",
        pText : `<p>The hospitality, tourism, and food industries were hit hard by the COVID-19 pandemic, facing ongoing challenges that require more than just a return to normal—they demand innovation, resilience, and targeted support. Understanding these unique struggles, the Black Chamber of Memphis (BCOM) has introduced the BCOM Booster program, designed to provide tailored resources, mentorship, and growth opportunities specifically for entrepreneurs in these vital sectors.<p>`,
        direction: "row-reverse",
        pButtonText : "Text “BBABoost” to (901) 441-8411",
        pButtonLink : "tel:+19014418411",
        pButtonCaption : "Stay up to date with updates, events, and benefits!!",
        pDetails : [
            {
                dIndex: "acumenTraining",
                detailHeading : "Business Acumen Training",
                detailParagraph : `<p>At the Black Chamber of Memphis (BCOM), we are dedicated to empowering our members with cutting-edge knowledge and tools that foster sustainable business growth. Our workshops and seminars are not just about learning the basics; they are immersive experiences that delve deep into the essential business skills every entrepreneur needs—financial management, strategic marketing, and operational efficiency. By participating in these high-impact sessions, members gain actionable insights and the confidence to make decisions that drive their businesses forward.</p>`,
            },{
                dIndex: "busBooster",
                detailHeading : "Business Booster Grants",
                detailParagraph : `<p>The Black Chamber of Memphis (BCOM) is dedicated to empowering our community by offering high-value programs that are more than just financial support—they’re a lifeline for growth, innovation, and resilience. We recognize the unique challenges our members face, especially in these turbulent times, and that’s why BCOM goes beyond merely connecting businesses with grants. We ensure that these resources are not just a temporary fix but a solid foundation upon which entrepreneurs can build sustainable, thriving businesses.</p><p>At BCOM, we are committed to creating a supportive ecosystem where every member has access to the tools, knowledge, and financial assistance they need to overcome obstacles and seize new opportunities. Our programs are designed to not only address immediate needs but also to equip our members with the resilience and innovation necessary for long-term success. By investing in our members’ futures, we’re investing in the future of our entire community.</p>`
            },{
                dIndex: "mentorship",
                detailHeading : "Mentorship",
                detailParagraph : `<p>At the Black Chamber of Memphis (BCOM), our mentorship program is more than just a guiding hand—it’s a beacon of empowerment. Our mentors are seasoned industry experts, handpicked not just for their extensive experience, but for their deep commitment to the success of our members. They provide invaluable insights that go beyond the surface, offering tailored advice, strategic connections, and the kind of insider knowledge that can only be gained through years of navigating the entrepreneurial landscape. Whether you’re seeking to overcome challenges, explore new opportunities, or simply need a trusted advisor, our mentors are here to elevate your business journey.</p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfaYM8MFbnGPn886Q7QxU5kfwiJG1E8C-PF0aD-iZ4F6NUJiw/viewform">Apply Now</a>`
            },{
                dIndex: "restaurantCouncil",
                detailHeading : "Black Restaurant Council",
                detailParagraph : `<p>The Black Chamber of Memphis (BCOM) is deeply committed to driving the growth and success of Black-owned restaurants through high-impact programs designed to empower and elevate our culinary community. We are more than a network; we are a movement dedicated to fostering economic development, innovation, and collective prosperity within Memphis’s vibrant food scene. Through strategic advocacy, cutting-edge educational initiatives, and powerful collaborative efforts, BCOM ensures that Black-owned restaurants not only thrive but become celebrated pillars of our community. Our mission transcends the dining table—we are creating an equitable environment where creativity flourishes and businesses prosper.</p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdAKsOX6Lf2RQuFW7UfInfPXyvYpLnza6z25dZkND3nywaVwQ/viewform">Register Today</a>`
            }
        ]
    }
]

export default function Programs(){
    const [ detailBlock, setDetailBlock ] = useState<string | null>(null)
    return(
        <main>
            <PageTitleSection
                pageTitle='Programs'
            />

            {programsList.map(({id, pImage, pImageHeight, pImageWidth, gText, pHeading, pText, direction, pButtonText, pButtonCaption, pButtonLink, pDetails})=> (
                <div
                    key={id}
                    className={clsx(style.programRow, direction === "row-reverse" && style.reverse)}
                >
                    <div
                        className={style.programWordBlock}
                    >
                        <p
                            className={style.programGoldText}
                        >
                            {gText}
                        </p>
                        <h2
                            className={style.programHeading}
                        >
                            {pHeading}
                        </h2>

                        <div
                            dangerouslySetInnerHTML={{__html: pText}}
                            className={style.programText}
                        />

                        {pDetails.map(({dIndex, detailHeading, detailParagraph}, x) => (
                            <div
                                key={x}
                                className={style.detailRow}
                            >
                                <h3
                                    className={clsx(style.detailHeading, detailBlock === dIndex && style.active)}
                                    onClick={() => setDetailBlock(detailBlock === dIndex ? null : dIndex)}
                                >
                                    {detailHeading}
                                    <div
                                        className={style.chevBlock}
                                    >
                                        <ChevronDown
                                            className={clsx(style.chev, detailBlock === dIndex && style.close)}
                                        />

                                        <ChevronUp12
                                            className={clsx(style.chev, detailBlock !== dIndex && style.close)}
                                        />
                                    </div>
                                </h3>

                                <div
                                    dangerouslySetInnerHTML={{__html: detailParagraph}}
                                    className={clsx(style.detailParagraph, detailBlock !== dIndex && style.close)}
                                />
                            </div>
                        ))}
                    </div>

                    <div
                        className={style.programImageBlock}
                    >
                        <Image
                            src={pImage}
                            alt={'Black Chamber of Memphis' + pHeading}
                            width={pImageWidth}
                            height={pImageHeight}
                            className={style.programImage}
                        />

                        <a
                            href={pButtonLink}
                            className={style.programCTA}
                        >
                            {pButtonText}
                        </a>

                        {pButtonCaption? 
                            <p
                                className={style.programButtonCaption}
                            >
                                {pButtonCaption}
                            </p> : null}
                    </div>
                </div>
            ))}

            <StayInformedSection/>
        </main>
    )
}

// {
    //     id : "restart-initiative",
    //     pImage: "/assets/ReStart-Initiative.webp",
    //     pImageWidth: 900,
    //     pImageHeight: 600,
    //     gText : "Helping Black Entrepreneurs Launch, Grow and Manage Their Businesses",
    //     pHeading : "ReStart Initiative",
    //     pText : `<p>Our programs are designed with your success in mind, emphasizing actionable insights and tailored support that reflects the unique challenges and opportunities you face. With BCOM, you’re not just gaining skills—you’re joining a community that champions your growth and believes in the transformative power of Black excellence in business. Together, we’re building a future where your business doesn’t just compete, but leads the way.<p>`,
    //     direction: "row",
    //     pButtonText : "Learn More",
    //     pButtonLink : "/contact-us",
    //     pButtonCaption : "",
    //     pDetails : [
    //         {
    //             dIndex: "leadership",
    //             detailHeading : "Next Level Leadership",
    //             detailParagraph : `<p>At the Black Chamber of Memphis (BCOM), we are dedicated to empowering Black entrepreneurs, managers, and small business owners through our Next Level Leadership pillar. Our commitment goes beyond just providing tools and resources—we’re passionate about cultivating an environment where your business can truly flourish. By connecting you with a diverse team of industry experts, we offer personalized mentorship that dives deep into business strategy, ensuring you have access to the knowledge and capital needed to elevate your enterprise to new heights.</p>`,
    //         },{
    //             dIndex: "successSolution",
    //             detailHeading : "Succession Solutions",
    //             detailParagraph : `<p>The Black Chamber of Memphis (BCOM) is dedicated to empowering its members with robust succession planning services designed to secure the future of their businesses. We don’t just prepare for tomorrow; we build the foundation for generational success today. Our Succession Solutions program offers cutting-edge insights into best practices, helping business owners navigate growth, transition, and legacy planning. Whether you’re a seasoned entrepreneur looking to pass the torch or a new business preparing for long-term stability, BCOM is here to ensure that your hard-earned success is not just maintained, but thrives under new leadership.</p>`
    //         },{
    //             dIndex: "talentConnect",
    //             detailHeading : "BCOM Talent Connect",
    //             detailParagraph : `<p>The Black Chamber of Memphis (BCOM) is dedicated to empowering Black professionals by offering premium, high-impact programs that forge lasting connections between top-tier talent and leading employers in the Memphis area. Through our Talent Connection program, we don’t just match résumés with job descriptions; we strategically align skilled professionals with opportunities that elevate both their careers and the businesses they join. Whether it’s filling executive roles or entry-level positions, BCOM leverages an extensive network of contacts and resources to ensure that every placement is a step toward building a stronger, more diverse Memphis workforce.</p>`
    //         }
    //     ]
    // },
    // {
    //     id : "build-to-scale",
    //     pImage: "/assets/BuildToScalewebp.webp",
    //     pImageWidth: 2560,
    //     pImageHeight: 1707,
    //     gText : "Empower Tech Growth in Memphis With the Black Chamber of Memphis",
    //     pHeading : "BUILD TO SCALE",
    //     pText : `<p>At BCOM, we are deeply committed to delivering high-value programs that offer tangible benefits to our members. Build to Scale is not just a program—it's a movement to reinvigorate the IT sector in Memphis by creating a robust ecosystem where small businesses can flourish. By focusing on active participation, resource allocation, and creating a nurturing environment, BCOM is paving the way for a brighter, more prosperous future for our members and the broader Memphis community.<p>`,
    //     direction: "row-reverse",
    //     pButtonText : "Text “BUILDTECH” to (901) 441-8411",
    //     pButtonLink : "tel:+19014418411",
    //     pButtonCaption : "Stay up to date with IT growth in the Memphis market!",
    //     pDetails : [
    //         {
    //             dIndex: "transformWithBuildToScale",
    //             detailHeading : "Transforming the IT Sector With Build to Scale",
    //             detailParagraph : `<p>The Black Chamber of Memphis (BCOM) is spearheading a transformative initiative in the IT sector with its Build to Scale program. This groundbreaking, grant-funded initiative is designed to revolutionize the IT landscape in Memphis by providing microbusinesses with the resources and support they need to thrive and evolve into successful small businesses. Through strategic collaborations with the <a href="https://www.memphis.edu/">University of Memphis</a> and <a href="https://www.communitylift.org/">Community LIFT</a>, BCOM is committed to empowering entrepreneurs in the technology, IT, and engineering sectors, fostering innovation, and driving sustainable growth within the community.</p>`,
    //         },{
    //             dIndex: "localSupport",
    //             detailHeading : "Leveraging Expertise and Local Support",
    //             detailParagraph : `<p>The Black Chamber of Memphis (BCOM) is dedicated to empowering our community by harnessing the expertise of local institutions and leveraging strong partnerships. In collaboration with the University of Memphis, Community LIFT, and our extensive network, BCOM is committed to delivering high-impact programs that drive meaningful change. As a Community Development Financial Institution (CDFI), Community LIFT takes the lead in raising capital, while BCOM channels its business acumen and deep connections to amplify these efforts. The University of Memphis ensures the initiative’s success by coordinating efforts and providing comprehensive reporting, ensuring transparency and accountability every step of the way.</p>`
    //         },{
    //             dIndex: "buildToScale",
    //             detailHeading : "Build to Scale and BCOM",
    //             detailParagraph : `<p>As a engine for economic growth in Memphis, the Black Chamber of Memphis (BCOM) is passionately committed to advancing the prosperity of our community by empowering successful entrepreneurs and Minority and Women-Owned Business Enterprises (MWBEs). Through strategic partnerships with the University of Memphis and Community LIFT, our Build to Scale program is designed to deliver high-impact education, relentless advocacy, and robust business development resources. These initiatives are tailored specifically to elevate local Black-owned businesses, driving growth and fostering a thriving entrepreneurial ecosystem that stands as a beacon of innovation and resilience.</p>`
    //         }
    //     ]
    // },