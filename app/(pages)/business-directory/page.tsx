import PageTitleSection from "@/components/pageTitleSection/page"
import style from '@/styles/businessDirectory.module.css'
import Link from "next/link"
import { categories } from '@/lib/categories'

export default function BusinessDirectory(){

    return(
        <main
            className={style.businessDirectoryPage}
        >
            <PageTitleSection
                pageTitle="All Categories:"
            />

            {/* searchBar */}

            <section
                className={style.busDirectorySection}
            >
                {categories.map(({name, id}, index) => (
                    <Link
                        key={index}
                        href={"/business-directory/" + id}
                        className={style.categorieLink}
                    >
                        {name}
                    </Link>
                ))}
                    
            </section>
        </main>
    )
}