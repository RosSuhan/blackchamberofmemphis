import Link from 'next/link';
import style from './navigationItem.module.css'
import NavigationSubList from "./navigationSubList";
import { useState } from 'react';
import { ChevronUp12 } from '@/components/icons/ChevronUp';
import { ChevronDown } from '@/components/icons/ChevronDown';

type NavigationItemProp = {
    item: {
        priority : number
        name: string;
        path: string;
        subLink: {name: string; path: string}[];
    }
}

export default function NavigationItem({item} : NavigationItemProp){
    const [ subMenuOpen, setSubMenuOpen ] = useState<string | null>(null)

    const handleSubMenuToggle = (item : string) => {
        setSubMenuOpen((prev) => (prev === item ? null : item))
    }

    return (
        <li
            className={style.navigationItem}
            onClick={() => {
                handleSubMenuToggle(item.name)
            }}
        >
            <Link
                href={item.path}
                className={style.navLink}
            >
                {item.name}
            </Link>

            {item.subLink && (
                <button
                    className={style.chevronBtn}
                >
                    {subMenuOpen ? <ChevronUp12/> : <ChevronDown/>}
                </button>
            )}
            {subMenuOpen === item.name ? (
                <NavigationSubList
                    subLink={item.subLink}
                /> 
            ) : null}
        </li>
    )
}