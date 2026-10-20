import Symposium2026Hero from "@/components/heroSections/Symposium2026Hero";
import FeatureStory from "@/components/symposiumComps/FeatureStory/page";
import Symp2026Gallery from "@/components/symposiumComps/symp2026Gallery/page";
import Symp2026Sponsors from "@/components/symposiumComps/symp2026Sponsors/page";
import Symp26ThankYouSection from "@/components/symposiumComps/symp26ThankYouSection/page";
import SympAIMcta from "@/components/symposiumComps/sympAIMcta/page";
import SympThreeImageRow from "@/components/symposiumComps/threeBlockRow/SympThreeImageRow";

export default function Symposium2026(){
    return(
        <main>
            <Symposium2026Hero/>

            <Symp26ThankYouSection/>

            <SympThreeImageRow/>

            <Symp2026Gallery/>

            <FeatureStory/>

            <Symp2026Sponsors/>

            <SympAIMcta/>
        </main>
    )
}