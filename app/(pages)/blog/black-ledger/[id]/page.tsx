'use client'
import { useParams } from "next/navigation";
import BlHero from "../blHero";
import SectionWide from "../sectionWide";
import SectionImageText from "../sectionImageText";
import BlImageRow from "../blImageRow";
import { blackLedgerList } from "@/lib/blackLedgerHonoree/blackLedgerList";


export default function BlackLedger(){
    const params = useParams();
    const id = params?.id as string

    if(!id) return null;

    const selectedHonoree = blackLedgerList.find(c => c.id === id)

    return (
        <main
            style={{padding:"2rem 0"}}
        >
            <BlHero
                backgroundImage={ selectedHonoree?.backgroundImage || '' }
                businessTitle={ selectedHonoree?.businessTitle || '' }
                socialList={ selectedHonoree?.socialLinks || [] }
            />

            <SectionWide
                sectionHeading={'Alignment with MemphisTEN'}
                answerText={ selectedHonoree?.answerOne || '' }
            />

            <SectionImageText
                direction={true}
                sectionHeading={'Who Relies on This Work'}
                answerText={ selectedHonoree?.answerTwo || '' }
                blockImage={ selectedHonoree?.imageOne || '' }
                blockImageAlt={ selectedHonoree?.imageOneAlt || '' }
            />

            <SectionWide
                sectionHeading={'Their Role in Memphis Today'}
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
                sectionHeading={'Addressing Barriers to Access'}
                answerText={ selectedHonoree?.answerFour || '' }
            />

            <SectionImageText
                direction={false}
                sectionHeading={'Creating Stability & Reducing Risk'}
                answerText={ selectedHonoree?.answerFive || '' }
                blockImage={ selectedHonoree?.imageFive || '' }
                blockImageAlt={ selectedHonoree?.imageFiveAlt || '' }
            />
        </main>
    )
}