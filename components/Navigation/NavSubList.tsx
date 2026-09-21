import Link from 'next/link'
import './navSubList.css'

type NavSubListProp = {
    navSubListNameBlock? : boolean
    navSubListBlockName? : string
    navSubListClassName : string
    navSubItemClassName : string
    subLink : { name : string; path : string }[]
}

export default function NavSubList({
    navSubListNameBlock = false,
    navSubListBlockName,
    navSubListClassName,
    navSubItemClassName,
    subLink
} : NavSubListProp ){
    return(
        <ul
            className = {navSubListClassName}
        >
            {navSubListNameBlock && (
                <div
                    className = 'navSubListBlockNameRow'
                >
                    {navSubListBlockName}
                </div>
            )} 
            
            {subLink.map((sub, index) =>
                <li
                    className = {navSubItemClassName}
                    key={`${index}-${sub.name}`}
                >
                    <Link 
                        href={sub.path}
                        className='navLink'
                    >
                        {sub.name}
                    </Link>
                </li>
            )}
        </ul>
    )
}