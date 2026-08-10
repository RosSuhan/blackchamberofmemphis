'use client'
import style from "@/styles/popup.module.css"
import Image from "next/image";
import Link from "next/link";

type PopupProps = {
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    onClose : () => void;
};

export default function Popup({
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    title,
    description,
    ctaText,
    ctaLink,
    onClose,
}: PopupProps){
    return (
        <div className={style.popupOverlay} >
            <div className={style.popup} >
                <div className={style.closeButtonRow} >
                    <button
                        className={style.popupCloseBtn}
                        onClick={onClose}
                        aria-label="Close announcement"
                    >
                        X
                    </button>
                </div>
                
                <Link
                    href={ctaLink}
                    className={style.popupClickImage}
                    onClick={onClose}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className={style.popupImage}
                    />
                </Link>

                {title ? 
                    <h2
                        className={style.popupTitle}
                    >
                        {title}
                    </h2>
                : null}

                {description ? 
                    <p
                        className={style.popupDescription}
                    >
                        {description}
                    </p>
                : null}
                

                {ctaText ?
                    <Link
                        href={ctaLink}
                        className={style.popupCtaLink}
                        onClick={onClose}
                    >
                        {ctaText}
                    </Link>
                : null}
            </div>
        </div>
    )
}