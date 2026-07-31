import { NavigationMenuItem } from '@/lib/navigationTypes'
import style from './navigationMoreBtn.module.css'
import { useState } from 'react'
import { ChevronUp12 } from '@/components/icons/ChevronUp'
import { ChevronDown } from '@/components/icons/ChevronDown'

type NavigationMoreButtonProp = {
        overflowItems : NavigationMenuItem[]
}

export default function NavigationMoreButton({overflowItems} : NavigationMoreButtonProp){
    const [ showMore, setShowMore ] = useState(true)
    return(
        <li
            className={style.navigationMoreButton}
            onClick={() => setShowMore(!showMore)}
        >
            <div>
                More
            </div>
            
            <button
                className={style.chevronBtn}
            >
                {showMore ? <ChevronUp12/> : <ChevronDown/>}
            </button>
            
            

            <ul
                className={style.moreBtnDroplist}
            >
                {overflowItems.map(() => (
                    <li
                        key={''}
                        className={style.moreBtnItem}
                    >
                        extra button
                    </li>
                ))}
            </ul>
        </li>
    )
}