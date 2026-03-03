import { Metadata } from "next";
import BlHero from "../blHero";
import SectionWide from "../sectionWide";
import SectionImageText from "../sectionImageText";
import BlImageRow from "../blImageRow";
import { blackLedgerList } from "@/lib/blackLedgerHonoree/blackLedgerList";
import BlEndBlock from "../blEndBlock";
import BlCTARow from "../blCTARow";
// import BlVideo from "../blVideo";

type Props = {
    params: Promise<{id: string}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const selectedHonoree = blackLedgerList.find(c => c.id === id);

    if(!selectedHonoree) {
        return {
            title: "Blog not found"
        }
    }

    const url = `https://blackchamberofmemphis.org/black-ledger/${id}`

    return {
        title: selectedHonoree.businessTitle,
        description: selectedHonoree.seoDescription,

        openGraph: {
            title: selectedHonoree.businessTitle,
            description: selectedHonoree.seoDescription,
            url: url,
            type: 'website',
            images: selectedHonoree.seoImage
                ? [
                    {
                        url: `https://blackchamberofmemphis.org/blog/mlk/blackLedger/${selectedHonoree.seoImage}`,
                        width: 1200,
                        height: 630,
                    },
                ]
            : [],
        },

        twitter: {
            card: "summary_large_image",
            title: selectedHonoree.businessTitle,
            description: selectedHonoree.seoTwitterDescription,
            images: selectedHonoree.seoTwitterImage
                ? [`https://blackchamberofmemphis.org/blog/mlk/blackLedger/${selectedHonoree.seoTwitterImage}`]
                : [],
        },
    }
}


export default async function BlackLedger({ params }: Props){
    const { id } = await params

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