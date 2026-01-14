"use client"
import style from '@/styles/businessDirectory.module.css'
import Link from "next/link"
import { useState } from 'react'
import { categories } from '@/lib/categories'
import SearchBar from "@/components/SearchBar/page"
import { businessList } from '@/lib/members'
import BusinessBlock from '@/components/directoryComponents/BusinessBlock'

export default function Directory(){
    const [ searchValue, setSearchValue ] = useState('')

    const filtered = businessList.filter((biz) => {
        const q = searchValue.toLowerCase();
        const words = q.split(" ")
        if(!q) return true;
        
        const nameMatch = biz.businessName?.toLowerCase().includes(q);

        const categoryMatch = Array.isArray(biz.profileCategory)
            ? biz.profileCategory.some((cat: string) =>
                cat.toLowerCase().includes(q)
                )
            : false;

        const subCategoryMatch = Array.isArray(biz.profileSubCategory)
            ? biz.profileSubCategory.some((sub: string) =>
                sub.toLowerCase().includes(q)
                )
            : false;

        const tagMatch = Array.isArray(biz.categoryTag)
            ? biz.categoryTag.some((tag: string) =>
                words.every(word => tag.toLowerCase().includes(word))
            )
            : false;

        return nameMatch || categoryMatch || subCategoryMatch || tagMatch;
    })

    const normalize = <T,>(value: T | T[]): T[] => {
        return Array.isArray(value) ? value : [value]
    }

    const countBusinessesInCategory = (categoryId: string) => {
        return businessList.filter((business) => {
            const categories = normalize(business.profileCategory);

            return categories.includes(categoryId);
        }).length;
    }

    return(
        <>            
            <section
                className={style.busDirectorySection}
            >
                {categories.map(({name, id}, index) => (
                    <Link
                        key={index}
                        href={"/business-directory/" + id}
                        className={style.categorieLink}
                    >
                        <span>
                            {name} 
                        </span>
                        ({countBusinessesInCategory(id)})
                    </Link>
                ))}
            </section>

            <div
                className={style.searchbarRow}
            >
                <SearchBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </div>

            {filtered ? 
                <section
                    style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", paddingBottom:"3rem"}}
                >
                    <div
                        style={{width:"90%", display:"flex", flexWrap:"wrap", alignItems:"flex-start", justifyContent:"space-evenly", padding:"1rem", rowGap:"1rem", columnGap:"2%"}}
                    >
                        {filtered.map((biz) =>(
                            <BusinessBlock
                                key={biz.id}
                                id={biz.id}
                                blockPath={biz.id}
                                blockImage={biz.profileLogo}
                                businessTitle={biz.businessName}
                                businessDescription={biz.profileDescription}
                                phoneNumber={biz.telNumber}
                                emailText={biz.email}
                                websiteLink={biz.website}
                            />
                        ))}
                    </div>
                </section>
            : null }
        </>
    )
}