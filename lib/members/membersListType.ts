export interface MembersListType {
    memberStatus: boolean,
    id: string;
    businessName: string;
    bannerImage: string;
    profileLogo: string;
    profileDescription: string;
    profileCategory: string[];
    profileSubCategory: string[];
    categoryTag: string[],
    profileBusinessDescription: string;
    gallery?: { image: string; alt: string; width : number, height : number }[];
    businessHours: {
        monHours: string;
        tueHours: string;
        wedHours: string;
        thuHours: string;
        friHours: string;
        satHours: string;
        sunHours: string;
    };
    addressLink: string;
    address: string;
    email: string;
    website: string;
    telNumber: string;
    facebook: string;
    instagram: string;
    youtube: string;
    linkedIn: string;
    linktree: string;
    twitter: string;
    tiktok: string;
    pinterest?: string;
}
