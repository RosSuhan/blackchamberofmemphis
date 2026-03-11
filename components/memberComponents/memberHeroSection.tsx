'use client'
import style from '@/styles/memberHero.module.css'
import clsx from 'clsx'
import Image from 'next/image'
import { useCallback, useState } from 'react'


type memberHeroSectionProp = {
    memberStatus : boolean
    businessName : string
    path : string
}

export default function MemberHeroSection({
    memberStatus,
    businessName,
    path
} : memberHeroSectionProp){

    const [ shareButton, setShareButton ] = useState(false)

    const handleFacebookShare = useCallback(()=>{
        const shareUrl = `https://blackchamberofmemphis.org/business-directory/${path}`;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            "_blank",
            "noopener,noreferrer"
        );

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
    }, [path]);

    const handleLinkedInShare = useCallback(() => {
        const shareUrl = `https://blackchamberofmemphis.org/business-directory/${path}`;
    
        window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            "_blank",
            "noopener,noreferrer"
        );
    
        console.log(shareUrl);
    }, [path]);

    return(
        <section
            className={style.memberHeroSection}
        >
            <div
                className={style.overlayBlock}
            >
                {memberStatus ? 
                    <Image
                        src={"/assets/membersBadge.webp"}
                        alt=''
                        width={250}
                        height={111}
                        className={style.memberBadge}
                    />
                : null}
                

                <h1
                    className={style.memberTitle}
                >
                    {businessName}
                </h1>

                <div
                    className={style.shareRow}
                >
                    <button 
                        type="button"
                        className={style.shareBtn}
                        onClick={() => setShareButton(true)}
                    >
                        Share
                    </button>

                    <div
                        className={clsx(shareButton ? style.shareBlock : style.hide)}
                    >
                        <div
                            className={style.closeShareButtonRow}
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
                            className={style.shareButton}
                            onClick={handleFacebookShare}
                        >
                            Facebook
                        </button>

                        <button
                            className={style.shareButton}
                            onClick={handleCopyLink}
                        >
                            LinkedIn
                        </button>

                        <button
                            className={style.shareButton}
                            onClick={handleLinkedInShare}
                        >
                            Copy Link
                        </button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}