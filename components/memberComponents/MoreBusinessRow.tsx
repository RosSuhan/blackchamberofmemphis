'use client'
import NewDirectoryList from '../directoryComponents/newDirectoryList'
import style from './MoreBusinessRow.module.css'

type NewDirectoryListProps = {
    showMoreBus : string
    searchTerm : string,
    selectedCategory : string
}

export default function MoreBusinessRow({showMoreBus, searchTerm, selectedCategory} : NewDirectoryListProps){
    return(
        <div
            className={style.moreBusSection}
        >
            <h3
                className='globalThirdHeading'
            >
                Businesses in the same Category
            </h3>

            <NewDirectoryList
                showMoreBus = {showMoreBus}
                searchTerm = {searchTerm}
                selectedCategory = {selectedCategory}
            />
        </div>
    )
}