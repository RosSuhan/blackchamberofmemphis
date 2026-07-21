import ResourcesCatBlock from '@/components/CATSINGLEBLOCK/RESOURCESCATBLOCK'
import { allNewsLetters } from '@/lib/resources/allNewsLetters'
import style from '@/styles/resourcesPage.module.css'

type NewsHighlightsPageProp = {
    filteredNewsArticle : {id? : string; image: string; name : string; publishDate : string; description: string; readlink : string}[]
    setSelectedNewsArticle : (value : string) => void
}

export default function NewsHighlightsPage({
    filteredNewsArticle,
    setSelectedNewsArticle
} : NewsHighlightsPageProp){
    return(
        <section
            className = {style.resourcesBodySection}
        >
            <div
                className={style.resourcesSideBar}
            > 
                {allNewsLetters.map((blog) => (
                    <button
                        key={blog.id}
                        type='button'
                        className={style.subCatBtn}
                        onClick={() =>setSelectedNewsArticle(blog.id)}
                    >
                        {blog.name}
                    </button>
                ))}
            </div>
            <div
                className={style.resourcesInformationBlock}
            >
                {filteredNewsArticle?.map((article) => (
                    <ResourcesCatBlock
                        key = {article.id}
                        articleImage = {article.image}
                        articleImageWidth = {1300}
                        articleImageHeight={800}
                        articleTitle = {article.name}
                        articleDate={article.publishDate}
                        articleDescription = {article.description}
                        articleOffering={[]}
                        articleServeStage={[]}
                        articleReadPath = {article.readlink}
                    />
                ))}
            </div>
        </section>
    )
}