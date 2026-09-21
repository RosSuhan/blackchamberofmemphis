import { useState } from 'react'
import NavItem from './NavItem'
import './navList.css'

type NavListProp = {
    navItemClassName : string
    menuItem : {
        priority : number
        name : string
        path : string
        subLink : { name : string; path : string }[]
    }[]
}

export default function NavList({
    navItemClassName,
    menuItem
} : NavListProp){

    const [ subMenuOpen, setSubMenuOpen ] = useState<string | null>(null)

    const handleSubMenuToggle = ( item : string) => {
        setSubMenuOpen((prev) => (prev === item ? null : item))
    }

    return(
        <ul
            className={'desktopNavList'}
        >
            {menuItem.map((item => (
                <NavItem
                    subMenuOpen = {subMenuOpen === item.name}
                    handleSubMenuToggle = {() => handleSubMenuToggle(item.name)}
                    navSubListClassName = 'navDesktopSubList'
                    navSubListNameBlock = {true}
                    navSubListBlockName = {item.name}
                    navSubItemClassName = 'navDesktopSubItem'
                    key={item.name}
                    item = {item}
                    navItemClassName = {navItemClassName}
                />
            )))}
        </ul>
    )
}