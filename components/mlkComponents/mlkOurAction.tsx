import Link from "next/link";
import style from './mlkOurAction.module.css'

export default function MLKOurAction(){
    return(
        <section
            className={style.mlkOAsection}
        >
            <p
                className={style.transitionText}
            >
                Dr. King’s words challenge us not only to remember his legacy, but to live it. His call for economic justice reminds us that progress is measured by the systems we build and the opportunities we create for others.
            </p>

            <div
                className={style.transitionBlock}
            >
                <h3
                    className={style.transitionHeading}
                >
                    Carrying Forward the Work
                </h3>

                <ul
                    className={style.transitionList}
                >
                    <li>
                        Strengthening Black-owned businesses
                    </li>
                    <li>
                        Supporting job creation and procurement access
                    </li>
                    <li>
                        Building systems for long-term economic growth
                    </li>
                </ul>
            </div>

            <div
                className={style.mlkOAButtonRow}
            >
                <Link
                    href={'/memphis-ten'}
                    className={style.mlkCtaButtonOne}
                >
                    Learn more about MemphisTEN
                </Link>

                <Link
                    href={"/business-directory"}
                    className={style.mlkCtaButtonTwo}
                >
                    Support Black-owned Businesses
                </Link>
            </div>
        </section>
    )
}