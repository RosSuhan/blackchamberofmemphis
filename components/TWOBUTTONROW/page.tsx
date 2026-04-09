'use client'
import style from './twoButton.module.css'
import Link from "next/link";
import { useRouter } from 'next/navigation';

type ButtonType = "anchor" | "external" | "internal" | "download"

type TwoButtonRowProp = {
    buttonsInfo: {
        path: string, 
        buttonName: string, 
        type?: ButtonType
    }[],
}
export default function TwoButtonRow({buttonsInfo}: TwoButtonRowProp){
    const router = useRouter();

    const handleAnchorClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        path: string
    ) => {
        // Only handle anchor links
        if (!path.startsWith("#")) return;

        e.preventDefault();

        const id = path.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });

            // Replace instead of stacking hashes
            router.replace(`${window.location.pathname}#${id}`);
        }
    };

    return(
        <div
            className={style.twoButtonBlock}
        >
            {buttonsInfo.map(({path, buttonName, type}, index)=>{
                //Download
                if(type === "download") {
                    return(
                        <a 
                            href={path}
                            key={index}
                            download
                            className={style.symposiumCta}
                            title={`download document ${buttonName}`}
                        >
                            {buttonName}
                        </a>
                    );
                }
                
                // External links
                if ( type === "external") {
                    return (
                        <a 
                            href={path}
                            key={index}
                            className={style.symposiumCta}
                            title={`path to ${buttonName}`}
                        >
                            {buttonName}
                        </a>
                    )
                }

                // Internal
                if( type === "internal") {
                    return (
                        <Link
                            key={index}
                            href={path}
                            className={style.symposiumCta}
                            title={`path to ${buttonName}`}
                        >
                            {buttonName}
                        </Link>
                    )
                }

                //Anchor (default)
                return (
                    <Link
                        key={index}
                        href={path}
                        className={style.symposiumCta}
                        onClick={(e) => handleAnchorClick(e, path)}
                        title={`path to ${buttonName}`}
                    >
                        {buttonName}
                    </Link>
                )
            })}
        </div>
    )
}