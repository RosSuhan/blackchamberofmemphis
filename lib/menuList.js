export const menuList = [
    {
        name: 'Membership',
        path: '/membership',
        subLink : [
            {
                name : 'Member Log In',
                path : 'https://theblackbusinessassociationofmemphis.growthzoneapp.com/MIC/Login'
            }
        ]
    },{
        name: 'Directory',
        path: '/business-directory',
        subLink: [
            {
                name : "Browse Businesses",
                path : '/business-directory'
            },{
                name: "Get Listed",
                path: "/get-listed"
            }
        ]
    },{
        name: 'Events',
        path: '/events',
        subLink: [
            {
                name : 'Upcoming Events',
                path : '/events'
            },{
                name: 'Symposium',
                path: '/events/symposium'
            },
            {
                name: 'Boomin-U',
                path: '/events/boomin'
            }
        ]
    },{
        name: 'Resources',
        path: '/resources',
        subLink: [
            {
                name : 'Insights',
                path: '/resources?tab=insights'
            },{
                name : 'Community Stories',
                path : '/resources?tab=communityHighlights'
            },{
                name : 'Event Highlights',
                path : '/resources?tab=eventHighlights'
            },{
                name : 'News',
                path : '/resources?tab=newsHighlights'
            }
        ]
    },{
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
    },{
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
    },{
        name: 'About Us',
        path: '/about-us',
        subLink : [
            {
                name: 'Contact Us',
                path: '/contact-us'
            },
        ]
    },
]
