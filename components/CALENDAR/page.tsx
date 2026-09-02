'use client'
import style from './calendar.module.css'
import { BaselineArrowBack } from "../icons/BaselineArrowBack";
import { BaselineArrowForward } from "../icons/BaselineArrowForward";
import { useState } from 'react';

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function Calendar(){
    const [ currentDate, setCurrentDate ] = useState(new Date(2026, 8));

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();


    return (
        <div
            className={style.calendar}
        >
            <div
                className={style.calendarHeader}
            >
                <button 
                    type="button"
                    className={style.calendarArrow}
                    onClick={() => setCurrentDate(new Date(year, month - 1))}
                >
                    <BaselineArrowBack/>
                </button>

                <h3
                    className={style.calandarMonth}
                >
                    {currentDate.toLocaleString("default", { month: "long"})}{" "}{year}
                </h3>
                
                <button 
                    type="button"
                    className={style.calendarArrow}
                    onClick={() => setCurrentDate(new Date(year, month + 1))}
                >
                    <BaselineArrowForward/>
                </button>
            </div>
            <div
                className={style.calendarGrid}
            >
                {days.map((day) => (
                    <div
                        key={day}
                        className={style.dayName}
                    >
                        {day}
                    </div>
                ))}

                {Array.from({ length: firstDay }).map((_, i) => (
                    <div 
                        key={`empty-${i}`}
                        className={`${style.dayCell} ${style.empty}`}
                    />
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    // const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2,"0")}`;

                    return (
                        <div
                            key={day}
                            className={style.dayCell}
                        >
                            <span
                                className={style.date}
                            >
                                {day}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}