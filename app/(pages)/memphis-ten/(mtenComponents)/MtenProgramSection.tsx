import style from '@/styles/mtenProgram.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { mtenPrograms } from '@/lib/mtenPrograms'

export default function MtenProgram(){
    return(
        <section
            className={style.mtenProgramSection}
        >
            <h2
                className={style.mtenProgramHeading}
            >
                MemphisTEN Programs
            </h2>

            {mtenPrograms.map(({title, slug, backImage}, index) =>(
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
                        href={`memphis-ten/${slug}`}
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