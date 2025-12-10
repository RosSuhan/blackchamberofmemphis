"use client"
import style from '@/styles/getListedForm.module.css'
import React, { useState } from 'react'


export default function GetListedForm(){
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState("")
    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        busName: "",
        webLink: "",
        shortDescription: "",
        longDescription: "",
        gmbLink: "",
        address: "",
        facebookLink: "",
        instagramLink: "",
        youtubLink: "",
        linkedInLink: "",
        linktree: "",
        twitterLink: "",
        tiktokLink: "",
        pinterestLink: ""
    })

    const GETLISTED_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbwpC79EXzMbVCS9B-rvyReTKnSUKjvuJZDkxiqFQn-uBab-vkckJNmAbmmFGcETia8CYQ/exec"

    async function handleGetListedForm (e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            await fetch(GETLISTED_GOOGLE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            setSubmitMessage("Thank you joining the Black Chamber Directory. your submission is received. Our team will review your information to ensure your listing is clear, complete, and ready to publish.")
            setLoading(false)

            setTimeout(() => {
                FormReset();
                setSubmitMessage("");
            }, 5000);
        } catch (err) {
            console.error(err);
            setSubmitMessage("Something went wrong. Please try again.")
            setLoading(false)
        }
    }

    function FormReset() {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            busName: "",
            webLink: "",
            shortDescription: "",
            longDescription: "",
            gmbLink: "",
            address: "",
            facebookLink: "",
            instagramLink: "",
            youtubLink: "",
            linkedInLink: "",
            linktree: "",
            twitterLink: "",
            tiktokLink: "",
            pinterestLink: ""
        })
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return(
        <form 
            className={style.getListedForm}
            onSubmit={handleGetListedForm}
        >
            <h2
                className={style.getListedHeading}
            >
                Sign up and get listed
            </h2>
            <fieldset
                className={style.getListedFieldset}
            >
                <legend
                    className={style.getListedLegend}
                >
                    Contact Person
                </legend>

                {/* first name */}
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder={"First name"}
                    className={style.getListedShortInputField}
                    value={formData.firstName}
                    onChange={handleOnChange}
                />

                <input 
                    type="text" 
                    name="lastName" 
                    placeholder={"Last name"}
                    className={style.getListedShortInputField}
                    value={formData.lastName}
                    onChange={handleOnChange}
                />
            </fieldset>
            
            <fieldset
                className={style.getListedFieldset}
            >
                <legend
                    className={style.getListedLegend}
                >
                    Contact Information
                </legend>
                {/* email */}
                <input 
                    type="email" 
                    name="email" 
                    placeholder={"Email"}
                    className={style.getListedInputField}
                    value={formData.email}
                    onChange={handleOnChange}
                />

                {/* phone */}
                <input 
                    type="tel" 
                    name="phoneNumber" 
                    placeholder={"Phone number"}
                    className={style.getListedInputField}
                    value={formData.phoneNumber}
                    onChange={handleOnChange}
                />
            </fieldset>

            <fieldset
                className={style.getListedFieldset}
            >
                <legend
                    className={style.getListedLegend}
                >
                    Business Information
                </legend>
                {/* business name */}
                <input 
                    type="text" 
                    name="busName" 
                    placeholder={"Business Name"}
                    className={style.getListedInputField}
                    value={formData.busName}
                    onChange={handleOnChange}
                />
                {/* website link */}
                <input 
                    type="url" 
                    name="webLink" 
                    placeholder={"Website Link"}
                    className={style.getListedInputField}
                    value={formData.webLink}
                    onChange={handleOnChange}
                />
                {/* short business description */}
                <p
                    className={style.getListedInstruction}
                >
                    Describe your business in 2 - 3 sentences
                </p>
                <textarea 
                    name="shortDescription" 
                    rows={5} 
                    placeholder={"Short Business Description"}
                    className={style.getListedInputField}
                    value={formData.shortDescription}
                    onChange={handleOnChange}
                />
                {/* long business description */}
                <p
                    className={style.getListedInstruction}
                >
                    Give a full description of your business. (100 - 300 words)
                </p>
                <textarea 
                    name="longDescription" 
                    rows={15} 
                    placeholder={"Long business Description"}
                    className={style.getListedInputField}
                    value={formData.longDescription}
                    onChange={handleOnChange}
                />
                {/* business hours */}

                {/* gmb link */}
                <input 
                    type="url" 
                    name="gmbLink" 
                    placeholder={"Google My Business Link"}
                    className={style.getListedInputField}
                    value={formData.gmbLink}
                    onChange={handleOnChange}
                />

                {/* address */}
                <input 
                    type="text" 
                    name="address" 
                    placeholder={"Address"}
                    className={style.getListedInputField}
                    value={formData.address}
                    onChange={handleOnChange}
                />
            </fieldset>

            <fieldset
                className={style.getListedFieldset}
            >
                <legend
                    className={style.getListedLegend}
                >
                    Social links
                </legend>
                {/* social links  */}
                <input 
                    type="url" 
                    name="facebookLink" 
                    placeholder={"Facebook"}
                    className={style.getListedShortInputField}
                    value={formData.facebookLink}
                    onChange={handleOnChange}
                />

                <input 
                    type="url" 
                    name="instagramLink" 
                    placeholder={"Instagram"}
                    className={style.getListedShortInputField}
                    value={formData.instagramLink}
                    onChange={handleOnChange}
                />

                <input 
                    type="url" 
                    name="youtubLink" 
                    placeholder={"Youtube"}
                    className={style.getListedShortInputField}
                    value={formData.youtubLink}
                    onChange={handleOnChange}
                />

                <input 
                    type="url" 
                    name="linkedInLink" 
                    placeholder={"LinkedIn"}
                    className={style.getListedShortInputField}
                    value={formData.linkedInLink}
                    onChange={handleOnChange}
                />

                <input 
                    type="url" 
                    name="linktree" 
                    placeholder={"Linktree"}
                    className={style.getListedShortInputField}
                    value={formData.linktree}
                    onChange={handleOnChange}
                />

                <input 
                    type="url" 
                    name="twitterLink" 
                    placeholder={"Twitter"}
                    className={style.getListedShortInputField}
                    value={formData.twitterLink}
                    onChange={handleOnChange}
                />

                <input 
                    type="url" 
                    name="tiktokLink" 
                    placeholder={"TikTok"}
                    className={style.getListedShortInputField}
                    value={formData.tiktokLink}
                    onChange={handleOnChange}
                />   
                
                <input 
                    type="url" 
                    name="pinterestLink" 
                    placeholder={"Pinterest"}
                    className={style.getListedShortInputField}
                    value={formData.pinterestLink}
                    onChange={handleOnChange}
                />
            </fieldset>
            <div
                className={style.getListedButtonRow}
            >
                <button
                    className={style.getListedSubmit}
                    type='submit'
                >
                    {loading ? "Sending your details..." : "Submit your details"}
                </button>
            </div>

            {submitMessage ? 
                <p
                    className={style.getListedInstruction}
                >
                    {submitMessage}
                </p>
            : null }
        </form>
    )
}