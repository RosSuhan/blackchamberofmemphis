'use client'
import ResourcesCatBlock from '@/components/CATSINGLEBLOCK/RESOURCESCATBLOCK'
import { ResourcesCatPropType } from '@/lib/resources/resourcesCatPropType'
import { ResourcesType } from '@/lib/resources/resourcesType'
import style from '@/styles/resourcesPage.module.css'


type InsightsPageProps = {
    activeResourcesCategory? : ResourcesCatPropType
    setSelectedFilterCategory : (value: string) => void
    setSelectedSubCategory : (value: string) => void
    activeFilterCategory? : {filterCat: string; key: string; path: string; subCatList: { subCat: string; key: string; path: string; }[]}
    filteredArticles? : ResourcesType[]
}

export default function InsightsPage({
    activeResourcesCategory,
    setSelectedFilterCategory,
    setSelectedSubCategory,
    activeFilterCategory,
    filteredArticles,

}:InsightsPageProps){
    return(
        <section
                className = {style.resourcesBodySection}
            >
                <div
                    className={style.resourcesTopFilterRow}
                >
                    {/* this is the golden row filter buttons */}
                    {activeResourcesCategory?.filter.map((filter) => (
                        <button  
                            type="button"
                            key={filter.key}
                            className={style.resourcesMainCatButton}
                            onClick={() => {
                                setSelectedFilterCategory?.(filter.key)
                                setSelectedSubCategory('')
                            }}
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

                    <div
                        className={style.extraTopicButtonsBlock}
                    >
                        <details
                            className={style.extraTopicDetail}
                        >
                            <summary
                                className = {style.extraTopicSummary}
                            >
                                Starting a Business
                            </summary>
                            <div
                                className = {style.extraTopicTextBlock}
                            >
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Business Registration
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Planning Mentorship
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Training Funding Basics
                                </button>
                            </div>
                        </details>
                        
                        <details
                            className={style.extraTopicDetail}
                        >
                            <summary
                                className = {style.extraTopicSummary}
                            >
                                Growing Your Business
                            </summary>
                            <div
                                className = {style.extraTopicTextBlock}
                            >
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Marketing
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Operations
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Hiring
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Networking
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Scaling systems
                                </button>
                            </div>
                        </details>

                        <details
                            className={style.extraTopicDetail}
                        >
                            <summary
                                className = {style.extraTopicSummary}
                            >
                                Funding & Opportunities
                            </summary>
                            <div
                                className = {style.extraTopicTextBlock}
                            >
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Contracts Certifications
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Government Opportunities
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Supplier Diversity
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                >
                                    Funding Growth
                                </button>
                            </div>
                        </details>
                    </div>
                </div>

                <div
                    className={style.resourcesInformationBlock}
                >
                    {filteredArticles?.map((article) =>(
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
    )
}