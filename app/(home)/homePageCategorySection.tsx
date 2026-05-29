'use client'
import SearchBar from '@/components/SearchBar/page'
import style from './homePageCategorySection.module.css'
// import { useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import { useRouter} from 'next/navigation'
import { businessList } from '@/lib/members'
import CATsingleBlock from '@/components/CATSINGLEBLOCK/page'
import Link from 'next/link'

export default function HomePageCategorySection(){
    const router = useRouter();

    const [ searchTerm, setSearchTerm ] = useState('')

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()

        if (!searchTerm.trim()) return;

        console.log("search to be excecuted", searchTerm)

        router.push(`/business-directory?q=${encodeURIComponent(searchTerm)}`)
    }

    const [homepageBusinesses] = useState(() => {
        return [...businessList]
            .filter((biz) => biz.memberStatus === true)
            .sort(() => Math.random() - 0.5)
            .slice(0, 6);
    });

    return(
        <section
            className={style.homepageCatSection}
        >
            <h2
                className='globalSecondHeading'
                style={{textAlign:"center"}}
            >
                Discover Memphis Businesses
            </h2>

            <SearchBar
                handleSubmit = {handleSubmit}
                searchValue = {searchTerm}
                placeholder = {'Search for services, industries, or businesses'}
                setSearchValue = {setSearchTerm}
            />

            <div
                className={style.homepageDirectoryBlock}
            >
                {homepageBusinesses.map((hb) => (
                    <CATsingleBlock
                        key = {hb.id}
                        star = {hb.memberStatus}
                        featureImage = {`/members/${hb.profileLogo}.webp`}
                        featureName = {hb.businessName}
                        featureText = {hb.profileDescription}
                        featureTextLimit = {15}
                        featureLink = {`business-directory/${hb.id}`}
                        featureLinkText = {'View Profile'}
                    />
                ))}
            </div>
            
            <div
                className={style.homepageDirectoryCtaRow}
            >
                <Link
                    href={'/business-directory'}
                    className='globalGoldButton'
                >
                    View Full Directory
                </Link>
            </div>
        </section>
    )
}