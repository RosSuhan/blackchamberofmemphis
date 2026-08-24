import GallerySection from "@/components/GALLERYSECTION/page";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import OneColumn from "@/components/WordImageBlocks/OneColumn";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "National Black Business Month: The Gumbel Family's Four-Generation Legacy in Memphis",
    description: 'For four generations, the Gumbel family has built Black-owned businesses across grocery, transportation, optometry and consulting. This National Black Business Month, discover their legacy of enterprise in Memphis.',
    keywords: [
        'National Black Business Month',
        'Black Chamber of Memphis',
        'Black-owned business Memphis',
        'Alan Gumbel',
        'Black business legacy',
        'Black entrepreneurship',
        'generational wealth Black families',
        'Memphis Black history'
    ],
    alternates: {
        canonical: 'https://blackchamberofmemphis.org/blog/national-black-business-month-gumbel-legacy'
    },
    openGraph: {
        title: "National Black Business Month: The Gumbel Family's Four-Generation Legacy",
        description: 'For four generations, the Gumbel family has built Black-owned businesses across grocery, transportation, optometry and consulting. This National Black Business Month, discover their legacy of enterprise in Memphis.',
        url: 'https://blackchamberofmemphis.org/blog/national-black-business-month-gumbel-legacy',
        images: [
            {
                url: '/our-team/Alan.png',
                width: 360,
                height: 360,
                alt: 'Alan Gumbel, COO of the Black Chamber of Memphis, honoring four generations of family business legacy'
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'National Black Business Month: The Gumbel Family Legacy',
        description: 'Four generations. One legacy of Black business. Meet the Gumbel family this National Black Business Month.',
        images: ['/blog/national-black-business-month-gumbel-legacy'],
    },
};

export default function NationalBlackBusMonthGumble(){
    return(
        <main
            style={{padding:"2rem 0 0 0"}}
        >
            <PageHeroSection
                eventHost=""
                mainHeading="National Black Business Month: The Gumbel Family's Four-Generation Legacy in Memphis"
                subHeading=""
                searchbar = {false}
                ctaButtons={[]}
                placeholder=""
                stateButtons={[]}
            />

            <OneColumn
                backgroundColor = {''} 
                textColor = {''} 
                headingIntro = {''}
                headingTextColor = {''}
                blockHeading = {'Black business is more than ownership. It can become an inheritance.'}
                subHeading = {''}
                paragraph = {`
                    <p>For Black Chamber of Memphis COO <strong>Alan Gumbel</strong>, that inheritance stretches across four generations.</p>
                    <p>His great-grandfather, <strong>Edward E. Minnes</strong>, was part of Minnes & Grandison, a wholesale and retail grocery business established in Cincinnati in <strong>1894</strong>, serving customers across Ohio, Indiana and Kentucky.</p>
                    <p>His maternal grandfather, <strong>Francis W. Minnes</strong>, carried that entrepreneurial spirit forward through construction, trucking and transportation, including the Lockland Bus Company. His businesses didn’t simply generate income. They created jobs, mobility and opportunity.</p>
                    <p>Then came Alan’s father, <strong>Dr. Elton J. Gumbel Sr</strong>.</p>
                    <p>A World War II veteran and cartographer for the U.S. Army Map Service, Dr. Gumbel went on to become the <strong>first licensed Black optometrist in Missouri</strong>. In 1951, he opened his practice in Kansas City and spent decades serving patients, building a respected profession and demonstrating what was possible at a time when Black professionals were still confronting significant barriers to opportunity.</p>
                    <p>Alan grew up surrounded by those examples of enterprise and service. He would eventually open <strong>Gumbel & Associates</strong> in Whitehaven, continuing a family tradition that had begun generations before him. He still keeps the desk lamp his father bought for his office during a visit in the early 2000s.</p>
                    <p>Today, Alan helps other entrepreneurs build through his leadership at the <strong>Black Chamber of Memphis</strong>.</p>
                    <p>During National Black Business Month, we honor more than the businesses themselves. We honor the courage to build where opportunity didn’t always exist, the communities strengthened along the way, and the examples one generation leaves for the next.</p>`}
                multiWeekProgram = {false}
                multiEvents = {[]}
                paragraphTwo = {`<p style="background-color:var(--darkGrey); color:#ffffff; font-style:italic; font-weight:800; text-align:center; padding:1rem 1.5rem; margin:1.5rem 0" >Legacy is more than what we inherit. It’s what we choose to build from it.</p>`}
            />

            <GallerySection
                sectionBackground = {''} 
                galleryHeadingText = {""} 
                galleryImages = {[
                    {
                        name : 'Alan Gumbel - CEO of Black Business Chamber of Memphis',
                        image : '/our-team/Alan.png',
                        alt : 'Alan Gumbel - CEO of Black Business Chamber of Memphis',
                        width : 360,
                        height : 360,
                    },{
                        name : 'Black Business Legacy - Dr. Elton J. Gumbel Senior',
                        image : '/blog/legacy-image-1.webp',
                        alt : 'Black Business Legacy - Dr. Elton J. Gumbel Senior',
                        width : 1122,
                        height : 1402
                    },{
                        name : 'Black Business Legacy - Francis W. Minnes',
                        image : '/blog/legacy-image-2.webp',
                        alt : 'Black Business Legacy - Francis W. Minnes',
                        width : 1122,
                        height : 1402,
                    },{
                        name : '',
                        image : '/blog/legacy-image-3.webp',
                        alt : 'Black Business Legacy - Edward E Minnes',
                        width : 1122,
                        height : 1402,
                    },
                ]}
            />
        </main>
    )
}