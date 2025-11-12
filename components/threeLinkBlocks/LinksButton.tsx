'use client'
import style from '@/styles/linksButton.module.css'
import Image from 'next/image'
import Link from 'next/link'

type LinksButtonProps = {
    path : string,
    image : string,
    buttonText : string
}

export default function LinksButton({path, image, buttonText }: LinksButtonProps){
    return(
        <Link
            href={path}
            className={style.linkButton}
        >
            <Image
                src={image}
                alt=''
                width={400}
                height={400}
                className={style.linkButtonBackground}
            />
            <div
                className={style.linkButtonOverlay}
            >
                {buttonText}
            </div>
        </Link>
    )
}