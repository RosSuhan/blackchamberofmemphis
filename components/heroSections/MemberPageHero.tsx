import Image from 'next/image'
import style from './MemberPageHero.module.css'
import { Star } from '../icons/star'

type MemberPageHeroProp = {
    profileLogo : string
    businessName : string
    memberStatus : boolean
}

const backgroundImage = "/assets/pageHeroImage.jpg"

export default function MemberPageHero({profileLogo, businessName, memberStatus}: MemberPageHeroProp){
    
    return(
        <section
            className={style.memberPageHero}
        >
            <Image
                src={backgroundImage}
                alt=''
                width={1400}
                height={500}
                className={style.herobackgroundImage}
            />
            <div
                className={style.pageHeroOverlay}
            >
                <div
                    className={style.pageHeroImageBlock}
                >
                    <Image
                        src = {"/members/" + profileLogo + '.webp'}
                        alt = {'Business Logo' + businessName}
                        width={325}
                        height={200}
                        className={style.memberLogo}
                    />
                </div>

                <div
                    className={style.pageHeroNameBlock}
                >
                    <h1
                        className='globalMainHeading'
                    >
                        {businessName}
                    </h1>
                    {memberStatus ? 
                        <div
                            className={style.memberVerification}
                        >
                            <Star
                                className={style.memberHeroStar}
                            />
                            Verified BCoM Member
                        </div>
                    : null}
                </div>
            </div>
        </section>
    )
}