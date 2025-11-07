import Image from "next/image";
import style from '@/styles/wordImage.module.css'

type ImageWordBlocksProps = {
    wordHeaderText: string
    wordParagraphTexts: string
    blockImage: string
}

export default function ImageWordBlocks({wordHeaderText, wordParagraphTexts, blockImage}: ImageWordBlocksProps){
    return(
        <section
            className={style.imageWordBlockSection}
        >
            <Image
                src={blockImage}
                alt=""
                width={670}
                height={670}
                className={style.wordBlockImage}
            />
            <div
                className={style.wordInformation}
            >
                <h2
                    className={style.wordHeader}
                >
                    {wordHeaderText}
                </h2>
                <div
                    dangerouslySetInnerHTML={{__html: wordParagraphTexts}}
                    className={style.wordParagraph}
                />
            </div>
        </section>
    )
}