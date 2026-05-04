'use client'
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

            <input 
                type="submit" 
                value="Search"
                className='globalGoldButton' 
            />

            {/* <button 
                type="button"
                className='globalGoldButton'
                onClick={handleSubmit}
            >
                Search
            </button> */}
        </form>
    )
}

// Search by business name or category...