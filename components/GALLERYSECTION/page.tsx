import Image from 'next/image'
import { GalleryImageType } from './GalleryImageType'
import style from './gallery.module.css'

type GallerySectionProps = {
    sectionBackground? : string
    galleryHeadingText? : string
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
            {galleryHeadingText ? 
                <h2
                    className={style.galleryHeading}
                >
                    {galleryHeadingText}
                </h2> 
            : null}

            <div
                className={style.galleryImageRow} //memberGalleryBlock
            >
                {galleryImages.map((image, index) => (
                
                    <div
                        className={style.galleryImageBlock} //memberGalleryImageBlock
                        key={index}
                    >
                        <Image
                            src={image.image}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            loading='lazy'
                            className={style.galleryImage} //memberGalleryImage
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

