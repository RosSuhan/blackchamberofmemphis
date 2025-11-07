import style from '@/styles/pageTitle.module.css'

type PageTitleSectionProp = {
    pageTitle: string
}

export default function PageTitleSection({pageTitle}: PageTitleSectionProp){
    return(
        <section
            className={style.pageTitleSection}
        >
            <h1
                className={style.pageName}
            >
                {pageTitle}
            </h1>
        </section>
    )
}