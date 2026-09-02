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

// for eventpage [id]
// export async function generateMetadata() {
//     return createMetadata({
//       title: event.title,
//       description: event.description,
//       canonical: `/events/${event.slug}`,
//       image: event.image,
//       imageAlt: event.title,
//     });
//   }

// for blog [id]
// export async function generateMetadata() {
//     return createMetadata({
//       title: article.title,
//       description: article.excerpt,
//       canonical: `/blog/${article.slug}`,
//       image: article.featuredImage,
//       imageAlt: article.title,
//       type: 'article',
//     });
//   }

// bus directory the following or check out the buscard
// export const metadata = createMetadata({
//     title: 'Business Directory',
//     description:
//       'Explore Black-owned and community-focused businesses throughout Greater Memphis.',
//     canonical: '/business-directory',
//   });

// buscard
// export async function generateMetadata({ params }): Promise<Metadata> {

//     const { id } = await params;

//     const selectedTeamMember = vCardProfileData.find(
//       (team) => team.slug === id
//     );

//     if (!selectedTeamMember) {
//       return createMetadata({
//         title: 'Digital Business Card',
//         description:
//           'This business card could not be found. Browse all local businesses in the Black Chamber of Memphis Business Directory.',
//         canonical: '/business-directory',
//       });
//     }

//     const fullName = `${selectedTeamMember.first_name} ${selectedTeamMember.last_name}`;

//     return createMetadata({
//       title: `${fullName} | Black Chamber of Memphis Directory`,
//       description: selectedTeamMember.vCardBioSection,
//       canonical: `/buscard/${id}`,

//       keywords: [
//         fullName,
//         'Black Chamber of Memphis member',
//         'Memphis local business',
//       ],

//       image: selectedTeamMember.image
//         ? `/${selectedTeamMember.image}`
//         : undefined,

//       imageAlt: `${fullName} — Black Chamber of Memphis Member`,

//       absoluteTitle: true,
//     });
//   }