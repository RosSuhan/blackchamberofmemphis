import Image from 'next/image'
import { GalleryImageType } from './GalleryImageType'
import style from './gallery.module.css'

type GallerySectionProps = {
    sectionBackground : string
    galleryHeadingText : string
    galleryImages: GalleryImageType[],
}

export default function GallerySection({
    sectionBackground,
    galleryHeadingText, 
    galleryImages,
}: GallerySectionProps){
    return(
        <section
            className={style.gallerySection}
            style={{background:`${sectionBackground}`}}
        >
            <h2
                className={style.galleryHeading}
            >
                {galleryHeadingText}
            </h2>

            <div
                className={style.galleryImageRow} //memberGalleryBlock
            >
                {galleryImages.map((image) => (
                
                    <div
                        className={style.galleryImageBlock} //memberGalleryImageBlock
                        key={image.name}
                    >
                        <Image
                            src={image.image}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className={style.galleryImage} //memberGalleryImage
                        />
                    </div>
                
                ))}
            </div>
        </section>
    )
}

