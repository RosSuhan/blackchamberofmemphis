import SingleCTAButton from "@/components/callToAction/SingleCTAButton";
import ProgramHero from "@/components/heroSections/programHero";
import DoubleTextBox from "@/components/WordImageBlocks/DoubleTextBox";
import ImageWordBlocks from "@/components/WordImageBlocks/ImageWord";
import ThreeTextBlock from "@/components/WordImageBlocks/ThreeTextBlock";
import WordImageBlocks from "@/components/WordImageBlocks/WordImage";


export default function ITEP(){
    return (
        <main>
            <ProgramHero
                programHeroBackgroundImage={'/assets/BCOM Website Backgrounds.png'}
                programMainTitle={"Industry Training & Entrepreneurship Program (ITEP)"}
                programSubHeading={"Building career pathways. Strengthening businesses. Connecting talent to opportunity."}
                programCaption={"The Industry Training & Entrepreneurship Program (ITEP) connects Memphis residents to industry-recognized training, certifications, entrepreneurship support, and real employment opportunities. Designed to meet the workforce needs of local businesses, ITEP creates clear pathways from training to careers while supporting long-term economic growth across our community."}
                programCtaLink={"https://form.jotform.com/242944863505160"}
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
                singleCtaButtonLink={"https://form.jotform.com/242944863505160"}
                singleCtaButtonText={"Register Today"}
            />

            <WordImageBlocks
                wordHeaderText={"Talent Connect – Career Pathways & Job Matching"}
                wordParagraphTexts={`
                    <p>Talent Connect provides job seekers with access to full-time employment opportunities across a range of industries. The program features an AI-powered job matching tool that connects participants to available positions based on skills, interests, and career goals.</p>
                    <h3>Program Highlights:</h3>
                    <ul>
                        <li>Access to 200+ full-time job opportunities in Memphis</li>
                        <li>Starting salaries of $40,000+</li>
                        <li>AI-supported job matching</li>
                        <li>Online and in-person career readiness training</li>
                    </ul>
                    <p>Talent Connect supports individuals looking to launch new careers or improve their long-term career trajectory.</p>`}
                blockImage={'/assets/networking-scaled-1.webp'}
            />

            <DoubleTextBox
                doubleTextHeadingText={'Industry-Specific Workforce Training'}
                doubleTextParagraphText={`
                    <p>
                        ITEP delivers industry-specific workforce training programs aligned directly with employer needs. Training opportunities lead to industry-recognized certifications and are designed to move participants into employment quickly.
                    </p>
                    <p>
                        Participants may access financial assistance through programs such as SNAP, WIOA, Tennessee Promise, and other public or private funding sources. Additional program support may be available to help ensure successful completion.
                    </p>`}
                doubleTextListBlockText={`
                    <h3>
                        Key Features:
                    </h3>
                    <ul>
                        <li>
                            Short-term certification programs
                        </li>
                        <li>
                            Employer-informed curriculum
                        </li>
                        <li>
                            Clear career pathways and advancement planning
                        </li>
                        <li>
                            Financial support options where eligible
                        </li>
                    </ul>`}
            />

            <ImageWordBlocks
                wordHeaderText={"Recruitment & Participant Intake"}
                wordParagraphTexts={`
                    <p>
                        ITEP recruits participants through multiple community-based channels, including workforce partners and reentry support programs. Each participant completes skills and interest assessments to ensure they are matched with training and career opportunities aligned with their goals.
                    </p>
                    <p>
                        This personalized intake process helps participants identify the best pathway toward employment, entrepreneurship, or career advancement.
                    </p>`}
                blockImage={'/assets/networking-scaled-1.webp'}
            />

            <WordImageBlocks
                wordHeaderText={'Workflow training & Employer Connections'}
                wordParagraphTexts={`
                    <p>
                        Employer engagement is built into every stage of ITEP. Participants connect early and often with employers participating in the Next Level Leadership program, creating a smooth transition from training into employment.
                    </p>
                    <h3>
                        Placement Support Includes:
                    </h3>
                    <ul>
                        <li>Career guidance and coaching</li>
                        <li>Employer introductions and networking</li>
                        <li>Alignment with open employment opportunities</li>
                        <li>Long-term career planning support</li>
                    </ul>`}
                blockImage={'/assets/networking-scaled-1.webp'}
            />

            <SingleCTAButton
                singleCtaHeading={"Sign up to be part of the ITEP Program."}
                singleCtaText={""}
                singleCtaButtonLink={"https://form.jotform.com/242944863505160"}
                singleCtaButtonText={"Register Today"}
            />

            <ThreeTextBlock/>
        </main>
    )
}