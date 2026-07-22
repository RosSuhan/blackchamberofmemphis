'use client'
import Logo from '@/components/LOGO/page'
import style from './sandbox.module.css'
import { useState } from 'react'
import { MenuClose } from '@/components/icons/menuClose'
import { MenuHamburger } from '@/components/icons/menuHamburger'
import clsx from 'clsx'
import { menuList } from '@/lib/menuList'
import Link from 'next/link'
import { ChevronDown } from '@/components/icons/ChevronDown'
import { ChevronUp12 } from '@/components/icons/ChevronUp'


export default function Sandbox(){
    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ subMenuOpen, setSubMenuOpen ] = useState<string | null>(null)

    const handleSubMenuToggle = (menuName: string) => {
        setSubMenuOpen((prev) => (prev === menuName ? null : menuName ))
    }

    return(
        <main
            className={style.pageHeroSection}
        >
            <header
                className={style.header}
            >
                <Link
                    href={'/'}
                    className={style.headerLogo}
                >
                    <Logo
                        blackGoldLogo={true}
                    />
                </Link>

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
        </main>
    )
}