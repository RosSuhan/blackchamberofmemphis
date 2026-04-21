type BlogListProp = {
    id: string;
    blogName: string;
    blogImage: string;
    blogTitleColor: string;
    blogArticleDate: string;
    blogReadLink: string;
}

export const blogList : BlogListProp[] = [
    {
        id: 'mlk',
        blogName: `Honoring Dr. Martin Luther King Jr.`,
        blogImage: `/blog/mlk/mlk-hero-desktop.webp`,
        blogTitleColor: `#ffffff`,
        blogArticleDate: "19 Jan 2026",
        blogReadLink: `/blog/honoring-martin-luther-king`
    },
    {
        id: "blackLedger-atop",
        blogName: `The Black Ledger - A Tour of Possibilities`,
        blogImage: `/blog/blank-background.webp`,
        blogTitleColor: `#ffffff`,
        blogArticleDate: "30 Jan 2026",
        blogReadLink: `/blog/black-ledger/a-tour-of-possibilities`
    },
    {
        id: "blackLedger-Kudzukian",
        blogName: `The Black Ledger - Kudzukian`,
        blogImage: `/blog/blank-background.webp`,
        blogTitleColor: `#ffffff`,
        blogArticleDate: "4 Feb 2026",
        blogReadLink: `/blog/black-ledger/kudzukian`
    },
        {
        id: "the-soulsville-foundation",
        blogName: `The Black Ledger - The Soulsville Foundation`,
        blogImage: `/blog/blank-background.webp`,
        blogTitleColor: `#ffffff`,
        blogArticleDate: "12 Feb 2026",
        blogReadLink: `/blog/black-ledger/the-soulsville-foundation`
    },
    {
        id: "the-collective-blueprint",
        blogName: `The Black Ledger - The Collective Blueprint`,
        blogImage: `/blog/blank-background.webp`,
        blogTitleColor: `#ffffff`,
        blogArticleDate: "18 Feb 2026",
        blogReadLink: `/blog/black-ledger/the-collective-blueprint`
    },
    {
        id: "kitchen-classroom-to-career-pathways",
        blogName: `Kitchen Classroom to Career Pathways`,
        blogImage: `/blog/blank-background.webp`,
        blogTitleColor: `#ffffff`,
        blogArticleDate: "30 Mar 2026",
        blogReadLink: `/blog/kitchen-classroom-to-career-pathways`
    },
    
        // {
    //     id: "",
    //     blogName: `Honoring Dr. Martin Luther King Jr.`,
    //     blogImage: `/blog/mlk/mlk-hero-desktop.webp`,
    //     blogTitleColor: `#ffffff`,
    //     blogArticleDate: "19 Jan 2026",
    //     blogReadLink: `/blog/honoring-martin-luther-king`
    // },
]