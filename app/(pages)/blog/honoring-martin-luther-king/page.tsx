import MLKBannerSection from "@/components/mlkComponents/mlkBannerSection";
import MLKHero from "@/components/mlkComponents/mlkHero";
import MLKOurAction from "@/components/mlkComponents/mlkOurAction";
import MLKQuoteBanner from "@/components/mlkComponents/mlkQuoteBanner";
import MLKTextSection from "@/components/mlkComponents/mlkTextSection";
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Honoring the Life and Legacy of Dr. Martin Luther King, Jr. | Black Chamber of Memphis',
    description: 'Honoring Dr. Martin Luther King, Jr. and reflecting on his enduring call for economic justice, dignity, and opportunity in Memphis and beyond.',
    keywords: [
        'Martin Luther King Jr',
        'MLK legacy',
        'economic justice',
        'civil rights and economic justice',
        'Black economic empowerment',
        'Black-owned businesses',
        'Memphis civil rights',
        'Black Chamber of Memphis',
        'economic equity',
        'Dr. King economic justice'
    ],
    alternates: {
        canonical: 'https://blackchamberofmemphis.org/blog/honoring-martin-luther-king'
    },
    openGraph: {
        title: 'Honoring the Life and Legacy of Dr. Martin Luther King, Jr.',
        description: 'A reflection on Dr. King’s belief that civil rights and economic justice are inseparable—and how that vision guides our work today.',
        url: 'https://blackchamberofmemphis.org/blog/honoring-martin-luther-king',
        images: [
            {
                url: '/images/og-mlk.jpg',
                width: 1200,
                height: 630,
                alt: 'Honoring the life and legacy of Dr. Martin Luther King, Jr.'
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Honoring the Life and Legacy of Dr. Martin Luther King, Jr.',
        description: 'Reflecting on Dr. King’s call for economic justice, dignity, and opportunity—then and now.',
        images: ['/images/og-mlk.jpg'],
    },
};


export default function MLK(){
    return(
        <main
            style={{padding:"2rem 0 0 0"}}
        >
            <MLKHero/>

            <MLKTextSection
                paragraph={`As we commemorate the birthday of Dr. Martin Luther King, Jr. on January 19, we remember that he consistently linked civil rights to economic power. Dr. King spoke directly about the role of jobs, wages, and ownership in achieving freedom, reminding the nation that “the problem of racial injustice and the problem of economic injustice cannot be solved without a radical redistribution of political and economic power.”¹ He understood that dignity required not only legal equality, but access to opportunity and the ability to build wealth.`}
                textStyle={true}
            />

            <MLKQuoteBanner
                quoteText={`
                    <p>
                        <span
                        >
                            "The problem of racial injustice and the problem of economic injustice cannot be solved without a radical redistribution of political and economic power."
                        </span>
                        - Dr. Martin Luther King, Jr.
                    </p>`}
                quoteImage={`/blog/mlk/mlk-quote-banner2.webp`}
                textColor={'#000000'}
            />

            <MLKTextSection
                paragraph={`At the Black Chamber of Memphis, we advance that vision through our work to strengthen Black-owned businesses and the broader economic ecosystem that supports them. Through initiatives like Memphis TEN, we focus on business growth, job creation, procurement access, and pathways to scale. Dr. King captured this responsibility clearly when he wrote, “It is a cruel jest to say to a bootless man that he ought to lift himself by his own bootstraps.”² Economic empowerment requires systems that work, not slogans that excuse inaction.`}
                textStyle={false}
            />

            <MLKQuoteBanner
                quoteText={`
                    <p>
                        <span
                        >
                            “It is a cruel jest to say to a bootless man that he ought to lift himself by his own bootstraps.”
                        </span>
                        - Dr. Martin Luther King, Jr.
                    </p>`}
                quoteImage={`/blog/mlk/mlk-quote-banner.webp`}
                textColor={`#ffffff`}
            />

            <MLKTextSection
                paragraph={`On this day, we honor Dr. King by acting on his message. We invest in entrepreneurs, support local businesses, and build economic structures that allow our community to thrive. By doing so, we help turn his call for economic justice into measurable progress for Memphis and beyond.`}
                textStyle={false}
            />

            <MLKOurAction/>
        </main>
    )
}