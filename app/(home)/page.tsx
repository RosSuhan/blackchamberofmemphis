// import Image from "next/image";

import StayInformedSection from "@/components/forms/stayInformed";
import Partners from "@/components/partners/page";

export default function Home() {
  return (
    <section>
      {/* heroblock with video playing in background, overlayed with dark transparent overlay, logo and "INVESTING WHERE IT'S NEEDED MOST" */}

      {/* WHO WE ARE - 2 column block with words left and video right; learn more button leading to About Us Page */}

      {/* section with 3 link blocks (What we do; How we help; join BCOM) */}

      {/* block with buttons for news, events */}

      {/* Section for member directory with buttons - join the directory and search the directory */}

      <Partners/>

      <StayInformedSection/>

    </section>
  );
}
