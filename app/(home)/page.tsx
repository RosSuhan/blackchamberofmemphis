import HomepageMemberDirectoryCTArow from "@/components/directoryComponents/HomepageMemberDirectoryCTArow";
import StayInformedSection from "@/components/forms/stayInformed";
import HomeHero from "@/components/heroSections/HomeHero";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import Partners from "@/components/partners/page";
// import Popup from "@/components/Popup/page";
import ThreeLinkBlock from "@/components/threeLinkBlocks/page";
import WhoWeAre from "@/components/whoWeAre/page";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Black Chamber of Memphis | Empowering Black-Owned Businesses',
  description:
    'The Black Chamber of Memphis empowers Black-owned businesses across Greater Memphis through advocacy, networking, education, and economic development programs. Join today and grow your business.',
  keywords: [
    'Black Chamber of Commerce Memphis',
    'Black-owned businesses Memphis',
    'Memphis business network',
    'minority entrepreneurship',
  ],
  alternates: { canonical: 'https://blackchamberofmemphis.org' },
  openGraph: {
    title: 'Empowering Black-Owned Businesses in Greater Memphis',
    description:
      'Advocacy. Networking. Growth. The Black Chamber of Memphis is building lasting economic opportunity across Greater Memphis. Join the movement.',
    url: 'https://blackchamberofmemphis.org',
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
    title: 'Empowering Black-Owned Businesses in Greater Memphis',
    description:
      'Advocacy. Networking. Growth. The Black Chamber of Memphis is building lasting economic opportunity across Greater Memphis. Join the movement.',
    images: ['/assets/bcom-building-black-business-in-memphis-since-1970.png'],
  },
};

export default function Home() {
  const heroCTAbuttons = [
    {
      name : "Get Listed (Free)",
      path : "/business-directory/get-listed",
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

      {/* <HomeHero/> */}
      <PageHeroSection
        mainHeading = "Grow your business beyond visibility"
        subHeading = "Join a powerful network of Black-owned businesses, explore trusted local services, and stay connected with events that move Memphis forward."
        searchbar = {true}
        ctaButtons = {heroCTAbuttons}
        placeholder = {"Search for services, businesses or keywords..."}
      />

      <WhoWeAre/>

      <ThreeLinkBlock/>

      {/* block with buttons for news, events */}

      <HomepageMemberDirectoryCTArow/>

      <Partners/>

      {/* <StayInformedSection/> */}

    </section>
  );
}
