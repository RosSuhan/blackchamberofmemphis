'use client'
import Link from 'next/link'
import style from './pageHero.module.css'
import Image from 'next/image'
import React from 'react'
import SearchBar from '../SearchBar/page'
import { useState } from 'react'
import { useRouter} from 'next/navigation'
import clsx from 'clsx'

type ctaButtonProps = {
    name: string
    path: string
    type: string
}[]

type stateButtonsProp = {
    name : string,
    key : string
}[]

type pageHeroProps = {
    eventHost? : string
    mainHeading : string
    subHeading : string
    searchbar : boolean
    ctaButtons : ctaButtonProps
    placeholder : string
    initialSearchTerm? : string
    eventDate? : string
    eventTime? : string
    eventPrice? : string
    eventAddress? : string
    stateButtons : stateButtonsProp
    selectedState? : string
    setSelectedState? : (value: string) => void
}

export default function PageHeroSection({
    eventHost,
    mainHeading,
    subHeading,
    searchbar,
    ctaButtons,
    placeholder,
    initialSearchTerm,
    eventDate,
    eventTime,
    eventPrice,
    eventAddress,
    stateButtons,
    selectedState,
    setSelectedState,
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
                {eventHost ? 
                    <div
                        className={style.eventHostRow}
                    >
                        <p
                            className={style.eventHostName}
                        >
                            {eventHost}
                        </p>
                    </div> 
                : null}
                
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
                <div
                    className={style.spacer}
                >

                </div>

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

                {eventDate ? 
                    <div
                        className={style.dateTimeAddress}
                    >
                        <span>{eventDate}</span>
                        {eventTime ? <><span>@</span><span>{eventTime}</span></>: null}
                        {eventPrice ? <span>Ticket Price: ${eventPrice}</span> : null}
                        {eventAddress ? <span>{eventAddress}</span> : null}
                    </div>
                : null}

                {ctaButtons?.length > 0 &&
                    <div
                        className={clsx(eventDate ? style.pageHeroHalfCtaButtonRow : style.pageHeroButtonRow)}
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
                }

                {stateButtons ? 
                    <div
                        className={style.pageHeroButtonRow}
                    >
                        {stateButtons?.map((stateButton) => (
                            <button 
                                type="button"
                                key={stateButton.key}    
                                onClick={() => {
                                    setSelectedState?.(stateButton.key)
                                    router.push(`/resources?tab=${stateButton.key}`)
                                }}
                                // className={clsx()}
                                className = { selectedState === stateButton.key ? 'globalGoldButton' : 'globalDarkButton'}
                            >
                                {stateButton.name}
                            </button>
                        ))}
                    </div>
                : null} 
            </div>
        </section>
    )
}