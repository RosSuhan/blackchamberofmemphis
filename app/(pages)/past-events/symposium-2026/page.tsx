import Symposium2026Hero from "@/components/heroSections/Symposium2026Hero";
import Symp26ThankYouSection from "@/components/symposiumComps/symp26ThankYouSection/page";
import Image from "next/image";
import Link from "next/link";

export default function Symposium2026(){
    return(
        <main>
            <Symposium2026Hero/>

            <Symp26ThankYouSection/>

            <section>
                <div>
                    Access
                </div>
                <div>
                    Investment
                </div>
                <div>
                    Mobility
                </div>
            </section>

            <section>
                <div>
                    <div>
                        <h2>
                            Event Highlights
                        </h2>
                        <p>
                            From inspiring keynotes to engaging panel discussions, powerful networking and special recognitions, the Symposium showcased the strength and potential of Memphis.
                        </p>
                    </div>
                    <a href="">View Full Photo Gallery</a>
                </div>
                <div>
                    image Gallery
                </div>
            </section>

            <section>
                <h2>
                    Featured Stories
                </h2>
                <p>
                    Two defining moments from the 2026 Symposium
                </p>

                <div>
                    <div>
                        <div>
                            <Image
                                src={''}
                                alt=""
                                width={100}
                                height={100}
                            />
                        </div>
                        <div>
                            <h3>
                                Mayor Paul Young Building Entrepreneur City
                            </h3>
                            <p>
                                Mayor Paul Young reinforced the importance of entrepreneurship to Memphis economic future and challenged the public and private sectors to work together.
                            </p>
                            <Link
                                href={''}
                            >
                                Read The Full Recap 
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div>
                            <Image
                                src={''}
                                alt=""
                                width={100}
                                height={100}
                            />
                        </div>
                        <div>
                            <h3>
                                Congressman Steve Cohen Community Champion
                            </h3>
                            <p>
                                The Black Chamber of Memphis recognized Congressman Steve Cohen as the inaugural recipient of the Steve Cohen Community Champion
                            </p>
                            <Link
                                href={''}
                            >
                                Read The Full Recap 
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>Thank You to Our Sponsors</h2>
                <p>
                    Your support helped make this event possible
                </p>
                <div>
                    
                </div>
            </section>
        </main>
    )
}