import Link from 'next/link';
import style from './navigationItem.module.css'
import NavigationSubList from "./navigationSubList";

type NavigationItemProp = {
    item: {
        name: string;
        path: string;
        subLink: {name: string; path: string}[];
    }
}

export default function NavigationItem({item} : NavigationItemProp){
    return (
        <li
            className={style.navigationItem}
        >
            <Link
                href={item.path}
            >
                {item.name}
            </Link>


                <NavigationSubList
                    subLink={item.subLink}
                />            
        </li>
    )
}