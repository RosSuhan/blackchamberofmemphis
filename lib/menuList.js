export const menuList = [
    // {
    //     name: 'Home',
    //     path: '/',
    // },
    {
        name: 'About Us',
        path: '/about-us',
    },
    {
        name: 'Programs',
        path: '',
        subLink: [
            {
                name: 'MemphisTen',
                path: '/memphis-ten'
            },
            {
                name: 'Boomin-U',
                path: '/events/boomin'
            }
        ]
    },
    {
        name: 'Resources',
        path: '/resources',
        subLink: [
            {
                name : 'Insights',
                path: '/resources?tab=insights'
            },{
                name : 'Event Highlights',
                path : '/resources?tab=eventHighlights'
            },{
                name : 'Community Highlights',
                path : '/resources?tab=communityHighlights'
            },{
                name : 'News Highlights',
                path : '/resources?tab=newsHighlights'
            }
        ]
    },
    {
        name : 'Partnerships',
        path : '/partnerships',
        subLink : [
            {
                name : 'Memphis-Shelby County Film Commission',
                path : '/partnerships/memphis-shelby-county-film-commission'
            },
            {
                name : "Remoting.work",
                path : '/memphis-ten'
            }
        ]
    },
    {
        name: 'Events',
        path: '/events',
        subLink: [
            {
                name: 'Symposium',
                path: '/events/symposium'
            },
            {
                name: 'Boomin-U',
                path: '/events/boomin'
            }
            // ,{
            //     name: 'Past Events',
            //     path: '/past-events',
            // },
    //         {
    //             name: 'Network',
    //             path: '/network'
    //         }
        ]
    },
    {
        name: 'Contact Us',
        path: '/contact-us'
    },
    {
        name: 'Membership',
        path: '/membership'
    },
    {
        name: 'Directory',
        path: '/business-directory',
        subLink: [
            {
                name: "Get Listed",
                path: "/get-listed"
            }
        ]
    }
]
