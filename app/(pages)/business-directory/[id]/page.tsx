import type { Metadata } from "next";
import MemberContactSection from "@/components/memberComponents/memberContactSection";
import MemberHeroSection from "@/components/memberComponents/memberHeroSection";
import MembersDescriptionSection from "@/components/memberComponents/membersDescriptionSection";
import { businessList } from "@/lib/members";

type Props = {
    params: Promise<{id: string}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const selectedMember = businessList.find(a => a.id === id);

    if(!selectedMember) {
        return {
            title: "Member Not Found",
        }
    }

    const url = `https://blackchamberofmemphis.org/business-directory/${id}`

    console.log(url)

    return {
        title: selectedMember.businessName,
        description: selectedMember.profileDescription,

        openGraph: {
            title: selectedMember.businessName,
            description: selectedMember.profileDescription,
            url: url,
            type: 'website',
            images: selectedMember.profileLogo
                ? [
                    {
                        url: `https://blackchamberofmemphis.org/business-directory/${selectedMember.profileLogo}.webp`,
                        width: 1200,
                        height: 630,
                    },
                ]
            : [],
        },

        twitter: {
            card: "summary_large_image",
            title: selectedMember.businessName,
            description: selectedMember.profileDescription,
            images: selectedMember.profileLogo
                ? [`https://blackchamberofmemphis.org/business-directory/${selectedMember.profileLogo}.webp`]
                : [],
        },
    }
}

export default async function NewMemberPage({ params }: Props){
    const { id } = await params
    const selectedMember = businessList.find(a => a.id === id);

    if(!selectedMember) {
        return <main>Member not found</main>
    }

    
    const longDescription = selectedMember?.profileBusinessDescription

    return (
        <main>
            <MemberHeroSection
                memberStatus = {selectedMember?.memberStatus || false}
                businessName = {selectedMember?.businessName || "Business Name"}
                path = {selectedMember?.id || ''}
            />

            <div
                style={{width:"100%", display:"flex", alignItems:"flex-start", flexWrap:"wrap"}}
            >
                <MembersDescriptionSection
                    shortDescription = {selectedMember?.profileDescription || ''}
                    longBusDescription = {longDescription || ''}
                    gallery = {selectedMember?.gallery || []}
                />

                <MemberContactSection
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
                />
            </div>
        </main>
    )
}