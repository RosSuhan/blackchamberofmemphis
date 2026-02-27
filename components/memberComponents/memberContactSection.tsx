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

            <div
                className={style.memberSocialBlock}
            >
                {facebook ? (
                    <a 
                        href={facebook}
                        className={style.memberSocialLink}
                    >
                        <FacebookFill
                            className={style.memberSocialLinkIcon}
                        />
                    </a>
                ) : null }
                
                {instagram ? (
                    <a 
                        href={instagram}
                        className={style.memberSocialLink}
                    >
                        <Instagram
                            className={style.memberSocialLinkIcon}
                        />
                    </a>
                ) : null }

                {youtube ? (
                    <a 
                        href={youtube}
                        className={style.memberSocialLink}
                    >
                        <Youtube
                            className={style.memberSocialLinkIcon}
                        />
                    </a>
                ) : null }

                {linkedIn ? (
                    <a 
                        href={linkedIn}
                        className={style.memberSocialLink}
                    >
                        <Linkedin2
                            className={style.memberSocialLinkIcon}
                        />
                    </a>
                ) : null }

                {linktree ? (
                    <a 
                        href={linktree}
                        className={style.memberSocialLink}
                    >
                        <LinktreeLogoBold
                            className={style.memberSocialLinkIcon}
                        />
                    </a>
                ) : null }

                {twitter ? (
                    <a 
                        href={twitter}
                        className={style.memberSocialLink}
                    >
                        <TwitterStroke12
                            className={style.memberSocialLinkIcon}
                        />
                    </a>
                ) : null }

                {tiktok ? (
                    <a 
                        href={tiktok}
                        className={style.memberSocialLink}
                    >
                        <TiktokIcon
                            className={style.memberSocialLinkIcon}
                        />
                    </a>
                ) : null }

                {pinterest ? (
                    <a 
                        href={pinterest}
                        className={style.memberSocialLink}
                    >
                        <Pinterest
                            className={style.memberSocialLinkIcon}
                        />
                    </a>
                ) : null }
            </div>

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