'use client'
import NewDirectoryHero from "@/components/directoryComponents/newDirectoryHero";
import NewDirectoryList from "@/components/directoryComponents/newDirectoryList";
import { useState } from "react";

export default function NewDirectory(){

    const [ searchTerm, setSearchTerm ] = useState('')
    const [ selectedCategory, setSelectedCategory ] = useState("all")

    return (
        <>
            <NewDirectoryHero
                searchTerm = {searchTerm}
                setSearchTerm = {setSearchTerm}
                selectedCategory = {selectedCategory}
                setSelectedCategory = {setSelectedCategory}
            />

            <NewDirectoryList
                searchTerm = {searchTerm}
                selectedCategory = {selectedCategory}
            />
        </>
    )
}