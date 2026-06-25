import { Metadata } from 'next';
import style from '@/styles/resourceIndPage.module.css'
import { allResources } from '@/lib/resources/allResources'
import PageHeroSection from '@/components/heroSections/pageHeroSection';
import OneColumn from '@/components/WordImageBlocks/OneColumn';
import TwoColumnTextImage from '@/components/WordImageBlocks/TwoColumnTextImage';
import OneCtaButtonRow from '@/components/callToAction/OneCtaButtonRow';


type ResourcesBlogPageProp = {
    params: {
        id:string
    }
}

export async function generateMetadata({ params }:ResourcesBlogPageProp): Promise<Metadata> {
    const { id } = await params;
    const selectedBlog = allResources.find((blog) => blog.id === id);

    if(!selectedBlog){
        return {
            title: 'Blog article not found | Black Chamber of Memphis',
            description: 'This business listing could not be found. Browse all local businesses in the Black Chamber of Memphis Business Directory.',
            alternates: { canonical: 'https://blackchamberofmemphis.org/business-directory' },
        }
    }

    const url = `https://blackchamberofmemphis.org/resources/${id}`

    return {
        title: `${selectedBlog.blogTitle} | Black Chamber of Memphis Directory`,
        description: selectedBlog.description,
        keywords: [
            selectedBlog.blogTitle,
            'Black Chamber of Memphis member',
            'Memphis local business',
        ],
        alternates: { canonical: url },
        openGraph: {
            title: `${selectedBlog.blogTitle} | Black Chamber of Memphis Directory`,
            description: selectedBlog.description,
            url: url,
            siteName: 'Black Chamber of Memphis',
            type: 'website',
            images: selectedBlog.mainImage
            ? [
                {
                    url: `https://blackchamberofmemphis.org/members/${selectedBlog.mainImage}`,
                    width: 1200,
                    height: 630,
                    alt: `${selectedBlog.articleTitle} — Black Chamber of Memphis Member`,
                },
                ]
            : [
                {
                    url: '/images/og-default.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Black Chamber of Memphis Business Directory',
                },
                ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${selectedBlog.blogTitle} | Black Chamber of Memphis Directory`,
            description: selectedBlog.description,
            images: selectedBlog.mainImage
            ? [`https://blackchamberofmemphis.org/members/${selectedBlog.mainImage}`]
            : ['/images/og-default.jpg'],
        },
    }
}

export default async function ResourceBlogPage(
    { params } : ResourcesBlogPageProp
){
    const { id } = await params
    const selectedBlog = allResources.find(blog => blog.id === id);

    console.log('params id:', id)

    console.log('resource id:', allResources.map(resource => resource.id))

    if(!selectedBlog) {return <p>No Blog Found.</p>}

    return(
        <main
            className={style.resourceBlogPage}
        >
            <PageHeroSection
                eventHost = {''}
                mainHeading = {selectedBlog.blogTitle}
                subHeading = {selectedBlog.description}
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = {''}
                initialSearchTerm = {''}
                eventDate = {''}
                eventTime = {''}
                eventPrice = {''}
                eventAddress = {''}
                stateButtons = {[]}
                selectedState = {''}
                setSelectedState = {undefined}
            />
            
            <OneColumn
                backgroundColor = {'var(--grey)'}
                textColor = {''}
                headingIntro = {''}
                headingTextColor = {''}
                blockHeading = {selectedBlog.introHeading}
                subHeading = {''}
                paragraph = {selectedBlog.introParagraph}
                multiWeekProgram = {false}
                multiEvents = {[]}
                paragraphTwo = {''}
            />

            <TwoColumnTextImage
                rowDirection = {false}
                imageLink = {selectedBlog.mainImage}
                imageAlt = {selectedBlog.whosImagealt}
                imageWidth = {selectedBlog.whosImageWidth}
                imageHeight = {selectedBlog.whosImageHeight}
                blockHeading = {selectedBlog.whosHeading}
                blockText = {selectedBlog.whosParagraph}
                ctaLink = {''}
                buttonText = {''}
                columnBackgroundColor = {''}
            />

            <OneCtaButtonRow
                sectionBackground = {"var(--darkGrey)"}
                textColor = {'var(--white)'}
                ctaText = {selectedBlog.ctaOneText}
                ctaButton = {selectedBlog.ctaOneButton}
                ctaLink = {selectedBlog.ctaOneLink}
            />

            <OneColumn
                blockHeading = {selectedBlog.offerBlockHeading}
                paragraph = {selectedBlog.offerBlockText}
                multiWeekProgram = {false}
                multiEvents = {[]}
            />

            {selectedBlog?.ctaTwoLink ? 
                <OneCtaButtonRow
                    sectionBackground = {"var(--darkGrey)"}
                    textColor = {'var(--white)'}
                    ctaText = {selectedBlog.ctaTwoText}
                    ctaButton = {selectedBlog.ctaTwoButton}
                    ctaLink = {selectedBlog.ctaTwoLink}
                />
            : null}

            
        </main>
    )
}