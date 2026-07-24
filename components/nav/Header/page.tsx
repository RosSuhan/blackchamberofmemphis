'use client'
import style from './header.module.css'
import { clsx } from 'clsx'
import { MenuHamburger } from '@/components/icons/menuHamburger'
import { MenuClose } from '@/components/icons/menuClose'
import { menuList } from '@/lib/menuList'
import Link from 'next/link'
import { ChevronDown } from '@/components/icons/ChevronDown'
import { useState } from 'react'
import { ChevronUp12 } from '@/components/icons/ChevronUp'
import HeaderLogo from './headerLogo/page'

export default function Header(){
    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ subMenuOpen, setSubMenuOpen ] = useState<string | null>(null)

    const handleSubMenuToggle = (menuName: string) => {
        setSubMenuOpen((prev) => (prev === menuName ? null : menuName ))
    }

    return(
        <header
                className={style.header}
            >
                <HeaderLogo
                    colorScheme='blackGold'
                />

                <nav
                    className={clsx(menuOpen ? style.headerMobileNav : style.headerNav)}
                >
                    <ul
                        className={style.navList}
                    >
                        {menuList.map((menuItem) => (
                            <li
                                key={menuItem.name}
                                className={style.navItem}
                                onClick={() => {
                                    handleSubMenuToggle(menuItem.name)
                                }}
                            >
                                <Link
                                    href={menuItem.path}
                                    className={style.navLink}
                                >
                                    {menuItem.name}
                                </Link>

                                {menuItem.subLink && (
                                    <>
                                        {subMenuOpen === menuItem.name ?  <ChevronUp12/> : <ChevronDown/>}

                                        <ul
                                            className={clsx( subMenuOpen === menuItem.name? style.navSubList : style.hide)}
                                        >
                                            {menuItem.subLink.map((sub) => (
                                                <li
                                                    key={sub.name}
                                                >
                                                    <Link
                                                        href={sub.path}
                                                        className={style.navLink}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>

                    <a 
                        href=""
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={style.headerGoldButton}
                    >
                        JOIN BCoM
                    </a>
                </nav>

                <button 
                    type="button"
                    className={style.mobileNavMenuButton}
                    onClick={() => {
                        setMenuOpen(!menuOpen)
                        setSubMenuOpen(null)
                    }}    
                >
                    {menuOpen ? 
                        <MenuClose
                            width="1.6rem"
                            height="1.6rem"
                        /> 
                        :
                        <MenuHamburger
                            width="1.6rem"
                            height="1.6rem"
                        />
                    }
                </button>
            </header>
    )
}