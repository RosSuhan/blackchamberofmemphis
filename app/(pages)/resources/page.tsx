'use client'
import PageTitleSection from "@/components/pageTitleSection/page";
import { resources } from "@/lib/resources"
import Link from "next/link";
import style from '@/styles/resourcesMain.module.css'
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "@/components/icons/ChevronDown";
import { ChevronUp12 } from "@/components/icons/ChevronUp";
import { clsx } from "clsx";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: 'Business Resources | Support for Black Entrepreneurs in Memphis',
//     description:
//         'Access tools, funding opportunities, and expert guidance for Black entrepreneurs. The Black Chamber of Memphis connects members to business resources that drive sustainable growth.',
//     keywords: [
//         'Memphis business resources',
//         'Black business funding',
//         'entrepreneur support Memphis',
//         'small business help Memphis',
//     ],
//     alternates: { canonical: 'https://blackchamberofmemphis.org/resources' },
//     openGraph: {
//         title: 'Resources for Black Entrepreneurs | Black Chamber of Memphis',
//         description:
//             'Your go-to hub for tools, funding, and guidance to help your business thrive in Memphis.',
//         url: '/assets/bcom-building-black-business-in-memphis-since-1970.png',
//         images: [{ url: '/images/og-resources.jpg', width: 1200, height: 630 }],
//     },
//     twitter: {
//         card: 'summary_large_image',
//         title: 'Business Resources | Black Chamber of Memphis',
//         description:
//         'Access funding, tools, and expert resources to grow your business in Memphis.',
//         images: ['/assets/bcom-building-black-business-in-memphis-since-1970.png'],
//     },
// };


const details = [
    {
        tab: "Small Business Administration",
        content: `<p>The SBA helps entrepreneurs and existing owners to start, build, or grow their businesses. For details on all SBA programs and services, which include information on financing, loan applications, government regulations and licensing, please visit the website at <a href="http://www.sba.gov">http://www.sba.gov</a>, or call the Tennessee District Office at <a href="tel+16157365881">(615) 736-5881</a>.</p>`
    },{
        tab: "Tennessee Small Business Development Center",
        content: `<p>Provides counseling, business planning and marketing assistance, training and cash flow analysis to start-up entrepreneurs and existing business owners. TSBDC is a network of professional business consultants that prides itself on providing expert business advice to all types of businesses. For more information visit <a href="https://tsbdc.org">www.tsbdc.org</a>.</p>`
    },{
        tab: "Memphis Area Minority Contractors Association",
        content: `<p>Established in 1974 to assist minority and women contractors in the greater Memphis area. MAMCA's goal is to bring contractors together for a brighter future. Technical assistance, training, access to plans and support are offered in all phases of construction. For more detailed information visit <a href="www.memphisminoritycontractors.com">www.memphisminoritycontractors.com</a></p>`
    }
]


export default function Resources(){
    const [detailsOpen, setDetailsOpen] = useState<string | null>(null)

    return(
        <main>
            <PageHeroSection
                mainHeading='Resources'
                subHeading=''
                searchbar = {false}
                ctaButtons={[]}
                placeholder = ""
                stateButtons={[]}
            />

            <section
                className={style.detailsSection}
            >
                <div
                    className={style.detailsBlock}
                >
                    {details.map(({tab, content},z) => (
                        <div
                            key={z}
                            className={style.details}
                        >
                            <h2
                                className={style.detailsHeading}
                                onClick={() => setDetailsOpen(detailsOpen === tab ? null : tab)}
                            >
                                {tab}

                                <div
                                    className={style.chevBlock}
                                >
                                    <ChevronDown
                                        className={clsx(style.chev, detailsOpen === tab && style.close)}
                                        
                                    />

                                    <ChevronUp12
                                        className={clsx(style.chev, detailsOpen !== tab && style.close)}
                                    />
                                </div>
                                
                            </h2>

                            <div 
                                dangerouslySetInnerHTML={{__html: content}} 
                                className={clsx(style.detailsContent, detailsOpen !== tab && style.close)}
                            />
                        </div>
                    ))}
                </div>

                <Image
                    src={'/resources/resourcesImage.webp'}
                    alt="Resources Decorative Image"
                    width={1250}
                    height={1700}
                    className={style.detailsImage}
                />
            </section>

            <section
                className={style.linksSection}
            >
                <h2
                    className={style.linksHeading}
                >
                    Insurance Resources Links
                </h2>

                <div
                    className={style.linksButtonRow}
                >
                    {resources.map(({id, image}, index)=> (
                        <Link
                            key={index}
                            href={'/resources/' + id}
                            className={style.linksButton}
                        >
                            <Image
                                src={image}
                                alt=""
                                width={1200}
                                height={960}
                                className={style.linksButtonImage}
                            />
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}