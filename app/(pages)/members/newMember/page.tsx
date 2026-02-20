




import MemberContactSection from "@/components/memberComponents/memberContactSection";
import MemberHeroSection from "@/components/memberComponents/memberHeroSection";
import MembersDescriptionSection from "@/components/memberComponents/membersDescriptionSection";

export default function NewMemberPage(){
    return (
        <main>
            <MemberHeroSection/>

            <div
                style={{width:"100%", display:"flex", alignItems:"flex-start", flexWrap:"wrap"}}
            >
                <MembersDescriptionSection/>

                <MemberContactSection/>
            </div>
        </main>
    )
}