'use client'
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import './meetingElected.css'
import TextInput from "@/components/forms/fieldsets/TextInput";
import { useRef, useState } from "react";
import { validateEmail, validatePersonName, validatePhone } from "@/lib/forms/validation";
import EmailInput from "@/components/forms/fieldsets/EmailInput";
import PhoneInput from "@/components/forms/fieldsets/PhoneInput";

export default function MeetElectedOfficials(){
    const submittingRef = useRef(false)
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState('')
    const [ errors, setErrors ] = useState<Record<string, string>>({})

    const [ fullName, setFullName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ busName, setBusName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ guestName, setGuestName ] = useState('')

    const MEET_ELECTED_GOOGLE_URL = 'https://script.google.com/macros/s/AKfycbwEHU5CTy6ql4OqA6gr_wunxNhzDQBW_wTjshLUiLHpLp30HS5gS1BKdpRoHdDH33dIkA/exec'

    async function handleMeetingForElectedSubmit(e: React.FormEvent){
        e.preventDefault();

        const validationErrors : Record<string, string> = {}

        const fullNameError = validatePersonName(fullName)
        if(fullNameError){ validationErrors.fullName = fullNameError }

        const lastNameError = validatePersonName(lastName)
        if(lastNameError) { validationErrors.lastName = lastNameError }

        const emailError = validateEmail(email)
        if(emailError){ validationErrors.email = emailError }

        const phoneError = validatePhone(phone)
        if(phoneError){ validationErrors.phone = phoneError }

        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }
        setErrors({})

        const formData = {
            fullName,
            lastName,
            busName,
            email,
            phone,
            guestName
        }

        if(submittingRef.current) return

        submittingRef.current = true

        setLoading(true)
        setSubmitMessage('')

        try {
            await fetch(MEET_ELECTED_GOOGLE_URL, {
                method : "POST",
                mode : "no-cors",
                headers : { 'Content-Type' : "application/json"},
                body : JSON.stringify(formData)
            })

            setSubmitMessage("Thank you! Your reservation has been submitted successfully.")

            setTimeout(() => {
                setSubmitMessage('')
            }, 5000);
        } catch (err) {
            console.error(err)
            setSubmitMessage("Something went wrong. Please try again later.")
            setLoading(false)
        } finally {
            setLoading(false)
            submittingRef.current = false
        }
    } 

    return(
        <main>
            <PageHeroSection
                eventHost="Black Chamber of Memphis"
                mainHeading="901 United"
                subHeading=""
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = {''}
                initialSearchTerm = {''}
                eventDate = {'August 31, 2026'}
                eventTime = {'7pm – 9 pm'} 
                eventPrice = {''} 
                eventAddress = {'Epicenter, 150 Peabody Place, Memphis'}
                stateButtons = {[]}
                selectedState = {''}
                setSelectedState = {undefined}
            />

            <section
                className="formSection"
            >
                <h2
                    className="globalSecondHeading"
                    style={{textAlign:'center'}}
                >
                    Registration Form:
                </h2>

                <form
                    className="meetingElectedForm"
                >
                    

                    <div
                        className="formRow"
                    >

                    </div>
                    <TextInput
                        name = {'fullName'}
                        label = {"Full name"}
                        value = {fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required = {true}
                        error = {errors.fullName}
                    />

                    <TextInput
                        name = {'lastName'}
                        label = {"Last name"}
                        value = {lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required = {true}
                        error = {errors.lastName}
                    />

                    <TextInput
                        name = {'busName'}
                        label = {"Organization"}
                        value = {busName}
                        onChange={(e) => setBusName(e.target.value)}
                        // required = {true}
                        // error = {errors.lasName}
                    />

                    <EmailInput
                        name = {'email'}
                        label = {"Email"}
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        required = {true}
                        error = {errors.email}
                    />

                    <PhoneInput
                        name = {"phone"}
                        label = {"Contact Number"}
                        value = {phone}
                        onChange = {(e) => setPhone(e.target.value)}
                        required = {true}
                        error = {errors.phone}
                    />

                    <TextInput
                        name = {'guestName'}
                        label = {"Guest Name"}
                        value = {guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        // required = {true}
                        // error = {errors.lasName}
                    />

                    <button 
                        type="submit"
                        onClick={handleMeetingForElectedSubmit}
                        className="globalGoldButton"
                        style={{marginTop:"1rem"}}
                    >
                        {loading ? "Submitting Your Reservation" : "Submit"}
                    </button>

                    {submitMessage ? 
                        <p
                            className='submitMessage'
                            
                        >
                            {submitMessage}
                        </p>
                    : null}
                </form>
            </section>
        </main>
    )
}