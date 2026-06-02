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
        path: '/programs',
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
                name: 'Insurance Resources',
                path: '/resources'
            }
            ,{
                name: 'Blog',
                path: '/blog'
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
