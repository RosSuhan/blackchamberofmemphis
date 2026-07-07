'use client'
import style from './BcContactButton.module.css'
import { GlobeOutline } from "../icons/Globe";
import { BaselineMail } from "../icons/MailIcon";
import { Phone } from "../icons/Phone";
import { DownloadIcon } from '../icons/DownloadIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { downloadVCard } from '@/lib/vcard';
import { useState } from 'react';

type BcContactButtonSectionProp = {
    phoneNumber : string
    emailLink : string
    websiteLink : string
    name : string,
    org : string,
    title : string,
    address : string,
}

export default function BcContactButtonSection({
    phoneNumber,
    emailLink,
    websiteLink,
    name,
    org,
    title,
    address
}:BcContactButtonSectionProp){
    const [ shareStatus, setShareStatus ] = useState<'idle' | 'copied'>('idle')

    const handleSaveContact = () => {
        downloadVCard({
            name,
            org,
            title,
            phone: phoneNumber,
            email: emailLink.replace('mailto:', ''),
            url: websiteLink,
            address,
        });
        //lets BcPopup know a contact was saved, so it can trigger the share-details ask
        window.dispatchEvent(new Event('bcm:contact-saved'));
    };

    const handleShare = async() => {
        const shareData = {
            title: `${name} - ${org}`,
            text: `${name}'s digital business card`,
            url : window.location.href,
        }

        if(navigator.share) {
            try {
                await navigator.share(shareData);
            } catch {
                //user cancelled the share sheet - nothing to do
            }
            return;
        }

        //fallback for browsers without the web share API
        try {
            await navigator.clipboard.writeText(shareData.url);
            setShareStatus('copied');
            setTimeout(() => setShareStatus('idle'), 2000);
        } catch {
            //Clipboard blocked - worst case, they can copy the url manually
        }
    }

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
                onClick={handleSaveContact}
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
                onClick={handleShare}
            >
                <ShareIcon
                    className={style.bcContactButtonIcon}
                />
                <span
                    className={style.bcContactButtonText}
                >
                    {shareStatus === 'copied' ? 'Link Copied' : 'Share'}
                </span>
            </button>
        </section>
    )
}