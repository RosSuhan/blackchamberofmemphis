type CreateEventSchemaProp = {
    name : string
    description : string
    image : string
    url : string
    eventAttendanceMode : string
    startDate : string
    endDate : string
    location : { venue : string, streetAddress : string, postalCode : string }
    organizer : { name : string, url : string, logo : string },
    offers? : { url : string, name : string, availability : string, price : number, validFrom : string}[] | undefined
    speakers? : { name : string }[]
    sponsors? : { name : string }[]
}

export function CreateEventSchema({
    name,
    description,
    image,
    url,
    eventAttendanceMode,
    startDate,
    endDate,
    location,
    organizer,
    offers,
    speakers = [],
    sponsors = [],
}: CreateEventSchemaProp){
    return {
        "@context": "https://shema.org",
        "@type": "Event",

        name : name,

        description : description,

        image : [image],

        url: url,

        eventStatus: "https://schema.org/EventScheduled",

        eventAttendanceMode : eventAttendanceMode,

        startDate : startDate,

        endDate : endDate,

        location : {
            "@type" : "Place",
            name : location.venue,
            address : {
                streetAddress : location.streetAddress,
                addressLocality : "Memphis",
                addressRegion : "TN",
                postalCode : location.postalCode,
                addressCountry : "US",
            }
        },

        organizer : {
            "@type" : "Organization",
            name : organizer.name,
            url : organizer.url,
            logo : organizer.logo
        },

        ...(offers && offers.length > 0 && {
            offers : offers?.map((offer) => ({
                "@type" : "Offer",
                url : offer.url,
                name : offer.name,
                availability : offer.availability,
                price : offer.price, //starting price
                priceCurrency : "USD",
                validFrom : offer.validFrom,
                category : "Registration"
            }))
        }),

        ...(speakers.length > 0 && {
            performer : speakers.map((speaker) => ({
                "@type" : "Person",
                name : speaker.name,
            })),
        }),


        ...(sponsors.length > 0 && { 
            sponsor : sponsors.map((sponsor) => ({
                "@type" : 'Organization',
                name : sponsor.name
            }))
        }),
    }
}