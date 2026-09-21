'use client'
import './navItem.css'
import NavSubList from './NavSubList'
import { ChevronDown } from '@/components/icons/ChevronDown'
import { ChevronUp12 } from '@/components/icons/ChevronUp'

type itemProp = {
    subMenuOpen : boolean
    handleSubMenuToggle : () => void
    navItemClassName : string
    navSubListNameBlock? : boolean
    navSubListBlockName? : string
    navSubListClassName : string
    navSubItemClassName : string
    item : {
        priority : number
        name : string
        path : string
        subLink : { name : string; path : string }[]
    }
}

export default function NavItem({
    subMenuOpen,
    handleSubMenuToggle,
    navItemClassName,
    navSubListNameBlock,
    navSubListBlockName,
    navSubListClassName,
    navSubItemClassName,
    item

} : itemProp){

    return(
        
        <li
            className = {navItemClassName}
        >
            <button 
                type="button"
                className = 'navItemButton'
                onClick={handleSubMenuToggle}
            >
                {item.name}

                {subMenuOpen ? 
                    <ChevronUp12
                        className='chevIcon'
                    /> 
                :   <ChevronDown
                        className='chevIcon'
                    />}
            </button>

            {subMenuOpen ? (
                <NavSubList
                    navSubListClassName = {navSubListClassName}
                    navSubListNameBlock = {navSubListNameBlock}
                    navSubListBlockName = {navSubListBlockName}
                    navSubItemClassName = {navSubItemClassName}
                    subLink = {item.subLink}
                />
            ) : null}
        </li>
    )
}