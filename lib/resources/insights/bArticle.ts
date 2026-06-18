import { ResourcesType } from "../resourcesType";

export const BArticle : ResourcesType = {
    mainImage : '/events/holiday-party.webp',
    articleTitle : 'This is the content block',
    id : 'article-one',
    readPath : '/insights/article-one',
    description : `<p>This is for the description of this article. Telling a little bit of what this article is about and who will benefit from reading this.</p>`,
    fullText : ``,
    offerings : [
        {
            offerName : 'Back office support',
            offerType : 'Resources',
            offerColor : 'blue'
        },
        // {
        //     offerName : 'Networking events',
        //     offerType : 'Resources',
        //     offerColor : 'blue'
        // },
    ],
    serveStage : ['Ideation', 'Start', ],
    mainCategory : 'insights',
    filterCategory : ['training'],
    subCategory : ['programs']
}