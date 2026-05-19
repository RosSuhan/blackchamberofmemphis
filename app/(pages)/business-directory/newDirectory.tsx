'use client'
import { useSearchParams } from "next/navigation";
import NewDirectoryList from "@/components/directoryComponents/newDirectoryList";
import PageHeroSection from "@/components/heroSections/pageHeroSection";

export default function NewDirectory(){
    const searchParams = useSearchParams();

    const searchTerm = searchParams.get('q') || '';
    const selectedCategory = searchParams.get('category') || 'all'

    return (
        <>
            <PageHeroSection
                mainHeading = "Find Trusted Memphis Businesses"
                subHeading = ""
                searchbar = {true}
                ctaButtons={[]}
                placeholder="Search for services, business or keywords..."
                initialSearchTerm={searchTerm}
            />

            <NewDirectoryList
                showMoreBus = {""}
                searchTerm = {searchTerm}
                selectedCategory = {selectedCategory}
            />
        </>
    )
}