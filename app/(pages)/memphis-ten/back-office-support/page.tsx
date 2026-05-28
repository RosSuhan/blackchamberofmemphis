import style from '@/styles/bossPage.module.css'
import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Back Office Support Services (BOSS) | MemphisTen | Black Chamber of Memphis',
    description:
        'BOSS connects Memphis small businesses with vetted, full-time or fractional back-office professionals from $6/hr — powered by remoting.work. Admin, marketing, operations, and more. Payroll and compliance handled for you.',
    keywords: [
        'back office support Memphis',
        'BOSS MemphisTen',
        'remote back office staff Memphis',
        'affordable business support Memphis',
        'remoting.work Memphis',
        'virtual assistant Memphis business',
        'fractional back office professionals',
        'Memphis small business operations support',
        'Black Chamber of Memphis BOSS programme',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/memphis-ten/back-office-support' },
    openGraph: {
        title: 'Back Office Support Services (BOSS) | MemphisTen | Black Chamber of Memphis',
        description:
        'Scale your Memphis business without doing everything yourself. BOSS powered by remoting.work gives you vetted back-office professionals from $6/hr — with payroll, compliance, and management handled for you.',
        url: 'https://blackchamberofmemphis.org/memphis-ten/back-office-support',
        siteName: 'Black Chamber of Memphis',
        images: [
        {
            url: '/assets/back-office-support.webp',
            width: 1200,
            height: 630,
            alt: 'Back Office Support Services powered by remoting.work and Black Chamber of Memphis',
        },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Back Office Support Services (BOSS) | MemphisTen | Black Chamber of Memphis',
        description:
        'Stop doing everything yourself. BOSS connects Memphis businesses with vetted back-office professionals from $6/hr — admin, marketing, ops, and more. Powered by remoting.work.',
        images: ['/assets/back-office-support.webp'],
    },
};

export default function BOSS(){
    return (
        <main
            className={style.mtenSubPageMain}
        >
            <section
                className={style.mtenSubPageHeroSection}
            >
                <div
                    className={style.mtenSubPageHeadingBlock}
                >
                    <h1
                        className={style.mtenSubPageMainHeading}
                    >
                        Back Office Support Services (BOSS)
                    </h1>
                    <h2
                        className={style.mtenSubPageCaptionHeading}
                    >
                        Back-Office & Operational Support powered by remoting.work - your Workforce-as-a-Service partner. 
                    </h2>
                </div>
                <Image
                    src={'/assets/back-office-support.webp'}
                    alt={'Back Office Support Services from Remoting.work'}
                    width={400}
                    height={500}
                    className={style.subPageHeroBackImage}
                />
            </section>

            <section
                className={style.mtenProgramVideoSection}
            >
                <p
                    className={style.mtenProgramTextBlock}
                >
                    The Black Chamber of Memphis has partnered with remoting.work to drive the Memphis TEN Initiative and deliver on BOSS. Through this partnership, our members can gain access to full-time and fractional back-office professionals who are fully managed and work from secure worksites to help them scale faster, operate leaner, and focus on growth. 
                </p>

                <a 
                    href="https://go.remoting.work/BCoM"
                    className={style.mtenSubPageHeroCTA}
                >
                    Get Started
                </a>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/ksAFPj8OKfw?si=mxX4R8TXVlu6kk-q" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className={style.mtenVideo}
                ></iframe>
            </section>

            <section
                className={style.mtenProgramSection}
            >
                <h2
                    className={style.mtenProgramHeading}
                >
                    Growing a business shouldn’t mean doing everything yourself 
                </h2>
                <div
                    className={style.mtenProgramTextBlock}
                >
                    <p>
                        Most founders hit the same wall: 
                    </p>
                    <ul>
                        <li>
                            Admin work piles up 
                        </li>
                        <li>
                            Customers don’t get responses on time 
                        </li>
                        <li>
                            Marketing happens when you’re free 
                        </li>
                        <li>
                            Hiring feels expensive 
                        </li>
                        <li>
                            Operations become overwhelming 
                        </li>
                    </ul>
                    <p>
                        And when your time is stuck in the back office, growth stalls.
                        BOSS was created to change that.
                    </p>
                </div>
            </section>

            <section
                className={style.mtenProgramSection}
            >
                <h2
                    className={style.mtenProgramHeading}
                >
                    How BOSS Delivers Real Operational Support 
                </h2>
                <div
                    className={style.mtenProgramTextBlock}
                >
                    <p>
                        With remoting.work, businesses can get access to hands-on back-office and operational support for roles in marketing, tech, operations, admin, and customer support.
                    </p>
                    <p>
                        Memphis businesses can now enjoy seamless connection with vetted, full-time or fractional global professionals for as low as $6 an hour, all while payroll, compliance, security, and management are handled for you. 
                    </p>
                    <p>
                        That means you get the team you need to make growth possible and create more job opportunities in the local business climate. 
                    </p>
                </div>
            </section>

            <section
                className={style.mtenProgramSection}
            >
                <h2
                    className={style.mtenProgramHeading}
                >
                    What You Get Through remoting.work  
                </h2>
                <h3>
                    Dedicated support built for Memphis businesses.
                </h3>
                <div
                    className={style.mtenProgramTextBlock}
                >
                    <p>Businesses can access:</p>
                    <ul
                        className={style.businessAccessList}
                    >
                        <li>✔ Administrative & virtual assistants</li>
                        <li>✔ Customer service & support teams</li>
                        <li>✔ Marketing & lead generation specialists</li>
                        <li>✔ Operations & project coordinators</li>
                        <li>✔ Bookkeeping & back-office staff</li>
                        <li>✔ Specialized roles based on your needs</li>
                        <p>Plus:</p>
                        <li>✔ Pre-vetted professionals only</li>
                        <li>✔ Full-time or fractional, dedicated team members</li>
                        <li>✔ Up to 50–65% lower labor costs</li>
                        <li>✔ Payroll & compliance handled</li>
                        <li>✔ Secure infrastructure & data protection</li>
                        <li>✔ Ongoing support from an Employer Concierge</li>
                    </ul>
                </div>
            </section>

            <section
                className={style.bossStepsSection}
            >
                <h2
                    className={style.mtenProgramHeading}
                >
                    How It Works  
                </h2>
                
                <div
                    className={style.mtenProgramStepsBlock}
                >
                    <div
                        className={style.stepBlock}
                    >
                        <span
                            className={style.stepHeading}
                        >
                            Step 1 - Match 
                        </span>
                        <span
                            className={style.stepText}
                        >
                            We learn about your business and identify the roles you need.
                        </span> 
                    </div>
                    
                    <div
                        className={style.stepBlock}
                    >
                        <span
                            className={style.stepHeading}
                        >
                            Step 2 – Hire 
                        </span>
                        <span
                            className={style.stepText}
                        >
                            Interview pre-vetted candidates and select your dedicated team members.
                        </span>
                        
                    </div>

                    <div
                        className={style.stepBlock}
                    >
                        <span
                            className={style.stepHeading}
                        >
                            Step 3 – Grow 
                        </span>
                        <span
                            className={style.stepText}
                        >
                            remoting.work handles compliance, payroll, and security so you can focus on scaling.
                        </span>
                        
                    </div>
                </div>
            </section>

            <section
                className={style.mtenProgramVideoSection}
            >
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/QejJSMfq6jg?si=H4tknON3I4UPn4ZJ" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className={style.mtenVideo}
                >
                </iframe>

                <a 
                    href="https://go.remoting.work/BCoM"
                    className={style.mtenSubPageHeroCTA}
                >
                    Get Started
                </a>
            </section>
            
            <section
                className={style.mtenProgramSection}
            >
                <h2
                    className={style.mtenProgramHeading}
                >
                    Why This Matters for Memphis Businesses
                </h2>
                <div
                    className={style.mtenProgramTextBlock}
                >
                    <p>
                        With the right operational support, you can:
                    </p>
                    <ul>
                        <li>
                            Serve more customers
                        </li>
                        <li>
                            Reduce overhead costs
                        </li>
                        <li>
                            Stop burnout
                        </li>
                        <li>
                            Deliver faster
                        </li>
                        <li>
                            Take on bigger opportunities
                        </li>
                        <li>
                            Create jobs and grow sustainably
                        </li>
                    </ul>
                    <p>
                        This is how Memphis businesses move from survival to scale.
                    </p>
                </div>
            </section>

            <section
                className={style.mtenProgramSection}
            >
                <h2
                    className={style.mtenProgramHeading}
                >
                    Ready to build your support team?
                </h2>
                <div
                    className={style.mtenProgramTextBlock}
                >
                    <p>
                        Get matched with vetted back-office professionals through our Memphis TEN partner, remoting.work.
                    </p>
                </div>
            </section>
            <div
                className={style.bossButtonRow}
            >
                <a 
                    href="https://go.remoting.work/BCoM"
                    className={style.bossCtaButtons}
                >
                    Get Started Now
                </a>

                <a 
                    href="https://hello.remoting.work/widget/bookings/employer/discovery_call?referrer_name=Black+Chamber+of+Memphis&referrer_email=ernest@bbamemphis.com"
                    className={style.bossCtaButtons}
                >
                    Talk to an Advisor
                </a> 
            </div>
        </main>
    )
}