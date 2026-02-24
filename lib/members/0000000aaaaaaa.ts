import { MembersListType } from './membersListType'

export const template : MembersListType = {
    memberStatus: false,
    id : "",
    businessName : "",
    bannerImage : "",
    profileLogo : "Black-chamber-of-Memphis",
    profileDescription : "",
    profileCategory : [
        "community-faith-nonprofit-services",
    ],
    profileSubCategory : [
        "community-faith-based-services",
        "church",
        "descipleship-programs",
    ],
    categoryTag: [],
    profileBusinessDescription : ``,
    gallery : [{image : "", alt : "", width : 100, height: 100}],
    businessHours : [
        { day : "Monday", hours : ''},
        { day : "Tuesday", hours : ''},
        { day : "Wednesday", hours : ''},
        { day : "Thursday", hours : ''},
        { day : "Friday", hours : ''},
        { day : "Saturday", hours : ''},
        { day : "Sunday", hours : ''},
    ],
    addressLink : "",
    address : "",
    email : "",
    website : "",
    telNumber : "",
    facebook : "",
    instagram : "",
    youtube : "",
    linkedIn : "",
    linktree : "",
    twitter: "",
    tiktok : "",
    pinterest : ""
}