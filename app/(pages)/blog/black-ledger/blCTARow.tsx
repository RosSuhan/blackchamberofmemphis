import style from '@/styles/blackLedgerStyles/blCTARow.module.css'
import Link from 'next/link'

export default function BlCTARow(){
    return (
        <section
            className={style.blCTARowSection}
        >
            <Link
                href={"/business-directory"}
                className={style.blCTAButton1}
            >
                Discover more community-shaping institutions
            </Link>

            <Link
                href={'/business-directory/get-listed'}
                className={style.blCTAbutton2}
            >
                Get your business listed
            </Link>
        </section>
    )
}