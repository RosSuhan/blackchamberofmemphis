import Image from "next/image";
import style from './twoColumnTextImage.module.css'


export default function TwoColumnTextImage(){
    return(
        <section
                className={style.twoColumnSection}
            >
                <div
                    className={style.textColumn}
                >
                    <h2
                        className={style.textHeading}
                    >
                        Building Wealth In Our Community Symposium
                    </h2>
                    <p
                        className={style.text}
                    >
                        The 2026 Building Wealth in Our Community Symposium is anchored in Building Entrepreneur City—a bold vision aligned with the City of Memphis’ commitment to positioning entrepreneurship as a key driver of economic growth. This approach recognizes that the strength of our city is directly tied to the success, sustainability, and scalability of its businesses.
                    </p>
                    <p
                        className={style.text}
                    >
                        Through this lens, the Symposium brings together business leaders, policymakers, and corporate partners to move beyond conversation and into action—equipping attendees with the strategies, access, and connections needed to grow, compete, and contribute meaningfully to Memphis’s economy.
                        </p>
                    <p
                        className={style.text}
                    >
                        With a strong emphasis on collaboration, this year’s experience is designed to break down silos across sectors, elevate local voices, and highlight the real impact individual businesses have on shaping the city’s future. Sessions will explore procurement opportunities, local and national economic trends, and what it truly means to build an entrepreneur-centered city.
                        </p>
                    <p
                        className={style.text}
                    >
                        More than a theme, Building Entrepreneur City is a call to align vision with action—challenging each participant to see their business not only as an individual venture, but as a critical part of Memphis’s long-term economic ecosystem.
                    </p>

                    <ul
                        className={style.sectionList}
                        style={{listStyle:"none", padding:"0", margin:"0"}}
                    >
                        <li
                            className={style.listItem}
                        >
                            <span
                                className={style.boldText}
                            >Date:</span>
                            August 27 – August 28, 2026
                        </li>
                        <li
                            className={style.listItem}
                        >
                            <span
                                className={style.boldText}
                            >
                                Location:
                            </span>
                            <br/>
                            <span
                                className={style.secondBoldText}
                            >
                                Mixer - 
                            </span>
                            To be confirmed
                            <br/>
                            <span
                                className={style.secondBoldText}
                            >
                                Symposium - 
                            </span>
                            FedEx Event Center 
                            {/* 415 Great View Dr E Suite 103, Memphis, TN 38134 */}
                        </li>
                        <li
                            className={style.listItem}
                        >
                            <span
                                className={style.boldText}
                            >Theme:</span>
                            Building Entreprener City
                        </li>
                        <li
                            className={style.listItem}
                        >
                            <span
                                className={style.boldText}
                            >Expected Attendance:</span>
                            200+ entrepreneurs, executives, policymakers, and professionals from across the region
                        </li>
                    </ul>
                </div>

                <Image
                    src={'/events/symposium/BCOM_Symposium_2025_Day2-16.jpg'}
                    alt=''
                    width={2048}
                    height={1363}
                    className={style.sectionFeatureImage}
                />
            </section>
    )
}