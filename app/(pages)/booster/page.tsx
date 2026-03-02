import BusBoosterHero from "@/components/busBoosterComponents/busBoosterHero";
import BusBoosterIntro from "@/components/busBoosterComponents/busBoosterIntro";
import BusBoosterPartnerGrants from "@/components/busBoosterComponents/busBoosterPartnerGrants";
import BusBoosterSupport from "@/components/busBoosterComponents/busBoosterSupport";



export default function Booster(){
    return(
        <main
            style={{background:"#2f2e33"}}
        >
            <BusBoosterHero/>

            <BusBoosterIntro/>

            <BusBoosterSupport/>

            <BusBoosterPartnerGrants/>
        </main>
    )
}