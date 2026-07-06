import BcAboutSection from "@/components/BUSprofileComponents/BcAboutSection"
import BcContactButtonSection from "@/components/BUSprofileComponents/BcContactButtonSection"
import BcGetListedButton from "@/components/BUSprofileComponents/BcGetListedButton"
import BCPartnersRow from "@/components/BUSprofileComponents/BcPartnersRow"
import BcProfileHeader from "@/components/BUSprofileComponents/BcProfileHeader"

export default function BusinessCardPage(){
    return(
        <main
            style={{width:"100dvw", display:'flex', flexDirection:"column", alignItems:"center"}}
        >
            <BcProfileHeader
                bannerImage = {'/assets/BCM-Logo_Black-Pattern.webp'}
                profileImage = {'/our-team/Alan.png'}
                logoImage = {'/assets/BCM-Logo_Full-Color-Black-Text.webp'}
                profileName = {'Alan Gumbel'}
                profileTitle = {'COO'}
                profileCompany = {'Black Chamber of Memphis'}
            />
            <BcContactButtonSection
                phoneNumber="9016369300"
                emailLink="alan@bbamemphis.com"
                websiteLink="blackchamberofmemphis.org"
            />
            <BcAboutSection
                bioBlock = {`<p>Alan Gumbel became the Chief Operating Officer of the Black Business Association of Memphis (BBA Memphis) in January 2023. Alan brings years of executive and senior leadership to his role; having served as Executive Director of the Memphis Academy of Health Sciences, the Greater Memphis Alliance for a Competitive Workforce, and Deputy Director of Programs of the City of Memphis Workforce Investment Network.</p>`}
                addressLink={"https://share.google/Ke6xh3QEPcvI06W2F"}
                addressText={"480 Doctor M.L.K. Jr Ave #101, Memphis, TN 38126, United States"}
                instagramLink={"https://www.instagram.com/bcomemphis/"}
                facebookLink={"https://www.facebook.com/BCOMemphis"}
                twitterLink={"https://twitter.com/BBAMemphis"}
                linkedInLink={"https://www.linkedin.com/company/bcomemphis/"}
                youTubeLink={"https://www.youtube.com/@BlackChamberofMemphis"}
            />

            <BcGetListedButton
            />

            <BCPartnersRow/>
        </main>
    )
}