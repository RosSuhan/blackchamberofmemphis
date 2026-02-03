import { FacebookFill } from "@/components/icons/FacebookIcon"
import { BlackLedgerProp } from "./blackLedgerProp"
import { Instagram } from "@/components/icons/InstagramIcon"
import { Youtube } from "@/components/icons/YoutubeIcon"
import { Linkedin2 } from "@/components/icons/LinkedInIcon"
import { CompanyDirectory } from "@/components/icons/Directory"

export const kudzukian : BlackLedgerProp = {
    id : 'kudzukian',
    backgroundImage : '',
    businessTitle : 'Kudzukian',
    socialLinks: [
        {
            icon: FacebookFill,
            href: 'https://facebook.com/kudzukian'
        },{
            icon: Instagram,
            href: 'https://www.instagram.com/kudzukian/'
        },{
            icon: Linkedin2,
            href: 'https://linkedin.com/company/kudzukian'
        },{
            icon: CompanyDirectory,
            href: 'https://blackchamberofmemphis.org/members/kudzukian'
        }
    ],
    headingOne : "string",
    answerOne : 'string',
    headingTwo : 'string',
    answerTwo : 'string',
    headingThree : 'string',
    answerThree : 'string',
    headingFour : 'string',
    answerFour : 'string',
    headingFive : 'string',
    answerFive : 'string',
    headingSix : 'string',
    answerSix : 'string',
    endBlockText : 'string',
    imageOne : 'string',
    imageOneAlt : 'string',
    imageTwo : 'string',
    imageTwoAlt : 'string',
    imageThree : 'string',
    imageThreeAlt : 'string',
    imageFour : 'string',
    imageFourAlt : 'string',
    imageFive : 'string',
    imageFiveAlt : 'string',
    videoLink : [{ isVideoTrue : false, videoPath : 'string', videoTitle : 'string'}],
}