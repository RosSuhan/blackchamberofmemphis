'use client'
import style from '@/styles/searchBar.module.css'


interface SearchBarProps {
    searchValue: string,
    setSearchValue: React.Dispatch<any>
}

export default function SearchBar({searchValue, setSearchValue}: SearchBarProps){
    return (
        <div
            className={style.SearchBarSection}
        >
            <input 
                type="text" 
                value={searchValue}
                placeholder="Search by business name or category..."
                className={style.searchInput}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    )
}