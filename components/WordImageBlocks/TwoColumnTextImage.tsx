import Image from 'next/image'
import style from './TwoColumn.module.css'
import Link from 'next/link'
import clsx from 'clsx'

type TwoColumnProps = {
    rowDirection : boolean
    imageLink : string
    imageAlt : string
    imageWidth : number
    imageHeight : number 
    blockHeading : string
    blockText : string
    ctaLink : string
    buttonText : string
    columnBackgroundColor? : string
}

export default function TwoColumnTextImage({
    rowDirection, 
    imageLink, 
    imageAlt, 
    imageWidth, 
    imageHeight,
    blockHeading, 
    blockText,
    ctaLink, 
    buttonText,
    columnBackgroundColor
}:TwoColumnProps){

    return(
        <section
            className={clsx(rowDirection ? style.twoColumnSection : style.twoColumnSectionReverse)}
        >
            <div
                className={style.sectionImageColumn}
            >
                <Image
                    src={imageLink}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    className={style.twoColumnImage}
                />
            </div>
            <div
                className={style.sectionColumn}
                style={{padding:"1rem 0", background:columnBackgroundColor}}
            >
                <h2
                    className='globalSecondHeading'
                >
                    {blockHeading}
                </h2>
                <div
                    className='globalText'
                    dangerouslySetInnerHTML={{__html : blockText}}
                />
                {ctaLink ? 
                    <div
                        className={style.twoColumnButtonRow}
                    >
                        <Link 
                            href={ctaLink}
                            className='globalGoldButton'
                        >
                            {buttonText}
                        </Link>
                    </div>
                : null}
            </div>
        </section>
    )
}