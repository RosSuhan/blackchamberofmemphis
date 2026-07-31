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
import Navigation from '@/components/nav/Header/navigation/page'
import SpeakerSection from '@/components/symposiumComps/speakerSection/page'


export default function Sandbox(){
    const [ menuOpen, setMenuOpen ] = useState(false)

    return(
        <main
            className={style.pageHeroSection}
        >
            <header
                className={style.header}
                style={{position:"relative"}}
            >
                <Link
                    href={'/'}
                    className={style.headerLogo}
                >
                    <Logo
                        colorScheme={'blackGold'}
                    />
                </Link>

                <Navigation
                    menuOpen = {menuOpen}
                />

                <button 
                    type="button"
                    className={style.mobileNavMenuButton}
                    onClick={() => {
                        setMenuOpen(!menuOpen)
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

            <SpeakerSection/>
        </main>
    )
}