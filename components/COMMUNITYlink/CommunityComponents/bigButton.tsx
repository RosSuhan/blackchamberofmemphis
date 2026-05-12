import Link from 'next/link'
import style from './bigButton.module.css'

type BigButtonProp = {
    path : string
    name : string
}

export default function BigButton({path, name}:BigButtonProp){
    return(
        <Link
            href={path}
            className={style.bigLink}
        >
            {name}
        </Link>
    )
}