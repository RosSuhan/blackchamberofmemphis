import style from './TwoColumn.module.css'
import Link from 'next/link'

type TwoColumnProps = {
    backgroundColor? : string
    textColor? : string
    blockOneBackground? : string
    blockTwoBackground? : string
    blockHeadingOne? : string
    blockHeadingTwo? : string
    blockTextOne? : string
    blockTextTwo? : string
    ctaLinkOne? : string
    ctaLinkTwo? : string
    buttonTextOne? : string
    buttonTextTwo? : string
}

export default function TwoColumnText({
    backgroundColor,
    textColor,
    blockOneBackground,
    blockTwoBackground,
    blockHeadingOne, 
    blockHeadingTwo,
    blockTextOne,
    blockTextTwo,
    ctaLinkOne,
    ctaLinkTwo, 
    buttonTextOne,
    buttonTextTwo
}:TwoColumnProps){

    return(
        <section
            className={style.twoColumnSection}
            style={{background: backgroundColor, color:textColor}}
        >
            <div
                className={style.sectionColumn}
                style={{background:blockOneBackground}}
            >
                {blockHeadingOne ? 
                    <h2
                        className='globalThirdHeading'
                    >
                        {blockHeadingOne}
                    </h2>
                : null}
                
                {blockTextOne ? 
                    <div
                        className='globalText'
                        dangerouslySetInnerHTML={{__html : blockTextOne}}
                    />
                : null}

                {ctaLinkOne ? 
                    <div
                        className={style.twoColumnButtonRow}
                    >
                        <Link 
                            href={ctaLinkOne}
                            className='globalGoldButton'
                        >
                            {buttonTextOne}
                        </Link>
                    </div>
                : null}
            </div>
            <div
                className={style.sectionColumn}
                style={{background:blockTwoBackground}}
            >
                {blockHeadingTwo ? 
                    <h2
                        className='globalThirdHeading'
                    >
                        {blockHeadingTwo}
                    </h2>
                : null}

                {blockTextTwo ? 
                    <div
                        className='globalText'
                        dangerouslySetInnerHTML={{__html : blockTextTwo}}
                    />
                : null}

                {ctaLinkTwo ? 
                    <div
                        className={style.twoColumnButtonRow}
                    >
                        <Link 
                            href={ctaLinkTwo}
                            className='globalGoldButton'
                        >
                            {buttonTextTwo}
                        </Link>
                    </div>
                : null}
            </div>
        </section>
    )
}