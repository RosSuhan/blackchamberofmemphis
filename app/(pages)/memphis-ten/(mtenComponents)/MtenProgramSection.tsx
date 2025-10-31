import style from '@/styles/mtenProgram.module.css'
import Image from 'next/image'
import Link from 'next/link'


const mTenPrograms = [
    {
        title: 'Back Office Support',
        desc: 'Access accounting, HR, and compliance tools to free your time for growth.',
        ctaPath: '/',
        backImage: '/assets/event/BCOM_Symposium_2025_Day1-4.jpg'
    },
    {
        title: 'Procurement Support',
        desc: 'Connect with corporate and government contracts.',
        ctaPath: '/',
        backImage: '/assets/event/BCOM_Symposium_2025_Day1-30.jpg'
    },
    {
        title: 'Acquisition Program',
        desc: 'Learn how to buy existing businesses and grow faster.',
        ctaPath: '/',
        backImage: '/assets/event/BCOMFinale2024NetworkingEvent-82.jpg'
    },
    {
        title: 'Membership support',
        desc: 'Mentorship, resources, and growth through Chamber programs.',
        ctaPath: '/',
        backImage: '/assets/event/IMG_0294.JPG'
    }
]

export default function MtenProgram(){
    return(
        <section
            className={style.mtenProgramSection}
        >
            <h2
                className={style.mtenProgramHeading}
            >
                MemphisTen Programs
            </h2>

            {mTenPrograms.map(({title, ctaPath, backImage}, index) =>(
                // This is the outer box - gold banner top and grey bottom
                <div
                    key={index}
                    className={style.mtenProgramOuterBox}
                >
                    <div
                        className={style.mtenProgramGoldBackBox}
                    ></div>
                    {/* White border block with round corners and image that is backdrop of block */}
                    <Link
                        href={ctaPath}
                        className={style.mtenProgramWhiteBox}
                    >
                        {/* image that is set as backdrop */}
                        <Image
                            src={backImage}
                            alt=''
                            width={150}
                            height={150}
                            className={style.mtenProgramBackImage}
                        />

                        {/* wording block that is over image */}
                        <div
                            className={style.mtenProgramTitleBlock}
                        >
                            {/* MemphisTen */}
                            <span
                                className={style.mtenProgramGoldTitle}
                            >
                                MemphisTen
                            </span>

                            {/* program title */}
                            <h3
                                className={style.mtenProgramWhiteTitle}
                            >
                                {title}
                            </h3>

                            {/* on hover show description */}
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    )
}