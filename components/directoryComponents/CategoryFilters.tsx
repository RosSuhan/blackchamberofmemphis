'use client'
import style from './categoryFilters.module.css'


type CategoryFilterProp = {
    filterTerm : string
    setFilterTerm : React.Dispatch<React.SetStateAction<string>>
}

export default function CategoryFilter({filterTerm, setFilterTerm} : CategoryFilterProp){   
    const mainFilters = [
        {
            name : "All",
            termName : 'all'
        },
        // {
        //     name : "Agriculture",
        //     termName : 'agriculture'
        // },
        {
            name : "Arts & Culture",
            termName : 'arts-culture-media-entertainment'
        },
        // {
        //     name : "Automotive",
        //     termName : 'automotive'
        // },
        // {
        //     name : "Transport & Travel",
        //     termName : 'transport-travel'
        // },
        {
            name : 'Beauty, Personal Care & Fitness',
            termName : "beauty-personal-care-fitness",
        },{
            name : "Community & Nonprofit Services",
            termName : "community-faith-nonprofit-services",
        },{
            name : "Construction & Home Improvement",
            termName : "construction-home-improvement-trade-services",
        },{
            name : "Events & Weddings",
            termName : "events-weddings",
        },{
            name : "Food & Dining",
            termName : "food-dining-hospitality",
        },{
            name : 'Health & Wellness',
            termName : "health-medical-wellness-services",
        },{
            name : "Marketing",
            termName : "marketing-advertising-digital-services",
        },{
            name : "Legal & Financial",
            termName : "professional-legal-financial-services",
        },{
            name : "Retail & Shopping",
            termName : "retail-shopping-specialty-stores",
        },{
            name : "Security & Protection",
            termName : "security-protection-services",
        },{
            name : "Sports & Leisure",
            termName : "sports-recreation-leisure",
        },{
            name : "Pets & Vets",
            termName : "animals-pets-veterinary-services",
        }
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
                        className={style.categoryButton}
                        key={index}
                    >
                        <label htmlFor={termName}>{name}</label>
                        <input 
                            type="radio" 
                            name="category" 
                            id={termName}
                            onChange={(e) => setFilterTerm(e.target.value)}
                            value={termName}
                            checked={filterTerm === termName}
                            className={style.categoryRadio}
                        />
                    </div>
                ))}
            </form>
        </section>
    )
}