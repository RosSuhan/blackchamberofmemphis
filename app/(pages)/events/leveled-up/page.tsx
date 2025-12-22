// 'use client'
import type { Metadata } from "next";
import style from './leveledUp.module.css'
import Link from "next/link";
import Image from "next/image";
import { BaselineCalendarMonth } from "@/components/icons/Calendar";
import { Clock } from "@/components/icons/Clock";
import LeveledUpBioPage from "./BioPage";
import { Tax } from "@/components/icons/tax";
import FAQpage from "./FAQpage";



export const metadata: Metadata = {
    title: 'LeveledUp Money Workshop Series | Black Chamber of Memphis',
    description:
        'A four-part financial and business readiness workshop series designed for solopreneurs and microbusiness owners in Memphis. Learn tax essentials, bookkeeping, compliance, and prepare your business for a successful 2026.',
    keywords: [
        'Memphis business workshop',
        'solopreneur financial training',
        'tax workshop Memphis',
        'small business finance',
        'Black Chamber of Memphis events',
        'bookkeeping training Memphis',
        'entrepreneur tax readiness',
        'business compliance workshop',
        '2026 business planning Memphis',
        'LeveledUp Money workshop series'
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/events/leveled-up' },
    openGraph: {
        title: 'LeveledUp Money Workshop Series | Black Chamber of Memphis',
        description:
            'A powerful, culturally resonant four-part workshop series helping Memphis solopreneurs master taxes, compliance, bookkeeping, and financial planning for 2026.',
        url: 'https://blackchamberofmemphis.org/events/leveled-up',
        images: [{ url: '/images/og-events.jpg', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LeveledUp Money Workshop Series | Black Chamber of Memphis',
        description:
            'Empowering Memphis solopreneurs with the financial clarity, tax readiness, and business structure needed for long-term success.',
        images: ['/images/og-events.jpg'],
    },
};



export default function Events(){

    return(
        <main
            className={style.eventsPage}
        >
            <section
                className={style.heroSection}
            >
                <h1
                    className={style.programMainHeading}
                >
                    LeveledUp Money - Building Wealth, One Level at a Time
                </h1>

                <span
                    className={style.programTagline}
                >
                    A powerful four-part workshop series for Memphis solopreneurs & microbusiness owners
                </span>

                <span
                    className={style.programTagline}
                >
                    January – March 2026 • Hosted by the Black Chamber of Memphis
                </span>

                <div
                    className={style.ctaButtonRow}
                >
                    <Link
                        href={"/events/leveled-up/registration"}
                        className={style.ctaButton}
                    >
                        Register Now
                    </Link>
                </div>
            </section>

            <section
                className={style.programOverviewSection}
            >
                <div
                    className={style.programOverviewArticle}
                >
                    <h2
                        className={style.programOverviewArticleHeading}
                    >
                        Financial Clarity. Tax Readiness. Business Confidence.
                    </h2>
                    <p
                        className={style.programOverviewArticleText}
                    >
                        Running a small business shouldn’t feel overwhelming — especially when it comes to money, taxes, and compliance.
                    </p>
                    <p
                        className={style.programOverviewArticleText}
                    >
                        The LeveledUp Money Workshop Series gives Memphis entrepreneurs the tools, systems, and confidence needed to build a profitable, compliant, and sustainable business.
                    </p>
                    <p
                        className={style.programOverviewArticleText}
                    >
                        Designed specifically for solopreneurs and business owners with 1–5 employees, this four-part series blends:
                    </p>
                    <ul
                        className={style.programOverviewArticleText}
                    >
                        <li>
                            Financial wellness
                        </li>
                        <li>
                            Bookkeeping basics
                        </li>
                        <li>
                            Tax readiness
                        </li>
                        <li>
                            Business compliance
                        </li>
                        <li>
                            A “friendly audit” to prepare for 2026
                        </li>
                    </ul>
                    <p
                        className={style.programOverviewArticleText}
                    >
                        Each workshop is hands-on, practical, and culturally relevant to the needs of the Memphis Black business community.
                    </p>
                </div>
                <Image
                    src={"/events/leveledUp/leveledup-tax-compliance.webp"}
                    alt=""
                    width={2400}
                    height={1600}
                    className={style.programOverviewImage}
                />
            </section>

            <section
                className={style.presenterSection}
            >
                <span
                    className={style.presenterSectionIntro}
                >
                    Meet the Presenter:
                </span>
                <h2
                    className={style.presenterSectionHeading}
                >
                    Brooke Benjamin Kelley, Esq., LL.M.
                </h2>
                <span
                    className={style.presenterSectionTitle}
                >
                    Founder, The Benjamin Law Firm & Leveled Up Money
                </span>
                <article
                    className={style.presenterSectionText}
                >
                    <LeveledUpBioPage/>
                </article>
                
            </section>

            <section
                className={style.workshopTimeSection}
            >
                <h2
                    className={style.worshopTimeHeading}
                >
                    Four Workshops • Two Time Slots Per Day
                </h2>
                <p
                    className={style.worshopTimeText}
                >
                    Each session includes live instruction, guided worksheets, toolkits, and implementation exercises.
                </p>

                <div
                    className={style.workshopTimeBlock}
                >
                    <h3
                        className={style.workshopTimeTitle}
                    >
                        Workshop 1: Solopreneur Financial Survival + Year-End Readiness
                    </h3>
                    <span
                        className={style.workshopTimeDate}
                    >
                        <BaselineCalendarMonth/>
                        January 21, 2026
                    </span>
                    <span
                        className={style.workshopTimeSlot1}
                    >
                        <Clock/>
                        10am - 12pm
                    </span>
                    <span
                        className={style.workshopTimeSlot2}
                    >
                        or
                    </span>
                    <span
                        className={style.workshopTimeSlot3}
                    >
                        2pm - 4pm
                    </span>
                    <p
                        className={style.worshopTimeText}
                    >
                        A foundational session that helps business owners close out the year correctly and confidently.
                    </p>
                </div>

                <div
                    className={style.workshopTimeBlock}
                >
                    <h3
                        className={style.workshopTimeTitle}
                    >
                        Workshop 2: Tax Essentials for Solopreneurs
                    </h3>
                    <span
                        className={style.workshopTimeDate}
                    >
                        <BaselineCalendarMonth/>
                        February 14, 2026
                    </span>
                    <span
                        className={style.workshopTimeSlot1}
                    >
                        <Clock/>
                        10am - 12pm
                    </span>
                    <span
                        className={style.workshopTimeSlot2}
                    >
                        or
                    </span>
                    <span
                        className={style.workshopTimeSlot3}
                    >
                        2pm - 4pm
                    </span>
                    <p
                        className={style.worshopTimeText}
                    >
                        Everything you need to prepare for tax season with clarity and confidence.
                    </p>
                </div>

                <div
                    className={style.workshopTimeBlock}
                >
                    <h3
                        className={style.workshopTimeTitle}
                    >
                        Workshop 3: Entity Structure, Compliance & Bookkeeping Mastery
                    </h3>
                    <span
                        className={style.workshopTimeDate}
                    >
                        <BaselineCalendarMonth/>
                        February 18, 2026
                    </span>
                    <span
                        className={style.workshopTimeSlot1}
                    >
                        <Clock/>
                        10am - 12pm
                    </span>
                    <span
                        className={style.workshopTimeSlot2}
                    >
                        or
                    </span>
                    <span
                        className={style.workshopTimeSlot3}
                    >
                        2pm - 4pm
                    </span>
                    <p
                        className={style.worshopTimeText}
                    >
                    Learn how to protect your business, stay compliant, and manage your finances like a pro.
                    </p>
                </div>

                <div
                    className={style.workshopTimeBlock}
                >
                    <h3
                        className={style.workshopTimeTitle}
                    >
                        Workshop 4: Friendly Business Audit + 2026 Success Plan
                    </h3>
                    <span
                        className={style.workshopTimeDate}
                    >
                        <BaselineCalendarMonth/>
                        March 4, 2026
                    </span>
                    <span
                        className={style.workshopTimeSlot1}
                    >
                        <Clock/>
                        10am - 12pm
                    </span>
                    <span
                        className={style.workshopTimeSlot2}
                    >
                        or
                    </span>
                    <span
                        className={style.workshopTimeSlot3}
                    >
                        2pm - 4pm
                    </span>
                    <p
                        className={style.worshopTimeText}
                    >
                        An interactive audit that helps you identify weaknesses, organize your systems, and build a simple 12-month growth plan.
                    </p>
                </div>
            </section>

            <section
                className={style.projectScopeSection}
            >
                <h2
                    className={style.projectScopeHeading}
                >
                    What You Will Learn
                </h2>
                <p
                    className={style.projectScopeText}
                >
                    Across the Four-Part Series, You’ll Gain Clarity On:
                </p>
                <ul
                    className={style.projectScopeList}
                >
                    <li
                        className={style.projectScopeItem}
                    >
                        <Tax
                            className={style.projectScopeIcon}
                        />
                        Year-end business tasks & financial cleanup
                    </li>
                    <li
                        className={style.projectScopeItem}
                    >
                        <Tax
                            className={style.projectScopeIcon}
                        />
                        Estimated taxes & avoiding penalties
                    </li>
                    <li
                        className={style.projectScopeItem}
                    >
                        <Tax
                            className={style.projectScopeIcon}
                        />
                        Deduction rules & audit triggers
                    </li>
                    <li
                        className={style.projectScopeItem}
                    >
                        <Tax
                            className={style.projectScopeIcon}
                        />
                        Entity types: LLC, Schedule C, S-Corp — and what’s right for you
                    </li>
                    <li
                        className={style.projectScopeItem}
                    >
                        <Tax
                            className={style.projectScopeIcon}
                        />
                        TN Business Tax, Franchise & Excise Tax
                    </li>
                    <li
                        className={style.projectScopeItem}
                    >
                        <Tax
                            className={style.projectScopeIcon}
                        />
                        Bookkeeping systems & financial statements
                    </li>
                    <li
                        className={style.projectScopeItem}
                    >
                        <Tax
                            className={style.projectScopeIcon}
                        />
                        Cash flow discipline and setting up proper business accounts
                    </li>
                    <li
                        className={style.projectScopeItem}
                    >
                        <Tax
                            className={style.projectScopeIcon}
                        />
                        Pricing, margins, and understanding your numbers
                    </li>
                    <li
                        className={style.projectScopeItem}
                    >
                        <Tax
                            className={style.projectScopeIcon}
                        />
                        Business compliance and administrative requirements
                    </li>
                    <li
                        className={style.projectScopeItem}
                    >
                        <Tax
                            className={style.projectScopeIcon}
                        />
                        Building a 2026 financial success plan
                    </li>
                </ul>
            </section>

            <section
                className={style.nextStepSection}
            >
                <Image
                    src={"/events/leveledUp/consultingImage.webp"}
                    alt=""
                    width={2400}
                    height={1600}
                    className={style.nextStepImage}
                />

                <div
                    className={style.nextStepTextBlock}
                >
                    <h2
                        className={style.nextStepHeading}
                    >
                        Take Your Learning Even Further
                    </h2>
                    <p
                        className={style.nextStepText}
                    >
                        Participants may add individualized coaching sessions to get tailored support on:
                    </p>

                    <ul
                        className={style.nextStepListText}
                    >
                        <li>
                            Tax planning for solopreneurs
                        </li>
                        <li>
                            Quarterly estimated taxes
                        </li>
                        <li>
                            S-Corp readiness review
                        </li>
                        <li>
                            Bookkeeping cleanup
                        </li>
                        <li>
                            Deduction optimization
                        </li>
                        <li>
                            Tennessee tax compliance
                        </li>
                        <li>
                            Profit strategy & owner compensation planning
                        </li>
                        <li>
                            A full “friendly audit” customized to your business
                        </li>
                    </ul>
                    <p
                        className={style.nextStepText}
                    >
                        These can be delivered onsite or virtually, with flexible scheduling and post-workshop availability.
                    </p>
                </div>
                <div>
                    <h3
                        // className={style.nextStepHeading}
                    >
                        Disclaimer
                    </h3>
                    <ul
                        className={style.nextStepListText}
                    >
                        <li>Participation does not create an attorney-client, accountant-client, or financial advisory relationship</li>
                        <li>No individualized legal, tax, or financial advice is provided</li>
                        <li>Participants seeking personalized advice should engage a licensed professional separately</li>
                    </ul>
                </div>
            </section>

            <section
                className={style.ctaBig}
            >
                <div
                    className={style.ctaTextBlock}
                >
                    <h2
                        className={style.ctaHeading}
                    >
                        Ready to Level Up Your Business?
                    </h2>

                    <p
                        className={style.ctaText}
                    >
                        Seats are limited due to small group learning and time-block capacity.
                    </p>
                </div>

                <Link
                    href={"/events/leveled-up/registration"}
                    className={style.ctaRowButton}
                >
                    Register Now
                </Link>
            </section>

            <section
                className={style.FAQsection}
            >
                <FAQpage/>
            </section>

            <section
                className={style.ctaBig}
            >
                <div
                    className={style.ctaTextBlockTwo}
                >
                    <p
                        className={style.ctaText}
                    >
                        The LeveledUp Money Workshop Series is more than a training — it&apos;s an investment in stronger, profitable, tax-ready Black businesses in Memphis.
                    </p>
                    <p
                        className={style.ctaText}
                    >
                        Join us as we build smarter systems, stronger foundations, and long-term financial success, one level at a time.
                    </p>
                </div>
            </section>
        </main>
    )
}