import Image from "next/image";
import style from '@/styles/wordImage.module.css'

type WordImageBlocksProps = {
    wordHeaderText: string
    wordParagraphTexts: string
    blockImage: string
}

export default function WordImageBlocks({wordHeaderText, wordParagraphTexts, blockImage}: WordImageBlocksProps){
    return(
        <section
            className={style.wordImageBlockSection}
        >
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
            <Image
                src={blockImage}
                alt=""
                width={670}
                height={670}
                className={style.wordBlockImage}
            />
        </section>
    )
}