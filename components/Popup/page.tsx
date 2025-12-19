'use client'
import { useState } from "react";
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
    storageKey: string;
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
    storageKey,
}: PopupProps){

    const [isOpen, setIsOpen ] = useState<boolean>(() => {
        if (typeof window === "undefined") return false;
        return !localStorage.getItem(storageKey);
    });

    const closeModal = () => {
        localStorage.setItem(storageKey, "true");
        setIsOpen(false);
    };

    if(!isOpen) return null;

    return (
        <div
            className={style.popupOverlay}
        >
            <div
                className={style.popup}
            >
                <div
                    className={style.closeButtonRow}
                >
                    <button
                        className={style.popupCloseBtn}
                        onClick={closeModal}
                        aria-label="Close announcement"
                    >
                        X
                    </button>
                </div>
                

                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    className={style.popupImage}
                />

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
                

                {ctaLink ?
                    <Link
                        href={ctaLink}
                        className={style.popupCtaLink}
                        onClick={closeModal}
                    >
                        {ctaText}
                    </Link>
                : null}
            </div>
        </div>
    )
}