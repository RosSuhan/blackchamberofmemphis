'use client'
import style from '@/styles/memberHero.module.css'
import Image from 'next/image'
// const handleFacebookShare = useCallback(()=>{
//     const shareUrl = `https://inenom.co.za${profile.path}`;
//     window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`)
// })

export default function MemberHeroSection(){
    return(
        <section
            className={style.memberHeroSection}
        >
            <div
                className={style.overlayBlock}
            >
                <Image
                    src={"/assets/membersBadge.webp"}
                    alt=''
                    width={250}
                    height={111}
                    className={style.memberBadge}
                />

                <h1
                    className={style.memberTitle}
                >
                    Business Name
                </h1>

                <div
                    className={style.shareRow}
                >
                    <button 
                        type="button"
                        className={style.shareBtn}
                    >
                        Share
                    </button>
                </div>
            </div>
            
        </section>
    )
}