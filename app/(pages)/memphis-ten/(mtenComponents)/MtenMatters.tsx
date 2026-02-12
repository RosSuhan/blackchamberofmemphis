'use client'
import style from '@/styles/mtenMatters.module.css'
// import Image from "next/image";
// import mtenTwoColumnImage1 from '@/public/assets/event/voting card .jpg'
import Link from "next/link";

export default function MtenMatters(){
    return(
        <section
            className={style.mTenMattersSection}
        >
            <div
                className={style.mtenTwoColumnWordBlock}
            >
                <h2
                    className={style.mtenTwoColumnHeading}
                >
                    Why MemphisTEN Matters
                </h2>

                <p
                    className={style.mtenTwoColumnParagraph}
                >
                    The Black Chamber of Memphis advances the MemphisTEN plan, an economic empowerment initiative focused on creating through targeted strategies that strengthen nonemployer firms, expand procurement opportunities, and deliver member services that build business capacity.
                </p>
                <p
                    className={style.mtenTwoColumnParagraph}
                >
                    Our approach rests on the conviction that small businesses — particularly those owned by Black entrepreneurs — hold the greatest potential for sustainable job growth and wealth creation in our community. Through an integrated three-pillar framework — Advocacy, Access, and Acceleration — MemphisTEN addresses systemic barriers that limit minority-owned businesses from scaling.
                </p>

                <Link
                    href={'#memphisTenPrograms'}
                    className={style.mainCtaBtn}
                >
                    Learn More
                </Link>

            </div>

            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/ksAFPj8OKfw?si=gH8Uj4FqA7ZTt7hh" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className={style.mtenVideo}
                ></iframe>
        </section>
    )
}

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ksAFPj8OKfw?si=gH8Uj4FqA7ZTt7hh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}