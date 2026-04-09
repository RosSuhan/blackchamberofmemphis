import SymposiumApplication from "@/components/symposiumComps/applicationForm/page";
import SymposiumHero from "@/components/symposiumComps/hero/HeroSection";
import WideTextSection from "@/components/symposiumComps/wideTextSection/page";


export default function CreativeProdApplication(){
    const sponsorCtaButtons = [
        {
            path: "/events/symposium/creative-production-sponsorship/application",
            buttonName: "Become a Sponsor",
            type : "internal"
        }
    ]

    return(
        <main>
            <SymposiumHero
                showButtons={false}
                ctaButtons={sponsorCtaButtons}
            />

            <WideTextSection
                wideTextSectionHeading={"2026 Creative & Production In-Kind Sponsorship Application"}
                wideTextSectionText={`
                    <p>
                        Thank you for your interest in serving as a Creative & Production Sponsor for the 2026 Building Wealth in Our Community Symposium, the Black Chamber of Memphis’ annual fundraiser.
                    </p>
                    <p>
                        This program is a service-based sponsorship opportunity where businesses contribute in-kind professional services in exchange for structured visibility, brand positioning, and access benefits.
                    </p>
                    <p>
                        This application is designed to capture an overview of your services, experience, and estimated in-kind contribution.<br/>
                        <strong>Estimated completion time: 10–15 minutes.</strong>
                    </p>
                    <p>
                        Selected partners will be assigned sponsorship recognition based on the verified fair market value of services provided.<br/>
                        <strong>Submission Deadline: Friday, May 1, 2026</strong>
                    </p>`
                }
            />


            <SymposiumApplication/>
        </main>
    )
}