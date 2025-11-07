import style from '@/styles/textBackdrop.module.css'
import Image from 'next/image'

type TextBackdropProps = {
    backdropImage: string
    textBackdropContent: string
}
export default function TextBackdrop({backdropImage, textBackdropContent}: TextBackdropProps){
    return(
        <section
            className={style.textBackdropSection}
        >
            <Image
                src={backdropImage}
                alt=''
                width={2000}
                height={2000}
                className={style.backdropImagePic}
            />

            <div
                className={style.textContentBlock}
            >
                <h2
                    className={style.textContentBlockHeading}
                >
                    Generational Wealth
                </h2>

                <div 
                    dangerouslySetInnerHTML={{__html: textBackdropContent}} 
                    className={style.textBackdropContentText}
                />
            </div>
        </section>
    )
}