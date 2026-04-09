import FAQ from '@/components/FAQ/page'
import style from './faqSection.module.css'

type FAQSectionProps = {
    sectionHeading : string,
    sectionIntro : string,
    faqBlockWidth : string,
    qAList : { qIndex: string, question : string, answer : string }[],
    questionBackground : string,
    answerBackground : string
}

export default function FAQSection({
    sectionHeading, 
    sectionIntro, 
    faqBlockWidth, 
    qAList,
    questionBackground,
    answerBackground
} : FAQSectionProps){



    return (
        <section
            className={style.faqSection}
        >
            <h2
                className={style.faqSectionHeading}
            >
                {sectionHeading}
            </h2>
            <div 
                dangerouslySetInnerHTML={{__html:sectionIntro}} 
                className={style.faqIntroText}
            />

            <FAQ
                faqBlockWidth = {faqBlockWidth}
                qAList = {qAList}
                questionBackground = {questionBackground}
                answerBackground = { answerBackground }
            />
        </section>
    )
}