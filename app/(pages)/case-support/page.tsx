import BCOMmatters from "@/components/bcomMatters/page";
import BecomeAPartner from "@/components/callToAction/BecomeAPartner";
import CaseSupportChallenge from "@/components/caseSupportComponents/challenge";
import CaseSupportHero from "@/components/heroSections/CaseSupportHero";
import MTenOverview from "@/components/mTenOverview/page";
import SupportMatters from "@/components/supportMatters/page";




export default function CaseSupport(){
    return (
        <main>
            <CaseSupportHero/>

            <CaseSupportChallenge/>

            <BCOMmatters/>

            <BecomeAPartner/>

            <MTenOverview/>

{/* 
    Social Proof / Partnerships
H2: We’re Already Opening Doors

Partners Logos:
Shelby County Government · City of Memphis IT Department · Memphis International Airport

Subtext:
We have already connected Black-owned IT firms to major decision-makers. MemphisTEN accelerates this access across industries.
*/}

            <SupportMatters/>

            {/* <DoubleCTAButtonRow/> */}

        </main>
    )
}