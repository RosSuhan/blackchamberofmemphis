import Image from "next/image";
import Link from "next/link";
import './featureStoryPage.css'
import { symp2026EventKeynotes } from '@/lib/symposiumUtils/symp2026EventKeynotes'

type Props = {
    params: Promise<{id: string}>
}

export default async function SymposiumKeynoteSpeakers({ params }: Props){
    const { id } = await params
    const selectedArticle = symp2026EventKeynotes.find(a => a.id === id);

    console.log(selectedArticle)

    if(!selectedArticle) {
        return <article>No Article Found</article>
    }

    return(
        <article
            className="featurePageArticle"
        >
            <div
                className="featureImageBlock"
            >
                <Image
                    src={selectedArticle.bannerImage}
                    alt=""
                    width={selectedArticle.bannerImageWidth} //8192 × 5464
                    height={selectedArticle.bannerImageHeight}
                    className="featurePageArticleBannerImage"
                />
            </div>
            <h1
                className="globalMainHeading"
            >
                {selectedArticle.title}
            </h1>
            <span
                className="featurePageDateIndex"
            >
                October 2, 2026 | Reign Event Venue, Memphis, TN
            </span>

            <div
                className="featureArticleQuoteRow"
            >
                <div
                    className="featureArticleTextBlock globalText"
                    dangerouslySetInnerHTML={{__html: selectedArticle.articleBlockOne}}
                />

                <div
                    className="featureQuoteMainBlock"
                >
                    <div
                        className="featureQuoteBlock"
                    >
                        <Image
                            src={'/events/symposium/2026-event/gold-quote.webp'}
                            alt=""
                            width={1210}
                            height={1100}
                            className="featureQuote"
                        />

                        <span
                            className="featureQuoteText"
                        >
                            {selectedArticle.speakerQuote}
                        </span>
                        <span
                            className="featureQuoteOwner"
                        >
                            <b>{selectedArticle.speakerOwner}</b><br/>
                            {selectedArticle.speakerJobTitle}
                        </span>

                    </div>

                    <Image
                        src={'/events/symposium/2026-event/dsc02525.webp'}
                        alt=""
                        width={1024} //1024 × 683
                        height={683}
                        className="featureQuoteArticleImage"
                    />
                </div>

                
            </div>

            <div
                className="sympColorBlock"
            >
                <Image
                    src={'/events/symposium/2026-event/27-dsc08680.webp'}
                    alt=""
                    width={6000}
                    height={4000}
                    className="sympColorBlockImage"
                />

                <div
                    className="sympColorTextBlock"
                    
                >
                    <h2
                        className="globalSecondHeading sympColorBlockHeading"
                    >
                        {selectedArticle.colorBlockHeading}
                    </h2>
                    <p
                        className="globalText"
                    >
                        {selectedArticle.colorBlockText}
                    </p>
                </div>
            </div>
            
            <div
                className="globalText"
                dangerouslySetInnerHTML={{__html : selectedArticle.articleBlockTwo}}
            />

            <div
                className="sympPrevNextButtons"
            >
                <Link
                    href={'/past-events/symposium-2026'}
                    className="globalGoldButton sympPrevNextBtn left"
                >
                    Back to Symposium 2026
                </Link>

                <Link
                    href={selectedArticle.nextArticlePath}
                    className="globalGoldButton sympPrevNextBtn right"
                >
                    Next Story <br/> {selectedArticle.nextArticle}
                </Link>
            </div>

            <div
                className="sympLastCTAbtnRow"
                // style={{display:'none'}}
            >
                <h2
                    className="globalSecondHeading"
                >
                    More From the Symposium
                </h2>

                <div
                    className="sympCTAblock"
                >
                    <Image
                        src={'/events/symposium/2026-event/13-dsc08556.webp'}
                        alt=""
                        width={6000}
                        height={4000}
                        className="sympCTAblockImage"
                    />

                    <Link
                        href={'https://blackbusinessassociationofmemp.box.com/s/32h16p5zblr8bjpv7kucrcslqqc5twv8'}
                        className="sympCTAblockLink"
                    >
                        Symposium 2026 Photo Gallery
                    </Link>
                </div>

                <div
                    className="sympCTAblock"
                >
                    <Image
                        src={selectedArticle.nextArticleImage}
                        alt=""
                        width={5464}
                        height={8192}
                        className="sympCTAblockImage"
                    />

                    <Link
                        href={selectedArticle.nextArticlePath}
                        className="sympCTAblockLink"
                    >
                        {selectedArticle.nextArticleHeading}
                    </Link>
                </div>

                <div
                    className="sympCTAblock"
                >
                    <Image
                        src={'/events/symposium/2026-event/dsc02522.webp'}
                        alt=""
                        width={100}
                        height={100}
                        className="sympCTAblockImage"
                    />

                    <Link
                        href={'/past-events/symposium-2026'}
                        className="sympCTAblockLink"
                    >
                        Key Moments and Highlights
                    </Link>
                </div>
            </div>
        </article>
    )
}