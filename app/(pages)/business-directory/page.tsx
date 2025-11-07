// import { allMembers } from '@/lib/members/index'
import { businessList } from '@/lib/members'


import BusinessBlock from "@/components/directoryComponents/BusinessBlock"
import PageTitleSection from "@/components/pageTitleSection/page"
import style from '@/styles/businessDirectory.module.css'


export default function BusinessDirectory(){

    console.log(businessList)
    return(
        <main
            className={style.businessDirectoryPage}
        >
            <PageTitleSection
                pageTitle="Directory:"
            />

            {/* searchBar */}

            <section
                className={style.busDirectorySection}
            >
                {businessList.map((business) => (
                    <BusinessBlock
                        key = {business.id}
                        blockPath = {business.id}
                        blockImage = {business.profileLogo}
                        businessTitle = {business.businessName}
                        businessDescription = {business.profileDescription}
                    />
                ))}
            </section>
        </main>
    )
}