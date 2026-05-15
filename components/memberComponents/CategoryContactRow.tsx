import { GlobeOutline } from '../icons/Globe'
import { BaselineLocationOn } from '../icons/Location'
import { BaselineMail } from '../icons/MailIcon'
import { Phone } from '../icons/Phone'
import BusHourComp from './BusHourComp'
import style from './CategoryContactRow.module.css'
import SharePageComp from './SharePageComp'

type CategoryContactRowProp = {
    sharePath : string
    categoryList? : {name : string, id : string}[]
    addressLink? : string
    telNumber? : string
    mail? : string
    website? : string
    businessHours? : {day: string, hours : string}[]
}

export default function CategoryContactRow({
    sharePath,
    categoryList,
    addressLink,
    telNumber,
    mail,
    website, 
    businessHours
}: CategoryContactRowProp){

    return(
        <section
            className={style.categoryContactRowSection}
        >
            <div
                className={style.catRowBlock} 
            >
                {categoryList?.map(({name, id}) => (
                    <div
                        key={id}
                        className='globalXsmallText'
                        // style={{color:'var(--darkGold)'}}
                    >
                        {name}
                    </div>
                ))}
            </div>
            <div
                className={style.contactRowBlock}
            >
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
                    

                <BusHourComp
                    buttonTextColor = {'var(--darkGold)'}
                    businessHours = {businessHours}
                />

                <SharePageComp
                    path = {sharePath}
                    buttonTextColor = {'var(--darkGold)'}
                />
            </div>
        </section>
    )
}