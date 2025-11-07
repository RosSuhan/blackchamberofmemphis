import StayInformedSection from "@/components/forms/stayInformed";
import PageTitleSection from "@/components/pageTitleSection/page";
import ImageWordBlocks from "@/components/WordImageBlocks/ImageWord";
import TextBackdrop from "@/components/WordImageBlocks/TextBackdrop";
import WordImageBlocks from "@/components/WordImageBlocks/WordImage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Black Chamber of Memphis | Economic Empowerment & Advocacy',
    description: 'Learn how the Black Chamber of Memphis drives economic equity and supports Black entrepreneurs through education, advocacy, and collaborative partnerships across the Mid-South.',
    keywords: [
        'about Black Chamber of Memphis',
        'Memphis business advocacy',
        'minority business organization',
        'economic empowerment Memphis',
    ],
    alternates: { canonical: 'https://blackchamberofmemphis.org/about-us' },
    openGraph: {
        title: 'About the Black Chamber of Memphis',
        description: 'Empowering Black entrepreneurs and driving economic equity across the Mid-South.',
        url: 'https://blackchamberofmemphis.org/about-us',
        images: [{ url: '/images/og-about.jpg', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About the Black Chamber of Memphis',
        description: 'Empowering Black entrepreneurs and driving economic equity across the Mid-South.',
        images: ['/images/og-about.jpg'],
    },
};

export default function AboutUs(){
    return(
        <main>
            <PageTitleSection
                pageTitle = {'About Us'}
            />

            <WordImageBlocks
                wordHeaderText = {'What We Do'}
                blockImage = {'/assets/event/BCOMFinale2024NetworkingEvent-81.jpg'}
                wordParagraphTexts = {`<p>The Black Chamber of Memphis (BCOM) is dedicated to driving economic growth and prosperity in the Memphis region by empowering entrepreneurs and Minority and Women-Owned Business Enterprises (MWBEs). Through a robust offering of strategic, high-impact programs, BCOM fosters an environment where businesses not only survive but thrive. We are committed to providing top-tier education, advocacy, and business development opportunities, ensuring that our members have the tools and resources necessary to seize economic opportunities and achieve sustainable growth.</p><p>At the heart of BCOM’s mission is a relentless focus on innovation and strategic thinking. We believe that by cultivating a supportive ecosystem for MWBEs, we can unlock new avenues for economic advancement and community development. Our programs are carefully designed to address the unique challenges faced by our members, providing them with the knowledge, connections, and support they need to excel in an increasingly competitive marketplace. Whether through tailored workshops, advocacy initiatives, or networking events, BCOM is here to propel your business toward a future of unparalleled success and prosperity.</p>`}
            />

            <ImageWordBlocks
                wordHeaderText = {"Our Purpose"}
                blockImage = {'/assets/event/BCOMFinale2024NetworkingEvent-81.jpg'}
                wordParagraphTexts = {`<p>The Black Chamber of Memphis (BCOM), established in 1974, stands as a beacon of empowerment, championing the entrepreneurial spirit that drives growth and opportunity for minority and women-owned businesses. As one of the most influential trade associations in the Mid-South, BCOM is deeply committed to cultivating an environment where Black-owned businesses can thrive, recognizing that their success is a reflection of our community's overall health and prosperity.</p><p>BCOM collaborates with a broad network of partners across the region, steadfast in the pursuit of economic equality. Our mission is unwavering: we are dedicated to creating high-impact programs that not only elevate individual businesses but also enhance the collective wellbeing of our community. We understand that the progress of Black-owned businesses directly correlates with the vitality and happiness of Memphis, and we are relentless in our efforts to ensure their continued growth and success.</p>`}
            />

            <TextBackdrop
                backdropImage = {'/assets/event/BCOMFinale2024NetworkingEvent-81.jpg'}
                textBackdropContent = {`<p>Where does wealth come from? How is wealth created? Oftentimes, it's generational, it's inheritance. … But, the other place that wealth comes from is business.</p>
                                        <p>We don't have the luxury of waiting 20 years to start a business, and grow that business, in order to narrow the wealth gap. Instead, we can add acquisitions as one of the tools in the toolkit.</p>
                                        <p>For instance, 95% of manufacturing companies are owned by baby boomers. If those owners retire — or, as we all will, expire — without a succession plan, the companies go away.</p>
                                        <p>The tax base goes away, the employment base will go away. … So, we've created succession solutions where we'll target those baby boomer-owned businesses. … We'll have conversations with them … and match those opportunities with Black minority business owners and entrepreneurs who are looking to acquire those businesses.</p>
                                        <p>Essentially, we've created an exit strategy for the owner, who has a succession challenge. And, we've created an expanding wealth opportunity for business owners who are trying to grow their businesses.</p>`}
            />

            <StayInformedSection/>
        </main>
    )
}