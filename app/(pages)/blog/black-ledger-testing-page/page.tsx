'use client'
import Image from 'next/image'
import style from './testing.module.css'
import { FacebookFill } from '@/components/icons/FacebookIcon'
import { Instagram } from '@/components/icons/InstagramIcon'
import { TwitterStroke12 } from '@/components/icons/TwitterIcon'
import { Youtube } from '@/components/icons/YoutubeIcon'
// import SectionWide from "../sectionWide";
// import SectionImageText from "../sectionImageText";
// import BlImageRow from "../blImageRow";
// import BlEndBlock from "../blEndBlock";
// import BlCTARow from "../blCTARow";
// import BlVideo from "../blVideo";


export default function BlackLedgerTestingPage(){
    return (
        <main
            // style={{paddingTop:"2rem"}}
        >
            <section        
                className={style.blogHeroSection}
            >
                <Image
                    src={'/assets/bcom-website-backgrounds.webp'}
                    alt='background image'
                    width={1200}
                    height={500}
                    className={style.blHeroBackgroundImage}
                />
                <div
                    className={style.blHeroOverlay}
                >
                    <span
                        className={style.blHeroSpan}
                    >
                        Black Ledger Honoree
                    </span>
                    <h1
                        className={style.blHeroBusinessName}
                    >
                        Testing Business Memphis
                    </h1>

                        <div
                            className={style.blHeroSocialRow}
                        >
                                
                                    <a href={""}
                                        className={style.blHeroSocialLink}
                                    >
                                        <FacebookFill
                                            className={style.blHeroSocialIcon}
                                        />
                                    </a>

                                    <a href={'href'}
                                        className={style.blHeroSocialLink}
                                    >
                                        <Instagram
                                            className={style.blHeroSocialIcon}
                                        />
                                    </a>
                                    <a href={'href'}
                                        className={style.blHeroSocialLink}
                                    >
                                        <TwitterStroke12
                                            className={style.blHeroSocialIcon}
                                        />
                                    </a>
                                    <a href={'href'}
                                        className={style.blHeroSocialLink}
                                    >
                                        <Youtube
                                            className={style.blHeroSocialIcon}
                                        />
                                    </a>
                        </div> 
                </div>
            </section>

            {/* <BlVideo/> */}

            {/* <SectionWide
                sectionHeading={selectedHonoree?.headingOne || '' }
                answerText={ selectedHonoree?.answerOne || '' }
            /> */}

            {/* <SectionImageText
                direction={true}
                sectionHeading={selectedHonoree?.headingTwo || ''}
                answerText={ selectedHonoree?.answerTwo || '' }
                blockImage={ selectedHonoree?.imageOne || '' }
                blockImageAlt={ selectedHonoree?.imageOneAlt || '' }
            /> */}

            {/* <SectionWide
                sectionHeading={ selectedHonoree?.headingThree || '' }
                answerText={ selectedHonoree?.answerThree || '' }
            /> */}

            {/* <BlImageRow
                blImage1={ selectedHonoree?.imageTwo || '' }
                blImage1Alt={ selectedHonoree?.imageTwoAlt || '' }
                blImage2={selectedHonoree?.imageThree || '' }
                blImage2Alt={ selectedHonoree?.imageThreeAlt || '' }
                blImage3={ selectedHonoree?.imageFour || '' }
                blImage3Alt={ selectedHonoree?.imageFourAlt || '' }
            /> */}

            {/* <SectionWide
                sectionHeading={ selectedHonoree?.headingFour || '' }
                answerText={ selectedHonoree?.answerFour || '' }
            /> */}

            {/* <SectionImageText
                direction={false}
                sectionHeading={ selectedHonoree?.headingFive || ''}
                answerText={ selectedHonoree?.answerFive || '' }
                blockImage={ selectedHonoree?.imageFive || '' }
                blockImageAlt={ selectedHonoree?.imageFiveAlt || '' }
            /> */}

            {/* <SectionWide
                sectionHeading={ selectedHonoree?.headingSix || '' }
                answerText={ selectedHonoree?.answerSix || '' }
            /> */}

            {/* {selectedHonoree?.headingSeven ?
                <SectionImageText
                    direction={true}
                    sectionHeading={ selectedHonoree?.headingSeven || ''}
                    answerText={ selectedHonoree?.answerSeven || '' }
                    blockImage={ selectedHonoree?.imageSix || '' }
                    blockImageAlt={ selectedHonoree?.imageSixAlt || '' }
                />
            : null} */}

            {/* <BlEndBlock
                endText={ selectedHonoree?.endBlockText || ''}
            /> */}

            {/* <BlCTARow/> */}
        </main>
    )
}