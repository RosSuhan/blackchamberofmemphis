import { businessList } from '@/lib/members'
import style from './../sandbox.module.css'
import MemberPageHero from '@/components/heroSections/MemberPageHero'
import CategoryContactRow from '@/components/memberComponents/CategoryContactRow'
import { categories } from '@/lib/categories'

type Props = {
    params: Promise<{id: string}>
}


export default async function Sandbox({params} : Props){
    const { id } = await params
    const selectedMember = businessList.find(a => a.id === id)

    const selectedCategories = categories.filter(category => selectedMember?.profileCategory.includes(category.id))

    console.log(selectedCategories)

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

            <CategoryContactRow
                sharePath = {selectedMember.id}
                categoryList = {selectedCategories}
                addressLink = {selectedMember.addressLink}
                telNumber = {selectedMember.telNumber}
                mail = {selectedMember.email}
                website = {selectedMember.website}
                businessHours = {selectedMember.businessHours}
            />
        </main>
    )
}