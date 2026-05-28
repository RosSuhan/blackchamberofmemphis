'use client'
import style from '@/styles/contactUs.module.css'
import { BaselineMail } from "@/components/icons/MailIcon";
import { Phone } from "@/components/icons/Phone";
import { useState } from 'react';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Contact Us | Black Chamber of Memphis',
//     description:
//         'Get in touch with the Black Chamber of Memphis. We welcome general enquiries from local businesses, entrepreneurs, and community members across Greater Memphis. Visit us at [ADDRESS], Memphis, TN, or reach out online.',
//     keywords: [
//         'contact Black Chamber of Memphis',
//         'Black Chamber of Memphis enquiries',
//         'Memphis business chamber contact',
//         'reach Black Chamber of Memphis',
//         'Memphis business support contact',
//     ],
//     alternates: { canonical: 'https://blackchamberofmemphis.org/contact-us' },
//     openGraph: {
//         title: 'Contact Us | Black Chamber of Memphis',
//         description:
//         'Have a question or enquiry? Reach out to the Black Chamber of Memphis — supporting local businesses and entrepreneurs across Greater Memphis.',
//         url: 'https://blackchamberofmemphis.org/contact-us',
//         siteName: 'Black Chamber of Memphis',
//         images: [
//         {
//             url: '/images/og-contact.jpg',
//             width: 1200,
//             height: 630,
//             alt: 'Contact the Black Chamber of Memphis',
//         },
//         ],
//     },
//     twitter: {
//         card: 'summary_large_image',
//         title: 'Contact Us | Black Chamber of Memphis',
//         description:
//         'Have a question or enquiry? Reach out to the Black Chamber of Memphis — supporting local businesses and entrepreneurs across Greater Memphis.',
//         images: ['/images/og-contact.jpg'],
//     },
// }

export default function ContactUs(){
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage , setSubmitMessage ] = useState("")
    const [ frontMessage, setFrontMessage ] = useState("")
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ subject, setSubject ] = useState("")
    const [ clientMessage, setClientMessage ] = useState("")

    const CONTACT_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbx5nyjYChmAZxZc6201Z1l8tHnyjric2mKFpjAvHG3jdP0-PgKClmWsMfnAH-gC5nBFSg/exec"


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true)
        setSubmitMessage("")

        if(firstName.trim().length < 2 || lastName.trim().length < 2) {
            setFrontMessage("Please enter a valid name.");
            setLoading(false);
            return;
        }

        const contactFormData = {
            firstName,
            lastName,
            email,
            subject,
            clientMessage,
        }

        try {
            await fetch(CONTACT_GOOGLE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactFormData)
            })

            setSubmitMessage("Thank you for submitting your message.")
            setLoading(false)

            setTimeout(() => {
                resetForm();
                setSubmitMessage("");
            }, 5000);

        } catch (err) {
            console.error(err);
            setSubmitMessage("Something went wrong.");
            setLoading(false);
        }
    }

    function resetForm() {
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setClientMessage("");
    }

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
                    onSubmit={handleSubmit}
                    className={style.contactUsForm}
                >
                    {frontMessage && (
                        <p>{frontMessage}</p>
                    )}
                    <input 
                        placeholder="First Name" 
                        type="text"
                        className={style.contactUsFormShortInput}
                        onChange={(e) => setFirstName(e.target.value)}
                        minLength={2}
                        pattern="[A-Za-z\s]+"
                        value={firstName}
                    />

                    <input 
                        placeholder="Last Name" 
                        type="text"
                        className={style.contactUsFormShortInput}
                        onChange={(e) => setLastName(e.target.value)}
                        minLength={2}
                        pattern='[A-Za-z\s]+'
                        value={lastName}
                    />

                    <input 
                        placeholder="Email" 
                        type="email"
                        className={style.contactUsFormLongInput}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        value={email}
                    />

                    <input 
                        placeholder="Subject" 
                        type="text"
                        className={style.contactUsFormLongInput}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        value={subject}
                    />

                    <textarea 
                        placeholder="Message"
                        rows={6}
                        className={style.contactUsFormLongInput}
                        onChange={(e) => setClientMessage(e.target.value)}
                        value={clientMessage}
                    />

                    <button 
                        type="submit"
                        className={style.contactUsFormSubmit}
                    >
                        {loading ? "Sending Message..." : "Submit"}
                    </button>

                    {submitMessage && (
                        <p>{submitMessage}</p>
                    )}
                </form>
            </div>
        </main>
    )
}