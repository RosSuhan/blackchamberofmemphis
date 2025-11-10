'use client'
import Image from "next/image";
import Link from "next/link";
import style from '@/styles/directoryMemberBlock.module.css'
import ReadMore from "./ReadMore";
import { Phone } from "../icons/Phone";
import { BaselineMail } from "../icons/MailIcon";
import { GlobeOutline } from "../icons/Globe";



type BusinessBlockProps = {
    id : string
    blockPath : string
    blockImage : string
    businessTitle : string
    businessDescription : string
    phoneNumber : string
    emailText : string
    websiteLink : string
}


export default function BusinessBlock({id, blockPath, blockImage, businessTitle, businessDescription, phoneNumber, emailText, websiteLink }: BusinessBlockProps){

    
    return (
        <div
            className={style.businessBlockLink}
            key={id}
        >
            <Link
                href={"/members/" + blockPath}
                className={style.businessLogoBlock}
            >
                <Image
                    src={'/members/' + blockImage + '.webp'}
                    alt=""
                    width={325}
                    height={200}
                    className={style.businessBlockImage}
                />
            </Link>

            <div
                className={style.businessDescBlock}
            >
                <Link
                    href={"/members/" + blockPath}
                    className={style.businessNameLink}
                >
                    <h2
                        className={style.businessBlockName}
                    >
                        {businessTitle}
                    </h2>
                </Link>

                <p
                    className={style.businessBlockDesc}
                >
                    <ReadMore
                        text = {businessDescription}
                        limit={15}
                    />
                </p>
            </div>

            <div
                className={style.businessContactBlock}
            >
                {phoneNumber? 
                        <a 
                        href={"tel:" + phoneNumber}
                        className={style.businessContactBlockLink}
                    >
                        <Phone
                            className={style.contactIcon}
                        />
                        {phoneNumber}
                    </a>    
                : null}

                {emailText ? 
                    <a 
                        href={"mailto:" + emailText}
                        className={style.businessContactBlockLink}
                    >
                        <BaselineMail
                            className={style.contactIcon}
                        />
                        {emailText}
                    </a>    
                : null}

                {websiteLink ? 
                    <a 
                        href={websiteLink}
                        className={style.businessContactBlockLink}
                    >
                        <GlobeOutline
                            className={style.contactIcon}
                        />
                        {websiteLink}
                    </a>    
                : null}

                <Link
                    href={"/members/" + blockPath}
                    className={style.viewProfile}
                >
                    View Profile
                </Link>
            </div>
        </div>
    )
}