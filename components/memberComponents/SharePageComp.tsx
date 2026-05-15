'use client'
import clsx from "clsx";
import { ShareIcon } from "../icons/ShareIcon";
import style from './SharePageComp.module.css'
import { useCallback, useState } from 'react'

type SharePageCompProp = {
    buttonTextColor? : string
    path : string
}


export default function SharePageComp({
    path, 
    buttonTextColor
}:SharePageCompProp){

    const [ shareButton, setShareButton ] = useState(false)

    const handleFacebookShare = useCallback(()=>{
        const shareUrl = `https://blackchamberofmemphis.org/business-directory/${path}`;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            "_blank",
            "noopener,noreferrer"
        );
        setShareButton(false)
        console.log(shareUrl)
    }, [path]);

    const handleCopyLink = useCallback(async() => {
        const shareUrl = `https://blackchamberofmemphis.org/business-directory/${path}`;
    
        try {
            await navigator.clipboard.writeText(shareUrl);
            alert("Link Copied to Clipboard!")
        } catch (err) {
            console.error("Failed to copy:", err);
        }

        setShareButton(false)
    }, [path]);

    const handleLinkedInShare = useCallback(() => {
        const shareUrl = `https://blackchamberofmemphis.org/business-directory/${path}`;
    
        window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            "_blank",
            "noopener,noreferrer"
        );
        setShareButton(false)
        console.log(shareUrl);
    }, [path]);

    return(
        <>
            <button
                type="button"
                className={style.shareButton}
                style={{color: buttonTextColor}}
                onClick={() => setShareButton(true)}
            >
                <ShareIcon
                    className='globalContactIcon'
                />
            </button>
            
            <div
                className={clsx(shareButton ? style.shareBlock : style.hide)}
            >
                <div
                    className={style.shareBlockCloseButtonRow}
                >
                    <button 
                        type="button"
                        className={style.closeButton}
                        onClick={() => setShareButton(false)}
                    >
                        X
                    </button>
                </div>

                <button 
                    type="button"
                    className={style.actionButton}
                    onClick={handleFacebookShare}
                >
                    Facebook
                </button>

                <button 
                    type="button"
                    className={style.actionButton}
                    onClick={handleLinkedInShare}
                >
                    LinkedIn
                </button>

                <button 
                    type="button"
                    className={style.actionButton}
                    onClick={handleCopyLink}
                >
                    Copy Link
                </button>
            </div>
        </>
    )
}