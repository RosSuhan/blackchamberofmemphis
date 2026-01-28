import style from '@/styles/blackLedgerStyles/blSectionImageText.module.css'
import clsx from 'clsx'
import Image from 'next/image'

type SectionImageTextProp = {
    direction : boolean,
    sectionHeading : string,
    answerText : string,
    blockImage : string,
    blockImageAlt : string,
}


export default function SectionImageText({direction, sectionHeading, answerText, blockImage, blockImageAlt } : SectionImageTextProp){
    return (
        <section
            className={style.sectionImageTextBlock}
        >
            <div
                className={clsx(direction ? style.sectionTextBlock : style.sectionTextBlockReverse)}
            >
                <h2
                    className={style.blSectionTextTitle}
                >
                    {sectionHeading}
                </h2>

                <div
                    className={style.blSectionText}
                    dangerouslySetInnerHTML={{__html: answerText}}
                />
            </div>

            <Image
                src={blockImage}
                alt={blockImageAlt}
                width={500}
                height={500}
                className={clsx(direction ? style.sectionImage : style.sectionImageReverse)}
            />
        </section>
    )
}