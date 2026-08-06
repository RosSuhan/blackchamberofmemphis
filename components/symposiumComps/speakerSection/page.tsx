import style from './speakerSection.module.css'
import SpeakerBlock from "./speakerBlock";
import { symposium26Speakers } from "@/lib/symposiumUtils/symposium26Speakers";

export default function SpeakerSection(){
    const buildingCapacitySpeakers = symposium26Speakers?.filter(topic => topic.speakerTopic === 'buildingCapacity')

    const capitalStackSpeakers = symposium26Speakers.filter(topic => topic.speakerTopic === 'capitalStack')

    return(
        <section
            className={style.speakerSection}
        >
            <h2 className="globalSecondHeading" style={{color:"var(--white)"}}>Our Speakers for 2026:</h2>

            
            <SpeakerBlock
                blockHeading={"Building Capacity To Secure and Deliver Major Contracts"}
                speakerList={buildingCapacitySpeakers}
            />
            
            <SpeakerBlock
                blockHeading={"The Capital Stack: Aligning Capital with Busienss Strategy"}
                speakerList={capitalStackSpeakers}
            />
        </section>
    )
}