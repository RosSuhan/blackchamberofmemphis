import Image from 'next/image'
import style from './imageRow.module.css'

type ImageRowProp = {
    imageOne : string
    imageOneAlt : string
    imageOneWidth : number
    imageOneHeight : number
    imageTwo : string
    imageTwoAlt : string
    imageTwoWidth : number
    imageTwoHeight : number
    imageThree : string
    imageThreeAlt : string
    imageThreeWidth : number
    imageThreeHeight : number
}

export default function ImageRow({
    imageOne,
    imageOneAlt,
    imageOneWidth,
    imageOneHeight,
    imageTwo,
    imageTwoAlt,
    imageTwoWidth,
    imageTwoHeight,
    imageThree,
    imageThreeAlt,
    imageThreeWidth,
    imageThreeHeight,
} : ImageRowProp){
    return(
        <section
            className={style.imageRowSection}
        >
            <Image
                src={imageOne}
                alt={imageOneAlt}
                width={imageOneWidth}
                height={imageOneHeight}
                className={style.imageOne}
            />

            <Image
                src={imageTwo}
                alt={imageTwoAlt}
                width={imageTwoWidth}
                height={imageTwoHeight}
                className={style.imageTwo}
            />

            <Image
                src={imageThree}
                alt={imageThreeAlt}
                width={imageThreeWidth}
                height={imageThreeHeight}
                className={style.imageThree}
            />
        </section>
    )
}