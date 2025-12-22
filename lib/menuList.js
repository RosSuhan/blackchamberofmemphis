export const menuList = [
    // {
    //     name: 'Home',
    //     path: '/',
    // },
    {
        name: 'About Us',
        path: '/about-us',
        subLink: [
            {
                name: 'Our Team',
                path: 'our-team'
            }
        ]
    },
    {
        name: 'Programs',
        path: '/programs',
        subLink: [
            {
                name: 'MemphisTen',
                path: '/memphis-ten'
            }
        ]
    },
    {
        name: 'Resources',
        path: '/resources',
    },
    {
        name: 'Events',
        path: '/events',
        subLink: [
            {
                name: 'Past Events',
                path: '/past-events',
            },
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
        name: 'Directory',
        path: '/business-directory',
        subLink: [
            {
                name: "Get Listed",
                path: "/business-directory/get-listed"
            }
        ]
    }
]