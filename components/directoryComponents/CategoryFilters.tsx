'use client'
import style from './categoryFilters.module.css'


type CategoryFilterProp = {
    filterTerm : string
    setFilterTerm : React.Dispatch<React.SetStateAction<string>>
}

export default function CategoryFilter({filterTerm, setFilterTerm} : CategoryFilterProp){   
    const handleFilterButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterTerm(filterTerm)
    }

    const mainFilters = [
        {
            name : "All",
            termName : 'all'
        },{
            name : "Agriculture",
            termName : 'agriculture'
        },{
            name : "Arts & Culture",
            termName : 'arts-culture-media-entertainment'
        },
    ]
    return(
        <section
            className={style.categoryFilterSection}
        >
            <form
                className={style.categoryFilterForm}
            >
                {mainFilters.map(({name, termName}, index) => (
                    <div
                        // className={clsx(style.categoryButton, filterTerm === termName && style.categoryActiveButton)}
                        className={style.categoryButton}
                        key={index}
                    >
                        <input 
                            type="radio" 
                            name="serveCustomer" 
                            onChange={(e) => handleFilterButton(e)}
                            value={termName}
                            checked={filterTerm === termName}
                            className={style.categoryRadio}
                        />
                        <label >{name}</label>
                    </div>
                ))}
            </form>
        </section>
    )
}