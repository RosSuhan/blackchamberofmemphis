'use client'

import { businessList } from '@/lib/members'
import { categories } from '@/lib/categories'

import BusinessBlock from "@/components/directoryComponents/BusinessBlock"
import PageTitleSection from "@/components/pageTitleSection/page"
import style from '@/styles/businessDirectory.module.css'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function BusinessCategoryDirectory() {
    const params = useParams();
    const id = params?.id as string;

    if (!id) return null;

    // --- Find Main Category (if exists) ---
    const selectedCategory = categories.find(c => c.id === id);

    // --- Find Subcategory (if not a main category) ---
    let selectedSubCategory: { name: string; id: string; image: string } | null = null;
    let parentCategory: { name: string; id: string; image: string; subCategories?: { name: string; id: string; image: string }[] } | null = null;

    if (!selectedCategory) {
        for (const category of categories) {
            const foundSub = category.subCategories?.find(sub => sub.id === id);
            if (foundSub) {
                selectedSubCategory = foundSub;
                parentCategory = category;
                break;
            }
        }
    }

    const normalize = (value: string | string[]): string[] => {
        return Array.isArray(value) ? value : [value]
    }

    // --- Filter Businesses ---
    const filteredBusinesses = businessList.filter((business) => {
        // const categoryMatch = normalize(business.profileCategory)
        const categoryMatch = Array.isArray(business.profileCategory) ? business.profileCategory.includes(id) : business.profileCategory === id;

        const subCategoryMatch = Array.isArray(business.profileSubCategory) ? business.profileSubCategory.includes(id) : business.profileSubCategory === id;

        return categoryMatch || subCategoryMatch;
    });

    // --- Handle Missing Category ---
    if (!selectedCategory && !selectedSubCategory) {
        return <p>No Category Found.</p>;
    }

    // --- Page Title ---
    const pageTitle = selectedCategory
        ? selectedCategory.name
        : selectedSubCategory
            ? selectedSubCategory.name
            : '';

    return (
        <main className={style.businessDirectoryPage}>
            <PageTitleSection pageTitle={pageTitle} />

            {/* --- Breadcrumb --- */}
            {selectedSubCategory && parentCategory && (
                <section className={style.breadcrumbSection}>
                    <Link href="/business-directory" className={style.breadcrumbLink}>
                        All Categories
                    </Link>
                    <span className={style.breadcrumbDivider}>›</span>
                    <Link
                        href={`/business-directory/${parentCategory.id}`}
                        className={style.breadcrumbLink}
                    >
                        {parentCategory.name}
                    </Link>
                    <span className={style.breadcrumbDivider}>›</span>
                    <span className={style.breadcrumbActive}>{selectedSubCategory.name}</span>
                </section>
            )}

            {/* --- Subcategory Links (only for main categories) --- */}
            {selectedCategory && selectedCategory.subCategories && selectedCategory.subCategories.length > 0 && (
                <section className={style.busSubCategorySection}>
                        <Link
                            href={`/business-directory`}
                            className={style.categorieLink}
                        >
                            All Categories
                        </Link>
                    {selectedCategory.subCategories.map((sub, index) => (
                        <Link
                            key={index}
                            href={`/business-directory/${sub.id}`}
                            className={style.categorieLink}
                        >
                            {sub.name}
                        </Link>
                    ))}
                </section>
            )}

            {/* --- Businesses --- */}
            <section className={style.busDirectorySection}>
                {filteredBusinesses.length > 0 ? (
                    filteredBusinesses.map((business) => (
                        <BusinessBlock
                            key={business.id}
                            id={business.id}
                            blockPath={business.id}
                            blockImage={business.profileLogo}
                            businessTitle={business.businessName}
                            businessDescription={business.profileDescription}
                            phoneNumber={business.telNumber}
                            emailText={business.email}
                            websiteLink={business.website}
                        />
                    ))
                ) : (
                    <p>No businesses found in this category.</p>
                )}
            </section>
        </main>
    );
}
