import style from './mlkhero.module.css'

export default function MLKHero(){
    return (
        <section
            className={style.mlkHeroSection}
        >
            <h1
                className={style.mlkMainHeading}
            >
                Honoring the Life and Legacy of Dr. Martin Luther King, Jr.
            </h1>
            <h2
                className={style.subHeading}
            >
                The Black Ledger: Invest in US
            </h2>
        </section>
    )
}
