import style from '@/styles/getListedConfirmed.module.css'
import Image from 'next/image'

export default function Confirmed(){

    const backgroundImage = "/assets/pageHeroImage.jpg"
    
    return(
        <section
            className={style.confirmedPageSection}
        >
            <Image
                src={backgroundImage}
                alt=''
                width={1400}
                height={500}
                className={style.herobackgroundImage}
            />
        </section>
    )
}