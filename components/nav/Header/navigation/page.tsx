import style from './navigation.module.css'
import JoinButton from "./JoinButton";
import NavigationList from './navigationList';
import clsx from 'clsx';

type NavigationProp = {
    menuOpen : boolean
}

export default function Navigation({menuOpen} : NavigationProp){
    return(
        <nav
            className={clsx(menuOpen ? style.navigationMobileBlock : style.navigationBlock)}
        >
            <NavigationList/>
            <JoinButton/>
        </nav>
    )
}