'use client'
import style from '@/styles/directoryList.module.css'
import { useState } from 'react'
import { businessList } from '@/lib/members'
import CATsingleBlock from '../CATSINGLEBLOCK/page'

type NewDirectoryListProps = {
    showMoreBus : string,
    searchTerm : string,
    selectedCategory : string
}

export default function NewDirectoryList({
    showMoreBus,
    searchTerm,
    selectedCategory
} : NewDirectoryListProps){

    const [ initialRandomOrder ] = useState(() => [...businessList].sort(() => Math.random() - 0.5))

    console.log('testing the showMoreBus', showMoreBus)

    const q = searchTerm.toLowerCase();

    // console.log('the answer to q is:', q)

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

    console.log('the final list is:', finalList)

    return (
        <section
            className={style.directoryListSection}
        >
            
            {finalList?.map((biz) => (
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

        </section>
    )
}