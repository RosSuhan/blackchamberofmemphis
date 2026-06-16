'use client'
import style from '@/styles/resourcesPage.module.css'
import PageHeroSection from "@/components/heroSections/pageHeroSection"
import { useState } from "react"
import clsx from 'clsx'
import ResourcesCatBlock from '@/components/CATSINGLEBLOCK/RESOURCESCATBLOCK'
import { allResources } from '@/lib/resources/allResources'

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

    const [ subCatFloatBlock, setSubCatFloatBlock ] = useState(false)

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
            />
            <section
                className = {style.resourcesBodySection}
            >
                <div
                    className={style.resourcesTopFilterRow}
                >
                    <button 
                        type="button"
                        className={style.resourcesMainCatButton}
                    >
                        Funding
                    </button>

                    <button 
                        type="button"
                        className={style.resourcesMainCatButton}
                    >
                        Mentorship
                    </button>

                    <button 
                        type="button"
                        className={style.resourcesMainCatButton}
                    >
                        Training
                    </button>

                    <button 
                        type="button"
                        className={style.resourcesMainCatButton}
                    >
                        Certification
                    </button>

                    <button 
                        type="button"
                        className={style.resourcesMainCatButton}
                    >
                        Marketing
                    </button>

                    <button 
                        type="button"
                        className={style.resourcesMainCatButton}
                    >
                        Legal
                    </button>

                    <button 
                        type="button"
                        className={style.resourcesMainCatButton}
                    >
                        Procurement
                    </button>
                </div>
                <div
                    // className={clsx(subCatFloatBlock ? style.resourcesSideBar : style.hide)}
                    className={style.resourcesSideBar}
                >
                    <div
                        className={style.subCatBlock}
                    >
                        <button 
                            type="button"
                            className={style.subCatBtn}
                        >
                            Loans
                        </button>
                        <button 
                            type="button"
                            className={style.subCatBtn}
                        >
                            Grants
                        </button>
                        <button 
                            type="button"
                            className={style.subCatBtn}
                        >
                            Investors
                        </button>
                        <button 
                            type="button"
                            className={style.subCatBtn}
                        >
                            CDFIs
                        </button>
                    </div>
                </div>

                <div
                    className={style.resourcesInformationBlock}
                >
                    {allResources.map((article) =>(
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