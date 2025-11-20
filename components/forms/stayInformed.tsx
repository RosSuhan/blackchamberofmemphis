'use client'
import style from '@/styles/stayInformed.module.css'
import { useState } from 'react'

export default function StayInformedSection(){
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState("")
    const [ frontMessage, setFrontMessage ] = useState('')
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ email, setEmail ] = useState("")

    const STAYINFORMED_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbzJfdPL45pcWU8TW2iXmVDBJLRp9JFcm-pVr7Sf7v0sMPyejQgNyXvwCHyQj9hSwGaC/exec"


    async function handleStayInformed(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setSubmitMessage("")

        if(firstName.trim().length < 2 || lastName.trim().length < 2) {
            setFrontMessage("Please enter a valid name.");
            setLoading(false);
            return;
        }

        const stayInformedData = {
            firstName,
            lastName,
            email
        }

        try {
            await fetch(STAYINFORMED_GOOGLE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(stayInformedData)
            })

            setSubmitMessage("Thank you for Registering! We will keep you updated.")
            setLoading(false)

            setTimeout(() => {
                formReset();
                setSubmitMessage("");
            }, 5000);
        } catch (err) {
            console.error(err);
            setSubmitMessage("Something went wrong. Please try again.");
            setLoading(false);
        }
    }

    function formReset() {
        setFirstName("");
        setLastName("");
        setEmail("")
    }

    return (
        <section
            className={style.stayInformedSection}
        >   
            <div className={style.stayInformedWhiteBlock}/>
            <form 
                onSubmit={handleStayInformed}
                className={style.stayInformedForm}
            >
                <h2
                    className={style.stayInformedHeading}
                >
                    Stay Informed
                </h2>
                <p
                    className={style.stayInformedText}
                >
                    We have many great things to come and we want to make sure you are aware of our new offerings.
                </p>
                <p
                    className={style.stayInformedText}
                >
                    Please join to be in the know as we roll out new services, programs, events, and resources.
                </p>

                {frontMessage && (
                    <p>{frontMessage}</p>
                )}
                <input 
                    placeholder='First Name'
                    type="text" 
                    className={style.stayInformedInput}
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                />

                <input 
                    placeholder='Last Name'
                    type="text" 
                    className={style.stayInformedInput}
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />

                <input 
                    placeholder='Email'
                    type="email" 
                    className={style.stayInformedInput}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <button
                    type='submit'
                    className={style.stayInformedButton}
                >
                    {loading ? "Registering..." : "Subscribe"}
                </button>

                {submitMessage && (
                    <p>{submitMessage}</p>
                )}
            </form>
        </section>
    )
}