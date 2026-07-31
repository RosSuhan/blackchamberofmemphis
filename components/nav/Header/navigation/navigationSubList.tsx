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
                        style={{textDecoration:'none', color:'var(--black)', textAlign:'inherit', width:"50%", padding:'.5rem 0'}}
                    >
                        {sub.name}
                    </Link>
                </li>
            ))}
            
        </ul>
    )
}