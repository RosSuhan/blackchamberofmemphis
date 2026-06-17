'use client'
import style from '@/styles/resourcesPage.module.css'
import PageHeroSection from "@/components/heroSections/pageHeroSection"
import ResourcesCatBlock from '@/components/CATSINGLEBLOCK/RESOURCESCATBLOCK'
import { allResources } from '@/lib/resources/allResources'
import { useState } from 'react'
import { resourceCategoriesList } from '@/lib/resources/resourcesCategoriesList'

export default function ResourcesPage(){
    const resourcesStateButtons = [
        {
            name : 'Insights',
            key : 'insights',
        },{
            name : "Event Highlights",
            key : 'eventHighlights',
        },{
            name : 'Member Highlights',
            key : 'memberHighlights'
        }
    ]

    const [ selectedMainCategory, setSelectedMainCategory ] = useState('insights')
    const [ selectedFilterCategory, setSelectedFilterCategory ] = useState('')
    const [ selectedSubCategory, setSelectedSubCategory ] = useState('')

    const handleMainCategoryChange = (category: string) => {
        setSelectedMainCategory(category)
        setSelectedFilterCategory('')
        setSelectedSubCategory('')
    }

    console.log(selectedMainCategory)

    const filteredArticles = allResources.filter(
        article => article.mainCategory === selectedMainCategory
    )

    const activeResourcesCategory = resourceCategoriesList.find(cat => cat.key === selectedMainCategory) // to get to insights
    const activeFilterCategory = activeResourcesCategory?.filter.find(filter => filter.key === selectedFilterCategory) // to get to funding, training ......
    const activeSubCategory = activeFilterCategory?.subCatList.find( subCatList => subCatList.key === selectedSubCategory)
    
    return(
        <main>
            <PageHeroSection
                mainHeading={"Insights, Stories & Community Impact"}
                subHeading={"Explore resources to grow your business, discover community stories, and stay connected with what’s happening across Memphis."}
                searchbar = {true}
                ctaButtons={[]}
                placeholder="Search Articles by Category or Topic"
                initialSearchTerm=""
                stateButtons = {resourcesStateButtons}
                selectedState = {selectedMainCategory}
                setSelectedState = {handleMainCategoryChange}
            />
            <section
                className = {style.resourcesBodySection}
            >
                <div
                    className={style.resourcesTopFilterRow}
                >
                    {activeResourcesCategory?.filter.map((filter) => (
                        <button  
                            type="button"
                            key={filter.key}
                            className={style.resourcesMainCatButton}
                            onClick={() => setSelectedFilterCategory?.(filter.key)}
                        >
                            {filter.filterCat}
                        </button>
                    ))}
                </div>
                <div
                    className={style.resourcesSideBar}
                >
                    <div
                        className={style.subCatBlock}
                    >
                        {activeFilterCategory?.subCatList.map((subCat) => (
                            <button 
                                key={subCat.key}
                                type="button"
                                className={style.subCatBtn}
                                onClick={() => setSelectedSubCategory(subCat.key)}
                            >
                                {subCat.subCat}
                            </button>
                        ))}
                        
                    </div>
                </div>

                <div
                    className={style.resourcesInformationBlock}
                >
                    {filteredArticles.map((article) =>(
                        <ResourcesCatBlock
                            key={article.id}
                            articleImage = {article.mainImage}
                            articleTitle = {article.articleTitle}
                            articleDescription = {article.description}
                            articleOffering = {article.offerings}
                            articleServeStage = {article.serveStage}
                            articleReadPath = {article.readPath}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}