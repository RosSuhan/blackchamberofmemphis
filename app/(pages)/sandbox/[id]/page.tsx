import { businessList } from '@/lib/members'
import style from './../sandbox.module.css'
import MemberPageHero from '@/components/heroSections/MemberPageHero'
import CategoryContactRow from '@/components/memberComponents/CategoryContactRow'

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

            <CategoryContactRow/>
        </main>
    )
}