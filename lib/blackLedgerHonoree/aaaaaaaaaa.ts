import { FacebookFill } from "@/components/icons/FacebookIcon"
import { BlackLedgerProp } from "./blackLedgerProp"
import { Instagram } from "@/components/icons/InstagramIcon"
import { Youtube } from "@/components/icons/YoutubeIcon"
import { Linkedin2 } from "@/components/icons/LinkedInIcon"
import { CompanyDirectory } from "@/components/icons/Directory"

export const business : BlackLedgerProp = {
    id : '',
    backgroundImage : '',
    businessTitle : "",
    socialLinks : [
        {
            icon: FacebookFill,
            href: "",
        },{
            icon: Instagram,
            href: "",
        },{
            icon: Youtube,
            href: "",
        },{
            icon: Linkedin2,
            href: "",
        },{
            icon: CompanyDirectory,
            href: ''
        }
    ],
    headingOne: ``,
    answerOne : `<p></p>`,
    
    headingTwo : ``,
    answerTwo : `<p></p>`,
    
    headingThree: ``,
    answerThree : `<p></p>`,

    headingFour : ``,
    answerFour : `<p></p>`,
    
    headingFive : ``,
    answerFive : `<p></p>`,

    headingSix : ``,
    answerSix : `<p></p>`,

    headingSeven : '',
    answerSeven : '',

    endBlockText : ``,
    
    imageOne : '',
    imageOneAlt : '',
    imageTwo : '',
    imageTwoAlt : '',
    imageThree : '',
    imageThreeAlt : '',
    imageFour : '',
    imageFourAlt : '',
    imageFive : '',
    imageFiveAlt : '',
    imageSix : '',
    imageSixAlt : '',
    videoLink: [
        {
            isVideoTrue : false,
            videoPath : '',
            videoTitle : ''
        }
    ]
}