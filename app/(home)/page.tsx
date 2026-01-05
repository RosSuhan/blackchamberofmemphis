import HomepageMemberDirectoryCTArow from "@/components/directoryComponents/HomepageMemberDirectoryCTArow";
import StayInformedSection from "@/components/forms/stayInformed";
import HomeHero from "@/components/heroSections/HomeHero";
import Partners from "@/components/partners/page";
import Popup from "@/components/Popup/page";
import ThreeLinkBlock from "@/components/threeLinkBlocks/page";
import WhoWeAre from "@/components/whoWeAre/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Black Chamber of Memphis | Empowering Black-Owned Businesses',
  description:
    'Empowering Black-owned businesses and entrepreneurs across Greater Memphis through advocacy, networking, and business growth programs. Join the Black Chamber of Memphis and build lasting economic opportunity.',
  keywords: [
    'Black Chamber of Commerce Memphis',
    'Black-owned businesses Memphis',
    'Memphis business network',
    'minority entrepreneurship',
  ],
  alternates: { canonical: 'https://blackchamberofmemphis.org' },
  openGraph: {
    title: 'Black Chamber of Memphis',
    description:
      'Empowering Black-owned businesses and entrepreneurs across Greater Memphis through advocacy, networking, and business growth programs.',
    url: 'https://blackchamberofmemphis.org',
    siteName: 'Black Chamber of Memphis',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Black Chamber of Memphis Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Chamber of Memphis',
    description:
      'Connecting and empowering Black entrepreneurs across Greater Memphis.',
    images: ['/images/og-home.jpg'],
  },
};

export default function Home() {
  return (
    <section>
      <Popup
        imageSrc={'/events/leveledUp/leveledupmoney.webp'}
        imageAlt={"25% Discount on renewal fees and new memberships"}
        imageWidth={1587}
        imageHeight={2245}
        title=""
        description={""}
        ctaText={"Read More"}
        // ctaText=""
        // ctaLink={""}
        ctaLink={"/events/leveled-up"}
        storageKey={"leveledUp"}
      />

      <HomeHero/>

      <WhoWeAre/>

      <ThreeLinkBlock/>

      {/* block with buttons for news, events */}

      <HomepageMemberDirectoryCTArow/>

      <Partners/>

      <StayInformedSection/>

    </section>
  );
}
