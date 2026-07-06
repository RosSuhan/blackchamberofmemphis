'use client'
import { useState } from 'react'
import style from './BcGetListedButton.module.css'
import ListingFormComponent from '@/app/(pages)/get-listed/form/ListingFormComponent'
import clsx from 'clsx'


export default function BcGetListedButton(){
    const [ formOpen, setFormOpen ] = useState(false)

    return (
        <section
            className={style.bcGetListedButton}
        >
            <button 
                type="button"
                className="globalGoldButton"
                onClick={()=> {setFormOpen(!formOpen)}}
            >
                Get Listed
            </button>

            <div
                className={clsx(formOpen ? style.bcGetListedFormBlock : style.hide)}
            >
                <ListingFormComponent/>
            </div>
        </section>
    )
}