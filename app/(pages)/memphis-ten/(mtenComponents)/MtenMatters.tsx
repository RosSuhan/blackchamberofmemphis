'use client'
import style from '@/styles/mtenMatters.module.css'
import Image from "next/image";
import mtenTwoColumnImage1 from '@/public/assets/event/voting card .jpg'
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
                    Why MemphisTen Matters
                </h2>

                <p
                    className={style.mtenTwoColumnParagraph}
                >
                    Memphis has one of the highest rates of entrepreneurship, but too few of those businesses grow into employers.
                {/* MemphisTEN bridges that gap with access, advocacy, and acceleration — turning solopreneurs into thriving small businesses. */}
                </p>

                <Link
                    href={''}
                    className={style.mainCtaBtn}
                >
                    Learn More
                </Link>

            </div>
            
            <Image
                src={mtenTwoColumnImage1}
                alt={''}
                width={300}
                height={200}
                className={style.mtenTwoColumnImage}
            />
        </section>
    )
}