import style from '@/styles/directoryList.module.css'
import { useEffect, useMemo, useState } from 'react'
import BusinessBlock from './BusinessBlock'
import { businessList } from '@/lib/members'

type NewDirectoryListProps = {
    searchTerm : string,
    selectedCategory : string
}

export default function NewDirectoryList({
    searchTerm,
    selectedCategory
} : NewDirectoryListProps){

    const [ initialRandomOrder ] = useState(() =>
        [...businessList].sort(() => Math.random() - 0.5))

    const q = searchTerm.toLowerCase();
    const words = q.split(" ")

    const noFilters = searchTerm.trim() === "" && selectedCategory === "all";

    const filtered = businessList.filter((biz) => {

        const categorySelected = selectedCategory !== 'all';
        
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

        const dropdownCatMatch = categorySelected
            ? (
                biz.profileCategory?.includes(selectedCategory) ||
                biz.profileSubCategory?.includes(selectedCategory)
            )
            : true;

        const searchMatch = !q
            ? true
            : nameMatch || categoryMatch || subCategoryMatch || tagMatch;

        return searchMatch && dropdownCatMatch
    });

    const finalList = noFilters ? initialRandomOrder : filtered

    console.log("selected category:", selectedCategory)

    console.log("Business Categories:", businessList[0].profileCategory);


    return (
        <section
            className={style.directoryListSection}
        >
            
            {finalList?.map((biz) => (
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

        </section>
    )
}