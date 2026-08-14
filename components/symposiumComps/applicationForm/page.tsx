'use client'
import { useState, useRef } from 'react'
import style from './application.module.css'

// type symposiumFormDataType = {
//     businessName : string
//     contactPerson : string
//     titleRole : string
//     email : string
//     phone : string
//     businessAddress : string
//     website : string
//     socialHandles : string
//     membership : string
//     serviceCategory : string[]
//     otherServiceCategory : string
//     ScopeOfWork : string
//     fairMarketAmount : string
//     experience : string
//     capacityOfExecution : string
//     executionApproach : string
//     equipmentToBeUsed : string
//     availability : string
//     optionalEnhancements : string
//     agreementOne: boolean,
//     agreementTwo: boolean,
//     agreementThree: boolean,
// }

export default function SymposiumApplication(){
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState("")
    const submittingRef = useRef(false)
    const [sponsorLogo, setSponsorLogo] = useState<File | null>(null)

    const [ symposiumFormData, setSymposiumFormData ] = useState({
        businessName : '',
        contactPerson : '',
        titleRole : '',
        email : '',
        phone : '',
        businessAddress : '',
        website : '',
        socialHandles : '',
        membership : '',
        serviceCategory : [] as string[],
        otherServiceCategory : '',
        scopeOfWork : '',
        fairMarketAmount : '',
        experience : '',
        capacityOfExecution : '',
        executionApproach : '',
        equipmentToBeUsed : '',
        availability : '',
        optionalEnhancements : '',
        agreementOne: false,
        agreementTwo: false,
        agreementThree: false,
    })

    const handleLogoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.[0] ?? null;

        if(!file){
            setSponsorLogo(null)
            return
        }

        const allowedTypes = [
            'image/png',
            'image/jpeg',
            'image/svg+xml'
        ]

        const maxFileSize = 5 * 1024 * 1024 // 5MB

        if(!allowedTypes.includes(file.type)) {
            setSubmitMessage(
                "Please upload a PNG, JPG, JPEG, or SVG logo."
            )

            e.currentTarget.value = ""
            setSponsorLogo(null)

            return
        }

        if (file.size > maxFileSize) {
            setSubmitMessage(
                "Your logo is too large. Please upload a logo smaller than 5 MB."
            )

            e.currentTarget.value = ''
            setSponsorLogo(null)

            return
        }
        setSponsorLogo(file)
        setSubmitMessage('')
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.currentTarget;

        setSymposiumFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.currentTarget;
    
        setSymposiumFormData((prev) => {
            const currentValues = prev[name as keyof typeof prev] as string[];
    
            if (checked) {
                return {
                    ...prev,
                    [name]: [...currentValues, value],
                };
            } else {
                return {
                    ...prev,
                    [name]: currentValues.filter((item) => item !== value),
                };
            }
        });
    };

    const handleAgreementChecker = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.currentTarget;

        setSymposiumFormData((prev) => ({
            ...prev,
            [name]: checked
        }))
    }

    const SYMPOSIUM_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbwAmYtpbPDeoSLsWm7v8JBL3i-5iN3MQYj0M8hYzdoslxxqBexjYq1_zXsWTRrbyfp5Zg/exec"

    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()

            reader.onload = () => {
                if (typeof reader.result !== 'string'){
                    reject(new Error("Unable to read the logo file."))
                    return
                }

                //Remove the "data:image/png;base64," portion
                const base64Data = reader.result.split(",")[1]

                resolve(base64Data)
            }
            reader.onerror = () => {
                reject(new Error("Unable to read the logo file."))
            }

            reader.readAsDataURL(file)
        })
    }

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        if(submittingRef.current) return

        submittingRef.current = true

        setLoading(true)
        setSubmitMessage('')

        try {
            let logoData = null

            if(sponsorLogo){
                const base64Data = await fileToBase64(sponsorLogo)

                logoData = {
                    name: sponsorLogo.name,
                    type: sponsorLogo.type,
                    data: base64Data
                }
            }

            const submissionData = {
                ...symposiumFormData,
                sponsorLogo: logoData
            }

            await fetch(SYMPOSIUM_GOOGLE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submissionData)
            })

            console.log(submissionData)

            setSubmitMessage("Thank you! Your application has been submitted successfully.")
            setSponsorLogo(null)

            setTimeout(() => {
            //     resetLeveledUpApplicationForm();
                setSubmitMessage("");
            }, 5000);
        } catch (err) {
            console.error(err);
            setSubmitMessage("Something went wrong. Please try again later.")
            setLoading(false)
        } finally {
            setLoading(false)
            submittingRef.current = false
        }
    }

    return(
        <section
            className={style.symFormSection}
        >
            <form action=""
                className={style.symForm}
            >
                <h3
                    className={style.symFormH3}
                >
                    Company Information
                </h3>

                {/* business Name */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Business Name
                    </legend>
                    <input 
                        type="text" 
                        name="businessName" 
                        value={symposiumFormData.businessName}
                        onChange={handleChange}
                        className={style.symFormInput}
                    />
                </fieldset>
                <fieldset className={style.symFormFieldset}>
                    <legend className={style.symFormLegend}>
                        Sponsor Logo
                    </legend>

                    <span className={style.symFormcaption}>
                        Please upload your business or organization logo.
                        PNG, JPG, JPEG, or SVG preferred.
                    </span>

                    <input
                        type="file"
                        required
                        name="sponsorLogo"
                        accept="image/png,image/jpeg,image/svg+xml"
                        onChange={handleLogoChange}
                        className={style.symFileInput}
                    />

                    {/* {sponsorLogo && (
                        <p
                            className={style.symFormcaption}
                        >
                            Selected File: {sponsorLogo.name}
                        </p>
                    )} */}
                </fieldset>

                {/* primary contact */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Primary Contact Person
                    </legend>
                    <input 
                        type="text" 
                        name="contactPerson" 
                        value={symposiumFormData.contactPerson}
                        onChange={handleChange}
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* title / role */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Title / Role
                    </legend>
                    <input 
                        type="text" 
                        name="titleRole" 
                        value={symposiumFormData.titleRole}
                        onChange={handleChange}
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* email */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Email
                    </legend>
                    <input 
                        type="text" 
                        name="email"
                        value={symposiumFormData.email} 
                        onChange={handleChange} 
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* phone */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Phone
                    </legend>
                    <input 
                        type="text" 
                        name="phone"
                        value={symposiumFormData.phone}
                        onChange={handleChange} 
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* business Address */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Business Address
                    </legend>
                    <input 
                        type="text" 
                        name="businessAddress"
                        value={symposiumFormData.businessAddress} 
                        onChange={handleChange}
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* website */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Website
                    </legend>
                    <input 
                        type="text" 
                        name="website"
                        value={symposiumFormData.website} 
                        onChange={handleChange} 
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* social handles */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Social Media Handles:
                    </legend>
                    <textarea 
                        name="socialHandles" 
                        value={symposiumFormData.socialHandles}
                        onChange={handleChange}
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                {/* member? */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Are you a member of the Black Chamber of Memphis
                    </legend>
                    <div
                        className={style.symFormRadioBlock}
                    >
                        <input 
                            type="radio" 
                            name="membership" 
                            onChange={handleChange}
                            value={"Yes"}
                            checked={symposiumFormData.membership === "Yes"}
                            className={style.symFormRadio}
                        />
                        Yes
                    </div>
                    <div
                        className={style.symFormRadioBlock}
                    >
                        <input 
                            type="radio" 
                            name="membership" 
                            onChange={handleChange}
                            value={"No"}
                            checked={symposiumFormData.membership === "No"}
                            className={style.symFormRadio}
                        />
                        No
                    </div>
                    <div
                        className={style.symFormRadioBlock}
                    >
                        <input 
                            type="radio" 
                            name="membership" 
                            onChange={handleChange}
                            value={"Not Sure"}
                            checked={symposiumFormData.membership === "Not Sure"} 
                            className={style.symFormRadio}
                        />
                        Not Sure
                    </div>
                </fieldset>

                <h3
                    className={style.symFormH3}
                >
                    Service Category
                </h3>

                {/* primary services */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Primary Services Categorie
                    </legend>
                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="serviceCategory" 
                            value={"Florals"}
                            onChange={handleCheckbox}
                            checked={symposiumFormData.serviceCategory.includes("Florals")} 
                            className={style.symFormRadio}
                        />
                        Florals
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="serviceCategory"
                            value={"Event Production"} 
                            onChange={handleCheckbox}
                            checked={symposiumFormData.serviceCategory.includes("Event Production")} 
                            className={style.symFormRadio}
                        />
                        Event Production
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="serviceCategory"
                            value={"Photography"} 
                            onChange={handleCheckbox}
                            checked={symposiumFormData.serviceCategory.includes("Photography")} 
                            className={style.symFormRadio}
                        />
                        Photography
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="serviceCategory"
                            value={"Videography"} 
                            onChange={handleCheckbox} 
                            checked={symposiumFormData.serviceCategory.includes("Videography")}
                            className={style.symFormRadio}
                        />
                        Videography
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="serviceCategory"
                            value={"Decor-Design"} 
                            onChange={handleCheckbox} 
                            checked={symposiumFormData.serviceCategory.includes("Decor-Design")}
                            className={style.symFormRadio}
                        />
                        Decor & Design
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="serviceCategory"
                            value={"Logistical Support"} 
                            onChange={handleCheckbox}
                            checked={symposiumFormData.serviceCategory.includes("Logistical Support")} 
                            className={style.symFormRadio}
                        />
                        Logistical Support
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="serviceCategory" 
                            value={"Marketing-Public Relations"}
                            onChange={handleCheckbox}
                            checked={symposiumFormData.serviceCategory.includes("Marketing-Public Relations")}
                            className={style.symFormRadio}
                        />
                        Marketing & Public Relations
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="serviceCategory"
                            value={"Signage-Environmental Branding"} 
                            onChange={handleCheckbox}
                            checked={symposiumFormData.serviceCategory.includes("Signage-Environmental Branding")}
                            className={style.symFormRadio}
                        />
                        Signage & Environmental Branding
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="serviceCategory"
                            value={"Content Creation"} 
                            onChange={handleCheckbox}
                            checked={symposiumFormData.serviceCategory.includes("Content Creation")}
                            className={style.symFormRadio}
                        />
                        Content Creation
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="serviceCategory"
                            value={"Creative Media Services"} 
                            onChange={handleCheckbox}
                            checked={symposiumFormData.serviceCategory.includes("Creative Media Services")}
                            className={style.symFormRadio}
                        />
                        Creative Media Services (Design)
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="serviceCategory"
                            value={"Entertainment"} 
                            onChange={handleCheckbox} 
                            checked={symposiumFormData.serviceCategory.includes("Entertainment")}
                            className={style.symFormRadio}
                        />
                        Entertainment
                    </div>

                    <div
                        className={style.symFormOther}
                    >
                        Other:
                        <input 
                            type="text" 
                            name="otherServiceCategory" 
                            value={symposiumFormData.otherServiceCategory}
                            onChange={handleChange}
                            className={style.symFormOtherInput}
                        />
                    </div>
                </fieldset>
                
                {/* scope of proposed services */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Scope of Proposed Services
                    </legend>
                    <span
                        className={style.symFormcaption}
                    >
                        Briefly describe the services you propose to provide, including key deliverables and how they align with the needs of a multi-day, 250+ attendee event.
                    </span>
                    <textarea 
                        name="scopeOfWork"
                        value={symposiumFormData.scopeOfWork} 
                        onChange={handleChange} 
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                {/* estimate fair market */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Estimate Fair Market
                    </legend>
                    <input 
                        type="text" 
                        name="fairMarketAmount" 
                        value={symposiumFormData.fairMarketAmount}
                        onChange={handleChange}
                        className={style.symFormInput}
                        placeholder='$'
                    />
                </fieldset>

                {/* relevant experience */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Relevant Experience
                    </legend>   

                    <span
                        className={style.symFormcaption}
                    >
                        Briefly describe your experience supporting events of similar size, scope, or audience.
                    </span>
                    <textarea 
                        name="experience" 
                        value={symposiumFormData.experience}
                        onChange={handleChange} 
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                {/* Capacity and Execution */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Capacity & Execution
                    </legend>
                    <select 
                        name="capacityOfExecution"
                        value={symposiumFormData.capacityOfExecution}
                        onChange={handleChange}
                        className={style.symFormSelect}
                    >
                        <option value="solo-operator">Solo Operator</option>
                        <option value="small-team">Small Team (2-5)</option>
                        <option value="med-team">Mid-size Team (6-15)</option>
                        <option value="large-team">Large-scale Production Team (15+)</option>
                    </select>
                </fieldset>

                 {/* execution approach */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Execution Approach
                    </legend>
                    <span
                        className={style.symFormcaption}
                    >
                        Briefly describe how you would execute your services for this event.
                    </span>
                    <textarea 
                        name="executionApproach" 
                        value={symposiumFormData.executionApproach}
                        onChange={handleChange} 
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                {/* list of Equipment */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        List any equipment, technology, or resources you will provide (if applicable)
                    </legend>
                    <textarea 
                        name="equipmentToBeUsed" 
                        value={symposiumFormData.equipmentToBeUsed}
                        onChange={handleChange} 
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                {/* available dates */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Availability:
                    </legend>
                    <div
                        className={style.symFormAvailabilityRow}
                    >
                        <input 
                            type="checkbox" 
                            name="availability" 
                            value={"September 24"}
                            onChange={handleCheckbox} 
                            checked={symposiumFormData.availability.includes("August 27")}
                            className={style.symFormRadio}
                        />
                        September 24, 2026
                    </div>
                    <div
                        className={style.symFormAvailabilityRow}
                    >
                        <input 
                            type="checkbox" 
                            name="availability"
                            value={"August 28"} 
                            onChange={handleCheckbox}
                            checked={symposiumFormData.availability.includes("August 28")}
                            className={style.symFormRadio}
                        />
                        October 2, 2026
                    </div>
                </fieldset>

                {/* optional enhancements */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Optional Enhancements
                    </legend>
                    <textarea 
                        name="optionalEnhancements" 
                        onChange={handleChange} 
                        value={symposiumFormData.optionalEnhancements}
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                <h3
                    className={style.symFormH3}
                >
                    Agreement & Acknowledgement
                </h3>
                <fieldset
                    className={style.symFormFieldset}
                >
                    
                    <div
                        className={style.symFormAvailabilityRow}
                    >
                        <input 
                            type="checkbox" 
                            name="agreementOne"
                            onChange={handleAgreementChecker}
                            checked={symposiumFormData.agreementOne}
                            className={style.symFormRadio}
                        />
                        <p>I understand that sponsorship tier placement is based on the fair market value of my in-kind contribution and is subject to review and approval by the Black Chamber of Memphis.</p>
                    </div>

                    <div
                        className={style.symFormAvailabilityRow}
                    >
                        <input 
                            type="checkbox" 
                            name="agreementTwo" 
                            onChange={handleAgreementChecker}
                            checked={symposiumFormData.agreementTwo}
                            className={style.symFormRadio}
                        />
                        <p>I understand that selection is not guaranteed and that BCoM reserves the right to request revisions, clarification, or adjust scope as needed.</p>
                    </div>
                    
                    <div
                        className={style.symFormAvailabilityRow}
                    >
                        <input 
                            type="checkbox" 
                            name="agreementThree" 
                            onChange={handleAgreementChecker}
                            checked={symposiumFormData.agreementThree}
                            className={style.symFormRadio}
                        />
                        <p>I understand that a Memorandum of Understanding (MOU) will be required if selected.</p>
                    </div>
                </fieldset>

                <div
                    className={style.submitButtonRow}
                >
                    <button 
                        type="button"
                        onClick={handleSubmit}
                        className={style.submitButton}
                    >
                        {loading ? "Submitting..." : "Send Application"}
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
    )
}