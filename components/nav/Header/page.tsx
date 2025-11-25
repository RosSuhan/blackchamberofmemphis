'use client'
import Image from 'next/image'
import style from './header.module.css'
import { clsx } from 'clsx'
import headerLogo from '@/public/assets/BCM-Logo_Full-Color-Black-Text.webp'
import { MenuHamburger } from '@/components/icons/menuHamburger'
import { MenuClose } from '@/components/icons/menuClose'
import { menuList } from '@/lib/menuList'
import Link from 'next/link'
import { ChevronDown } from '@/components/icons/ChevronDown'
import { useState } from 'react'
import { ChevronUp12 } from '@/components/icons/ChevronUp'

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
            <Link
                href={'/'}
                className={style.headerLogoLink}
            >
                <Image
                    src={headerLogo}
                    alt='Black Chamber of Memphis'
                    width={100}
                    height={50}
                    className={style.headerLogo}
                    loading={'eager'}
                />
            </Link>

            <nav
                className={clsx(style.navClose, menuOpen && style.nav)}
            >
                <ul
                    className={style.navList}
                >
                    {menuList.map((menuItem) => (
                        <li
                            key={menuItem.name}
                            className={style.navItem}
                        >
                            <Link
                                href={menuItem.path}
                                className={style.navLink}
                                onClick={() => setMenuOpen(false)}
                            >
                                {menuItem.name}
                            </Link>

                            {menuItem.subLink && (
                                <>
                                    <ChevronDown
                                        className={clsx(style.navIcon, subMenuOpen === menuItem.name && style.close)}
                                        onClick={() => handleSubMenuToggle(menuItem.name)}
                                    />
                                    <ChevronUp12
                                        className={clsx(style.navIcon, subMenuOpen !== menuItem.name && style.close)}
                                        onClick={() => handleSubMenuToggle(menuItem.name)}
                                    />
                                    <ul
                                        className={clsx(style.subNav, subMenuOpen === menuItem.name ? style.subNavList : style.close)}
                                    >
                                        {menuItem.subLink.map((sub) => (
                                            <li
                                                key={sub.name}
                                                className={style.subNavItem}
                                            >
                                                <Link
                                                    href={sub.path}
                                                    className={style.navLink}
                                                    onClick={() => {
                                                        handleSubMenuToggle(menuItem.name)
                                                        setMenuOpen(false)
                                                    }}
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )
                            }
                        </li>
                    ))}

                    <li>
                        <Link 
                            href="/memphis-ten"
                            className={style.navCTALink}
                        >
                            MemphisTEN
                        </Link>
                    </li>           

                    {/* <li>
                        <a 
                            href="/case-support"
                            className={style.navCTALink}
                        >
                            Become a Partner
                        </a>
                    </li> */}

                    <li>
                        <a 
                            href="https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={style.navCTALink}
                        >
                            JOIN BCOM
                        </a>
                    </li>
                </ul>
            </nav>

            <button
                className={style.menuBtn}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <MenuHamburger
                    width="1.4rem"
                    height="1.4rem"
                    className={clsx(style.menuBtnIcon, menuOpen && style.close)}
                />
                <MenuClose
                    width="1.4rem"
                    height="1.4rem"
                    className={clsx(style.menuBtnIcon, !menuOpen && style.close)}
                />
            </button>
        </header>
    )
}