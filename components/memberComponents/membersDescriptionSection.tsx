'use client'
import { GalleryImage } from '@/lib/members/memberGalleryType'
import style from '@/styles/memberDescription.module.css'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

type memberDescriptionProp = {
    shortDescription : string,
    longBusDescription : string,
    gallery : GalleryImage[],
}

export default function MembersDescriptionSection({
    shortDescription,
    longBusDescription,
    gallery,
} : memberDescriptionProp){
    const [ buttonActive, setButtonActive ] = useState(false)
    return(
        <section
            className={style.memberDescriptionSection}
        >
            <div
                className={style.memberDescriptionButtonRow}
            >
                <button
                    type='button'
                    className={clsx(buttonActive ? style.memberDescriptionButtons : style.memberActiveButton)}
                    onClick={() => setButtonActive(false)}
                >
                    Information
                </button>

                {gallery.length > 0 &&
                    (
                        <button
                            type='button'
                            className={clsx(buttonActive ? style.memberActiveButtonTwo : style.memberDescriptionButtons)}
                            onClick={() => setButtonActive(true)}
                        >
                            Gallery
                        </button>
                    )
                }
            </div>

            {longBusDescription ? 
                <div
                    className={clsx(buttonActive ? style.hide : style.memberDescriptionBlock)}
                    dangerouslySetInnerHTML={{__html: longBusDescription}}
                />
            : 
                <div
                    className={clsx(buttonActive ? style.hide : style.memberDescriptionBlock)}
                    dangerouslySetInnerHTML={{__html: shortDescription}}
                />
            }

            <div
                className={clsx(buttonActive ? style.memberGalleryBlock : style.hide)}
            >
                {gallery?.map((photo, index) => (
                    <div
                        className={style.memberGalleryImageBlock}
                        key={index}
                    >
                        <Image
                            src={photo.image}
                            alt={photo.alt}
                            width={photo.width}
                            height={photo.height}
                            className={style.memberGalleryImage}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}