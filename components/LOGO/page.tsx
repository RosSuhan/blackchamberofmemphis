import Image from 'next/image'

type LogoProp = {
    colorScheme?: 'blackGold' | 'whiteGold' | 'whiteWhite'
}

export default function Logo({
    colorScheme = 'blackGold'
}: LogoProp){

    const logoMap = {
        blackGold : "/assets/BCM-Logo_Full-Color-Black-Text.webp",
        whiteGold : "/assets/black-chamber-of-memphis-white-color.webp",
        whiteWhite : "/assets/BCM-Logo_White.webp"
    }

    return(
        <Image
            src={logoMap[colorScheme]}
            alt='Black Chamber of Memphis Logo'
            width={2500}
            height={1060}
            loading='eager'
            style={{width:"100%", height:"auto", objectFit:'contain'}}
        />
    )
}