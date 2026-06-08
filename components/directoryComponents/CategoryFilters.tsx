'use client'
import { useState } from "react"
import style from './categoryFilters.module.css'

type CategoryFilterProp = {
    filterTerm : string
}

export default function CategoryFilter({} : CategoryFilterProp){   
    const [ filterTerm, setFilterTerm ] = useState('all')

    const handleFilterButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterTerm(filterTerm)
    }
    return(
        <section
            className={style.categoryFilterSection}
        >
            <form
                className={style.categoryFilterForm}
            >
                <div
                    className={style.categoryButton}
                >
                    <input 
                        type="radio" 
                        name="serveCustomer" 
                        onChange={(e) => handleFilterButton(e)}
                        value={"All"}
                        checked={filterTerm === "all"}
                        className={style.categoryRadio}
                    />
                    <label >All</label>
                </div>

                <div>
                    <input 
                        type="radio" 
                        name="serveCustomer" 
                        onChange={(e) => handleFilterButton(e)}
                        value={"restaurant"}
                        checked={filterTerm === "restaurant"}
                    />
                    <label htmlFor="">Restaurant</label>
                </div>
            </form>
        </section>
    )
}