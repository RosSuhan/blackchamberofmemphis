import BusBoosterHero from "@/components/busBoosterComponents/busBoosterHero";
import BusBoosterIntro from "@/components/busBoosterComponents/busBoosterIntro";
import BusBoosterPartnerGrants from "@/components/busBoosterComponents/busBoosterPartnerGrants";
import BusBoosterSupport from "@/components/busBoosterComponents/busBoosterSupport";
import Footer from "@/components/nav/Footer/page";
import Header from "@/components/nav/Header/page";



export default function Booster(){
    return(
        <>
            <Header/>
            <main
                style={{background:"#2f2e33"}}
            >
                <BusBoosterHero/>

                <BusBoosterIntro/>

                <BusBoosterSupport/>

                <BusBoosterPartnerGrants/>
            </main>
            <Footer/>
        </>
    )
}