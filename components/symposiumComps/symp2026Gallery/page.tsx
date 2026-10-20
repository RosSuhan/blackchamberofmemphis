import Image from 'next/image'
import './symp2026Gallery.css'

export default function Symp2026Gallery(){

    const sympGalleryImages = [
        {
            image : '/events/symposium/2026-event/DSC07481.jpg',
            alt : '',
            width : 1024,
            height : 1536
        },
        {
            image : '/events/symposium/2026-event/67-dsc08923.webp',
            alt : '',
            width : 6000,
            height : 4000
        },
        {
            image : '/events/symposium/2026-event/88-dsc09040.webp',
            alt : '',
            width : 6000,
            height : 4000
        },
        {
            image : '/events/symposium/2026-event/mary-the-k.webp',
            alt : '',
            width : 1024,
            height : 683
        },
        {
            image : '/events/symposium/2026-event/1-dsc08487.webp',
            alt : '',
            width : 6000,
            height : 4000
        },
        {
            image : '/events/symposium/2026-event/symposium-overview.webp',
            alt : '',
            width : 1024,
            height : 1536
        },
    ]
    return(
        <section
            className='symp2026GallerySection'
        >
            <div
                className='symp2026GalleryHeadingRow'
            >
                <div
                    className='symp2026GalleryHeadingBlock'
                >
                    <h2
                        className='symp26GalleryHeading'
                    >
                        Event Highlights
                    </h2>
                    <p
                        className='symp26GallerySubText'
                    >
                        From inspiring keynotes to engaging panel discussions, powerful networking and special recognitions, the Symposium showcased the strength and potential of Memphis.
                    </p>
                </div>
                <a href="https://blackbusinessassociationofmemp.box.com/s/32h16p5zblr8bjpv7kucrcslqqc5twv8"
                    className='symp2026GalleryCTAbutton'
                >
                    View Full Photo Gallery
                </a>
            </div>
            <div
                className='galleryImageRow'
            >
                {sympGalleryImages.map((image, index) => (
                    <div
                        className='galleryImageBlock' //memberGalleryImageBlock
                        key={index}
                    >
                        <Image
                            src={image.image}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            loading='lazy'
                            className='galleryImage' //memberGalleryImage
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}