import MultiCtaButtonRow from "@/components/callToAction/multiCtaButtonRow";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import Popup from "@/components/Popup/page";
import TwoColumnTextImage from "@/components/WordImageBlocks/TwoColumnTextImage";
import type { Metadata } from "next";
import HomePageCategorySection from "./homePageCategorySection";
import OneCtaButtonRow from "@/components/callToAction/OneCtaButtonRow";
import PartnerLogoSection from "@/components/PartnerLogoSection/page";
import Header from "@/components/nav/Header/page";
import Footer from "@/components/nav/Footer/page";


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
    <>
      <Header/>
      <Popup
        imageSrc={'/pop-up/BCoM-Building-Wealth-in-Our-Community-Symposium-200x300.jpg'}
        imageAlt={'BCoM Building Wealth in Our Community Symposium 2026'}
        imageWidth={200}
        imageHeight={300}
        title={"BCoM Building Wealth in Our Community Symposium 2026"}
        description={"Be part of the experience everyone will be talking about! Tickets are now available for our upcoming event, bringing together inspiring speakers, powerful conversations, and unmatched networking opportunities. Register today and secure your seat."}
        ctaText={'Read More'}
        ctaLink={"/events/symposium"}
        storageKey="symposium"
      /> 

      <PageHeroSection
        mainHeading = "Grow your business beyond visibility"
        subHeading = "Join a powerful network of Black-owned businesses, explore trusted local services, and stay connected with events that move Memphis forward."
        searchbar = {true}
        ctaButtons = {heroCTAbuttons}
        placeholder = {"Search for services, businesses or keywords..."}
        stateButtons={[]}
      />

      <TwoColumnTextImage
        rowDirection = {true}
        imageLink = {"/assets/bcom-new-website-image.webp"}
        imageAlt=""
        imageWidth={1000}
        imageHeight={704}
        blockHeading = {"Your Next Step Starts Here"}
        blockText = {"Whether you're launching a new venture, growing an established business, or simply looking to connect with the right people — the Black Chamber of Memphis has the resources, network, and programmes to support you every step of the way. We bring together Memphis business owners, community leaders, and industry partners to create real opportunities for growth and collaboration. From membership benefits and business listings to events and dedicated support programmes, everything we offer is designed with your success in mind. Take your next step today and discover what becoming part of the Black Chamber of Memphis community can do for your business."}
        ctaLink=""
        buttonText = {"Learn More"}
        columnBackgroundColor = {'var(--white)'}
      />

      <TwoColumnTextImage
        rowDirection = {false}
        imageLink = {"/assets/members-of-bcom-3.webp"}
        imageAlt = ""
        imageWidth={2048}
        imageHeight={1365}
        blockHeading = {"Why Join The Chamber?"}
        blockText = {'Membership with the Black Chamber of Memphis connects you with a powerful network of business leaders, decision-makers, and community partners who open doors to new clients, referrals, and exclusive opportunities. Elevate your brand presence, build trust, and align with a respected organisation that reinforces your credibility across Greater Memphis. From educational content and member-only resources to events and collaborations, you gain the practical tools and meaningful connections needed to grow at every stage of your business journey.'} 
        ctaLink = {"/membership"}
        buttonText = {"Membership"}
        columnBackgroundColor = {'var(--white)'}
      />

      <HomePageCategorySection/>

      <OneCtaButtonRow
        sectionBackground = {"var(--darkGrey)"}
        textColor="var(--white)"
        ctaText="List your business for free and get discovered by the Memphis community."
        ctaButton="Add Your Business"
        ctaLink="/get-listed"
      />

      <PartnerLogoSection/>

      <Footer/>
    </>
  );
}
