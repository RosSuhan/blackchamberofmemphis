// import Image from "next/image";

import HomepageMemberDirectoryCTArow from "@/components/directoryComponents/HomepageMemberDirectoryCTArow";
import StayInformedSection from "@/components/forms/stayInformed";
import HomeHero from "@/components/heroSections/HomeHero";
import Partners from "@/components/partners/page";
import ThreeLinkBlock from "@/components/threeLinkBlocks/page";
import WhoWeAre from "@/components/whoWeAre/page";

export default function Home() {
  return (
    <section>
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
