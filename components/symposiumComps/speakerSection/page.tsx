import Image from "next/image";
import style from './speakerSection.module.css'
import { symposium26Speakers } from "@/lib/symposiumUtils/symposium26Speakers";
import clsx from "clsx";


export default function SpeakerSection(){
    return(
        <section
            className={style.speakerSection}
        >
            <h2 className="globalSecondHeading" style={{color:"var(--white)"}}>Our Speakers for 2026:</h2>
            
            {symposium26Speakers.map((speaker, index) => (
                <div
                    key={`${index}-${speaker.id}`}
                    className={clsx(speaker.reverse ? style.speakerRowReverse : style.speakerRow)}
                >
                    <div
                        className={style.speakerImageBlock}
                    >
                        <Image
                            src={speaker.image}
                            alt={''}
                            width={1080}
                            height={1350}
                            className={style.speakerImage}
                        />
                    </div>
                    <div
                        className={style.speakerInfoTextBlock}
                    >
                        <h3 className="globalThirdHeading">{speaker.name}</h3>
                        <div className="globalText" dangerouslySetInnerHTML={{__html: speaker.bio}} />
                    </div>
                </div>
            ))}
            
        </section>
    )
}