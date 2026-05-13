import Image from 'next/image'
import style from './logoScroll.module.css'

type LogoSliderRowProp = {
    partners : {logo : string, alt : string, logoWidth: number, logoHeight : number}[]
}


export default function LogoScrollRow({partners}: LogoSliderRowProp){
    return (
        <div
            className={style.logoSliderRow}
        >
                {partners.map(({logo, alt, logoWidth, logoHeight}, z) => (
                    <Image
                        key={z}
                        src={"/partners/" + logo + ".webp"}
                        alt={alt}
                        width={logoWidth}
                        height={logoHeight}
                        className={style.partnersLogo}
                    />
                ))}
        </div>
    )
}