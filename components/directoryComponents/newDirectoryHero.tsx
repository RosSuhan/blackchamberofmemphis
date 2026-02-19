'use client'
import style from '@/styles/directoryPageHero.module.css'
import { ChevronDown } from '../icons/ChevronDown'
import { useState } from 'react'
import clsx from 'clsx'
import { ChevronUp12 } from '../icons/ChevronUp'
import { categories } from '@/lib/categories'


type NewDirectoryHeroProps = {
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    selectedCategory: string
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function NewDirectoryHero({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
}: NewDirectoryHeroProps){
    const [ selectOpen, setSelectOpen ] = useState(false)

    const hasActiveFilters = searchTerm.trim() !== "" || selectedCategory !== "all"

    console.log(selectedCategory)
    
    return (
        <section
            className={style.directoryPageHero}
        >
            <h1
                className={style.directoryPageTitle}
            >
                Our Directory:
            </h1>

            <div
                className={style.directorySearchBlock}
            >
                <fieldset
                    className={style.directoryFieldset}
                >
                    <legend
                        className={style.directoryFieldsetLegend}
                    >
                        Search
                    </legend>
                    <input 
                        type="text" 
                        placeholder='Keyword'
                        className={style.directorySearchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <button
                        type='button'
                        className={style.directorySearchSelect}
                        onClick={() => setSelectOpen(!selectOpen)}
                    >
                        {selectedCategory === "all" ? "Categories" : selectedCategory}
                        
                        {selectOpen ? <ChevronUp12/> : <ChevronDown/>}
                    </button>

                    <div
                        className={clsx(selectOpen ? style.directoryDropdown : style.hide)}
                    >
                            <div
                                className={style.categoryLink}
                                onClick={() => {
                                    setSelectedCategory("all")
                                    setSelectOpen(false)
                                }}
                            >
                                All Categories
                            </div>

                        {categories?.map(({name, id}) => (
                            <div
                                key={id}
                                className={style.categoryLink}
                                onClick={() => {
                                    setSelectedCategory(id)
                                    setSelectOpen(false)
                                }}
                            >
                                {name}
                            </div>
                        ))}
                    </div>

                    {hasActiveFilters && (
                            <button
                            type='button'
                            onClick={() => {
                                setSearchTerm('')
                                setSelectedCategory("all")
                            }}
                            className={style.directorySearchButton}
                        > Clear Filter</button>
                    )}

                </fieldset>
            </div>
        </section>
    )
}