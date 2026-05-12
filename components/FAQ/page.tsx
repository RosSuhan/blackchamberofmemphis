'use client'
import clsx from 'clsx'
import { ChevronDown } from '../icons/ChevronDown'
import { ChevronUp12 } from '../icons/ChevronUp'
import style from './faq.module.css'
import { useState } from 'react'

type FAQProps = {
    faqBlockWidth? : string
    qAList : { qIndex: string, question : string, answer : string }[],
    questionBackground? : string,
    answerBackground? : string
}

export default function FAQ({
    faqBlockWidth, 
    qAList,
    questionBackground,
    answerBackground,
} : FAQProps){

    const [ detailBlock, setDetailBlock ] = useState<string | null>(null)

    return(
        <div
            className={style.faqBlock}
            style={{width:`${faqBlockWidth}`}}
        >
            {qAList.map(({qIndex, question, answer }, x) =>(
                <div
                    className={style.faq}
                    style={{background:`${answerBackground}`}}
                    key={x}
                >
                    <h3
                        className={style.faqQuestion}
                        style={{background:`${questionBackground}`}}
                        onClick={() => setDetailBlock(detailBlock === qIndex ? null : qIndex)}
                    >
                        {question}
                        <div
                            className={style.chevBlock}
                        >
                            <ChevronDown
                                className={clsx(style.chev, detailBlock === qIndex && style.hide)}
                            />

                            <ChevronUp12
                                className={clsx(style.chev, detailBlock !== qIndex && style.hide)}
                            />
                        </div>
                    </h3>
                    <div
                        dangerouslySetInnerHTML={{__html:answer}}
                        className={clsx(style.faqAnswer, detailBlock !== qIndex && style.hide)}
                        style={{background:`${answerBackground}`}}
                    />
                </div>
            ))}
            
        </div>
    )
}