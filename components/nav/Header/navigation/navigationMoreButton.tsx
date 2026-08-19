import { NavigationMenuItem } from '@/lib/navigationTypes'
import style from './navigationMoreBtn.module.css'
import { useState } from 'react'
import { ChevronUp12 } from '@/components/icons/ChevronUp'
import { ChevronDown } from '@/components/icons/ChevronDown'
import Link from 'next/link'
import NavigationSubList from './navigationSubList'
import clsx from 'clsx'

type NavigationMoreButtonProp = {
        overflowItems : NavigationMenuItem[]
}

export default function NavigationMoreButton({overflowItems} : NavigationMoreButtonProp){
    const [ showMore, setShowMore ] = useState(false)
    const [ subMenuOpen, setSubMenuOpen ] = useState<string | null>(null)



    const handleSubMenuToggle = (item : string) => {
        setSubMenuOpen((prev) => (prev === item ? null : item))
    }

    return(
        <li
            className={style.navigationMoreButton}
            
        >
            <button
                className={style.chevronBtn}
                onClick={() => setShowMore(!showMore)}
                style={{gap:"8px", fontSize:".9rem"}}
            >
                More {showMore ? <ChevronUp12/> : <ChevronDown/>}
            </button>
            
            <ul
                className={clsx(showMore ? style.moreBtnDroplist : style.hide)}
            >
                {overflowItems.map((item) => (
                    <li
                        key={`more-${item.name}`}
                        className={style.moreBtnItem}
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
                ))}
            </ul>
        </li>
    )
}