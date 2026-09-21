'use client'
import './nav.css'
import NavList from './NavList'

import NavMoreButton from './NavMoreButton'
import HeaderCTAbtn from '../Buttons/HeaderCTAbtn'
import useNavigationLayout from '@/hooks/useNavigationLayout'

export default function Nav(){

    const { visibleItems, overflowItems} = useNavigationLayout()
    return(
        <nav
            className='navSection'
        >
            <NavList
                navItemClassName = {`desktopNavItem`}
                menuItem = {visibleItems}
            />

            {overflowItems.length > 0 && (
                <NavMoreButton
                    overflowMenuItems = {overflowItems}
                />
            )}
            
            <HeaderCTAbtn
                headerCTAclassName = {`desktopHeaderCTAbtn`}
            />

        </nav>
    )
}