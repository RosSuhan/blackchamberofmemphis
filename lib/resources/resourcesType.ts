type offeringProp = {
    offerName : string,
    offerType : string,
    offerColor : string
}

export interface ResourcesType {
    mainImage : string,
    articleTitle : string,
    id : string,
    readPath : string,
    description : string,
    fullText : string,
    offerings : offeringProp[],
    serveStage : string[],
    mainCategory : string,
    subCategory : string
}