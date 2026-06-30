'use client'
import ResourcesCatBlock from '@/components/CATSINGLEBLOCK/RESOURCESCATBLOCK'
import { ResourcesCatPropType } from '@/lib/resources/resourcesCatPropType'
import { ResourcesType } from '@/lib/resources/resourcesType'
import style from '@/styles/resourcesPage.module.css'


type InsightsPageProps = {
    activeResourcesCategory? : ResourcesCatPropType
    setSelectedFilterCategory : (value: string) => void
    setSelectedSubCategory : (value: string) => void
    activeFilterCategory? : {filterCat: string; key: string; subCatList: { subCat: string; key: string; }[]}
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
                                    onClick={() => setSelectedSubCategory('compliance')}
                                >
                                    Business Registration
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                    onClick={() => setSelectedSubCategory('mentorship')}
                                >
                                    Planning Mentorship
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                    onClick={() => setSelectedSubCategory('funding')}
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
                                    onClick={() => setSelectedFilterCategory('marketing')}
                                >
                                    Marketing
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                    onClick={() => setSelectedFilterCategory('procuremtent')}
                                >
                                    Operations
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                    onClick={() => setSelectedFilterCategory('compliance')}
                                >
                                    Hiring
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                    onClick={() => setSelectedFilterCategory('marketing')}
                                >
                                    Networking
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                    onClick={() => setSelectedFilterCategory('procurement')}
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
                                    onClick={() => setSelectedFilterCategory('compliance')}
                                >
                                    Contracts Certifications
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                    onClick={() => setSelectedFilterCategory('procurement')}
                                >
                                    Government Opportunities
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                    onClick={() => setSelectedFilterCategory('procurement')}
                                >
                                    Supplier Diversity
                                </button>
                                <button 
                                    type="button"
                                    className = {style.extraTopicButton}
                                    onClick={() => setSelectedFilterCategory('funding')}
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
                            articleImage = {article.logo}
                            articleImageWidth = {article.logoWidth}
                            articleImageHeight = {article.logoHeight}
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