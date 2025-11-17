import style from '@/styles/bcomMatters.module.css'
import Image from 'next/image'

export default function BCOMmatters(){
    return(
        <section
            className={style.bcomMatterSection}
        >
            <div
                className={style.bcomMatterWordBlock}
            >
                <span
                    className={style.bcomMattersGoldHeading}
                >
                    WE TURN AMBITION INTO OPPORTUNITY
                </span>
                <h2
                    className={style.bcomMatterHeading}
                >
                    Why BCOM Matters
                </h2>
                <article
                    className={style.bcomMatterParagraph}
                >
                    <p>
                        The Black Chamber of Memphis drives inclusive economic growth through action. We equip business owners to overcome systemic barriers, enter new markets, and access the capital and resources they need to scale. At the same time, we build a stronger Memphis by cultivating a thriving network of innovative entrepreneurs who create jobs, strengthen neighborhoods, and build generational wealth. Our work turns ambition into opportunity and opportunity into prosperity.
                    </p>
                </article>
            </div>
            <Image
                src={'/assets/event/BCOM_Symposium_2025_Day1-6.jpg'}
                alt=''
                width={2048}
                height={1363}
                className={style.bcomMattersImage}
            />
        </section>
    )
}