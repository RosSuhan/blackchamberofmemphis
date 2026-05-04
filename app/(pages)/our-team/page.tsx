'use client'
import PageTitleSection from "@/components/pageTitleSection/page";
import style from '@/styles/team.module.css'
import { team } from '@/lib/teamList'
import { boardmembers } from '@/lib/boardmembers'
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Our Team | Leadership & Staff | Black Chamber of Memphis',
//     description:
//         'Meet the leadership and staff of the Black Chamber of Memphis—dedicated professionals committed to empowering Black-owned businesses, advancing economic equity, and supporting entrepreneurs across Greater Memphis.',
//     keywords: [
//         'Black Chamber of Memphis team',
//         'Memphis chamber leadership',
//         'Black business leaders Memphis',
//         'chamber staff',
//         'economic empowerment Memphis',
//     ],
//     alternates: {
//         canonical: 'https://blackchamberofmemphis.org/our-team',
//     },
//     openGraph: {
//         title: 'Our Team | Black Chamber of Memphis',
//         description:
//         'Learn more about the leaders and staff driving economic empowerment and supporting Black-owned businesses in Memphis.',
//         url: 'https://blackchamberofmemphis.org/our-team',
//         images: [
//         {
//             url: '/images/og-our-team.jpg',
//             width: 1200,
//             height: 630,
//             alt: 'Black Chamber of Memphis Team',
//         },
//         ],
//     },
//     twitter: {
//         card: 'summary_large_image',
//         title: 'Our Team | Black Chamber of Memphis',
//         description:
//         'Meet the dedicated professionals empowering Black-owned businesses in Memphis.',
//         images: ['/images/og-our-team.jpg'],
//     },
// };


export default function OurTeam(){
    const [ memberBio, setMemberBio ] = useState<string | null>(null)

    const handleMemberBioToggle = (first_name: string) => {
        setMemberBio((prev) => (prev === first_name ? null : first_name ))
    }

    console.log("team data:", team)

    return(
        <main
            className={style.ourTeamPage}
            style={{position:"relative"}}
        >
            {/* <PageTitleSection
                pageTitle="Our Team"
            /> */}

            <PageHeroSection
                mainHeading="Meet Our Team"
                subHeading=""
                searchbar = {false}
                ctaButtons={[]}
            />

            <section
                className={style.teamRow}
            >
                <h2
                    className={style.ourTeamHeading}
                >
                    The Core Team
                </h2>

                {team.map(({first_name, last_name, title, image, bio}) => (
                    <div
                        key={first_name}
                    >
                        <div
                            onClick={() => handleMemberBioToggle(first_name)}
                            className={style.teamMember}
                            // className={clsx(style.teamMember, memberBio === first_name && style.close)}
                            
                        >
                            {/* image */}
                            <Image
                                src={image}
                                alt=""
                                width={360}
                                height={360}
                                className={style.teamMemberImage}
                            />

                            {/* title */}
                            <span
                                className={style.teamMemberTitle}
                            >
                                {title}
                            </span>
                            {/* name */}
                            <h3
                                className={style.teamMemberName}
                            >
                                {`${first_name} ${last_name}`}
                            </h3>
                        </div>

                        <div
                            className={clsx(style.close, memberBio === first_name && style.memberBioBlock)}
                        >
                            <div
                                className={style.closeButtonRow}
                            >
                                <button
                                    type="button"
                                    className={style.closeButton}
                                    onClick={() => handleMemberBioToggle(first_name)}
                                >
                                    X
                                </button>
                            </div>
                            <span
                                className={style.bioMemberTitle}
                            >
                                {title}
                            </span>
                            <h3
                                className={style.bioMemberName}
                            >
                                {`${first_name} ${last_name}`}
                            </h3>

                            <Image
                                src={image}
                                alt=""
                                width={360}
                                height={360}
                                className={style.bioMemberImage}
                            />

                            <div 
                                className={style.bioMemberText}
                                dangerouslySetInnerHTML={{__html: bio}}
                            />
                        </div>
                    </div>
                ))}
            </section>

            <section
                className={style.teamRow}
            >
                <h2
                    className={style.ourTeamHeading}
                >
                    Our Board Members
                </h2>

                {boardmembers.map(({first_name, last_name, title, image}) => (
                    <div
                        
                        className={style.teamMember}
                        key={first_name}
                    >
                        {/* image */}
                        <Image
                            src={image}
                            alt=""
                            width={360}
                            height={360}
                            className={style.teamMemberImage}
                        />

                        {/* title */}
                        <span
                            className={style.teamMemberTitle}
                        >
                            {title}
                        </span>
                        {/* name */}
                        <h3
                            className={style.teamMemberName}
                        >
                            {`${first_name} ${last_name}`}
                        </h3>
                    </div>
                ))}
            </section>

        </main>
    )
}