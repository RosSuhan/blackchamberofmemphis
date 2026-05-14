import Image from 'next/image'
import style from './MemberPageHero.module.css'

type MemberPageHeroProp = {
    profileLogo : string
    businessName : string
}

const backgroundImage = "/assets/pageHeroImage.jpg"

export default function MemberPageHero({profileLogo, businessName}: MemberPageHeroProp){
    
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

                <div>
                    <h1>Business Name</h1>
                    <div>
                        star 
                        Verified BCoM Member
                    </div>
                </div>
            </div>
        </section>
    )
}