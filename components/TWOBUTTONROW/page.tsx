import style from './twoButton.module.css'
import Link from "next/link";

type TwoButtonRowProp = {
    buttonsInfo: {path: string, buttonName: string}[],
}
export default function TwoButtonRow({buttonsInfo}: TwoButtonRowProp){
    return(
        <div
            className={style.twoButtonBlock}
        >
            {buttonsInfo.map(({path, buttonName}, index)=>(
                <Link
                    key={index}
                    href={path}
                    className={style.symposiumCta}
                >
                    {buttonName}
                </Link>
            ))}
        </div>
    )
}