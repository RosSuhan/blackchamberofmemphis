'use client'
import style from './BcContactButton.module.css'
import { GlobeOutline } from "../icons/Globe";
import { BaselineMail } from "../icons/MailIcon";
import { Phone } from "../icons/Phone";
import { DownloadIcon } from '../icons/DownloadIcon';
import { ShareIcon } from '../icons/ShareIcon';

type BcContactButtonSectionProp = {
    phoneNumber : string
    emailLink : string
    websiteLink : string
}

export default function BcContactButtonSection({
    phoneNumber,
    emailLink,
    websiteLink
}:BcContactButtonSectionProp){
    return(
        <section
            className={style.bcContactButtonSection}
        >
            <a href={`tel:+1${phoneNumber}`}
                className = {style.bcContactLink}
            >
                <Phone
                    className={style.bcContactButtonIcon}
                />
                <span
                    className={style.bcContactButtonText}
                >
                    Call
                </span>
            </a>

            <a href={emailLink}
                className = {style.bcContactLink}
            >
                <BaselineMail
                    className={style.bcContactButtonIcon}
                />
                <span
                    className={style.bcContactButtonText}
                >
                    Email
                </span>
            </a>

            <a href={websiteLink}
                className = {style.bcContactLink}
            >
                <GlobeOutline
                    className={style.bcContactButtonIcon}
                />
                <span
                    className={style.bcContactButtonText}
                >
                    Website
                </span>
            </a>

            <button
                className={style.bcSaveButton}
            >
                <DownloadIcon
                    className={style.bcContactButtonIcon}
                />
                <span
                    className={style.bcContactButtonText}
                >
                    Save Contact
                </span>
            </button>

            <button
                className={style.bcShareButton}
            >
                <ShareIcon
                    className={style.bcContactButtonIcon}
                />
                <span
                    className={style.bcContactButtonText}
                >
                    Share
                </span>
            </button>
        </section>
    )
}