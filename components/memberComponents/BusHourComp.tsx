'use client'
import { useState } from 'react'
import { Clock } from '../icons/Clock'
import style from './BusHourComp.module.css'
import clsx from 'clsx'

type BusHourCompProp = {
    buttonTextColor? : string
    businessHours? : {day: string, hours : string}[]
}

export default function BusHourComp({buttonTextColor, businessHours} : BusHourCompProp){

    const [ hoursButton, setHoursButton ] = useState(false)
    return(
        <>
            <button 
                type="button"
                className={style.shareButton}
                style={{color: buttonTextColor}}
                onClick={() => setHoursButton(true)}
            >
                <Clock
                    className='globalContactIcon'
                />
            </button>
            <div
                className={clsx(hoursButton ? style.shareBlock : style.hide)}
                // className={style.shareBlock}
            >
                <div
                    className={style.shareBlockCloseButtonRow}
                >
                    <button 
                        type="button"
                        className={style.closeButton}
                        onClick={() => setHoursButton(false)}
                    >
                        X
                    </button>
                </div>
                
                <ul
                    className={style.hourList}
                >
                    {businessHours?.map(({day, hours}) => (
                        <li key={day}
                            className={style.hourItem}
                        >
                            <span>
                                {day}
                            </span>
                            <span>
                                {hours}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

