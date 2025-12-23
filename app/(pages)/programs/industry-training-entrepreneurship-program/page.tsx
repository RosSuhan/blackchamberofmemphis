import SingleCTAButton from "@/components/callToAction/SingleCTAButton";
import ProgramHero from "@/components/heroSections/programHero";
import ImageWordBlocks from "@/components/WordImageBlocks/ImageWord";
import WordImageBlocks from "@/components/WordImageBlocks/WordImage";


export default function ITEP(){
    return (
        <main>
            <ProgramHero
                programHeroBackgroundImage={'/assets/BCOM Website Backgrounds.png'}
                programMainTitle={"Industry Training & Entrepreneurship Program (ITEP)"}
                programSubHeading={"Building career pathways. Strengthening businesses. Connecting talent to opportunity."}
                programCaption={"The Industry Training & Entrepreneurship Program (ITEP) connects Memphis residents to industry-recognized training, certifications, entrepreneurship support, and real employment opportunities. Designed to meet the workforce needs of local businesses, ITEP creates clear pathways from training to careers while supporting long-term economic growth across our community."}
                programCtaLink={"/"}
                programCtaText={"Apply Today"}
                programCtaLink2={""} 
                programCtaText2={""}
            />

            <WordImageBlocks
                wordHeaderText={"About ITEP"}
                wordParagraphTexts={`
                    <p>The Industry Training & Entrepreneurship Program (ITEP) is a workforce and business development initiative designed to align industry-driven training with real job and entrepreneurship opportunities in Memphis.</p>
                    <p>ITEP brings together employers, training partners, and community members to ensure participants gain the skills, certifications, and support needed to succeed in today’s workforce. The program prioritizes short-term training opportunities that lead to immediate employment, while also outlining long-term career pathways and advancement goals.</p>
                    <h3>ITEP serves:</h2>
                    <ul>
                        <li>Job seekers looking to start or advance their careers</li>
                        <li>Entrepreneurs seeking industry-specific leadership and workforce support</li>
                        <li>Employers looking for trained, job-ready talent</li>
                        <li>Community and reentry residents seeking sustainable economic opportunities</li>
                    </ul>
                `}
                blockImage={'/assets/networking-scaled-1.webp'}
            />

            <ImageWordBlocks
                blockImage={'/assets/networking-scaled-1.webp'}
                wordHeaderText={"Next Level Leadership (NLL) - Entrepreneurship Program"}
                wordParagraphTexts={`
                    <p>The Next Level Leadership (NLL) Entrepreneurship Program provides industry-specific training and technical assistance to entrepreneurs and business owners. Participating businesses play an active role in identifying the workforce skills they need to grow, scale, and improve profitability.</p>
                    <h3>Industries Served:</h3>
                    <ul>
                        <li>Beauty & Personal Services</li>
                        <li>Childcare</li>
                        <li>Construction</li>
                        <li>Janitorial</li>
                        <li>Music & Entertainment</li>
                    </ul>
                    <p>Through NLL, entrepreneurs receive targeted support while helping shape workforce training that prepares future employees for real business needs.</p>
                `}
            />

            <SingleCTAButton
                singleCtaHeading={"Sign up to be part of the ITEP Program."}
                singleCtaText={""}
                singleCtaButtonLink={""}
                singleCtaButtonText={"Register Today"}
            />
        </main>
    )
}