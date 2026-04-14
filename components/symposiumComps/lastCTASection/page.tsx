import TwoButtonRow from "@/components/TWOBUTTONROW/page";
import style from './lastCTAsection.module.css'

type LastCtaSectionProps = {
    buttonsInfo: {path: string, buttonName: string}[],
}

export default function LastCtaSection({buttonsInfo}: LastCtaSectionProps){
    return(
        <section
            className={style.lastCtaSection}
            style={{background: "#000000"}}
        >
            <TwoButtonRow
                buttonsInfo={buttonsInfo}
            />
        </section>
    )
}