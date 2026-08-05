import style from './navigationList.module.css'
import NavigationItem from "./navigationItem";
import clsx from 'clsx';
import { NavigationMenuItem } from '@/lib/navigationTypes';
import NavigationMoreButton from './navigationMoreButton';

type NavigationListProp = {
    navigationItems: NavigationMenuItem[]
    overflowItems : NavigationMenuItem[]
    menuOpen : boolean
}


export default function NavigationList({navigationItems, overflowItems, menuOpen} : NavigationListProp){
    // const { visibleItems, overflowItems } = useNavigation()

    return(
        <ul
            className={clsx(menuOpen ? style.navigationMobileList : style.navigationList)}
        >
            {navigationItems.map((item => (
                <NavigationItem
                    key={item.name}
                    item={item}
                />
            )))}

            {/* <NavigationMoreButton
                overflowItems = {overflowItems}
            /> */}
        </ul>
    )
}