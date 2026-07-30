import Link from 'next/link'
import style from './navigationSubList.module.css'

type NavigationSubListProp = {
    subLink: {name: string; path: string}[];
}

export default function NavigationSubList({subLink} : NavigationSubListProp){
    return(
        <ul
            className={style.navigationSubListBlock}
        >
            {subLink.map((sub, index) => (
                <li
                    key={`${index}-${sub.name}`}
                >
                    <Link
                        href={sub.path}
                    >
                        {sub.name}
                    </Link>
                </li>
            ))}
            
        </ul>
    )
}