'use client'
import { SearchIcon } from '../icons/search'
import style from './searchBar.module.css'


interface SearchBarProps {
    handleSubmit : React.FormEventHandler<HTMLFormElement>
    searchValue : string,
    setSearchValue : React.Dispatch<React.SetStateAction<string>>,
    placeholder : string
}

export default function SearchBar({handleSubmit, searchValue, placeholder, setSearchValue}: SearchBarProps){
    return (
        <form
            className={style.SearchBarSection}
            onSubmit={handleSubmit}
        >
            <input 
                type = "text"  
                name='searchTerm'
                value = {searchValue}
                placeholder = {placeholder}
                className = {style.searchInput}
                onChange = {(e) => setSearchValue(e.target.value)}
            />

            <button 
                type="submit"
                className={style.searchButton}
            >
                <SearchIcon/> 
                <span
                    className={style.searchButtonText}
                >
                    Search
                </span>
            </button>
        </form>
    )
}