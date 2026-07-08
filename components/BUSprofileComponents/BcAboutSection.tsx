import Image from 'next/image'
import { FacebookFill } from '../icons/FacebookIcon'
import { Instagram } from '../icons/InstagramIcon'
import { Linkedin2 } from '../icons/LinkedInIcon'
import { BaselineLocationOn } from '../icons/Location'
import { TwitterStroke12 } from '../icons/TwitterIcon'
import { Youtube } from '../icons/YoutubeIcon'
import style from './BcAboutSection.module.css'

type BcAboutSectionProps = {
    bioBlock : string
    addressLink : string
    addressText : string
    instagramLink : string
    facebookLink : string
    twitterLink : string
    linkedInLink : string
    youTubeLink : string
    qrCodeImage : string
    memberBtn : string
    memberSince : string
}


export default function BcAboutSection({
    bioBlock,
    addressLink,
    addressText,
    instagramLink,
    facebookLink,
    twitterLink,
    linkedInLink,
    youTubeLink,
    qrCodeImage,
    memberBtn,
    memberSince
}: BcAboutSectionProps){
    return(
        <section
            className={style.aboutSection}
        >
            <div
                className={style.aboutColumnBlock}
            >
                <h2
                    className={style.bcAboutSectionBlockHeading}
                >
                    About
                </h2>
                <div
                    className={style.aboutBlock}
                    dangerouslySetInnerHTML={{__html:bioBlock}}
                />

                <a href={addressLink}
                    className={style.bcAddress}
                >
                    <BaselineLocationOn
                        className={style.bcAddressIcon}
                    />
                    <address>{addressText}</address>
                </a>

                <div
                    className={style.bcSocialLinksBlock}
                >
                    {instagramLink ? 
                        <a href={instagramLink}
                            className={style.bcSocialLink}
                        >
                            <Instagram
                                className={style.bcSocialLinkIcon}
                            />
                        </a>
                    : null}

                    {facebookLink ? 
                        <a href={facebookLink}
                            className={style.bcSocialLink}
                        >
                            <FacebookFill
                                className={style.bcSocialLinkIcon}
                            />
                        </a>
                    :null}

                    {twitterLink ? 
                        <a href={twitterLink}
                            className={style.bcSocialLink}
                        >
                            <TwitterStroke12
                                className={style.bcSocialLinkIcon}
                            />
                        </a>
                    :null}

                    {linkedInLink ? 
                        <a href={linkedInLink}
                            className={style.bcSocialLink}
                        >
                            <Linkedin2
                                className={style.bcSocialLinkIcon}
                            />
                        </a>
                    :null}

                    {youTubeLink ? 
                        <a href={youTubeLink}
                            className={style.bcSocialLink}
                        >
                            <Youtube
                                className={style.bcSocialLinkIcon}
                            />
                        </a>
                    :null}
                </div>
            </div>

            <div
                className={style.bcQRBlock}
            >
                <Image
                    src={qrCodeImage}
                    alt=''
                    width={1000}
                    height={1000}
                    className={style.bcAboutQR}
                />

                <div
                    className={style.bcMemberBanner}
                >
                    <span
                        className={style.bcMemberSpan}
                    >
                        {memberBtn} 
                    </span>
                    {memberSince ? 
                    <span
                        className={style.bcMemberWhiteSpan}
                    >
                        {memberSince}
                    </span>
                    : null}
                </div>
            </div>
        </section>
    )
}