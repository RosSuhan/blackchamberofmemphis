import Image from 'next/image'
import style from './resourcesCatBlock.module.css'
import Link from 'next/link'

type ResourcesCatBlockProp = {
    articleImage : string
    articleImageWidth : number
    articleImageHeight : number
    articleTitle : string
    articleDate? : string
    articleDescription : string
    articleOffering : {offerName : string, offerType: string, offerColor: string}[]
    articleServeStage : string[],
    articleReadPath : string,
}
export default function ResourcesCatBlock({
    articleImage,
    articleImageWidth,
    articleImageHeight,
    articleTitle,
    articleDate,
    articleDescription,
    articleOffering,
    articleServeStage,
    articleReadPath,
} : ResourcesCatBlockProp){
    return(
        <div
            className={style.resourceContentBlock}
        >
            <Image
                src={articleImage}
                alt=''
                width={articleImageWidth}
                height={articleImageHeight}
                className={style.resourceContentBlockImage}
            />

            {articleDate ? 
                <span
                    className='globalXsmallText'
                    style={{width: "90%", padding:'.5rem 0', fontStyle:"italic"}}
                >
                    {articleDate}
                </span> 
            : null}

            <h2
                className='globalThirdHeading'
            >
                {articleTitle}
            </h2>
            <div
                className='globalText'
                dangerouslySetInnerHTML={{__html : articleDescription}}
            />

            {articleOffering?.length > 0 && (
                <div
                    className={style.offeringBlock}
                >
                    <h3
                        className='globalSmallText'
                        style={{marginBottom: ".2rem"}}
                    >
                        OFFERING
                    </h3>

                    {articleOffering.map(({offerName, offerType, offerColor}, index) => (
                        <div
                            className={style.offer}
                            key={index}
                        >
                            <span>
                                {offerName}
                            </span>
                            <span
                                className={style.offerTag}
                                style={{background:offerColor}}
                            >
                                {offerType}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {articleServeStage?.length > 0 && (
                <div
                    className={style.serveBlock}
                >
                    <h3
                        className='globalSmallText'
                        style={{marginBottom: ".2rem"}}
                    >
                        STAGES SERVED
                    </h3>

                    {articleServeStage.map((item, index) => (
                        <div
                            className={style.serveItem}
                            key={index}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}

            <div
                className={style.readButtonRow}
            >
                <Link
                    href={articleReadPath}
                    className={style.readButton}
                >
                    Read More
                </Link>
            </div>
        </div>
    )
}