import style from './navigation.module.css'
import JoinButton from "./JoinButton";
import NavigationList from './navigationList';
import clsx from 'clsx';
import useNavigationLayout from '@/hooks/useNavigationLayout';

type NavigationProp = {
    menuOpen : boolean
}

export default function Navigation({menuOpen} : NavigationProp){
    const { visibleItems, overflowItems } = useNavigationLayout()
    return(
        <nav
            className={clsx(menuOpen ? style.navigationMobileBlock : style.navigationBlock)}
        >
            <NavigationList
                navigationItems = {visibleItems}
                overflowItems = {overflowItems}
                menuOpen = {menuOpen}
            />
            <JoinButton/>
        </nav>
    )
}