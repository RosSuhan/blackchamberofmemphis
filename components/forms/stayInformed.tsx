'use client'
import style from '@/styles/stayInformed.module.css'
import { useState } from 'react'
import TextInput from './fieldsets/TextInput'
import { validatePersonName, validateEmail } from '@/lib/forms/validation'
import EmailInput from './fieldsets/EmailInput'

export default function StayInformedSection(){
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState("")
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ errors, setErrors ] = useState<Record<string, string>>({})

    // const STAYINFORMED_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbwM5ZU63wc4uvezCAonPdS3NAf0ZWIhjvlU9P58d1PfpLvP3OhGXSIpgn_zUd_bXThX/exec"
    const STAYINFORMED_GOOGLE_URL = ''

    async function handleStayInformed(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setSubmitMessage("")

        const validationErrors : Record<string, string> = {}
        const firstNameError = validatePersonName(firstName)
        const lastNameError = validatePersonName(lastName)

        const emailError = validateEmail(email)

        if(firstNameError) {
            validationErrors.firstName = firstNameError
        }

        if(lastNameError){
            validationErrors.lastName = lastNameError
        }

        if(emailError) {
            validationErrors.email = emailError
        }

        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setLoading(false)
            return
        }

        setErrors({})

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
        <form 
            onSubmit={handleStayInformed}
            className={style.stayInformedForm}
        >
            <h2
                className={"globalSecondHeading"}
            >
                Stay Informed
            </h2>
            <p
                className={"globalText"}
            >
                We have many great things to come and we want to make sure you are aware of our new offerings.
            </p>
            <p
                className={"globalText"}
                style={{marginBottom:'2rem'}}
            >
                Please join to be in the know as we roll out new services, programs, events, and resources.
            </p>

            <TextInput
                name = {'firstName'}
                label = {'First Name'}
                value = {firstName}
                onChange = {(e) => setFirstName(e.target.value)}
                error = {errors.firstName}
            />

            <TextInput
                name = {'lastName'}
                label = {"Last Name"}
                value = {lastName}
                onChange = {(e) => setLastName(e.target.value)}
                error = {errors.lastName}
            />

            <EmailInput
                name = {'email'}
                label = {'Email'}
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                error = {errors.email}
            />

            {/* <input 
                placeholder='Email'
                type="email" 
                className={style.stayInformedInput}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            /> */}

            <button
                type='submit'
                className={"globalGoldButton"}
                style={{margin:"1rem 0"}}
            >
                {loading ? "Registering..." : "Subscribe"}
            </button>

            {submitMessage && (
                <p>{submitMessage}</p>
            )}
        </form>
    )
}