'use client'
import { useState } from "react";
import NavMobileList from "./NavMobileList";
import './navMoreButton.css'
import { ChevronUp12 } from "../icons/ChevronUp";
import { ChevronDown } from "../icons/ChevronDown";

type NavMoreButtonProp = {
    overflowMenuItems : {
        priority : number
        name : string
        path : string
        subLink : { name : string; path : string }[]
    }[]
}

export default function NavMoreButton({
    overflowMenuItems
} : NavMoreButtonProp){

    const [ menuOpen, setMenuOpen ] = useState(false)

    return(
        <div
            className="navMoreButtonBlock"
        >
            <button type="button"
                onClick = {() => setMenuOpen(!menuOpen)}
                className = "navMoreMenuBtn"
            >
                More
                {menuOpen ? 
                    <ChevronUp12
                        className='chevIcon'
                    /> 
                :   <ChevronDown
                        className='chevIcon'
                    />}
            </button>

            <NavMobileList
                menuOpen = {menuOpen}
                navListclassName={`mobileNavList`}
                navItemClassName = {`mobileNavItem`}
                menuItem={overflowMenuItems}
            />
        </div>
    )
}