import { GalleryImage } from "./memberGalleryType";
import { BusinessHoursType } from "./memberHoursTypes";

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
    gallery?: GalleryImage[];
    businessHours: BusinessHoursType[];
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
    pinterest: string;
}
