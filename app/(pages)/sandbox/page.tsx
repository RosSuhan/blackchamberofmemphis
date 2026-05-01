import Link from 'next/link'
import style from './sandbox.module.css'
import Image from 'next/image'

export default function Sandbox(){
    const backgroundImage = "/assets/may-hero-image.webp"
    return(
        <section
            className={style.pageHeroSection}
            // style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"2rem 0"}}
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
                    Grow your business beyond visibility
                </h1>
                <h2
                    className='globalThirdHeading'
                >
                    Join a powerful network of Black-owned businesses, explore trusted local services, and stay connected with events that move Memphis forward.
                </h2>

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

                <div
                    className={style.pageHeroButtonRow}
                >
                    <Link 
                        href={""}
                        className='globalGoldButton'
                    >
                        Button
                    </Link>

                    <Link
                        href={""}
                        className='globalDarkButton'
                    >
                        Button Two
                    </Link>
                </div>
            </div>
        </section>
    )
}

// <h1
// className="globalMainHeading"
// >
//     Find Trusted Memphis Businesses
// </h1>
// <h2
//     className="globalSecondHeading"
// >
//     this is the h2 tag
// </h2>
// <h3
//     className="globalThirdHeading"
// >  
//     This is the h3 tag
// </h3>
// <div
//     className="globalGoldButton"
// >
//     button One
// </div>

// <p
//     className="globalText"
// >
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maxime porro, nulla earum omnis sint sequi alias nemo placeat laudantium mollitia, minima perferendis itaque eveniet suscipit labore dolor. Beatae, dicta.
// </p>

// <div
//     className="globalSmallText"
// >
//     this is small text
// </div>

// <div
//     className="globalXsmallText"
// >
//     this is xs text
// </div>