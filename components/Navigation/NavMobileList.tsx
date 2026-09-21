import { useState } from 'react'
import HeaderCTAbtn from '../Buttons/HeaderCTAbtn'
import NavItem from './NavItem'
import './navList.css'

type NavMobileListProp = {
    menuOpen? : boolean
    navListclassName : string
    navItemClassName : string
    menuItem : {
        priority : number
        name : string
        path : string
        subLink : { name : string; path : string }[]
    }[]
}

export default function NavMobileList({
    menuOpen,
    navListclassName,
    navItemClassName,
    menuItem
} : NavMobileListProp){

    const [ subMenuOpen, setSubMenuOpen ] = useState<string | null>(null)

    const handleSubMenuToggle = ( item : string) => {
        setSubMenuOpen((prev) => (prev === item ? null : item))
    }
    
    return(
        <ul
            className={ menuOpen ? navListclassName : 'hide' }
        >
            <HeaderCTAbtn
                headerCTAclassName = {`moreDropdownHeaderCTAbutton`}
            />

            {menuItem.map((item => (
                <NavItem
                    subMenuOpen = {subMenuOpen === item.name}
                    handleSubMenuToggle = {() => handleSubMenuToggle(item.name)}
                    navSubListClassName = 'navMobileSubList'
                    navSubItemClassName = 'navSubItem'
                    key={item.name}
                    item = {item}
                    navItemClassName = {navItemClassName}
                />
            )))}


        </ul>
    )
}