import { businessList } from '@/lib/members'
import style from './../sandbox.module.css'
import PageHeroSection from '@/components/heroSections/pageHeroSection'
import MemberPageHero from '@/components/heroSections/MemberPageHero'

type Props = {
    params: Promise<{id: string}>
}

export default async function Sandbox({params} : Props){
    const { id } = await params
    const selectedMember = businessList.find(a => a.id === id)

    if(!selectedMember) {
        return <main>Member not found</main>
    }

    return(
        <main
            className={style.pageHeroSection}
        >
            <MemberPageHero
                    profileLogo = {selectedMember.profileLogo}
                    businessName = {selectedMember.businessName}
            />
        </main>
    )
}