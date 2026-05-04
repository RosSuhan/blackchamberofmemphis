'use client'
import Link from 'next/link'
import style from './pageHero.module.css'
import Image from 'next/image'
import React from 'react'
import SearchBar from '../SearchBar/page'
import { useState } from 'react'
import { useRouter} from 'next/navigation'

type ctaButtonProps = {
    name: string
    path: string
    type: string
}[]

type pageHeroProps = {
    mainHeading : string
    subHeading : string
    searchbar : boolean
    ctaButtons : ctaButtonProps
    placeholder : string
    initialSearchTerm? : string
}

export default function PageHeroSection({
    mainHeading,
    subHeading,
    searchbar,
    ctaButtons,
    placeholder,
    initialSearchTerm
}: pageHeroProps){

    const backgroundImage = "/assets/pageHeroImage.jpg"

    const router = useRouter();

    const [ searchTerm, setSearchTerm ] = useState(initialSearchTerm || '')

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()

        if (!searchTerm.trim()) return;

        console.log("search to be excecuted", searchTerm)

        router.push(`/business-directory?q=${encodeURIComponent(searchTerm)}`)
    }

    return(
        <section
            className={style.pageHeroSection}
        >
            <Image
                src={backgroundImage}
                alt=''
                width={1400}
                height={500}
                className={style.herobackgroundImage}
            />
            <div
                className={style.pageHeroOverlay}
            >
                <h1
                    className='globalMainHeading'
                >
                    {mainHeading}
                </h1>

                {subHeading ? 
                    <h2
                        className='globalThirdHeading'
                    >
                        {subHeading}
                    </h2>
                : null}

                {searchbar ? 
                    <div
                        className={style.pageHeroSearchBar}
                    >
                        <SearchBar
                            handleSubmit = {handleSubmit}
                            searchValue = {searchTerm}
                            setSearchValue = {setSearchTerm}
                            placeholder = {placeholder}
                        />
                    </div>
                    
                : null}

                {ctaButtons?
                    <div
                        className={style.pageHeroButtonRow}
                    >
                        {ctaButtons.map((button, index) => (
                            <Link 
                                href={button.path}
                                className={button.type}
                                key={index}
                            >
                                {button.name}
                            </Link>
                ))}
                    </div>
                : null}
            </div>
        </section>
    )
}