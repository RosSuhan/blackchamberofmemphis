'use client'

import { useEffect, useState } from "react"
import CalendarAgende from "./CalendarAgenda";
import CalendarGrid from "./CalendarGrid";

export default function EventsCalendar(){
    const [ isMobile, setIsMobile ] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile ? <CalendarAgende/> : <CalendarGrid/>
}