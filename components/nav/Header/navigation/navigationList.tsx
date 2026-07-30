import style from './navigationList.module.css'
import NavigationItem from "./navigationItem";
import { menuList } from '@/lib/menuList';


export default function NavigationList(){
    return(
        <ul
            className={style.navigationList}
        >
            {menuList.map((item => (
                <NavigationItem
                    key={item.name}
                    item={item}
                />
            )))}
        </ul>
    )
}