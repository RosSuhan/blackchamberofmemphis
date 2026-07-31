import { NavigationMenuItem } from './navigationTypes'

export const menuList : NavigationMenuItem[] = [
    {
        priority: 1,
        name: 'Membership',
        path: '/membership',
        subLink : [
            {
                name : 'Member Log In',
                path : 'https://theblackbusinessassociationofmemphis.growthzoneapp.com/MIC/Login'
            }
        ]
    },{
        priority: 2,
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
        priority: 3,
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
        priority: 4,
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
        priority: 5,
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
        priority: 7,
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
        priority: 6,
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
