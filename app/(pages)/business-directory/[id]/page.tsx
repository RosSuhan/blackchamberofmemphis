import type { Metadata } from "next";
import { businessList } from "@/lib/members";
import MemberPageHero from "@/components/heroSections/MemberPageHero";
import CategoryContactRow from "@/components/memberComponents/CategoryContactRow";
import { categories } from "@/lib/categories";
import OneColumn from "@/components/WordImageBlocks/OneColumn";
import TwoColumnText from "@/components/WordImageBlocks/TwoColumnText";
import GallerySection from "@/components/GALLERYSECTION/page";
import VerifiedBanner from "@/components/memberComponents/VerifiedBanner";

type Props = {
    params: Promise<{id: string}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const selectedMember = businessList.find((a) => a.id === id);

    if (!selectedMember) {
        return {
            title: 'Business Not Found | Black Chamber of Memphis Directory',
            description: 'This business listing could not be found. Browse all local businesses in the Black Chamber of Memphis Business Directory.',
            alternates: { canonical: 'https://blackchamberofmemphis.org/business-directory' },
        };
    }

    const url = `https://blackchamberofmemphis.org/business-directory/${id}`;

    return {
        title: `${selectedMember.businessName} | Black Chamber of Memphis Directory`,
        description: selectedMember.profileDescription,
        keywords: [
            selectedMember.businessName,
            `${selectedMember.businessName} Memphis`,
            'Black Chamber of Memphis member',
            'Memphis local business',
        ],
        alternates: { canonical: url },
        openGraph: {
            title: `${selectedMember.businessName} | Black Chamber of Memphis Directory`,
            description: selectedMember.profileDescription,
            url: url,
            siteName: 'Black Chamber of Memphis',
            type: 'website',
            images: selectedMember.profileLogo
            ? [
                {
                    url: `https://blackchamberofmemphis.org/members/${selectedMember.profileLogo}.webp`,
                    width: 1200,
                    height: 630,
                    alt: `${selectedMember.businessName} — Black Chamber of Memphis Member`,
                },
                ]
            : [
                {
                    url: '/images/og-default.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Black Chamber of Memphis Business Directory',
                },
                ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${selectedMember.businessName} | Black Chamber of Memphis Directory`,
            description: selectedMember.profileDescription,
            images: selectedMember.profileLogo
            ? [`https://blackchamberofmemphis.org/members/${selectedMember.profileLogo}.webp`]
            : ['/images/og-default.jpg'],
        },
        };
}

export default async function NewMemberPage({ params }: Props){
    const { id } = await params
    const selectedMember = businessList.find(a => a.id === id);

    const selectedCategories = categories.filter(category => selectedMember?.profileCategory.includes(category.id))

    const showMoreBusinesses = selectedCategories[0]?.name || "";

    console.log('search for more businesses in this category:', showMoreBusinesses)

    if(!selectedMember) {
        return <main>Member not found</main>
    }

    return (
        <main>
            <MemberPageHero
                profileLogo = {selectedMember?.profileLogo}
                businessName = {selectedMember?.businessName}
                memberStatus = {selectedMember.memberStatus}
            />

            <CategoryContactRow
                sharePath = {selectedMember.id}
                categoryList = {selectedCategories}
                addressLink = {selectedMember.addressLink}
                telNumber = {selectedMember.telNumber}
                mail = {selectedMember.email}
                website = {selectedMember.website}
                businessHours = {selectedMember.businessHours}
            />

            <OneColumn
                backgroundColor = {'var(--white)'} 
                textColor = {'var(--black)'}
                paragraph = {selectedMember.profileDescription}
                multiWeekProgram = {false}
                multiEvents = {[]}
            />
            
            {selectedMember.offering && selectedMember.busBullets ? 
                <TwoColumnText
                    backgroundColor = {"var(--darkGrey)"}
                    textColor = {"var(--white)"}
                    blockHeadingOne = {'What They Offer:'}
                    blockTextOne = {selectedMember.offering}
                    blockHeadingTwo = {'Why Choose This Business:'}
                    blockTextTwo = {selectedMember.busBullets}
                />
            : null}

            {selectedMember?.gallery && selectedMember?.gallery?.length > 0 && (
                <GallerySection
                sectionBackground = {"var(--white)"}
                galleryHeadingText = {"Gallery"}
                galleryImages = {selectedMember?.gallery || []}
            />
            )}
            
            {selectedMember?.profileBusinessDescription ? 
                <OneColumn
                    blockHeading = {"Detaild Description for this business:"}
                    paragraph = {selectedMember.profileBusinessDescription}
                    multiWeekProgram = {false}
                    multiEvents = {[]}
                />
            :null}

            {selectedMember.memberStatus ? 
                <VerifiedBanner
                    backgroundColor = {"var(--darkGrey)"}
                    textColor = {"var(--white)"}
                />
            : null}

            {/* <MoreBusinessRow
                showMoreBus = {showMoreBusinesses}
                searchTerm = {''}
                selectedCategory = {''}
            /> */}

            {/* <div
                style={{width:"100%", display:"flex", alignItems:"flex-start", flexWrap:"wrap"}}
            > */}
                {/* <MembersDescriptionSection
                    shortDescription = {selectedMember?.profileDescription || ''}
                    longBusDescription = {longDescription || ''}
                    gallery = {selectedMember?.gallery || []}
                /> */}

                {/* <MemberContactSection
                    phone = {selectedMember?.telNumber || ''}
                    mail = {selectedMember?.email || ''}
                    website = {selectedMember?.website || ''}
                    addressLink = {selectedMember?.addressLink || ''}
                    addressDetail = {selectedMember?.address || ''}
                    facebook = {selectedMember?.facebook || ''}
                    instagram = {selectedMember?.instagram || ''}
                    youtube = {selectedMember?.youtube || ''}
                    linkedIn = {selectedMember?.linkedIn || ''}
                    linktree = {selectedMember?.linktree || ''}
                    twitter = {selectedMember?.twitter || ''}
                    tiktok = {selectedMember?.tiktok || ''}
                    pinterest = {selectedMember?.pinterest || ''}
                    profileLogo = {selectedMember?.profileLogo || ''}
                    businessName = {selectedMember?.businessName || ''}
                    businessHours = {selectedMember?.businessHours || []}
                /> */}
            {/* </div> */}
        </main>
    )
}