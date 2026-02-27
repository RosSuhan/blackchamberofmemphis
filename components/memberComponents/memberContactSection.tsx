import style from '@/styles/memberContact.module.css'
import Image from 'next/image'
import { FacebookFill } from '../icons/FacebookIcon'
import { TwitterStroke12 } from '../icons/TwitterIcon'
import { Youtube } from '../icons/YoutubeIcon'
import { Phone } from '../icons/Phone'
import { BaselineMail } from '../icons/MailIcon'
import { GlobeOutline } from '../icons/Globe'
import { BaselineLocationOn } from '../icons/Location'
import { Instagram } from '../icons/InstagramIcon'
import { Linkedin2 } from '../icons/LinkedInIcon'
import { BusinessHoursType } from '@/lib/members/memberHoursTypes'
import { LinktreeLogoBold } from '../icons/Linktree'
import { TiktokIcon } from '../icons/TikTokIcon'
import { Pinterest } from '../icons/Pinterest'

type memberContactProp = {
    phone : string
    mail : string
    website : string
    addressLink : string
    addressDetail : string
    facebook : string
    instagram : string
    youtube : string
    linkedIn : string
    linktree : string
    twitter : string
    tiktok : string
    pinterest : string
    profileLogo : string
    businessName : string
    businessHours : BusinessHoursType[]
}

export default function MemberContactSection({
    phone,
    mail,
    website,
    addressLink,
    addressDetail,
    facebook,
    instagram,
    youtube,
    linkedIn,
    linktree,
    twitter,
    tiktok,
    pinterest,
    profileLogo,
    businessName,
    businessHours,
} : memberContactProp){
    const socials = [
        { url: facebook, Icon: FacebookFill },
        { url: instagram, Icon: Instagram },
        { url: youtube, Icon: Youtube },
        { url: linkedIn, Icon: Linkedin2 },
        { url: linktree, Icon: LinktreeLogoBold },
        { url: twitter, Icon: TwitterStroke12 },
        { url: tiktok, Icon: TiktokIcon },
        { url: pinterest, Icon: Pinterest },
    ].filter(item => item.url)

    return(
        <section
            className={style.memberContactSection}
        >
            <div
                className={style.memberContactBlock}
            >
                {phone ? 
                    <a 
                        href=""
                        className={style.memberContactLink}
                    >
                        <Phone
                            className={style.memberContactIcon}
                        />
                        {phone}
                    </a>
                : null}    

                {mail ? 
                    <a 
                        href=""
                        className={style.memberContactLink}
                    >
                        <BaselineMail
                            className={style.memberContactIcon}
                        />
                        {mail}
                    </a>
                : null}

                {website ? 
                    <a 
                        href=""
                        className={style.memberContactLink}
                    >
                        <GlobeOutline
                            className={style.memberContactIcon}
                        />
                        {website}
                    </a>
                : null}

                {addressDetail ? (
                    addressLink ? (
                        <a 
                        href=""
                        className={style.memberContactLink}
                    >
                        <address
                            className={style.memberContactLink}
                        >
                            <BaselineLocationOn
                                className={style.memberContactIcon}
                            />
                            {addressDetail}
                        </address>
                    </a>
                    ) : (
                        <address
                            className={style.memberContactLink}
                        >
                            <BaselineLocationOn
                                className={style.memberContactIcon}
                            />
                            {addressDetail}
                        </address>
                    )
                ) : null}
                
                {businessHours.length > 0 && (
                    <ul 
                        className={style.busHoursList}
                    >
                        <h3
                            className={style.busHoursListHeading}
                        >Business Hours</h3>
                        {businessHours.map(({day, hours}) => (
                            <li
                                key={day}
                                className={style.busHoursItem}
                            >
                                <span>{day + ":"}</span>
                                <span>{hours}</span>  
                            </li>
                        ))}
                        
                    </ul>
                )}
            </div>

            {socials.length > 0 && (
                <div
                    className={style.memberSocialBlock}
                >
                    {socials.map(({url, Icon}, index) => (
                        <a 
                            href={url}
                            key={index}
                            className={style.memberSocialLink}
                        >
                            <Icon
                                className={style.memberSocialLinkIcon}
                            />
                        </a>
                    ))}
                </div>
            )}

            <div
                className={style.logoBlock}
            >
                <Image
                    src = {"/members/" + profileLogo + '.webp'}
                    alt = {'Business Logo' + businessName}
                    width={325}
                    height={200}
                    className={style.memberLogo}
                />
            </div>
        </section>
    )
}