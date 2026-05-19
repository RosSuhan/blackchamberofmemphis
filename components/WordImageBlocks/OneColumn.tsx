import MultiWeekInfoBlock from '../EventsBlock/multiWeekInfoBlock'
import { MultiWeekInfoProp } from '../EventsBlock/multiWeekInfoBlockProp'
import style from './OneColumn.module.css'

type OneColumnProps = {
    backgroundColor? : string
    textColor? : string
    headingIntro? : string
    headingTextColor? : string
    blockHeading? : string
    subHeading? : string
    paragraph : string
    multiWeekProgram? : boolean
    multiEvents : MultiWeekInfoProp[]
}



export default function OneColumn({
    backgroundColor, 
    textColor, 
    headingIntro, 
    headingTextColor, 
    blockHeading, 
    subHeading, 
    paragraph, 
    multiWeekProgram, 
    multiEvents
}: OneColumnProps){
    return(
        <section
            className={style.oneColumnSection}
            style={{background:backgroundColor, color:textColor}}
        >
            {headingIntro ? 
                <p
                    className='globalText'
                >
                    {headingIntro}
                </p>
            : null}

            {blockHeading ? 
                <h2
                    className='globalSecondHeading'
                    style={{color:headingTextColor}}
                >
                    {blockHeading}
                </h2>
            : null}    
            
            {subHeading ? 
                <div
                    className='globalSmallText'
                    style={{width:"90%", margin:"-1rem 0 0 0"}}
                >
                    {subHeading}
                </div>
            : null}

            <div
                className='globalText'
                dangerouslySetInnerHTML={{__html: paragraph}}
            />

            {multiWeekProgram ? 
                <MultiWeekInfoBlock
                    multiEvents={multiEvents}
                />
            : null}
        </section>
    )
}