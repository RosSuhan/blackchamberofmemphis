import PageHeroSection from '@/components/heroSections/pageHeroSection'
import OneColumn from '@/components/WordImageBlocks/OneColumn'
import { allNewsLetters } from '@/lib/resources/allNewsLetters'
import style from '@/styles/resourceIndPage.module.css'
import Image from 'next/image'

type NewsLettersPageProp = {
    params: { id: string }
}

export default async function NewsLettersPage({params} : NewsLettersPageProp){
    const { id } = await params
    const selectedNewsLetter = allNewsLetters.find(news => news.id === id);

    if(!selectedNewsLetter) {return <p>No News Letter Found.</p>}

    return(
        <main
            className={style.resourceBlogPage}
        >
            <PageHeroSection
                eventHost={''}
                mainHeading={selectedNewsLetter.name}
                subHeading=''
                searchbar={false}
                ctaButtons={[]}
                placeholder=''
                initialSearchTerm=''
                eventDate={selectedNewsLetter.publishDate}
                eventPrice=''
                eventAddress=''
                stateButtons={[]}
                selectedState=''
                setSelectedState={undefined}
            />

            <Image
                src={selectedNewsLetter.image}
                alt=''
                width={selectedNewsLetter.imageWidth}
                height={selectedNewsLetter.imageHeight}
                className={style.resourcesBlogImage}
            />

            <OneColumn
                backgroundColor={'var(--white)'}
                textColor=''
                headingIntro=''
                headingTextColor=''
                blockHeading=''
                subHeading=''
                paragraph={selectedNewsLetter.fullArticle}
                multiEvents={[]}
                multiWeekProgram={false}
                paragraphTwo=''
            />
        </main>
    )
}