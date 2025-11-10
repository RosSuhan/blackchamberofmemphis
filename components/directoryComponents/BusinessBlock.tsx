import Image from "next/image";
import Link from "next/link";
import style from '@/styles/directoryMemberBlock.module.css'

type BusinessBlockProps = {
    key : string
    blockPath : string
    blockImage : string
    businessTitle : string
    businessDescription : string
}

export default function BusinessBlock({key, blockPath, blockImage, businessTitle, businessDescription }: BusinessBlockProps){

    
    return (
        <Link
            href={'/members/' + blockPath}
            className={style.businessBlockLink}
            key={key}
        >
            <Image
                src={'/members/' + blockImage + '.webp'}
                alt=""
                width={325}
                height={200}
                className={style.businessBlockImage}
            />

            <h2
                className={style.businessBlockName}
            >
                {businessTitle}
            </h2>

            <p
                className={style.businessBlockDesc}
            >
                {businessDescription}
            </p>

            <div
                className={style.businessBlockBanner}
            >
                Read more...
            </div>
        </Link>
    )
}