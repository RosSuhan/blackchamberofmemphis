import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/nav/Header/page";
import Footer from "@/components/nav/Footer/page";

export const metadata: Metadata = {
  metadataBase: new URL ('https://blackchamberofmemphis.org/'),
  title: {
    template: "%s | Black Chamber of Memphis",
    default: "Black Chamber of Memphis | Empowering Black-Owned Businesses"
  },
  description: "Connecting and empowering Black entrepreneurs across Greater Memphis through advocacy, networking, and business growth initiatives.",
  openGraph: {
    type: 'website',
    siteName: 'Black Chamber of Memphis',
    url: 'https://blackchamberofmemphis.org',
    images: '/images/og-default.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@blackchambermemphis',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ⭐ Google Tag Manager – HEAD Script */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NMSBD5BR');
            `,
          }}
        />

        {/* --- JSON-LD Organization Schema --- */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Black Chamber of Memphis',
              alternateName: ['BCOM', 'Black Chamber Memphis'],
              url: 'https://blackchamberofmemphis.org',
              logo: 'https://blackchamberofmemphis.org/assets/BCM-Logo_Full-Color-Black-Text.webp',
              sameAs: [
                'https://www.facebook.com/BCOMemphis',
                'https://www.linkedin.com/company/bcomemphis/',
                'https://www.instagram.com/bcomemphis/',
                'https://www.youtube.com/@BlackChamberofMemphis',
                'https://twitter.com/BBAMemphis',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-901-636-9300', // replace with your public line if applicable
                contactType: 'Customer Service',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '480 Doctor M.L.K. Jr Ave #101', 
                addressLocality: 'Memphis',
                addressRegion: 'TN',
                postalCode: '38126',
                addressCountry: 'US',
              },
              // foundingDate: '2001', // update to your actual founding year
              // founder: {
                // '@type': 'Person',
                // name: 'Black Business Association Leadership', // or Chamber founder’s name if preferred
              // },
              description:
                'The Black Chamber of Memphis empowers Black-owned businesses and entrepreneurs through advocacy, education, and strategic networking across Greater Memphis.',
              numberOfEmployees: 5, 
              department: [
                {
                  '@type': 'Organization',
                  name: 'MemphisTen Initiative',
                  url: 'https://blackchamberofmemphis.org/memphisten',
                },
                {
                  '@type': 'Organization',
                  name: 'Black Chamber Business Directory',
                  url: 'https://blackchamberofmemphis.org/directory',
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {/* ⭐ Google Tag Manager – BODY noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMSBD5BR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
