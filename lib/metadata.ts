import type { Metadata } from "next";

type CreateMetadataOptions = {
    title : string
    description? : string
    canonical? : string
    keywords? : string[]
    image? : string
    imageAlt? : string
    type? : 'website' | 'article'
    absoluteTitle? : boolean
};

export function createMetadata({
    title,
    description,
    canonical,
    keywords,
    image,
    imageAlt,
    type = 'website',
    absoluteTitle = false
} : CreateMetadataOptions): Metadata {

    const metadata: Metadata = {
        title : absoluteTitle ? { absolute : title } : title,

        ...(description && {
            description,
        }),

        ...(keywords && {
            keywords,
        }),

        ...(canonical && {
            alternates : {
                canonical,
            },
        }),

        openGraph : {
            title,

            ...(description && {
                description,
            }),

            ...(canonical && {
                url : canonical,
            }),

            type,

            images : image ? [
                {
                    url : image,
                    alt : imageAlt || title,
                },
            ] : undefined
        },

        twitter : {
            card : 'summary_large_image',
            title,
            ...(description && {
                description,
            }),
            images : image ? [ image ] : undefined
        },
    };

    return metadata;
}