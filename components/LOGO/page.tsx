import Image from 'next/image'
import style from './logo.module.css'

type LogoProp = {
    whiteGoldLogo : boolean
    blackGoldLogo : boolean
    whiteWhiteLogo : boolean
}

export default function Logo({whiteGoldLogo, blackGoldLogo, whiteWhiteLogo}: LogoProp){

    return(
        <div
            className={style.logoBlock}
        >
            {whiteGoldLogo ?
                <Image
                    src={"/assets/black-chamber-of-memphis-white-color.webp"}
                    alt='Black Chamber of Memphis Logo'
                    width={2500}
                    height={1060}
                    className={style.logo}
                />
            : null}

            {blackGoldLogo ?
                <Image
                    src={"/assets/BCM-Logo_Full-Color-Black-Text.webp"}
                    alt='Black Chamber of Memphis Logo'
                    width={2500}
                    height={1060}
                    className={style.logo}
                />
            : null}

            {whiteWhiteLogo ?
                <Image
                    src={"/assets/BCM-Logo_White.webp"}
                    alt='Black Chamber of Memphis Logo'
                    width={2500}
                    height={1060}
                    className={style.logo}
                />
            : null}
        </div>
    )
}