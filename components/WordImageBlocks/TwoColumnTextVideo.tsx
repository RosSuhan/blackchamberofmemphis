import style from './TwoColumn.module.css'
import Link from 'next/link'
import clsx from 'clsx'

type TwoColumnProps = {
    rowDirection : boolean
    sectionVideoLink : string
    blockHeading : string
    blockText : string
    ctaLink : string
    buttonText : string
    columnBackgroundColor? : string
}

export default function TwoColumnTextVideo({
    rowDirection, 
    blockHeading, 
    sectionVideoLink,
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
                className={style.sectionVideoColumn}
            >
                <iframe 
                    width="560" 
                    height="315" 
                    src={sectionVideoLink} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className={style.twoColumnVideo}></iframe>
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