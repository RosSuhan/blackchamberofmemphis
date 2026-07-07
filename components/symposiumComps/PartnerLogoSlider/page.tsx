import Image from 'next/image'
import style from './partnerLogoSlider.module.css'

type LogoSliderRowProp = {
    partners : {image : string, alt : string, width: number, height : number}[]
}
export default function PartnerLogoSlider({partners}: LogoSliderRowProp){
    const duplicatedPartners = [...partners, ...partners]

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
                            key={z}
                            src={image}
                            alt={alt}
                            width={width}
                            height={height}
                            className={style.partnersLogo}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}