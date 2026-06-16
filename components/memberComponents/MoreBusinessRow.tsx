'use client'
import NewDirectoryList from '../directoryComponents/newDirectoryList'
import style from './MoreBusinessRow.module.css'

type NewDirectoryListProps = {
    showMoreBusHeading : string
    showMoreBus : string
    searchTerm : string,
    selectedCategory : string
    filterTerm : string
}

export default function MoreBusinessRow({showMoreBusHeading, showMoreBus, searchTerm, selectedCategory, filterTerm} : NewDirectoryListProps){
    return(
        <div
            className={style.moreBusSection}
        >
            <h3
                className='globalThirdHeading'
            >
                {showMoreBusHeading}
            </h3>

            {/* <NewDirectoryList
                showMoreBus = {showMoreBus}
                searchTerm = {searchTerm}
                selectedCategory = {selectedCategory}
                filterTerm = {filterTerm}
            /> */}
        </div>
    )
}