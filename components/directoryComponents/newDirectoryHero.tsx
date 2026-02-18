'use client'
import style from '@/styles/directoryPageHero.module.css'
import { ChevronDown } from '../icons/ChevronDown'
import { useState } from 'react'
import clsx from 'clsx'
import { ChevronUp12 } from '../icons/ChevronUp'

export default function NewDirectoryHero(){
    const [ selectOpen, setSelectOpen ] = useState(false)

    
    return (
        <section
            className={style.directoryPageHero}
        >
            <h1
                className={style.directoryPageTitle}
            >
                Our Directory:
            </h1>

            <form
                action={''}
                className={style.directorySearchBlock}
            >
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='Keyword'
                    className={style.directorySearchInput}
                />

                <span
                    className={style.directorySearchSelect}
                    onClick={() => setSelectOpen(!selectOpen)}
                >
                    Categories
                    
                    {selectOpen ? <ChevronUp12/> : <ChevronDown/>}
                </span>

                <div
                    className={clsx(selectOpen ? style.directoryDropdown : style.hide)}
                    // className={style.hide}
                >
                    <span>
                        Restaurant
                    </span>
                    <span>
                        Shop
                    </span>
                    <span>
                        Iets
                    </span>
                </div>

                <input 
                    type="submit" 
                    value="Search" 
                    className={style.directorySearchButton}
                />
            </form>
        </section>
    )
}