'use client'
import { useState } from 'react'
import style from './reg.module.css'

export default function LevelUpRegistration(){
    const [ nameSurname, setNameSurname ] = useState('');
    const [ email, setMail ] = useState('');
    const [ busName, setBusName ] = useState('');
    const [ tel, setTel ] = useState('');
    const [ timeSlot, setTimeSlot ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState("")

    // const LEVELEDUP_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbzkjuFnKHiz3SIm7XDhopCQesabLlQsBUS-HZNSTqhGad5AF3oHxsmSfyDVjMJc2JZpyQ/exec"

    const LEVELEDUP_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbyAaPSYd1ZmLCA7lOU9B00kSzQ9_SvnpJOpb1kUDdfZjCUND65WDWx90rTAU9Y4BwDUgw/exec"

    function resetLeveledUpApplicationForm(){
        setNameSurname("");
        setMail("");
        setBusName("");
        setTel("");
        setTimeSlot("")
    }

    async function handleLeveledUpRegistration(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setSubmitMessage("");

        const leveledUpApplication = {
            nameSurname,
            email,
            busName,
            tel,
            timeSlot,
        }

        try {
            await fetch(LEVELEDUP_GOOGLE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(leveledUpApplication)
            })

            setSubmitMessage("Thank you for registering for the LeveledUp Money Workshop. Please look out for confirmation in you mailbox.")
            setLoading(false)

            setTimeout(() => {
                resetLeveledUpApplicationForm();
                setSubmitMessage("");
            }, 5000);
        } catch (err) {
            console.error(err);
            setSubmitMessage("Something went wrong. Please try again later.")
            setLoading(false)
        }
    }

    return(
        <main>
            <section
                className={style.luRegHeroSection}
            >
                <h1
                    className={style.luRegHeading}
                >
                    LeveledUp Money - Building Wealth, One Level at a Time
                </h1>
                <h2
                    className={style.luRegTitle}
                >
                    Registration
                </h2>
            </section>

            <section
                className={style.luRegFormSection}
            >
                <form
                    className={style.luRegForm}
                    onSubmit={handleLeveledUpRegistration}
                >
                    <fieldset
                        className={style.luRegFormFieldset}
                    >
                        <input 
                            type="text" 
                            name="NameSurname" 
                            placeholder='Name and Surname'
                            className={style.faqFormInput}
                            onChange={(e) => setNameSurname(e.target.value)}
                            value={nameSurname}
                        />
                    </fieldset>

                    <fieldset
                        className={style.luRegFormFieldset}
                    >
                        <input 
                            type="email" 
                            name="email" 
                            placeholder='Email'
                            className={style.faqFormInput}
                            onChange={(e) => setMail(e.target.value)}
                            value={email}
                        />
                    </fieldset>

                    <fieldset
                        className={style.luRegFormFieldset}
                    >
                        <input 
                            type="text" 
                            name="busName" 
                            placeholder='Business Name'
                            className={style.faqFormInput}
                            onChange={(e) => setBusName(e.target.value)}
                            value={busName}
                        />
                    </fieldset>

                    <fieldset
                        className={style.luRegFormFieldset}
                    >
                        <input 
                            type="tel" 
                            name="tel" 
                            placeholder='Phone'
                            className={style.faqFormInput}
                            onChange={(e) => setTel(e.target.value)}
                            value={tel}
                        />
                    </fieldset>
                    <fieldset
                        className={style.luRegFormRadioFieldset}
                    >
                        <legend>
                            What Time Slot?
                        </legend>
                        <input 
                            type="radio" 
                            name="timeSlot"
                            value={"firstSession"} 
                            checked={timeSlot === "firstSession"}
                            onChange={(e) => setTimeSlot(e.target.value)}
                            className={style.faqFormRadioInput}
                        />
                        {/* <span
                            className={style.faqFormRadioInput}
                        >
                            Sorry this time slot is fully booked
                        </span> */}
                        <span
                            className={style.faqFormRadioText}
                        >
                            10 am - 12 pm
                        </span>
                        <span
                            style={{color:"red", fontSize:"0.8rem", margin:"-.5rem 0 1rem 0"}}
                        >
                            This session is fully booked. If you want to be on the waiting list you can proceed with this time slot.
                        </span>

                        <input 
                            type="radio" 
                            name="timeSlot" 
                            value={"secondSession"}
                            checked={timeSlot === "secondSession"}
                            onChange={(e) => setTimeSlot(e.target.value)}
                            className={style.faqFormRadioInput}
                        />
                        <span
                            className={style.faqFormRadioText}
                        >
                            2 pm - 4 pm
                        </span>
                    </fieldset>

                    <div
                        className={style.faqFormSubmitRow}
                    >
                        <button 
                            type="submit"
                            className={style.faqFormSubmitButton}
                        >
                            {loading ? "Submitting..." : "Register"}
                        </button>
                    </div>

                    {submitMessage ? 
                        <p
                            className={style.submitMessage}
                            
                        >
                            {submitMessage}
                        </p>
                    : null}
                </form>
            </section>
            {/* 
                Registration Form
                Form fields:
                * Name
                * Email
                * Business Name
                * Phone Number
                * Time Slot Selection (Dropdown)
                * Optional: “Interested in one-on-one coaching?”
                
                
                After Submission Confirmation Message
                Something like:
                Thank you for registering!
                Your seat is now reserved. You’ll receive a confirmation email shortly with event details and reminders.
            */}
        </main>
    )
}