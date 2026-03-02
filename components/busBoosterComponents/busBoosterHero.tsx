import style from '@/styles/businessBoosterImpactReport/busBoosterHero.module.css'


export default function BusBoosterHero(){
    return(
        <section
            className={style.busBoosterHero}
        >
            <h1
                className={style.busBoosterPageTitle}
            >
                <span className={style.busBoosterGoldTitle}>Business Booster</span>
                <span className={style.busBoosterWhiteTitle}>2024 - 2025 IMPACT REPORT</span>
            </h1>

            <hr className={style.busBoosterHeroLine}/>
        </section>
    )
}