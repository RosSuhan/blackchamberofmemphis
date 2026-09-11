import { FacebookFill } from '../icons/FacebookIcon'
import { GlobeOutline } from '../icons/Globe'
import { Instagram } from '../icons/InstagramIcon'
import { Linkedin2 } from '../icons/LinkedInIcon'
import { BaselineLocationOn } from '../icons/Location'
import { BaselineMail } from '../icons/MailIcon'
import { Phone } from '../icons/Phone'
import { TwitterStroke12 } from '../icons/TwitterIcon'
import { Youtube } from '../icons/YoutubeIcon'
import BusHourComp from './BusHourComp'
import style from './CategoryContactRow.module.css'
import SharePageComp from './SharePageComp'

type CategoryContactRowProp = {
    businessName : string
    sharePath : string
    // categoryList? : {name : string, id : string}[]
    addressLink? : string
    telNumber? : string
    mail? : string
    website? : string
    businessHours? : {day: string, hours : string}[]
    facebook : string
    instagram : string
    youtube : string
    linkedIn : string 
    twitter : string
    pinterest : string 
}

export default function CategoryContactRow({
    businessName,
    sharePath,
    // categoryList,
    addressLink,
    telNumber,
    mail,
    website, 
    businessHours,
    facebook,
    instagram,
    youtube, 
    linkedIn,
    twitter,
    pinterest
}: CategoryContactRowProp){

    return(
        <section
            className={style.categoryContactRowSection}
        >
            {facebook && (
                <a 
                    href = {facebook}
                    className={style.contactLink}
                    aria-label={`Follow ${businessName} on Facebook`}
                >
                    <FacebookFill
                        className='globalContactIcon'
                    />
                </a>
            )}

            {instagram && (
                <a 
                    href = {instagram}
                    className = {style.contactLink}
                    aria-label={`Follow ${businessName} on Instagram`}
                >
                    <Instagram
                        className='globalContactIcon'
                    />
                </a>
            )}

            {youtube && (
                <a 
                    href={youtube}
                    className = {style.contactLink}
                    aria-label={`Follow ${businessName} on Youtube`}
                >
                    <Youtube
                        className='globalContactIcon'
                    />
                </a>
            )}

            {linkedIn && (
                <a 
                    href={linkedIn}
                    className = {style.contactLink}
                    aria-label={`Follow ${businessName} on LinkedIn`}
                >
                    <Linkedin2
                        className='globalContactIcon'
                    />
                </a>
            )}

            {twitter && (
                <a 
                    href={twitter}
                    className = {style.contactLink}
                    aria-label={`Follow ${businessName} on Twitter`}
                >
                    <TwitterStroke12
                        className='globalContactIcon'
                    />
                </a>
            )}

            {pinterest && (
                <a 
                    href={pinterest}
                    className = {style.contactLink}
                    aria-label={`Follow ${businessName} on Pinterest`}
                >
                    <Youtube
                        className='globalContactIcon'
                    />
                </a>
            )}

            {website ? 
                <a href={website}
                    className={style.contactLink}
                >
                    <GlobeOutline
                        className='globalContactIcon'
                    />
                </a>
            : null}

            {telNumber ? 
                <a href={`tel:${telNumber}`}
                    className={style.contactLink}
                >
                    <Phone
                        className='glabalContactIcon'
                    />
                </a>
            : null }

            {mail ? 
                <a href={`mailto:${mail}`}
                    className={style.contactLink}
                >
                    <BaselineMail
                        className='globalContactIcon'
                    />
                </a>
            : null }

            {addressLink ?
                <a href={addressLink}
                    className={style.contactLink}
                >
                    <BaselineLocationOn
                        className='globalContactIcon'
                    />
                </a>
            : null}
                
            {businessHours && businessHours.length > 0 && (
                <BusHourComp
                    buttonTextColor = {'var(--darkGold)'}
                    businessHours = {businessHours}
                />
            )}

            <SharePageComp
                path = {sharePath}
                buttonTextColor = {'var(--darkGold)'}
            />
        </section>
    )
}