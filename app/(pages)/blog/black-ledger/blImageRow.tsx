import Image from "next/image";
import style from '@/styles/blackLedgerStyles/blImageRow.module.css'

type BlImageRowProp = {
    blImage1 : string,
    blImage1Alt : string,
    blImage2 : string,
    blImage2Alt : string,
    blImage3 : string,
    blImage3Alt : string,
}

export default function BlImageRow({blImage1, blImage1Alt, blImage2, blImage2Alt, blImage3, blImage3Alt} : BlImageRowProp){
    return (
        <section
            className={style.blImageRowSection}
        >
            <Image
                src={blImage1}
                alt={blImage1Alt}
                width={900}
                height={800}
                className={style.blImgRowImage}
            />

            <Image
                src={blImage2}
                alt={blImage2Alt}
                width={900}
                height={800}
                className={style.blImgRowImage}
            />

            <Image
                src={blImage3}
                alt={blImage3Alt}
                width={900}
                height={800}
                className={style.blImgRowImage}
            />
        </section>
    )
}