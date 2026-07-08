import { Metadata } from "next"
import BcAboutSection from "@/components/BUSprofileComponents/BcAboutSection"
import BcContactButtonSection from "@/components/BUSprofileComponents/BcContactButtonSection"
import BcGetListedButton from "@/components/BUSprofileComponents/BcGetListedButton"
import BcProfileHeader from "@/components/BUSprofileComponents/BcProfileHeader"
import PartnerLogoSection from "@/components/PartnerLogoSection/page"
import BcPopup from "@/components/Popup/BcPopup"
import { vCardProfileData } from "@/lib/vCardProfileData"

type BusinessCardProp = {
    params : {
        id: string
    }
}

export async function generateMetadata({params}: BusinessCardProp): Promise<Metadata>{
    const { id } = await params;
    const selectedTeamMember = vCardProfileData.find((team) => team.slug === id);

    if(!selectedTeamMember){
        return {
            title: 'Digital Business Card | Black Chamber of Memphis',
            description: 'This business card could not be found. Browse all local businesses in the Black Chamber of Memphis Business Directory.',
            alternates: { canonical: 'https://blackchamberofmemphis.org/business-directory' },
        }
    }

    const url = `https://blackchamberofmemphis.org/buscard/${id}`

    return {
        title: `${selectedTeamMember?.first_name} ${selectedTeamMember?.last_name} | Black Chamber of Memphis Directory`,
        description: selectedTeamMember.bio,
        keywords: [
            `${selectedTeamMember.first_name} ${selectedTeamMember.last_name}`,
            'Black Chamber of Memphis member',
            'Memphis local business',
        ],
        alternates: { canonical: url },
        openGraph: {
            title: `${selectedTeamMember.first_name} ${selectedTeamMember.last_name} | Black Chamber of Memphis Directory`,
            description: selectedTeamMember.bio,
            url: url,
            siteName: 'Black Chamber of Memphis',
            type: 'website',
            images: selectedTeamMember.image
            ? [
                {
                    url: `https://blackchamberofmemphis.org/${selectedTeamMember.image}`,
                    width: 360,
                    height: 360,
                    alt: `${selectedTeamMember.first_name} ${selectedTeamMember.last_name} — Black Chamber of Memphis Member`,
                },
                ]
            : [
                {
                    url: 'https://blackchamberofmemphis.org/${selectedTeamMember.image}',
                    width: 360,
                    height: 360,
                    alt: 'Black Chamber of Memphis Business Directory',
                },
                ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${selectedTeamMember.first_name} ${selectedTeamMember.last_name} | Black Chamber of Memphis Directory`,
            description: selectedTeamMember.bio,
            images: selectedTeamMember.image
            ? [`https://blackchamberofmemphis.org/${selectedTeamMember.image}`]
            : ['/images/og-default.jpg'],
        },
    }
}

export default async function BusinessCardPage({
    params
} : BusinessCardProp){
    const { id } = await params
    const selectedTeamMember = vCardProfileData.find(team => team.slug === id);

    return(
        <main
            style={{width:"100dvw", display:'flex', flexDirection:"column", alignItems:"center"}}
        >
            <BcPopup
                storageKey={`${selectedTeamMember?.first_name}`}
            />
            <BcProfileHeader
                bannerImage = {'/assets/BCM-Logo_Black-Pattern.webp'}
                profileImage = {`${selectedTeamMember?.image}`}
                logoImage = {'/assets/BCM-Logo_Full-Color-Black-Text.webp'}
                profileName = {`${selectedTeamMember?.first_name} ${selectedTeamMember?.last_name}`}
                profileTitle = {`${selectedTeamMember?.title}`}
                profileCompany = {'Black Chamber of Memphis'}
            />
            <BcContactButtonSection
                phoneNumber="9016369300"
                emailLink={`${selectedTeamMember?.email}`}
                websiteLink="blackchamberofmemphis.org"
                name={`${selectedTeamMember?.first_name} ${selectedTeamMember?.last_name}`}
                org="Black Chamber of Memphis"
                title={`${selectedTeamMember?.title}`}
                address="Memphis"
            />
            <BcAboutSection
                bioBlock = {`${selectedTeamMember?.vCardBioSection}`}
                addressLink={"https://share.google/Ke6xh3QEPcvI06W2F"}
                addressText={"480 Doctor M.L.K. Jr Ave #101, Memphis, TN 38126, United States"}
                instagramLink={"https://www.instagram.com/bcomemphis/"}
                facebookLink={"https://www.facebook.com/BCOMemphis"}
                twitterLink={"https://twitter.com/BBAMemphis"}
                linkedInLink={"https://www.linkedin.com/company/bcomemphis/"}
                youTubeLink={"https://www.youtube.com/@BlackChamberofMemphis"}
                qrCodeImage = {`${selectedTeamMember?.qrCode}`}
                memberBtn={`${selectedTeamMember?.memberBtn}`}
                memberSince={`${selectedTeamMember?.memberSince}`}
            />

            <BcGetListedButton/>

            <PartnerLogoSection/>
        </main>
    )
}