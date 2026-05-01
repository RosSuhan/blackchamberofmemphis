import Link from 'next/link'
import style from './pageHero.module.css'
import Image from 'next/image'

type ctaButtonProps = {
    name: string
    path: string
    type: string
}[]

type pageHeroProps = {
    mainHeading : string
    subHeading : string
    searchbar : boolean
    ctaButtons : ctaButtonProps
}

export default function PageHeroSection({
    mainHeading,
    subHeading,
    searchbar,
    ctaButtons
}: pageHeroProps){

    const backgroundImage = "/assets/may-hero-image.webp"
    return(
        <section
            className={style.pageHeroSection}
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
                <h1
                    className='globalMainHeading'
                >
                    {mainHeading}
                </h1>

                {subHeading ? 
                    <h2
                        className='globalThirdHeading'
                    >
                        {subHeading}
                    </h2>
                : null}

                {searchbar ? 
                    <form action=""
                        className={style.pageHeroSearchBar}
                    >
                        <input 
                            type="text" 
                            name="" 
                            placeholder='Search for services, businesses or keywords...'
                            className={style.pageSearchBar}
                        />
                    </form>
                : null}

                {ctaButtons?
                    <div
                        className={style.pageHeroButtonRow}
                    >
                        {ctaButtons.map((button, index) => (
                            <Link 
                                href={button.path}
                                className={button.type}
                                key={index}
                            >
                                {button.name}
                            </Link>
                ))}
                    </div>
                : null}
            </div>
        </section>
    )
}