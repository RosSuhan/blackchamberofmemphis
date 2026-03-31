'use client'
import style from '@/styles/countdownTimer.module.css'
import { useEffect, useState } from "react"

type CountdownTimerProp = {
    eventDate: string
}

export default function CountdownTimer({eventDate}: CountdownTimerProp){

    const eventStartDate = eventDate

    const calculateTimeLeft = () => {
        const difference = new Date(eventStartDate).getTime() - new Date().getTime();

        if(difference <= 0) return null;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [ timeLeft, setTimeLeft ] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) return <p>Event Started!</p>;

    return(
        <div
            className={style.countDownContainer}
        >
            <div
                className={style.countDownBlock}
            >
                <p
                    className={style.countDownText}
                >
                    {timeLeft.days}
                </p>
                <small
                    className={style.countDownSmallText}
                >
                    Days
                </small>
            </div>
            <div
                className={style.countDownBlock}
            >
                <p
                    className={style.countDownText}
                >
                    {timeLeft.hours}
                </p>
                <small
                    className={style.countDownSmallText}
                >
                    Hours
                </small>
            </div>
            <div
                className={style.countDownBlock}
            >
                <p
                    className={style.countDownText}
                >
                    {timeLeft.minutes}
                </p>
                <small
                    className={style.countDownSmallText}
                >
                    Minutes
                </small>
            </div>
            <div
                className={style.countDownBlock}
            >
                <p
                    className={style.countDownText}
                >
                    {timeLeft.seconds}
                </p>
                <small
                    className={style.countDownSmallText}
                >
                    Seconds
                </small>
            </div>
        </div>
    )
}