import style from './speakerSection.module.css'
import SpeakerBlock from "./speakerBlock";
import { symposium26Speakers } from "@/lib/symposiumUtils/symposium26Speakers";
import Image from 'next/image';

export default function SpeakerSection(){
    const buildingCapacitySpeakers = symposium26Speakers?.filter(topic => topic.speakerTopic === 'buildingCapacity')

    const capitalStackSpeakers = symposium26Speakers?.filter(topic => topic.speakerTopic === 'capitalStack')

    const firstKeynoteSpeaker = symposium26Speakers?.filter(topic => topic.speakerTopic === 'firstKeynoteSpeaker')

    const specialGuestSpeakers = symposium26Speakers?.filter(topic => topic.speakerTopic === 'specialGuest')

    return(
        <section
            className={style.speakerSection}
        >
            <h2 className="globalSecondHeading" style={{color:"var(--white)"}}>Our Speakers for 2026:</h2>

            <SpeakerBlock
                blockHeading = {'Keynote Speaker'}
                speakerList = {firstKeynoteSpeaker}
            />

            <SpeakerBlock
                blockHeading={"Building Capacity To Secure and Deliver Major Contracts"}
                speakerList={buildingCapacitySpeakers}
            />

            {/* Congressman cohen */}
            {specialGuestSpeakers.length > 0 && (
                <SpeakerBlock
                    blockHeading='Special Guest Speakers'
                    speakerList={specialGuestSpeakers}
                />
            )}

            <SpeakerBlock
                blockHeading={"The Capital Stack: Aligning Capital with Busienss Strategy"}
                speakerList={capitalStackSpeakers}
            />

            <div
                className={style.dj_mceeBlock}
            >
                <div
                    className={style.imageBlock}
                >
                    <h2 className="globalThirdHeading" style={{color:"var(--white)", textAlign:'center'}}>Our DJ - Dr Mary The K</h2>
                    <Image
                        src={'/events/symposium/2026-speakers/mary-the-k.webp'}
                        alt='Mary The K - DJ at 2026 Black Chamber of Memphis Symposium'
                        width={1080}
                        height={1350}
                        className={style.djMceeImages}
                    />
                </div>
                
                <div
                    className={style.imageBlock}
                >
                    <h2 className="globalThirdHeading" style={{color:"var(--white)", textAlign:'center'}}>Our Mcee - Ena Esco</h2>
                    <Image
                        src={'/events/symposium/2026-speakers/ena-esco.webp'}
                        alt='Ena Esco - Emcee for the 2026 Black Chamber of Memphis Symposium'
                        width={1080}
                        height={1350}
                        className={style.djMceeImages}
                    />                
                </div>
                
            </div>
        </section>
    )
}