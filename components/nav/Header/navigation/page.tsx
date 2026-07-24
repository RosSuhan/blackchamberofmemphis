import style from './navigation.module.css'
import JoinButton from "./JoinButton";
import NavigationList from './navigationList';

export default function Navigation(){
    return(
        <nav
            className={style.navigationBlock}
        >
            <NavigationList/>
            <JoinButton/>
        </nav>
    )
}