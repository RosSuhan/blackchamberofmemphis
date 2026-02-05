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
        // {
    //     id: "",
    //     blogName: `Honoring Dr. Martin Luther King Jr.`,
    //     blogImage: `/blog/mlk/mlk-hero-desktop.webp`,
    //     blogTitleColor: `#ffffff`,
    //     blogArticleDate: "19 Jan 2026",
    //     blogReadLink: `/blog/honoring-martin-luther-king`
    // },
]