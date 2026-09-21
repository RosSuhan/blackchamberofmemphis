'use client'
import style from './header.module.css'
import HeaderLogo from './headerLogo/page'
import Nav from '@/components/Navigation/Nav'

export default function Header(){

    return(
        <header
                className={style.header}
            >
                <HeaderLogo
                    colorScheme='blackGold'
                />

                <Nav/>
            </header>
    )
}