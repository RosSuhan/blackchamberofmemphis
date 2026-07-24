import Logo from "@/components/LOGO/page";
import Link from "next/link";
import style from './headerLogo.module.css'

type HeaderLogoProp = {
    colorScheme : "blackGold" | "whiteGold" | "whiteWhite"
}

export default function HeaderLogo({
    colorScheme
}: HeaderLogoProp ){

    return(
        <Link
            href={'/'}
            className={style.headerLogo}
        >
            <Logo
                colorScheme={colorScheme}
            />
        </Link>
    )
}