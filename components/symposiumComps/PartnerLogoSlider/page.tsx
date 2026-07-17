import Image from 'next/image'
import style from './partnerLogoSlider.module.css'

type LogoSliderRowProp = {
    partners : {image : string, alt : string, width: number, height : number}[]
}
export default function PartnerLogoSlider({partners}: LogoSliderRowProp){
    const duplicatedPartners = [...partners, ...partners.slice(0.5)]

    return(
        <div
            className={style.slider}
        >
            <div
                className={style.sliderTrack}
            >
                {duplicatedPartners.map(({image, alt, width, height}, z) => (
                    <div
                        key={z}
                        className={style.logoWrapper}
                    >
                        <Image
                            key={`${image}-${z}`}
                            src={image}
                            alt={alt}
                            width={width}
                            height={height}
                            sizes='(max-width:768px) 120px, 180px'
                            className={style.partnersLogo}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}