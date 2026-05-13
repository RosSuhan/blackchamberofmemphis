import Image from 'next/image'
import style from './logoSlider.module.css'

type LogoSliderRowProp = {
    partners : {logo : string, alt : string, logoWidth: number, logoHeight : number}[]
}
export default function LogoSlider({partners}: LogoSliderRowProp){
    const duplicatedPartners = [...partners, ...partners]

    return(
        <div
            className={style.slider}
        >
            <div
                className={style.sliderTrack}
            >
                {duplicatedPartners.map(({logo, alt, logoWidth, logoHeight}, z) => (
                    <div
                        key={z}
                        className={style.logoWrapper}
                    >
                        <Image
                            key={z}
                            src={"/partners/" + logo + ".webp"}
                            alt={alt}
                            width={logoWidth}
                            height={logoHeight}
                            className={style.partnersLogo}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}