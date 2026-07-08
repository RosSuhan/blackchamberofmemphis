import style from './header.module.css'
import Image from "next/image";

type BcProfileHeaderProp = {
    bannerImage : string
    profileImage : string
    logoImage : string
    profileName : string
    profileTitle : string
    profileCompany : string
}

export default function BcProfileHeader({
    bannerImage,
    profileImage,
    logoImage,
    profileName,
    profileTitle,
    profileCompany
}: BcProfileHeaderProp){
    return(
        <section
            className={style.bcProfileHeader}
        >
            <Image
                src={bannerImage}
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
                        src={profileImage}
                        alt=""
                        width={360}
                        height={359}
                        className={style.bcProfileImage}
                    />
                    <Image
                        src={logoImage}
                        alt=""
                        width={2501}
                        height={1059}
                        className={style.bcLogoImage}
                    />
                </div>
                <div
                    className={style.bcNameBlock}
                >
                    <h1
                        className={style.bcPersonName}
                    >{profileName}</h1>
                    <p
                        className={style.bcPersonTitle}
                        style={{margin:"0", fontWeight:"900"}}
                    >
                        {profileTitle}
                    </p>
                    <p
                        className={style.bcPersonTitle}
                        style={{marginTop:"0", fontWeight:"500"}}
                    >
                        {profileCompany}
                    </p>
                </div>
            </div>
        </section>
    )
}