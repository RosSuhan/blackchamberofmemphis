import style from './header.module.css'
import Image from "next/image";

export default function BcProfileHeader(){
    return(
        <section
            className={style.bcProfileHeader}
        >
            <Image
                src={'/assets/BCM-Logo_Black-Pattern.webp'}
                alt=""
                width={9970}
                height={5679}
                className={style.bcBannerImage}
            />

            <div
                className={style.bcNameRow}
            >
                <div
                    className={style.bcProfileLogoImageBlock}
                >
                    <Image
                        src={'/our-team/Alan.png'}
                        alt=""
                        width={360}
                        height={359}
                        className={style.bcProfileImage}
                    />
                    <Image
                        src={'/assets/BCM-Logo_Full-Color-Black-Text.webp'}
                        alt=""
                        width={2501}
                        height={1059}
                        className={style.bcLogoImage}
                    />
                </div>
            </div>
        </section>
    )
}