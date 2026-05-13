import Image from 'next/image'
import style from './logoStatic.module.css'

type LogoSliderRowProp = {
    partners : {logo : string, alt : string, logoWidth: number, logoHeight : number}[]
}

export default function LogoStaticRow({partners}: LogoSliderRowProp){
    return (
        <div
            className={style.logoStaticRow}
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