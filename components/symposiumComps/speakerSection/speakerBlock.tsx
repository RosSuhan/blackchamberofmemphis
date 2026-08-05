import Image from "next/image";
import style from './speakerSection.module.css'
import clsx from "clsx";
import { SpeakerProps } from "@/lib/symposiumUtils/symposium26Speakers/speakerProps";

type SpeakerBlockProp = {
    blockHeading : string
    speakerList : SpeakerProps[]
}

export default function SpeakerBlock({
    blockHeading,
    speakerList
} : SpeakerBlockProp){
    return (
        <div
            className={style.speakerBlock}
        >
            <h3
                className="globalThirdHeading"
                style={{color:'var(--white)'}}
            >
                {blockHeading}
            </h3>

            {speakerList.map((speaker, index) => (
                <div
                    key={`${index}-${speaker.id}`}
                    className={clsx(speaker.reverse ? style.speakerRowReverse : style.speakerRow)}
                >
                    <div
                        className={style.speakerImageBlock}
                    >
                        <Image
                            src={speaker.image}
                            // src={'/events/symposium/2026-speakers/brent-hooks.webp'}
                            alt={''}
                            width={1080}
                            height={1350}
                            className={style.speakerImage}
                        />
                    </div>
                    <div
                        className={style.speakerInfoTextBlock}
                    >
                        <h3 className="globalThirdHeading">
                            {speaker.name}
                            {/* Brent Hooks */}
                        </h3>
                        <div className="globalText" dangerouslySetInnerHTML={{__html: speaker.bio}} />
                        {/* <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis corrupti aperiam atque ex, sapiente dicta tempore ipsam illum quae odio! Exercitationem beatae quae dicta repellat accusantium dolor nihil cumque dignissimos.</div> */}
                    </div>
                </div>
            ))}
        </div>
    )
}