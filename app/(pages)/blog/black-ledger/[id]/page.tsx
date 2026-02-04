'use client'
import { useParams } from "next/navigation";
import BlHero from "../blHero";
import SectionWide from "../sectionWide";
import SectionImageText from "../sectionImageText";
import BlImageRow from "../blImageRow";
import { blackLedgerList } from "@/lib/blackLedgerHonoree/blackLedgerList";
import BlEndBlock from "../blEndBlock";
import BlCTARow from "../blCTARow";
import BlVideo from "../blVideo";


export default function BlackLedger(){
    const params = useParams();
    const id = params?.id as string

    if(!id) return null;

    const selectedHonoree = blackLedgerList.find(c => c.id === id)

    return (
        <main
            style={{paddingTop:"2rem"}}
        >
            <BlHero
                backgroundImage={ selectedHonoree?.backgroundImage || '' }
                businessTitle={ selectedHonoree?.businessTitle || '' }
                socialList={ selectedHonoree?.socialLinks || [] }
            />

            {/* <BlVideo/> */}

            <SectionWide
                sectionHeading={selectedHonoree?.headingOne || '' }
                answerText={ selectedHonoree?.answerOne || '' }
            />

            <SectionImageText
                direction={true}
                sectionHeading={selectedHonoree?.headingTwo || ''}
                answerText={ selectedHonoree?.answerTwo || '' }
                blockImage={ selectedHonoree?.imageOne || '' }
                blockImageAlt={ selectedHonoree?.imageOneAlt || '' }
            />

            <SectionWide
                sectionHeading={ selectedHonoree?.headingThree || '' }
                answerText={ selectedHonoree?.answerThree || '' }
            />

            <BlImageRow
                blImage1={ selectedHonoree?.imageTwo || '' }
                blImage1Alt={ selectedHonoree?.imageTwoAlt || '' }
                blImage2={selectedHonoree?.imageThree || '' }
                blImage2Alt={ selectedHonoree?.imageThreeAlt || '' }
                blImage3={ selectedHonoree?.imageFour || '' }
                blImage3Alt={ selectedHonoree?.imageFourAlt || '' }
            />

            <SectionWide
                sectionHeading={ selectedHonoree?.headingFour || '' }
                answerText={ selectedHonoree?.answerFour || '' }
            />

            <SectionImageText
                direction={false}
                sectionHeading={ selectedHonoree?.headingFive || ''}
                answerText={ selectedHonoree?.answerFive || '' }
                blockImage={ selectedHonoree?.imageFive || '' }
                blockImageAlt={ selectedHonoree?.imageFiveAlt || '' }
            />

            <SectionWide
                sectionHeading={ selectedHonoree?.headingSix || '' }
                answerText={ selectedHonoree?.answerSix || '' }
            />

            {selectedHonoree?.headingSeven ?
                <SectionImageText
                    direction={true}
                    sectionHeading={ selectedHonoree?.headingSeven || ''}
                    answerText={ selectedHonoree?.answerSeven || '' }
                    blockImage={ selectedHonoree?.imageSix || '' }
                    blockImageAlt={ selectedHonoree?.imageSixAlt || '' }
                />
            : null}

            <BlEndBlock
                endText={ selectedHonoree?.endBlockText || ''}
            />

            <BlCTARow/>
        </main>
    )
}