import HomepageMemberDirectoryCTArow from "@/components/directoryComponents/HomepageMemberDirectoryCTArow";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import Partners from "@/components/partners/page";
import Popup from "@/components/Popup/page";
import ThreeLinkBlock from "@/components/threeLinkBlocks/page";
import WhoWeAre from "@/components/whoWeAre/page";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Black Chamber of Memphis | Empowering Local Businesses in Memphis',
  description:
    'The Black Chamber of Memphis supports and empowers local businesses across Greater Memphis through advocacy, networking, education, and economic development programs. Join today and grow your business.',
  keywords: [
    'Black Chamber of Commerce Memphis',
    'Memphis business network',
    'Memphis small business',
    'local entrepreneurship Memphis',
    'Memphis business community',
    'economic development Memphis',
  ],
  alternates: { canonical: 'https://blackchamberofmemphis.org/contact-us' },
  openGraph: {
    title: 'Empowering Local Businesses in Greater Memphis',
    description: 'Advocacy. Networking. Growth. The Black Chamber of Memphis is building lasting economic opportunity across Greater Memphis. Join the movement.',
    url: 'https://blackchamberofmemphis.org/contact-us',
    siteName: 'Black Chamber of Memphis',
    images: [
      {
        url: '/assets/bcom-building-black-business-in-memphis-since-1970.png',
        width: 1200,
        height: 630,
        alt: 'Black Chamber of Memphis Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empowering Local Businesses in Greater Memphis',
    description:
      'Advocacy. Networking. Growth. The Black Chamber of Memphis is building lasting economic opportunity across Greater Memphis. Join the movement.',
    images: ['/assets/bcom-building-black-business-in-memphis-since-1970.png'],
  },
};

export default function Home() {
  const heroCTAbuttons = [
    {
      name : "Get Listed (Free)",
      path : "/get-listed",
      type : "globalGoldButton"
    },
    {
      name : "Find a Business",
      path : "/business-directory",
      type : "globalGoldButton"
    },
    {
      name : "View Events",
      path : "/events",
      type : "globalGoldButton"
    }
  ]

  return (
    <section>
      <Popup
        imageSrc={'/pop-up/boomin-kiva.png'}
        imageAlt={'BCoM and Boomin U - Ready to build a stronger business?'}
        imageWidth={4500}
        imageHeight={4500}
        title={"Boomin U 2026 Programs for Small Business Owners"}
        description={"Get a 0% Interest Loan for Your BusinessCopy: Join us June 9 for Fund U — learn how to access Kiva's"}
        ctaText={'Read More'}
        ctaLink={"/events/boomin"}
        storageKey="kiva"
      />

      <PageHeroSection
        mainHeading = "Grow your business beyond visibility"
        subHeading = "Join a powerful network of Black-owned businesses, explore trusted local services, and stay connected with events that move Memphis forward."
        searchbar = {true}
        ctaButtons = {heroCTAbuttons}
        placeholder = {"Search for services, businesses or keywords..."}
      />

      <WhoWeAre/>

      <ThreeLinkBlock/>

      <HomepageMemberDirectoryCTArow/>

      <Partners/>

    </section>
  );
}
