import style from '@/styles/mortar.module.css'
import Image from 'next/image'


export default function Mortar(){
    return (
        <main>
            <section
                className={style.mortarHero}
            >
                <div
                    className={style.mortarHeroLogoBlock}
                >
                    <Image
                        src={'/programs/mortar/mortar-logo.webp'}
                        alt=''
                        width={1095}
                        height={675}
                        className={style.mortarHeroLogo}
                    />

                    <h1
                        className={style.mortarHeroHeading}
                    >
                        Inaugural Sponsorship & Engagement
                    </h1>
                </div>

                <span
                    className={style.mortarHeroItalicSpan}
                >
                    Partnering for Impact, Growth, and Visibility
                </span>
            </section>

            <section
                className={style.mortarAboutSection}
            >
                <h2
                    className={style.mortarAboutHeading}
                >
                    Partnering for Impact, Growth, and Visibility
                </h2>

                <p
                    className={style.mortarAboutText}
                >
                    MORTAR is a nationally recognized entrepreneurship organization founded in Cincinnati with a mission to build inclusive pathways to business ownership. MORTAR specializes in delivering structured, cohort-based entrepreneurship training designed for founders who are often overlooked by traditional business support systems.
                </p>
                <p
                    className={style.mortarAboutText}
                >
                    Through its signature entrepreneurship academies, MORTAR provides founders with practical business education, accountability, and access to capital readiness tools—helping entrepreneurs clarify their ideas, strengthen their business models, and prepare for sustainable growth.
                </p>
            </section>

            <section>
                
            </section>

            {/* 
                Block style - text left image right
                paragraph: 
                To date, MORTAR has supported hundreds of entrepreneurs through its training programs, helping founders launch, stabilize, and grow businesses across a range of industries. Its model is widely recognized for combining rigor, cultural relevance, and measurable outcomes, making it a trusted partner for cities, corporations, and philanthropic institutions seeking to expand equitable access to entrepreneurship.

                subheading: MORTAR’s curriculum emphasizes:

                gold buttons white text:
                Customer discovery and validation
                Financial fundamentals and cash-flow management
                Strategic planning and execution
                Pitch preparation and capital readiness
                Peer learning and ecosystem connection
            */}

            {/* 
                block style: 
                Text and image
                Heading: MORTAR Memphis
                paragraph: 
                Through its expansion into Memphis, MORTAR brings a proven national framework, aligned with BCoM’s MemphisTen initiative to help businesses scale and hire employees,  while working in close partnership with local ecosystem leaders to ensure programming is place-based, culturally grounded, and responsive to Memphis’ unique entrepreneurial landscape.
                Inspired by a hip-hop framework for entrepreneurship, the academy reflects the same principles that have shaped generations of artists into moguls: vision, grind, storytelling, discipline, collaboration, and investment.
                Just as hip-hop has evolved across decades—innovating, adapting, and reinvesting into new voices—MORTAR Memphis is designed to cultivate the next generation of the city’s entrepreneurs by training founders, aligning ecosystem partners, and scaling impact together.
            */}

            {/* 
                This should be table or div rows: bold bullet point left - description right

                -  Equip early-stage entrepreneurs 
                with the mindset, tools, and practical training needed to move from ideation to execution and sustainability.

                - Increase business readiness
                through structured curriculum focused on strategy, financial fundamentals, customer discovery, and operational discipline.

                - Expand access to culturally responsive entrepreneurship education
                that reflects the lived experiences, creativity, and innovation of Memphis founders. 

                -Strengthen Memphis’ small-business ecosystem 
                by connecting founders to trusted capital providers, technical assistance partners, and subject-matter experts.

                - Support long-term economic impact
                by helping entrepreneurs build businesses grounded in ownership, reinvestment, and community stability.
            */}

            {/* 
                heading: Become an Inaugural Sponsor Today
                paragraph: 
                Inaugural sponsors play a critical role in launching MORTAR Memphis. Your support helps provide early access to capital-readiness education, trusted mentorship, and practical business infrastructure—removing common barriers that prevent promising ideas from becoming viable businesses.
                By investing at the ground level, you help strengthen Memphis’s business ecosystem, expand pathways to ownership, and contribute to long-term economic vitality across the city. Inaugural sponsors are not only supporting individual entrepreneurs—they are helping to shape the foundation of a program designed to deliver lasting community impact.

                CTA:
                For more information on sponsorship opportunities and benefits, click here.
            */}

            {/* 
                Contact block:

                phone: 901 800 8041
                @bomemphis
                jasmine@bbamemphis.com
                website
            */}
        </main>
    )
}