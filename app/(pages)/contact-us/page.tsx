'use client'
import style from '@/styles/contactUs.module.css'
import { BaselineMail } from "@/components/icons/MailIcon";
import { Phone } from "@/components/icons/Phone";



export default function ContactUs(){
    return(
        <main
            className={style.contactUsMain}
        >
            <div
                className={style.contactUsOverlay}
            >
                <h1
                    className={style.contactUsHeading}
                >
                    CONTACT US
                </h1>
                <h2
                    className={style.contactUsSubHeading}
                >
                    Serving Black Businesses
                </h2>

                <div
                    className={style.contactUsLinkRow}
                >
                    <a 
                        href="mailto:info@bbamemphis.com"
                        className={style.contactUsLink}
                    >
                        <BaselineMail
                            className={style.contactUsIcon}
                        />
                        <span
                            className={style.contactUsWhiteText}
                        >
                            Email Us
                        </span>
                        <span
                            className={style.contactUsGoldText}
                        >
                            info@bbamemphis.com
                        </span>
                    </a>

                    <a 
                        href="tel:+19016369300"
                        className={style.contactUsLink}
                    >
                        <Phone
                            className={style.contactUsIcon}
                        />
                        <span
                            className={style.contactUsWhiteText}
                        >
                            Call Us
                        </span>
                        <span
                            className={style.contactUsGoldText}
                        >
                            901-636-9300
                        </span>
                    </a>
                </div>

                <form 
                    action=""
                    className={style.contactUsForm}
                >
                    <input 
                        type="text"
                        placeholder="First Name" 
                        className={style.contactUsFormShortInput}
                    />

                    <input 
                        type="text"
                        placeholder="Last Name" 
                        className={style.contactUsFormShortInput}
                    />

                    <input 
                        type="email"
                        placeholder="Email" 
                        className={style.contactUsFormLongInput}
                    />

                    <input 
                        type="text"
                        placeholder="Subject" 
                        className={style.contactUsFormLongInput}
                    />

                    <textarea 
                        placeholder="Message"
                        rows={6}
                        className={style.contactUsFormLongInput}
                    />

                    <button 
                        type="submit"
                        className={style.contactUsFormSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    )
}