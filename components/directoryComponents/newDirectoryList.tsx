'use client'
import style from '@/styles/directoryList.module.css'
import { useState, useEffect } from 'react'
import { businessList } from '@/lib/members'
import CATsingleBlock from '../CATSINGLEBLOCK/page'

type NewDirectoryListProps = {
    showMoreBus : string,
    searchTerm : string,
    selectedCategory : string
    filterTerm : string
}

export default function NewDirectoryList({
    showMoreBus,
    searchTerm,
    selectedCategory,
    filterTerm
} : NewDirectoryListProps){

    const [ visibleCount, setVisibleCount ] = useState(12);
    useEffect(() => {
        setVisibleCount(12);
    }, [searchTerm, selectedCategory])

    const [ initialRandomOrder ] = useState(() => [...businessList].sort(() => Math.random() - 0.5))

    const q = searchTerm.toLowerCase();

    const words = q.split(" ")

    const noFilters = searchTerm.trim() === "" && selectedCategory === "all" && filterTerm === "all";

    const filtered = initialRandomOrder.filter((biz) => {

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

        const filterMatch = 
            filterTerm === "all"
                ? true
                : Array.isArray(biz.profileCategory)
                    ? biz.profileCategory.some(
                        (cat: string) =>
                            cat.toLowerCase() === filterTerm.toLowerCase()
                    )
                    : false;

            console.log("search term:", q);
            console.log("name match:", nameMatch, biz.businessName)

        return searchMatch && dropdownCatMatch && filterMatch
    });

    const finalList = noFilters ? initialRandomOrder : filtered

    const displayList = finalList.slice(0, visibleCount);

    return (
        <section
            className={style.directoryListSection}
        >
            <p className={style.resultCount}>
                Showing {Math.min(visibleCount, finalList.length)} of {finalList.length} businesses
            </p>

            {displayList?.map((biz) => (
                <CATsingleBlock
                    key = {biz.id}
                    star = {biz.memberStatus}
                    featureImage = {`/members/${biz.profileLogo}.webp`}
                    featureName = {biz.businessName}
                    featureText = {biz.profileDescription}
                    featureTextLimit = {15}
                    featureLink = {`business-directory/${biz.id}`}
                    featureLinkText = {'View Profile'}
                />
            ))}

            {visibleCount < finalList.length && (
                <div className={style.showMoreContainer}>
                    <button
                        className="globalGoldButton"
                        onClick={() => setVisibleCount(prev => prev + 12)}
                    >
                        Show More Businesses
                    </button>
                </div>
            )}
        </section>
    )
}