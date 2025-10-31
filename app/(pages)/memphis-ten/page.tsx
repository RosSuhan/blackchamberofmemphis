import MemphisTenHero from "@/components/heroSections/MemphisTen";
import MtenMatters from "./(mtenComponents)/MtenMatters";
import ThreePillars from "./(mtenComponents)/ThreePillars";
import MtenProgram from "./(mtenComponents)/MtenProgramSection";
import MTenGoals from "./(mtenComponents)/MtenGoals";


export default function MemphisTen(){
    return(
        <main>
            {/* HeroBanner */}
            <MemphisTenHero/>

            {/* Why memphisTen matters */}
            <MtenMatters/>

            {/* out approach - three pillars */}
            <ThreePillars/>

            {/* program overview */}
            <MtenProgram/>

            {/* impact & goals */}
            <MTenGoals/>

            {/* testimonials */}

            {/* get involved */}

            {/* faq */}

            {/* application cta */}
        </main>
    )
}