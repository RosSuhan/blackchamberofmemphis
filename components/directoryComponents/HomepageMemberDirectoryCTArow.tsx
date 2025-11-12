import style from '@/styles/homepageDirectoryCTA.module.css'
import Link from 'next/link'


export default function HomepageMemberDirectoryCTArow(){
    return(
        <section
            className={style.homepageDirectorySection}
        >
            <div
                className={style.homepageOverlay}
            >
                <div
                    className={style.homepageDirectoryHeadingBlock}
                >
                    <h2
                        className={style.homepageDirectoryHeading}
                    >
                        MEMBER DIRECTORY
                    </h2>

                    <hr 
                        className={style.horizontalLine}
                    />
                </div>    
                <div
                    className={style.homepageDirectoryButtonBlock}
                >
                    <h3
                        className={style.homepageDirectoryButtonBlockHeading}
                    >
                        Join The Directory
                    </h3>

                    <Link
                        href={"/"}
                        className={style.homepageDirectoryButtonLink}
                    >
                        Click Here
                    </Link>
                </div>

                <div
                    className={style.homepageDirectoryButtonBlock}
                >
                    <h3
                        className={style.homepageDirectoryButtonBlockHeading}
                    >
                        Search the Directory
                    </h3>

                    <Link
                        href={"/"}
                        className={style.homepageDirectoryButtonLink}
                    >
                        Click Here
                    </Link>
                </div>
            </div>
        </section>
    )
}