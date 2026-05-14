import style from './QuoteHighlightBlock.module.css'

type QuoteHighlightBlockProps = {
    backgroundColor? : string
    lightboxBackground? : string
    lightboxTextColor? : string
    quote : string
}

export default function QuoteHighlightBlock({backgroundColor, lightboxBackground, lightboxTextColor, quote}:QuoteHighlightBlockProps){
    return (
        <div
            className={style.quoteSection}
            style={{background:backgroundColor}}
        >
            <div
                className={style.quoteLightbox}
                style={{background:lightboxBackground, color:lightboxTextColor}}
                dangerouslySetInnerHTML={{__html : quote}}
            />
        </div>
    )
}

